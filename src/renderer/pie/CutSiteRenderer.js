
if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.CutSiteRenderer = {

	CUTSITE_LINE_WIDTH: 0.5,
	FRAME_COLOR: "#606060",


	drawCutsites: function(pieContainer) {
		var me = this;

		var cutSites = pieContainer.model.get('cutSites');
		var seqLen = pieContainer.model.get('sequence').length;
		
		pieContainer.cutSiteSVG.selectAll('path.undefined_class')
			.data(cutSites)
			.enter().append('svg:path')
			.attr("stroke", this.FRAME_COLOR)
			.attr("stroke-width", this.CUTSITE_LINE_WIDTH)
			.attr("d", function(annot, i) {
				var angle = annot.get('start') * 2 * Math.PI / seqLen;
				return "M" + (pieContainer.railRadius * Math.sin(angle)) + " " +
						(-pieContainer.railRadius * Math.cos(angle)) + " " + "L" +
						((pieContainer.railRadius + 10) * Math.sin(angle)) + " " +
						(-(pieContainer.railRadius + 10) * Math.cos(angle));
			});
			// .append("svg:title")
			// .text(this.getToolTip(site));



	},



};

































