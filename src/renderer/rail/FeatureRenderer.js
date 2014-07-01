(function(){

if(typeof VE.rail !== 'object') { VE.rail = {}; }



VE.rail.FeatureRenderer = {

	DEFAULT_FEATURE_HEIGHT: 7,
	// DEFAULT_FEATURE_HEIGHT: 10,
	DEFAULT_FEATURES_GAP: 5,
	OUTLINE_COLOR: "black",
	OUTLINE_WIDTH: 0.5,


	drawFeatures: function(railContainer) {
		var me = this;

		var features = railContainer.model.get('features');
		var seqLen = railContainer.model.get('sequence').length;

		railContainer.featureSVG.selectAll('path.undefined_class')
			.data(features)
			.enter().append('svg:path')
			.attr("class", 'rail-feature')
			.attr('d', function(feat, i) {
				// if(feat.get('start') > feat.get('end')) console.log(this);
				return me.getFeaturePathD(railContainer, feat, i);
			})
			.attr('fill', function(feat, i) {
				return me.colorByType(feat.get('type').toLowerCase());
			})
			.attr("stroke", this.OUTLINE_COLOR)
			.attr("stroke-width", this.OUTLINE_WIDTH)
			.attr("fill-rule", "evenodd")
			// .attr('transform', function(feat, i) {
			// 	var strand = feat.get('strand');
			// 	var angles = me.calculateAngles(feat, seqLen);
			// 	var rotateStr = me.createFeatureRotationString(angles, strand, railContainer);
			// 	var translateStr = 'translate('+(railContainer.center.x)+','+(railContainer.center.y)+')';
			// 	return rotateStr + translateStr;
			// })
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




	getFeaturePathD: function(railContainer, feat, i) {
		var seqLen = railContainer.model.get('sequence').length;
		var railWidth = railContainer.railWidth;

		var start = feat.get('start');
		var end = feat.get('end');
		var strand = feat.get('strand');


		var offset = this.getFeatureOffset(railContainer, i);

		var path;

		if(start <= end) {

			var startPos = start / seqLen * railWidth;
			var endPos = end / seqLen * railWidth;

			var xPos = startPos;
			var yPos = offset;
			var height = this.DEFAULT_FEATURE_HEIGHT;
			var width = endPos - startPos;

			if(strand === 1) {
				path = this.drawFeaturePositiveArrow(xPos, yPos, width, height);
			} else {
				path = this.drawFeatureNegativeArrow(xPos, yPos, width, height);
			}

		} else {
			// throw new Error('TODO');

			var startPos = start / seqLen * railWidth;
			var endPos = end / seqLen * railWidth;

			var height = this.DEFAULT_FEATURE_HEIGHT;
			var yPos = offset;

			var path0, path1;
			if(strand === 1) {
				path0 = this.drawFeatureForwardArrow(0, yPos, endPos, height);
				path1 = this.drawFeatureForwardRect(startPos, yPos, railWidth - startPos, height);
				
			} else {
				path0 = this.drawFeatureBackwardRect(0, yPos, endPos, height);
				path1 = this.drawFeatureBackwardArrow(startPos, yPos, railWidth - startPos, height);

			}

			path = path0 + ' ' + path1;

		}

		return path;
	},


	drawFeaturePositiveArrow: function(xPos, yPos, width, height) {
		var sprite;
		var path;

		if (width>4) {
			path =  "M" + xPos + " " + yPos +
					"L" + (xPos+(width-4)) + " " + yPos +
					"L" + (xPos+width) + " " + (yPos+((height)/2)) +
					"L" + (xPos+(width-4)) + " " + (yPos+height) +
					"L" + xPos + " " + (yPos+height) +
					"L" + xPos + " " + yPos + " ";
		} else {
			path = "M" + xPos + " " + yPos +
				   "L" + (xPos+width) + " " + (yPos + ((height)/2)) +
				   "L" + xPos + " " + (yPos+height) +
				   "L" + xPos + " " + yPos + " ";
		}

		return path;
	},

	drawFeatureNegativeArrow: function(xPos, yPos, width, height) {
		var sprite;
		var path;
		var returnSTring = returnSTring || false;

		if (width>4) {
			path =  "M" + xPos + " " +  (yPos+((height)/2)) +
			"L" + (xPos+4) + " " + yPos +
			"L" + (xPos+(width)) + " " + yPos +
			"L" + (xPos+(width)) + " " + (yPos+height) +
			"L" + (xPos+4) + " " + (yPos+height) +
			"L" + xPos + " " + (yPos+((height)/2)) + " ";
		} else {
			path =  "M" + xPos + " " +  (yPos+((height)/2)) +
			"L" + (xPos+width) + " " + yPos +
			"L" + (xPos+width) + " " + (yPos+height) +
			"L" + xPos + " " + (yPos+((height)/2)) + " ";
		}

		return path;
	},

	drawFeatureForwardRect: function(pX, pY, pWidth, pHeight) {
		return  " M " + (pX) + " " + (pY) +
				" L " + (pX) + " " + (pY + pHeight) +
				" L " + (pX + pWidth) + " " + (pY + pHeight) +
				" S " + (pX + pWidth + 4) + " " + (pY + pHeight / 2) + " " + (pX + pWidth) + " " + (pY) +
				" L " + (pX) + " " + (pY);
	},

	drawFeatureForwardArrow: function(pX, pY, pWidth, pHeight){
		return  " M " + (pX) + " " + (pY) +
				" L " + (pX + pWidth - 8) + " " + (pY) +
				" L " + (pX + pWidth) + " " + (pY + pHeight / 2) +
				" L " + (pX + pWidth - 8) + " " + (pY + pHeight) +
				" L " + (pX) + " " + (pY + pHeight) +
				" S " + (pX + 4) + " " + (pY + pHeight / 2) + " " + (pX) + " " + pY;
	},

	drawFeatureBackwardRect: function(pX, pY, pWidth, pHeight){
		return  " M " + (pX) + " " + (pY) +
				" S " + (pX - 4) + " " + (pY + pHeight / 2) + " " + (pX) + " " + (pY + pHeight) +
				" L " + (pX + pWidth) + " " + (pY + pHeight) +
				" L " + (pX + pWidth) + " " + (pY) +
				" L " + (pX) + " " + (pY);
	},

	drawFeatureBackwardArrow: function(pX, pY, pWidth, pHeight){
		return  " M " + (pX + 8) + " " + (pY) +
				" L " + (pX + pWidth) + " " + (pY) +
				" S " + (pX + pWidth - 4) + " " + (pY + pHeight / 2) + " " + (pX + pWidth) + " " + (pY + pHeight) +
				" L " + (pX + 8) + " " + (pY + pHeight) +
				" L " + (pX) + " " + (pY + pHeight / 2) +
				" L " + (pX + 8) + " " + (pY);
		
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

	getFeatureOffset: function(railContainer, featureIndex) {
		var alignIndex = railContainer.featAlignMap[featureIndex];
		return this.getOffsetFromRail(alignIndex);
	},

	getOffsetFromRail: function(alignIndex) {
		return 3 * this.DEFAULT_FEATURES_GAP
				+ alignIndex * (this.DEFAULT_FEATURE_HEIGHT + this.DEFAULT_FEATURES_GAP);
	},



};
















































})();