(function(){
if(typeof VE.pie3d !== 'object') { VE.pie3d = {}; }



var PI = Math.PI;

var __id__ = 0;


// Setup CSSMatrix
window.CSSMatrix = window.CSSMatrix || window.WebKitCSSMatrix;

window.CSSMatrix.prototype.multiplyVec4 = function(x, y, z, w) {
	if(Array.isArray(x)) {
		y = x[1]; z = x[2]; w = x[3]; x = x[0];
	}
	var x2 = x * this.m11 + y * this.m12 + z * this.m13 + w * this.m14;
	var y2 = x * this.m21 + y * this.m22 + z * this.m23 + w * this.m24;
	var z2 = x * this.m31 + y * this.m32 + z * this.m33 + w * this.m34;
	var w2 = x * this.m41 + y * this.m42 + z * this.m43 + w * this.m44;
	return [x2, y2, z2, w2];
};



function cylindricalToCartesian(r, theta, z) {
	var x = r * Math.cos(theta);
	var y = r * Math.sin(theta);
	return [x, y, z, 1];
}

function perspectiveDivide(p) {
	var w = p[3];
	p[0] = p[0] / w;
	p[1] = p[1] / w;
	p[2] = p[2] / w;
	p[3] = p[3] / w;
}

// Returns an equivalent angle angle in the range [0, 2*PI).
function normalizeAngle(radians) {
	return ((radians % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
}




var Pie3dRenderer = VE.pie3d.Pie3dRenderer = function(pieContainer) {

	this.theta = 0;
	this.phi = 0;

	this.isLeftMouseDown = false;
	this.lastPageX = 0;
	this.lastPageY = 0;

	this.pieContainer = pieContainer;



	pieContainer.undelegateEvents(); // may be temporary for testing

	pieContainer.pieSVG.remove();

	// this.svg = pieContainer.pieSVG
	this.svg = d3.select(pieContainer.el).append('svg:svg')
		.on({
			mousedown: this.onMousedown.bind(this),
			mousemove: this.onMousemove.bind(this),
			mouseup: this.onMouseup.bind(this),
			mousewheel: this.onMousewheel.bind(this),
		});

	this.g = this.svg.append('svg:g')
		.attr('class', 'pie-3d-parent');

	// this.featuresG = this.g.append('svg:g');

	this.setUpDefs();

};



Pie3dRenderer.prototype = {
	

	FRAME_THICKNESS: 3,
	FRAME_OUTLINE_WIDTH: 0.5,
	FRAME_OUTLINE_COLOR: "#8F8F8F",
	FRAME_RING_COLOR: "#ffffb3", // The color of the area between the two circles.

	FEATURE_DEFAULT_FEATURE_HEIGHT: 7,
	FEATURE_DEFAULT_FEATURES_GAP: 3,
	FEATURE_OUTLINE_COLOR: "black",
	FEATURE_OUTLINE_WIDTH: 0.5,


	clear: function() {
		this.svg.selectAll('*:not(.pie-3d-parent):not(.__const)').remove();
		this.g.selectAll('*').remove();
		// this.g = this.svg.append('svg:g');
	},

	render: function() {
		this.clear();


		this.backLayer = this.g.append('svg:g');
		this.frontLayer = this.g.append('svg:g');
		


		this.drawFrame();
		this.drawFeatures();

	},


	setUpDefs: function() {

		var defs = this.defs = this.svg.append('svg:defs')
			.attr('class', '__const');


	},




	drawFrame: function() {
		var pieContainer = this.pieContainer;
		var railRadius = pieContainer.railRadius;

		var FRAME_THICKNESS = this.FRAME_THICKNESS;
		var phi = this.phi;
		// var g = this.g;
		var g1 = this.getLayer(PI/2);
		var g2 = this.getLayer(3*PI/2);

		var d = [];

		var x = -railRadius;
		var y = - FRAME_THICKNESS / 2;

		d.push('M', x, y);

		var rx = railRadius;
		var ry = railRadius * Math.sin(phi);
		var sweepFlag = (phi > 0) ? 1 : 0;
		var antiSweepFlag = (sweepFlag === 1) ? 0 : 1;

		x += 2 * railRadius;
		d.push('A', rx, ry, 0, 0, sweepFlag, x, y);

		y += FRAME_THICKNESS;
		d.push('L', x, y);

		x -= 2 * railRadius;
		d.push('A', rx, ry, 0, 0, antiSweepFlag, x, y);

		y -= FRAME_THICKNESS;
		d.push('L', x, y);

		d.push('Z');

		d = d.join(' ');

		g1.append('svg:path')
			.attr({
				d: d,
			})
			.style({
				fill: this.FRAME_RING_COLOR,
				stroke: this.FRAME_OUTLINE_COLOR,
				'stroke-width': this.FRAME_OUTLINE_WIDTH,
			});



		d = [];

		x = -railRadius;
		y = - FRAME_THICKNESS / 2;
		d.push('M', x, y);

		x += 2 * railRadius;
		d.push('A', rx, ry, 0, 0, antiSweepFlag, x, y);

		y += FRAME_THICKNESS;
		d.push('L', x, y);

		x -= 2 * railRadius;
		d.push('A', rx, ry, 0, 0, sweepFlag, x, y);

		y -= FRAME_THICKNESS;
		d.push('L', x, y);

		d.push('Z');

		d = d.join(' ');

		g2.append('svg:path')
			.attr({
				d: d,
			})
			.style({
				fill: this.FRAME_RING_COLOR,
				stroke: this.FRAME_OUTLINE_COLOR,
				'stroke-width': this.FRAME_OUTLINE_WIDTH,
			});

	},



	_drawFeatures: function() {
		var me = this;
		var pieContainer = this.pieContainer;
		var railRadius = pieContainer.railRadius;

		var phi = this.phi;

		var features = pieContainer.model.get('features');
		var seqLen = pieContainer.model.length();


		this.featuresG = this.g.append('svg:g');

		this.featuresG.selectAll('path.undefined_class')
			.data(features)
			.enter().append('svg:path')
			// .attr("class", 'pie-feature')
			.attr('d', function(feat, i) {
				return me._generateSimpleFeaturePathD(feat, i);
			})
			.attr('fill', function(feat, i) {
				return VE.pie.FeatureRenderer.colorByType(feat.get('type').toLowerCase());
			})
			.attr("stroke", this.FEATURE_OUTLINE_COLOR)
			.attr("stroke-width", this.FEATURE_OUTLINE_WIDTH)
			;


		this.sortByZ();
	},


	_generateSimpleFeaturePathD: function(feat, i) {
		
		

		var me = this;
		var pieContainer = this.pieContainer;
		var railRadius = pieContainer.railRadius;

		var phi = this.phi;

		var seqLen = pieContainer.model.length();

		var strand = feat.get('strand');

		var angles = VE.RendererUtil.calculateAngles(feat, seqLen);
		var alignIndex = pieContainer.featAlignMap[i];
		var offset =  - this.getOffsetFromRail(alignIndex);


		// Model-View-Projection Matrix
		var M = new CSSMatrix();
		M = M.rotateAxisAngle(1, 0, 0, phi * 180 / Math.PI + 90);

		var r = railRadius;

		// var theta0 = angles[0];
		// var theta1 = angles[1];
		var theta0 = angles[0] + this.theta;
		var theta1 = angles[1] + this.theta;

		var z0 = offset;
		var z1 = offset - this.FEATURE_DEFAULT_FEATURE_HEIGHT;


		var p0 = cylindricalToCartesian(r, theta0, z0);
		var p1 = cylindricalToCartesian(r, theta1, z0);
		var p2 = cylindricalToCartesian(r, theta1, z1);
		var p3 = cylindricalToCartesian(r, theta0, z1);

		p0 = M.multiplyVec4(p0);
		p1 = M.multiplyVec4(p1);
		p2 = M.multiplyVec4(p2);
		p3 = M.multiplyVec4(p3);



		perspectiveDivide(p0);
		perspectiveDivide(p1);
		perspectiveDivide(p2);
		perspectiveDivide(p3);




		// tem
		var z2 = offset - this.FEATURE_DEFAULT_FEATURE_HEIGHT / 2;
		var theta2 = theta1 + 5 / r;
		var p4 = cylindricalToCartesian(r, theta2, z2);
		p4 = M.multiplyVec4(p4);
		perspectiveDivide(p4);





		var rx = r;
		var ry = r * Math.sin(phi);

		var _phi = ((phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
		var sweepFlag = (_phi > Math.PI) ? 0 : 1;
		var antiSweepFlag = (sweepFlag === 1) ? 0 : 1;


		// var d = [];
		// d.push('M', p0[0], p0[1]);
		// d.push('A', rx, ry, 0, 0, antiSweepFlag, p1[0], p1[1]);
		// d.push('L', p2[0], p2[1]);
		// d.push('A', rx, ry, 0, 0, sweepFlag, p3[0], p3[1]);
		// d.push('L', p0[0], p0[1]);
		// d.push('Z');
		// d = d.join(' ');


		var d = [];
		d.push('M', p0[0], p0[1]);
		d.push('A', rx, ry, 0, 0, antiSweepFlag, p1[0], p1[1]);

		d.push('L', p4[0], p4[1]);

		d.push('L', p2[0], p2[1]);


		d.push('A', rx, ry, 0, 0, sweepFlag, p3[0], p3[1]);
		d.push('L', p0[0], p0[1]);
		d.push('Z');
		d = d.join(' ');


		// console.log(d);

		feat.centerZ = (p0[2] + p1[2] + p2[2] + p3[2]) / 4;
		// feat.centerZ = ((theta0 + theta1) / 2 < Math.PI && _phi > Math.PI) ? 1 : -1;

		return d;
	},





	drawFeatures: function() {
		
		var centerZ;


		function createD(M, r, theta0, theta1, z0, z1) {
			var p0 = cylindricalToCartesian(r, theta0, z0);
			var p1 = cylindricalToCartesian(r, theta1, z0);
			var p2 = cylindricalToCartesian(r, theta1, z1);
			var p3 = cylindricalToCartesian(r, theta0, z1);

			p0 = M.multiplyVec4(p0);
			p1 = M.multiplyVec4(p1);
			p2 = M.multiplyVec4(p2);
			p3 = M.multiplyVec4(p3);


			perspectiveDivide(p0);
			perspectiveDivide(p1);
			perspectiveDivide(p2);
			perspectiveDivide(p3);

			var rx = r;
			var ry = r * Math.sin(phi);

			var _phi = ((phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
			var sweepFlag = (_phi > Math.PI) ? 0 : 1;
			var antiSweepFlag = (sweepFlag === 1) ? 0 : 1;


			var d = [];
			d.push('M', p0[0], p0[1]);
			d.push('A', rx, ry, 0, 0, antiSweepFlag, p1[0], p1[1]);
			d.push('L', p2[0], p2[1]);
			d.push('A', rx, ry, 0, 0, sweepFlag, p3[0], p3[1]);
			d.push('L', p0[0], p0[1]);
			d.push('Z');
			d = d.join(' ');

			centerZ = (p0[2] + p1[2] + p2[2] + p3[2]) / 4;

			return d;
		}

		function createD2(M, r0, r1, theta0, theta1, z0, z1) {
			var p0 = cylindricalToCartesian(r0, theta0, z0);
			var p1 = cylindricalToCartesian(r0, theta1, z0);
			var p2 = cylindricalToCartesian(r1, theta1, z1);
			var p3 = cylindricalToCartesian(r1, theta0, z1);

			p0 = M.multiplyVec4(p0);
			p1 = M.multiplyVec4(p1);
			p2 = M.multiplyVec4(p2);
			p3 = M.multiplyVec4(p3);


			perspectiveDivide(p0);
			perspectiveDivide(p1);
			perspectiveDivide(p2);
			perspectiveDivide(p3);

			var rx0 = r0;
			var ry0 = r0 * Math.sin(phi);
			var rx1 = r1;
			var ry1 = r1 * Math.sin(phi);

			var _phi = ((phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
			var sweepFlag = (_phi > Math.PI) ? 0 : 1;
			var antiSweepFlag = (sweepFlag === 1) ? 0 : 1;


			var d = [];
			d.push('M', p0[0], p0[1]);
			d.push('A', rx0, ry0, 0, 0, antiSweepFlag, p1[0], p1[1]);
			d.push('L', p2[0], p2[1]);
			d.push('A', rx1, ry1, 0, 0, sweepFlag, p3[0], p3[1]);
			d.push('L', p0[0], p0[1]);
			d.push('Z');
			d = d.join(' ');

			centerZ = (p0[2] + p1[2] + p2[2] + p3[2]) / 4;

			return d;
		}

		function createColor(baseColor, angle) {
			var a = Math.sin(angle);
			var color = d3.rgb(baseColor).brighter(a).toString();
			return color;
		}


		var me = this;
		var pieContainer = this.pieContainer;
		var railRadius = pieContainer.railRadius;

		var phi = this.phi;

		var nPhi = normalizeAngle(phi);

		var features = pieContainer.model.get('features');
		var seqLen = pieContainer.model.length();


		// this.featuresG = this.g.append('svg:g');

		// var frontG = this.featuresG.append('svg:g');
		// var backG = this.featuresG.append('svg:g');


		// Model-View-Projection Matrix
		var M = new CSSMatrix();
		M = M.rotateAxisAngle(1, 0, 0, phi * 180 / Math.PI + 90);

		var r = railRadius;

		var featAlignMap = pieContainer.featAlignMap;

		for(var i=0,ii=features.length;i<ii;i++) {
			var feat = features[i];

			var color = VE.pie.FeatureRenderer.colorByType(feat.get('type').toLowerCase());
			var d = this._generateSimpleFeaturePathD(feat, i);

			var strand = feat.get('strand');

			var angles = VE.RendererUtil.calculateAngles(feat, seqLen);
			var alignIndex = featAlignMap[i];
			var offset =  - this.getOffsetFromRail(alignIndex);

			// var z0 = offset;
			// var z1 = offset - this.FEATURE_DEFAULT_FEATURE_HEIGHT;




			var cPhi = Math.cos(phi);
			var sPhi = Math.sin(phi);

			var fhZ = cPhi * this.FEATURE_DEFAULT_FEATURE_HEIGHT;
			var fhR = sPhi * this.FEATURE_DEFAULT_FEATURE_HEIGHT;

			var oZ = cPhi * offset;
			var oR = sPhi * offset;

			var r0 = r - oR - fhR;
			var r1 = r - oR;


			var z0 = oZ;
			var z1 = oZ - fhZ;



			
			var theta0 = angles[0] + this.theta;
			var theta1 = angles[1] + this.theta;


			var nTheta0 = normalizeAngle(theta0);
			var nTheta1 = normalizeAngle(theta1);


			if(nTheta0 < Math.PI && nTheta1 > Math.PI) { // Feature overlaps itself on the left side of the pie.
				
				// var d0 = createD(M, r, theta0, Math.PI, z0, z1);
				// var d1 = createD(M, r, Math.PI, theta1, z0, z1);
				var d0 = createD2(M, r0, r1, theta0, Math.PI, z0, z1);
				var d1 = createD2(M, r0, r1, Math.PI, theta1, z0, z1);

				var g1 = this.getLayer(theta0);
				var g2 = this.getLayer(theta1);

				g1.append('svg:path')
					.attr({
						d: d0,
					})
					.style({
						fill: color,
						// stroke: 'none',
						stroke: this.FEATURE_OUTLINE_COLOR,
						'stroke-width': this.FEATURE_OUTLINE_WIDTH,
						'vector-effect': 'non-scaling-stroke',
					});

				g2.append('svg:path')
					.attr({
						d: d1,
					})
					.style({
						fill: color,
						// stroke: 'none',
						stroke: this.FEATURE_OUTLINE_COLOR,
						'stroke-width': this.FEATURE_OUTLINE_WIDTH,
						'vector-effect': 'non-scaling-stroke',
					});


			} else if(nTheta0 > nTheta1) { // Feature overlaps itself on the right side of the pie.

				// var d0 = createD(M, r, theta0, 2 * Math.PI, z0, z1);
				// var d1 = createD(M, r, 0, theta1, z0, z1);

				var d0 = createD2(M, r0, r1, theta0, 2 * Math.PI, z0, z1);
				var d1 = createD2(M, r0, r1, 0, theta1, z0, z1);

				var g1 = this.getLayer(theta0);
				var g2 = this.getLayer(theta1);

				g1.append('svg:path')
					.attr({
						d: d0,
					})
					.style({
						fill: color,
						// stroke: 'none',
						stroke: this.FEATURE_OUTLINE_COLOR,
						'stroke-width': this.FEATURE_OUTLINE_WIDTH,
						'vector-effect': 'non-scaling-stroke',
					});

				g2.append('svg:path')
					.attr({
						d: d1,
					})
					.style({
						fill: color,
						// stroke: 'none',
						stroke: this.FEATURE_OUTLINE_COLOR,
						'stroke-width': this.FEATURE_OUTLINE_WIDTH,
						'vector-effect': 'non-scaling-stroke',
					});

			} else {
				
				// var d = createD(M, r, theta0, theta1, z0, z1);


				var d = createD2(M, r0, r1, theta0, theta1, z0, z1);

				// var d = createD2(M, r0, r0, theta0, theta1, z0, z1);




				var g = this.getLayer(theta0);

				g.append('svg:path')
					.attr({
						d: d,
					})
					.style({
						fill: color,
						// stroke: 'none',
						stroke: this.FEATURE_OUTLINE_COLOR,
						'stroke-width': this.FEATURE_OUTLINE_WIDTH,
						'vector-effect': 'non-scaling-stroke',
					});

			}


		}



		// this.sortByZ();
	},


	getLayer: function(theta) {
		var nPhi = normalizeAngle(this.phi);
		var nTheta = normalizeAngle(theta);
		if(nPhi < PI / 2 || nPhi > 3 * PI / 2) {
			if(nTheta > Math.PI) {
				return this.backLayer;
			} else {
				return this.frontLayer;
			}
		} else {
			if(nTheta > Math.PI) {
				return this.frontLayer;
			} else {
				return this.backLayer;
			}
		}
	},



	sortByZ: function() {
		
		var itemsToSort = this.featuresG.selectAll('path');
		// console.log(itemsToSort);

		itemsToSort.sort(function(a, b) {
			//var _a = modelingTransformation.multiplyVector3Array(a.slice(0));
			//var _b = modelingTransformation.multiplyVector3Array(b.slice(0));
			var _a = a.centerZ;
			var _b = b.centerZ;
			// Quick test. Only tests one average of corners.
			// var az = _a[2];
			// var bz = _b[2];
			var az = _a;
			var bz = _b;

			return bz-az;
		});
		
		//console.timeEnd('A');
		
	},




	getOffsetFromRail: function(alignIndex) {
		return 3 * this.FEATURE_DEFAULT_FEATURES_GAP
				+ alignIndex * (this.FEATURE_DEFAULT_FEATURE_HEIGHT + this.FEATURE_DEFAULT_FEATURES_GAP);
	},




	onMousedown: function() {
		var evt = d3.event;
		var btn = evt.button;
		if(btn === 0) {
			this.isLeftMouseDown = true;
			this.lastPageX = evt.pageX;
			this.lastPageY = evt.pageY;
		}

	},

	onMousemove: function() {
		var evt = d3.event;

		if(this.isLeftMouseDown) {
			if(evt.shiftKey) {




			} else {
				var deltaPageX = evt.pageX - this.lastPageX;
				var deltaPageY = evt.pageY - this.lastPageY;

				// console.log(deltaPageX, deltaPageY);

				this.phi += -deltaPageY / 30;
				// this.phi += deltaPageY / 30;

				if(this.phi > 0) {
					this.phi = 0;
				} else if(this.phi < - PI/2) {
					this.phi = -PI/2;
				}

				this.render();



				this.lastPageX = evt.pageX;
				this.lastPageY = evt.pageY;
			}
		}

	},

	onMouseup: function() {
		var evt = d3.event;
		var btn = evt.button;
		if(btn === 0) {
			this.isLeftMouseDown = false;
		}

	},

	onMousewheel: function() {
		var evt = d3.event;

		if(evt.altKey) {
			evt.preventDefault();

			var wheelDelta = evt.wheelDelta;
			wheelDelta /= 120;
			wheelDelta *= Math.PI / 180;

			this.theta += wheelDelta;

			this.render();
		}

	},




};













































})();