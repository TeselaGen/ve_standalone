
if(typeof VE.annotate !== 'object') {
	VE.annotate = {};
}

VE.annotate.OrfRenderer = {

	CODON_SHIFT: -6,
	ORF_COLOR: ["#FF0000", "#31B440", "#3366CC"],
	ORF_STROKE_WIDTH: 2,


	drawOrfs: function(annotatePanel, rowIndex) {

		var rows = annotatePanel.rows;
		var orfs = annotatePanel.model.get('orfs');

		var scrollTop = annotatePanel.scrollTop;
		var height = annotatePanel.height;

		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		
		var row = rows[rowIndex];
		var g = annotatePanel.orfsSVG;
		for(var j=0;j<row.orfs.length;j++) {
			var orfIndex = row.orfs[j];
			if(orfIndex === undefined) { continue; }
			var orf = orfs[orfIndex];
			var strand = orf.get('strand');
			var start = orf.get('start');
			var end = orf.get('end');
			if(end < start) throw new Error("TODO");
			var orfLength = end - start;

			var startRow = annotatePanel.bpToRowIndex(start);
			var endRow = annotatePanel.bpToRowIndex(end-1);

			var rowStartBp = annotatePanel.bpToColIndex(start);
			var rowEndBp = annotatePanel.bpToColIndex(end-1);

			var rowStartPx = sequenceX1 + rowStartBp * CHAR_WIDTH;
			var rowEndPx = sequenceX1 + rowEndBp * CHAR_WIDTH;

			var offset = annotatePanel.getOrfLayerOffset(row);
			var upShift = j * 8 - 6;
			var color = this.ORF_COLOR[Math.abs(orf.get('frame'))];
			// var orfY = row.y + offset - upShift;
			var orfY = row.y + offset - upShift - scrollTop;
			
			var orfX1, orfX2;
			if(rowIndex === startRow && rowIndex === endRow) {
				orfX1 = rowStartPx;
				orfX2 = rowEndPx;
			} else if(rowIndex === startRow) {
				orfX1 = rowStartPx;
				orfX2 = sequenceX2;
			} else if(rowIndex === endRow) {
				orfX1 = sequenceX1;
				orfX2 = rowEndPx;
			} else {
				orfX1 = sequenceX1;
				orfX2 = sequenceX2;
			}

			g.append("svg:line")
				.attr({
					x1: orfX1,
					x2: orfX2,
					y1: orfY,
					y2: orfY,
					stroke: color,
					'stroke-width': this.ORF_STROKE_WIDTH,
				});

			if(rowIndex === endRow && strand === 1) {
				var codonEndPointX1 = rowEndPx + CHAR_WIDTH;
				var codonEndPointY1 = orfY;
				//draw arrow ends
				g.append("svg:path")
					.attr("d", "M" + (codonEndPointX1 - 10) + " " +
								(codonEndPointY1 - 4) +
								"L" + codonEndPointX1 + " " + codonEndPointY1 +
								"L" + (codonEndPointX1 - 10) + " " +
								(codonEndPointY1 + 4) +
								"L" + (codonEndPointX1 - 10) + " " +
								(codonEndPointY1 - 4))
					.attr("fill", color);
			}

			if(rowIndex === startRow && strand === -1) {
				var codonEndPointX2 = rowStartPx - CHAR_WIDTH;
				var codonEndPointY2 = orfY;
				//draw arrow ends
				g.append("svg:path")
					.attr("d", "M" + codonEndPointX2 + " " + codonEndPointY2 +
								"L" + (codonEndPointX2 + 10) + " " +
								(codonEndPointY2 - 4) +
								"L" + (codonEndPointX2 + 10) + " " +
								(codonEndPointY2 + 4) +
								"L" + codonEndPointX2 + " " + codonEndPointY2)
					.attr("fill", color);
			}

			var startCodons = orf.get('startCodons');
			for(var k=0;k<startCodons.length;k++) {
				var codon = startCodons[k];
				var codonRow = annotatePanel.bpToRowIndex(codon);
				if(codonRow !== rowIndex) { continue; }

				var codonBp = annotatePanel.bpToColIndex(codon);

				if(strand === -1) {
					codonBp -= 1;
				}

				var codonPx = sequenceX1 + codonBp * CHAR_WIDTH;
				g.append("svg:circle")
					.attr("cx", codonPx + CHAR_WIDTH +
								this.CODON_SHIFT)
					.attr("cy", orfY)
					.attr("r", 3.5)
					.attr("fill", color);
			}


		}





	},





};

































