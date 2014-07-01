(function(){

if(typeof VE.rail !== 'object') { VE.rail = {}; }




VE.rail.CutSiteRenderer = {

	FRAME_COLOR: "#606060",
	CUTSITE_LINE_WIDTH: 0.5,

	drawCutsites: function(railContainer) {
		var me = this;

		var cutSites = railContainer.model.get('cutSites');
		var seqLen = railContainer.model.get('sequence').length;
		var railWidth = railContainer.railWidth;

		railContainer.cutSiteSVG.selectAll('path.undefined_class')
			.data(cutSites)
			.enter().append('svg:path')
			.attr("stroke", this.FRAME_COLOR)
			.attr("stroke-width", this.CUTSITE_LINE_WIDTH)
			.attr("d", function(annot, i) {
				var start = annot.get('start');
				var startPos = start / seqLen * railWidth;

				// var y = -railContainer.FRAME_RECT_HEIGHT;
				var y = 0;
				
				var path = 'M' + startPos + ' ' + y + ' ' +
						'L' + startPos + ' ' + (y - 8);
				return path;
			});
			// .append("svg:title")
			// .text(this.getToolTip(site));



	},



};














































































})();