
if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.OrfRenderer = {

	DISTANCE_FROM_RAIL: 15,
	DISTANCE_BETWEEN_ORFS: 5,
	ORF_FRAME_COLOR: ["#FF0000", "#31B440", "#3366CC"],


	drawOrfs: function(pieContainer) {
		var me = this;
		var offset = Math.PI/2;
		// var offset = -Math.PI/2;

		var orfs = pieContainer.model.get('orfs');
		var seqLen = pieContainer.model.get('sequence').length;

		var orfSvgs = pieContainer.orfSVG.selectAll('g.undefined_class')
			.data(orfs)
			.enter().append('svg:g')
			.attr('transform', function(annot, i) {
				var angles = VE.RendererUtil.calculateAngles(annot, seqLen);
				var rotateStr = me.createOrfRotationString(angles, pieContainer);
				return rotateStr;
			});


		orfSvgs.append('svg:path')
			.attr("fill", "none")
			.attr("stroke", function(annot) {
				return me.ORF_FRAME_COLOR[Math.abs(annot.get('frame'))];
			})
			.attr('d', function(annot, i) {
				var alignIndex = pieContainer.orfsAlignMap[i];

				var orfRadius = pieContainer.railRadius + me.DISTANCE_FROM_RAIL + 
						pieContainer.getAlignmentOffset() + alignIndex * me.DISTANCE_BETWEEN_ORFS;

				var angles = VE.RendererUtil.calculateAngles(annot, seqLen);
				var angle = angles[1] - angles[0];
				return me.getFeaturePathD(orfRadius, angle);
			});


		// Render start codons as bold dots.
		var startCodonSvgs = orfSvgs.selectAll('circle.undefined_class')
			.data(function(annot, i) {
				var a = annot.get('startCodons');
				var b = [];
				for(var j=0;j<a.length;j++) {
					b.push({
						bp: a[j],
						orfIndex: i,
					});
				}
				return b;
			})
			.enter().append('svg:circle')
			.attr("r", 2);

		startCodonSvgs.attr("cx", function(d, i) {
				var orfIndex = d.orfIndex;
				var bp = d.bp;
				var annot = orfs[orfIndex];
				var radius = me.getOrfRadius(pieContainer, orfIndex);
				var angle = VE.RendererUtil.calculateAngle(bp - annot.get('start'), seqLen);
				// console.log(d);
				return radius * Math.cos(-angle + offset);
			});

		startCodonSvgs.attr("cy", function(d, i) {
				var orfIndex = d.orfIndex;
				var bp = d.bp;
				var annot = orfs[orfIndex];
				var radius = me.getOrfRadius(pieContainer, orfIndex);
				var angle = VE.RendererUtil.calculateAngle(bp - annot.get('start'), seqLen);
				return -radius * Math.sin(-angle + offset);
			});

		startCodonSvgs.attr("fill", function(d, i) {
				var orfIndex = d.orfIndex;
				var annot = orfs[orfIndex];
				// return me.ORF_FRAME_COLOR[annot.get('frame')];
				return me.ORF_FRAME_COLOR[Math.abs(annot.get('frame'))];
			});
		
		// // Render start codons as bold dots.
		// var startCodonSvgs = orfSvgs.selectAll('circle.undefined_class')
		// 	.data(function(annot, i) {
		// 		return annot.get('startCodons');
		// 	})
		// 	.enter().append('svg:circle')
		// 	.attr("r", 2);

		// var orfIndex = -1;
		// var lastI = 0;
		// startCodonSvgs.attr("cx", function(d, i) {
		// 		if(i <= lastI) { orfIndex++; }
		// 		lastI = i;
		// 		var annot = orfs[orfIndex];
		// 		var radius = me.getOrfRadius(pieContainer, orfIndex);
		// 		var angle = VE.RendererUtil.calculateAngle(d - annot.get('start'), seqLen);
		// 		// console.log(d);
		// 		return radius * Math.cos(-angle + offset);
		// 	});

		// orfIndex = -1;
		// lastI = 0;
		// startCodonSvgs.attr("cy", function(d, i) {
		// 		if(i <= lastI) { orfIndex++; }
		// 		lastI = i;
		// 		var annot = orfs[orfIndex];
		// 		var radius = me.getOrfRadius(pieContainer, orfIndex);
		// 		var angle = VE.RendererUtil.calculateAngle(d - annot.get('start'), seqLen);
		// 		return -radius * Math.sin(-angle + offset);
		// 	});

		// orfIndex = -1;
		// lastI = 0;
		// startCodonSvgs.attr("fill", function(d, i) {
		// 		if(i <= lastI) { orfIndex++; }
		// 		lastI = i;
		// 		var annot = orfs[orfIndex];
		// 		// return me.ORF_FRAME_COLOR[annot.get('frame')];
		// 		return me.ORF_FRAME_COLOR[Math.abs(annot.get('frame'))];
		// 	});








		// 12 x 9
		var baseArrowD = "M 0 4.5 L 12 0 L 0 -4.5 Z";
		var _arrowScale = 2/3;

		function createArrowD(orfRadius) {
			return "M 0 " + (_arrowScale*4.5-orfRadius) + " L "+(12*_arrowScale)+" " + (-orfRadius) + " L 0 " + (-_arrowScale*4.5-orfRadius) + " Z";
		}

		orfSvgs.append('svg:path')
			.attr("fill", function(annot) {
				return me.ORF_FRAME_COLOR[annot.get('frame')];
			})
			.attr('d', function(annot, i) {
				var alignIndex = pieContainer.orfsAlignMap[i];

				var orfRadius = pieContainer.railRadius + me.DISTANCE_FROM_RAIL + 
						pieContainer.getAlignmentOffset() + alignIndex * me.DISTANCE_BETWEEN_ORFS;

				// var angles = VE.RendererUtil.calculateAngles(annot, seqLen);
				// var angle = angles[1] - angles[0];
				// return me.getFeaturePathD(orfRadius, angle);
				// return baseArrowD;
				return createArrowD(orfRadius);
			})
			.attr('transform', function(annot, i) {
				var alignIndex = pieContainer.orfsAlignMap[i];

				var orfRadius = pieContainer.railRadius + me.DISTANCE_FROM_RAIL + 
						pieContainer.getAlignmentOffset() + alignIndex * me.DISTANCE_BETWEEN_ORFS;

				if(annot.get('strand') === -1) {
					return 'rotate(180,0,'+(-orfRadius)+')';
				}
				var angles = VE.RendererUtil.calculateAngles(annot, seqLen);
				var angle = angles[1] - angles[0];
				// var rotStr = me.createOrfRotationString([angles[1]], pieContainer);
				var rotStr = me.createOrfRotationString([angle], pieContainer);
				// var transString = 'translate(0, ' + (-orfRadius) + ')';
				// return rotStr + transString;
				return rotStr;
			})
			;

		// orfSvgs.append('svg:path')
		// 	.attr("stroke", function(annot) {
		// 		return me.ORF_FRAME_COLOR[annot.get('frame')];
		// 	})
		// 	.attr("fill", function(annot) {
		// 		return me.ORF_FRAME_COLOR[annot.get('frame')];
		// 	})
		// 	.attr('d', function(annot, i) {
		// 		var alignIndex = pieContainer.orfsAlignMap[i];

		// 		var radius = me.getOrfRadius(pieContainer, i);

		// 		var angles = VE.RendererUtil.calculateAngles(annot, seqLen);
		// 		var angle = angles[1] - angles[0];
		// 		// return me.getFeaturePathD(orfRadius, angle);
		// 	})
		// 	;



	},


	getOrfRadius: function(pieContainer, i) {
		var alignIndex = pieContainer.orfsAlignMap[i];
		return pieContainer.railRadius + this.DISTANCE_FROM_RAIL + 
				pieContainer.getAlignmentOffset() + alignIndex * this.DISTANCE_BETWEEN_ORFS;
	},

	createOrfRotationString: function(angles, pieContainer) {
		var a = angles[0] * 180 / Math.PI;
		return 'rotate('+a+','+(0)+','+(0)+')';
	},


	getFeaturePathD: function(radius, angle) {
		var me = this;
		var offset = Math.PI/2;

		var arcLength = radius * angle;

		var largeArcFlag = (angle > Math.PI) ? 1 : 0;
		var sweepFlag = 1;

		var path = [];

		path.push('M', '0', -radius);
		var x = radius * Math.cos(-angle + offset);
		var y = -radius * Math.sin(-angle + offset);// - thickness/2;
		path.push('A', radius, radius, 0, largeArcFlag, sweepFlag, x, y);

		return path.join(' ');
	},











};




















































