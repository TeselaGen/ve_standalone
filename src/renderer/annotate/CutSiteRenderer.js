
if(typeof VE.annotate !== 'object') {
	VE.annotate = {};
}

VE.annotate.CutSiteRenderer = {
	
	CURVY_LINE_COLOR: "#FF0000",
	CURVY_LINE_HEIGHT: 5,
	CUT_SITE_COLOR: "#625D5D",
	ONE_CUT_COLOR: "#E57676",
	MULTIPLE_CUT_COLOR: "#888888",
	CUTSITE_HEIGHT_OFFSET: 25,


	drawCutSites: function(annotatePanel, rowIndex) {

		var rows = annotatePanel.rows;
		var cutSites = annotatePanel.model.get('cutSites');

		var scrollTop = annotatePanel.scrollTop;
		var height = annotatePanel.height;

		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		
		var row = rows[rowIndex];
		var g = annotatePanel.cutSitesSVG;
		for(var j=0;j<row.cutSites.length;j++) {
			var cutSiteIndex = row.cutSites[j];
			if(cutSiteIndex === undefined) { continue; }
			var cutSite = cutSites[cutSiteIndex];
			var enzyme = cutSite.get('restrictionEnzyme');
			var strand = cutSite.get('strand');
			var start = cutSite.get('start');
			var end = cutSite.get('end');
			if(end < start) throw new Error("TODO");
			var csLength = end - start;

			var startRow = annotatePanel.bpToRowIndex(start);
			var endRow = annotatePanel.bpToRowIndex(end-1);

			var rowStartBp = annotatePanel.bpToColIndex(start);
			var rowEndBp = annotatePanel.bpToColIndex(end-1);

			var rowStartPx = sequenceX1 + rowStartBp * CHAR_WIDTH;
			var rowEndPx = sequenceX1 + rowEndBp * CHAR_WIDTH;

			var cutSiteHeight = this.CUTSITE_HEIGHT_OFFSET;
			var offset = annotatePanel.getCutSiteLayerOffset(row);
			// var cutsiteY = row.y + offset + row.cutSites.length * (30) - j * cutSiteHeight;
			var cutsiteY = row.y + offset + row.cutSites.length * (30) - j * cutSiteHeight - scrollTop;

			var oneCut = (cutSite.get('numCuts') === 1);

			if(rowIndex === startRow && rowIndex === endRow) {
				var cutSiteWidth = rowEndPx - rowStartPx + CHAR_WIDTH;
				cutSiteWidth = (cutSiteWidth < 0) ? 0 : cutSiteWidth;
				this.drawCurvyLine(g, rowStartPx + 2, cutsiteY, cutSiteWidth - 4);
				this.drawName(g, rowStartPx, cutsiteY - this.CURVY_LINE_HEIGHT,
							enzyme.get('name'), oneCut);

			} else if(rowIndex === startRow) {
				var cutSiteWidth = (charPerRow - rowStartBp) * CHAR_WIDTH;
				cutSiteWidth = (cutSiteWidth < 0) ? 0 : cutSiteWidth;
				this.drawCurvyLine(g, rowStartPx + 2, cutsiteY, cutSiteWidth - 2);
				this.drawName(g, rowStartPx, cutsiteY - this.CURVY_LINE_HEIGHT,
							enzyme.get('name'), oneCut);

			} else if(rowIndex === endRow) {
				var cutSiteWidth = rowEndPx - sequenceX1 + CHAR_WIDTH;
				cutSiteWidth = (cutSiteWidth < 0) ? 0 : cutSiteWidth;
				this.drawCurvyLine(g, sequenceX1, cutsiteY, cutSiteWidth - 2);

			} else {
				var cutSiteWidth = charPerRow * CHAR_WIDTH;
				cutSiteWidth = (cutSiteWidth < 0) ? 0 : cutSiteWidth;
				this.drawCurvyLine(g, sequenceX1, cutsiteY, cutSiteWidth);

			}


			var dsForward, dsReverse;
			if(strand === 1) {
				dsForward = enzyme.get('dsForward');
				dsReverse = enzyme.get('dsReverse');
			} else {
				dsForward = csLength - enzyme.get('dsReverse');
				dsReverse = csLength - enzyme.get('dsForward');
			}
			dsForward += start;
			dsReverse += start;

			var dsForwardRow = annotatePanel.bpToRowIndex(dsForward);
			var dsReverseRow = annotatePanel.bpToRowIndex(dsReverse);

			var dsForwardBp = annotatePanel.bpToColIndex(dsForward);
			var dsReverseBp = annotatePanel.bpToColIndex(dsReverse);

			var dsForwardX = sequenceX1 + dsForwardBp * CHAR_WIDTH - 2;
			var dsReverseX = sequenceX1 + dsReverseBp * CHAR_WIDTH - 2;

			var dsForwardY = cutsiteY;
			var dsReverseY = cutsiteY + this.CURVY_LINE_HEIGHT;

			if(rowIndex === dsForwardRow) {
				this.drawDsForwardPosition(g, dsForwardX, dsForwardY);
			}

			if(rowIndex === dsReverseRow) {
				this.drawDsReversePosition(g, dsReverseX, dsReverseY);
			}


		}

	},


	appendCurvyLinePattern: function(annotateSVG) {
		annotateSVG.append("svg:pattern")
			.attr("id", "curvyLine")
			.attr("width", 5)
			.attr("height", 5)
			.attr("patternUnits", "userSpaceOnUse")
			.append("svg:path")
			.attr("d", "M 0 0 L 2.5 5 L 5 0")
			.attr("stroke", this.CURVY_LINE_COLOR)
			.attr("fill", "none");
	},


	drawName: function(g, x, y, name, oneCut) {
		var color;
		if(oneCut) {
			color = this.ONE_CUT_COLOR;
		} else {
			color = this.MULTIPLE_CUT_COLOR;
		}

		g.append("svg:text")
			.attr("x", x)
			.attr("y", y - 4) // -4 to move it off the curvy line a bit.
			.style({
				"fill": color,
				'font-family': "'Maven Pro', sans-serif",
				'font-weight': 500,
				'font-size': 12,
				'pointer-events': 'none',
			})
			.text(name);
	},

	drawCurvyLine: function(g, x, y, width) {
		g.append("svg:rect")
			.attr("x", x)
			.attr("y", y)
			.attr("width", width)
			.attr("height", this.CURVY_LINE_HEIGHT)
			.attr("fill", "url(#curvyLine)");
	},

	drawDsForwardPosition: function(g, x, y) {
		g.append("svg:path")
			.attr("d", "M" + x + " " + y + "L" + (x - 3) + " " + (y - 4) +
				  "L" + (x + 3) + " " + (y - 4))
			.attr("fill", this.CUT_SITE_COLOR);
	},

	drawDsReversePosition: function(g, x, y) {
		g.append("svg:path")
			.attr("d", "M" + x + " " + y + "L" + (x - 3) + " " + (y + 4) +
				  "L" + (x + 3) + " " + (y + 4))
			.attr("fill", this.CUT_SITE_COLOR);
	},





};












































