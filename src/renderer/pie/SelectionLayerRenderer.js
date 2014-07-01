
if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.SelectionLayerRenderer = {


	generatePathD: function(fromIndex, endIndex, radius, center, seqLen) {
		var path;
		if(seqLen == 0) {
			return;
		}

		var startAngle = fromIndex * 2 * Math.PI / seqLen;
		var endAngle = endIndex * 2 * Math.PI / seqLen;

		var startPoint = {};
		startPoint.x = center.x + radius * Math.sin(startAngle);
		startPoint.y = center.y - radius * Math.cos(startAngle);

		var endPoint = {};
		endPoint.x = center.x + radius * Math.sin(endAngle);
		endPoint.y = center.y - radius * Math.cos(endAngle);

		// Adjust endangle and startangle to be relative to startangle so we
		// can use the same logic as in GraphicUtils to determine SVG arc flags.

		var adjustedEnd = endAngle;
		if(endAngle > startAngle) {
			adjustedEnd -= startAngle;
		} else {
			adjustedEnd += 2 * Math.PI - startAngle;
		}

		var adjustedStart = 0;

		var sweepFlag = 0;
		if(adjustedEnd > adjustedStart) {
			sweepFlag = 1;
		}

		var largeArcFlag = 0;
		if(Math.abs(adjustedEnd - adjustedStart) > Math.PI) {
			largeArcFlag = 1;
		}

		path = "M" + center.x + " " + center.y + " " +
			   "L" + startPoint.x + " " + startPoint.y + " " + 
			   "A" + radius + " " + radius + " 0 " + largeArcFlag +
			   " " + sweepFlag + " " + endPoint.x + " " + endPoint.y +
			   "L" + center.x + " " + center.y;

		return path;
	},



};






















































