
if(typeof VE.annotate !== 'object') {
	VE.annotate = {};
}


VE.annotate.SelectionLayerRenderer = {


	drawSelectionLayerRect: function(pGraphics, pX, pY, pWidth, pHeight){
		return pGraphics.append("svg:rect")
			.attr("class", 'annotateSelectionRect')
			.attr("x", pX)
			.attr("y", pY)
			.attr("width", pWidth)
			.attr("height", pHeight);
	},


};




























































