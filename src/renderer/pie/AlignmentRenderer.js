
if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.AlignmentRenderer = {

	ALIGNMENT_HEIGHT: 4,
	DISTANCE_BETWEEN_ALIGNMENTS: 2,
	DISTANCE_FROM_RAIL: 5,
	OUTLINE_COLOR: "black",
	OUTLINE_WIDTH: 0.0,//0.5,
	GAP_COLOR: "red",
	MATCH_COLOR: "green",
	MISMATCH_COLOR: "red",
	MISMATCH_HEIGHT: 6,


	drawAlignments: function(pieContainer) {
		var me = this;

		var seqLen = pieContainer.model.get('sequence').length;

		var alignments = pieContainer.model.get('alignments');
		
		for(var i=0;i<alignments.length;i++) {
			var alignment = alignments[i];

			// pieContainer.alignmentSVG.selectAll('path.undefined_class')
			// 	.data(alignment)	
			// 	.enter()
			// 	.append('svg:path')
			// 	.filter(function(d, j) {
			// 		return d.type !== 'queryGap';
			// 	})
			// 	.attr('d', function(align, j) {
			// 		var angles = me.calculateAngles(align, seqLen);
			// 		var angle = angles[1] - angles[0];

			// 		var radius = me.getAlignmentRadius(pieContainer, i);
					
			// 		return me.getAlignmentPathD(radius, me.ALIGNMENT_HEIGHT, angle);
			// 	});
			
			var radius = this.getAlignmentRadius(pieContainer, i);
			var angle = 2 * Math.PI - 0.0000001;
			var d = this.getAlignmentPathD(radius);
			var arcLength = radius * 2 * Math.PI;

			var match_stroke_dasharray = this.getStrokeDashArray(alignment, 'match', arcLength, seqLen);
			var mismatch_stroke_dasharray = this.getStrokeDashArray(alignment, 'mismatch', arcLength, seqLen);

			var mismatchPath = pieContainer.alignmentSVG.append('svg:path')
				.attr({
					d: d,
					'stroke-dasharray': mismatch_stroke_dasharray,
				})
				.style({
					fill: 'none',
					stroke: this.MISMATCH_COLOR,
					'stroke-width': this.MISMATCH_HEIGHT,
					// 'color-rendering': 'optimizeQuality',
					// 'shape-rendering': 'geometricPrecision',
				});

			var matchPath = pieContainer.alignmentSVG.append('svg:path')
				.attr({
					d: d,
					'stroke-dasharray': match_stroke_dasharray,
				})
				.style({
					fill: 'none',
					stroke: this.MATCH_COLOR,
					'stroke-width': this.ALIGNMENT_HEIGHT,
					// 'color-rendering': 'optimizeQuality',
					// 'shape-rendering': 'geometricPrecision',
				});

			
		}


	},

	/**
	 * `alignment` should be sorted.
	 */
	getStrokeDashArray: function(alignment, type, arcLength, seqLen) {
		var a = [];
		for(var i=0,ii=alignment.length;i<ii;i++) {
			var align = alignment[i];
			if(align.type === type) {
				var start = align.queryStart;
				var length = align.subjectSequence.length;

				a.push({
					start: start,
					end: start + length,
				});
			} 
		}

		var b = [0];
		var lastEnd = 0;
		var factor = arcLength / seqLen;
		
		for(var i=0,ii=a.length;i<ii;i++) {
			var c = a[i];
			var start = c.start;
			var end = c.end;
			var length = end - start;
			b.push((start - lastEnd) * factor);
			b.push((length) * factor);
			lastEnd = end;
		}

		return b.join(',');
	},	


	getAlignmentPathD: function(radius) {
		var path = []; 

		var largeArcFlag = 1;
		var sweepFlag = 1;
		var x, y;
		
		var offset = Math.PI/2;

		path.push('M', '0', -radius);

		x = 0;
		y = radius;
		path.push('A', radius, radius, 0, largeArcFlag, sweepFlag, x, y);

		x = 0;
		y = -radius;
		path.push('A', radius, radius, 0, largeArcFlag, sweepFlag, x, y);

		return path.join(' ');
	},

	getAlignmentRadius: function(pieContainer, index) {
		var r = pieContainer.railRadius + this.DISTANCE_FROM_RAIL;
		if(index) {
			r += index * (this.DISTANCE_BETWEEN_ALIGNMENTS + this.ALIGNMENT_HEIGHT);
		}
		return r;
	},

	calculateAngles: function(align, seqLen) {
		var angle1 = align.queryStart * 2 * Math.PI / seqLen;
		var angle2 = (align.queryStart + align.subjectSequence.length) * 2 * Math.PI / seqLen;
		if(angle1 > angle2) {
			return [angle1, angle2 + 2 * Math.PI];
		} else {
			return [angle1, angle2];
		}
	},

};












































