
if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.FeatureRenderer = {

	DEFAULT_FEATURE_HEIGHT: 7,
	// DEFAULT_FEATURE_HEIGHT: 10,
	DEFAULT_FEATURES_GAP: 3,
	OUTLINE_COLOR: "black",
	OUTLINE_WIDTH: 0.5,

	ARC_THRESHOLD: 5, // Minimum arc length of a feature to be drawn as a
					  // full pie piece as opposed to a triangle.


	drawFeatures: function(pieContainer) {
		var me = this;

		var features = pieContainer.model.get('features');
		var seqLen = pieContainer.model.get('sequence').length;

		pieContainer.featureSVG.selectAll('path.undefined_class')
			.data(features)
			.enter().append('svg:path')
			.attr("class", 'pie-feature')
			.attr('d', function(feat, i) {
				var strand = feat.get('strand');

				var angles = me.calculateAngles(feat, seqLen);
				var angle = angles[1] - angles[0];

				var radius = me.getFeatureRadius(pieContainer, i);
				
				return me.getFeaturePathD(radius, me.DEFAULT_FEATURE_HEIGHT, angle, strand);
			})
			.attr('fill', function(feat, i) {
				return me.colorByType(feat.get('type').toLowerCase());
			})
			.attr("stroke", this.OUTLINE_COLOR)
			.attr("stroke-width", this.OUTLINE_WIDTH)
			.attr("fill-rule", "evenodd")
			.attr('transform', function(feat, i) {
				var strand = feat.get('strand');
				var angles = me.calculateAngles(feat, seqLen);
				var rotateStr = me.createFeatureRotationString(angles, strand, pieContainer);
				var translateStr = 'translate('+(pieContainer.center.x)+','+(pieContainer.center.y)+')';
				return rotateStr + translateStr;
			})
			// .on('contextmenu', this.onFeatureContextMenu.bind(this))
			// .on('mouseover', function(feat, i) {
			// 	this.mouseon = true;
			// 	d3.select(this).attr('fill', d3.rgb(me.colorByType(feat.get('type').toLowerCase())).darker(1).toString());
			// })
			// .on('mouseout', function(feat, i) {
			// 	this.mouseon = false;
			// 	d3.select(this).attr('fill', me.colorByType(feat.get('type').toLowerCase()));
			// })
			;


	},





	createFeatureRotationString: function(angles, strand, pieContainer) {
		var a;
		if(strand === 1) {
			a = angles[0] * 180 / Math.PI;
		} else if(strand === -1) {
			a = angles[1] * 180 / Math.PI;
		}
		return 'rotate('+a+','+(pieContainer.center.x)+','+(pieContainer.center.y)+')';
	},


	getFeaturePathD: function(radius, thickness, angle, strand) {
		var outerRadius = radius + thickness / 2;
		var innerRadius = radius - thickness / 2;

		var path = []; 

		var arcLength = radius * angle;
		// var arcAngle = (arcLength - this.ARC_THRESHOLD) / radius;
		var arcAngle = angle - this.ARC_THRESHOLD / radius;
		// console.log(angle, arcAngle)

		var largeArcFlag = (arcAngle > Math.PI) ? 1 : 0;
		var sweepFlag = (strand === 1) ? 1 : 0;
		var antiSweepFlag = (sweepFlag === 0) ? 1 : 0;
		var x, y;

		// Draw triangle if arc is smaller than the threshold.
		if(arcLength > this.ARC_THRESHOLD) {
			if(strand === 1) {
				var offset = Math.PI/2;

				path.push('M', '0', -outerRadius);

				x = outerRadius * Math.cos(-arcAngle + offset);
				y = -outerRadius * Math.sin(-arcAngle + offset);// - thickness/2;
				path.push('A', outerRadius, outerRadius, 0, largeArcFlag, sweepFlag, x, y);

				x = radius * Math.cos(-angle + offset);
				y = -radius * Math.sin(-angle + offset);
				path.push('L', x, y);

				x = innerRadius * Math.cos(-arcAngle + offset);
				y = -innerRadius * Math.sin(-arcAngle + offset);// + thickness/2;
				path.push('L', x, y);

				path.push('A', innerRadius, innerRadius, 0, largeArcFlag, antiSweepFlag, 0, -innerRadius);

				path.push('L', '0', -outerRadius);

				path.push('Z');

			} else if(strand === -1) {
				var offset = Math.PI/2;

				path.push('M', '0', -outerRadius);

				x = outerRadius * Math.cos(arcAngle + offset);
				y = -outerRadius * Math.sin(arcAngle + offset);// - thickness/2;
				path.push('A', outerRadius, outerRadius, 0, largeArcFlag, sweepFlag, x, y);

				x = radius * Math.cos(angle + offset);
				y = -radius * Math.sin(angle + offset);
				path.push('L', x, y);

				x = innerRadius * Math.cos(arcAngle + offset);
				y = -innerRadius * Math.sin(arcAngle + offset);// + thickness/2;
				path.push('L', x, y);

				path.push('A', innerRadius, innerRadius, 0, largeArcFlag, antiSweepFlag, 0, -innerRadius);

				path.push('L', '0', -outerRadius);

				path.push('Z');

			}

		} else {
			if(strand === 1) {
				var offset = Math.PI/2;

				path.push('M', '0', -outerRadius);

				x = radius * Math.cos(-angle + offset);
				y = -radius * Math.sin(-angle + offset);
				path.push('L', x, y);

				path.push('L', '0', -innerRadius);

				path.push('Z');


			} else if(strand === -1) {
				var offset = Math.PI/2;

				path.push('M', '0', -outerRadius);

				x = radius * Math.cos(angle + offset);
				y = -radius * Math.sin(angle + offset);
				path.push('L', x, y);

				path.push('L', '0', -innerRadius);

				path.push('Z');

			}

		}

		return path.join(' ');
	},




	getFeatureRadius: function(pieContainer, featureIndex) {
		var alignIndex = pieContainer.featAlignMap[featureIndex];
		return pieContainer.railRadius - this.getOffsetFromRail(alignIndex);
	},

	getOffsetFromRail: function(alignIndex) {
		return 3 * this.DEFAULT_FEATURES_GAP
				+ alignIndex * (this.DEFAULT_FEATURE_HEIGHT + this.DEFAULT_FEATURES_GAP);
	},

	calculateAngles: function(feature, seqLen) {
		var angle1 = feature.get('start') * 2 * Math.PI / seqLen;
		var angle2 = feature.get('end') * 2 * Math.PI / seqLen;
		if(angle1 > angle2) {
			return [angle1, angle2 + 2 * Math.PI];
		} else {
			return [angle1, angle2];
		}
	},


	colorByType: function(type) {
		var switchObj = {
			promoter: "#31B440",
			terminator: "#F51600",
			cds: "#EF6500",
			m_rna: "#FFFF00",
			misc_binding: "#006FEF",
			misc_feature: "#006FEF",
			misc_marker: "#8DCEB1",
			rep_origin: "#878787"
		};

		var color = switchObj[type] || "#CCCCCC";
		return color;
	},





};

































