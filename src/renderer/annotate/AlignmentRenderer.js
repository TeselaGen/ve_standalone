
if(typeof VE.annotate !== 'object') {
	VE.annotate = {};
}

VE.annotate.AlignmentRenderer = {
	
	CHAR_WIDTH: 9,
	FONT_SIZE: 12,
	FONT_FAMILY: 'Ubuntu Mono',
	GAP_HEIGHT: 18,
	GAP_COLOR: 'black',
	GAP_WIDTH: 2,
	GAP_YOFFSET: 11,
	HIGHLIGHT_HEIGHT: 14,
	HIGHLIGHT_YOFFSET: 9,
	LETTER_SPACING: '3px',
	MATCH_COLOR: 'green',
	MISMATCH_COLOR: 'red',
	MISMATCH_HEIGHT: 18,
	TEXT_COLOR: 'white',


	drawAlignments: function(annotatePanel, rowIndex) {
		var rows = annotatePanel.rows;
		var alignments = annotatePanel.model.get('alignments');
		
		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;
		this.CHAR_WIDTH = CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		var row = rows[rowIndex];
		var g = annotatePanel.alignmentsSVG;
		var queryGapSVG = annotatePanel.queryGapSVG;

		for(var i=0;i<row.alignments.length;i++) {
			var alignment = alignments[i];
			var r_alignment = row.alignments[i];

			var offset = annotatePanel.getAlignmentLayerOffset(row);
			var upshift = 20 * i;
			var alignY = row.y + offset - upshift;

			for(var j=0;j<r_alignment.length;j++) {
				var alignIndex = r_alignment[j]
				if(alignIndex === undefined) { continue; }
				var align = alignment[alignIndex];
				// console.log(align);

				if(align.type === 'queryGap') {
					var start = align.queryStart;
					var alignX = sequenceX1 + annotatePanel.bpToColIndex(start) * CHAR_WIDTH;
					alignX += CHAR_WIDTH;

					this.drawQueryGap(queryGapSVG, alignX - 2, alignY, align);


				} else {
					var start = align.queryStart;
					var end = start + align.subjectSequence.length;
					if(end < start) throw new Error("TODO");

					var startRow = annotatePanel.bpToRowIndex(start);
					var endRow = annotatePanel.bpToRowIndex(end-1);

					var rowStartCol = annotatePanel.bpToColIndex(start);
					var rowEndCol = annotatePanel.bpToColIndex(end-1);

					var rowStartBp = start % bpPerRow;
					var rowEndBp = (end - 1) % bpPerRow;

					var rowStartPx = sequenceX1 + rowStartCol * CHAR_WIDTH;
					var rowEndPx = sequenceX1 + rowEndCol * CHAR_WIDTH;

					var alignX1, alignX2, text, bpOffset;
					if(rowIndex === startRow && rowIndex === endRow) {
						alignX1 = rowStartPx;
						alignX2 = rowEndPx;
						text = align.subjectSequence.toUpperCase();
						bpOffset = start % bpPerRow;

					} else if(rowIndex === startRow) {
						alignX1 = rowStartPx;
						alignX2 = sequenceX2;
						text = align.subjectSequence.slice(0, bpPerRow - rowStartBp).toUpperCase();
						bpOffset = start % bpPerRow;

					} else if(rowIndex === endRow) {
						alignX1 = sequenceX1;
						alignX2 = rowEndPx;
						text = align.subjectSequence.slice(align.subjectSequence.length - rowEndBp - 1).toUpperCase();

					} else {
						alignX1 = sequenceX1;
						alignX2 = sequenceX2;
						var n_rows = rowIndex - startRow;
						var bpOffset = (n_rows - 1) * bpPerRow + (bpPerRow - rowStartBp)
						text = align.subjectSequence.slice(bpOffset, bpOffset + bpPerRow).toUpperCase();

					}
					if(annotatePanel.showSpaceEvery10Bp) {
						text = this.addSpaceEvery10Bp(text, bpOffset);
					}

					if(align.type === 'match') {
						var rect = this.drawMatch(g, alignX1, alignY, text);
						// rect.attr('start', align.queryStart);

					} else if(align.type === 'mismatch') {
						var rect = this.drawMismatch(g, alignX1, alignY, text);
						// rect.attr('start', align.queryStart);
						// rect.attr('subjectSequence', align.subjectSequence);

					}


				}

			}

		}

		// function createDashedArrayAttr(a) {
		// 	var b = [];
		// 	var factor = charPerRow * CHAR_WIDTH;
		// 	for(var i=0,ii=a.length;i<ii;i++) {
		// 		b[i] = a[i] * factor;
		// 	}
		// 	return b.join(',');
		// }

		// for(var i=0;i<row.alignments.length;i++) {
		// 	var alignment = alignments[i];
		// 	var renderInfo = row.alignments[i];

		// 	var offset = annotatePanel.getAlignmentLayerOffset(row);
		// 	var upshift = 20 * i;
		// 	var alignY = row.y + offset - upshift;

		// 	var text = renderInfo.text;


		// 	g.append("svg:line")
		// 		.attr({
		// 			x1: sequenceX1, y1: alignY + 4,
		// 			x2: sequenceX2, y2: alignY + 4,
		// 			'stroke-dasharray': createDashedArrayAttr(renderInfo.matchDashArray),
		// 		})
		// 		.style({
		// 			stroke: this.MATCH_COLOR,
		// 			fill: 'none',
		// 			'stroke-width': this.HIGHLIGHT_HEIGHT,
		// 		});

		// 	g.append("svg:line")
		// 		.attr({
		// 			x1: sequenceX1, y1: alignY + 4,
		// 			x2: sequenceX2, y2: alignY + 4,
		// 			'stroke-dasharray': createDashedArrayAttr(renderInfo.mismatchDashArray),
		// 		})
		// 		.style({
		// 			stroke: this.MISMATCH_COLOR,
		// 			fill: 'none',
		// 			'stroke-width': this.MISMATCH_HEIGHT,
		// 		});


		// 	g.append("svg:text")
		// 		.attr("x", sequenceX1)
		// 		.attr("y", alignY + 4)
		// 		.attr("fill", this.TEXT_COLOR)
		// 		.attr("font-family", this.FONT_FAMILY)
		// 		.attr("font-size", this.FONT_SIZE)
		// 		.attr("letter-spacing", this.LETTER_SPACING)
		// 		.style('pointer-events', 'none')
		// 		.text(text);
			

		// }
	},
	
	addSpaceEvery10Bp: function(str, colOffset) {
		colOffset = colOffset || 0;
		var a = [];
		var ws = "";
		for(var i=0;i<colOffset;i++) {
			ws += " ";
		}
		str = ws + str;
		for(var i=0;i<str.length;i+=10) {
			a.push(str.slice(i,i+10));
		}
		return a.join(' ').trim();
	},

	drawQueryGap: function(g, x, y, align) {
		var gapText = "Gap Sequence: " + align.subjectSequence;
		g.append("svg:rect")
			.attr("class", "alignment-query-gap")
			.attr("x", x)
			.attr("y", y - this.HIGHLIGHT_YOFFSET)
			.attr("width", this.GAP_WIDTH)
			.attr("height", this.GAP_HEIGHT)
			.attr("fill", this.GAP_COLOR)
		.append("svg:title")
			.style('pointer-events', 'none')
			.text(gapText);
	},

	drawMatch: function(g, x, y, text) {
		var rect = g.append("svg:rect")
			.attr("class", "alignment-match")
			.attr("x", x - 1)
			.attr("y", y - this.HIGHLIGHT_YOFFSET + 2)
			.attr("width", this.CHAR_WIDTH * text.length)
			.attr("height", this.HIGHLIGHT_HEIGHT)
			.attr("fill", this.MATCH_COLOR);

		g.append("svg:text")
			.attr("x", x)
			.attr("y", y + 4)
			.attr("fill", this.TEXT_COLOR)
			.attr("font-family", this.FONT_FAMILY)
			.attr("font-size", this.FONT_SIZE)
			.attr("letter-spacing", this.LETTER_SPACING)
			.style('pointer-events', 'none')
			.text(text);
		return rect;
	},

	drawMismatch: function(g, x, y, text) {
		var rect = g.append("svg:rect")
			.attr("class", "alignment-mismatch")
			.attr("x", x - 1)
			.attr("y", y - this.HIGHLIGHT_YOFFSET)
			.attr("width", this.CHAR_WIDTH * text.length)
			.attr("height", this.MISMATCH_HEIGHT)
			.attr("fill", this.MISMATCH_COLOR);

		g.append("svg:text")
			.attr("x", x)
			.attr("y", y + 4)
			.attr("fill", this.TEXT_COLOR)
			.attr("font-family", this.FONT_FAMILY)
			.attr("font-size", this.FONT_SIZE)
			.attr("letter-spacing", this.LETTER_SPACING)
			.style('pointer-events', 'none')
			.text(text);

		return rect;
	},

	



};























































