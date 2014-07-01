
if(typeof VE.annotate !== 'object') {
	VE.annotate = {};
}

VE.annotate.FeatureRenderer = {
	
	DEFAULT_FEATURE_HEIGHT: 6,
	DEFAULT_FEATURES_SEQUENCE_GAP: 6,
	DEFAULT_FEATURES_GAP: 2,

	ADDITIONAL_ROW_WIDTH: 5,
	ADDITIONAL_ROW_START_X: 2,
	BACKWARD_RECT_ADDITIONAL_ROW_LEFT: 1,

	ALL_ADDITIONAL_Y: 20,

	SINGLE_BP_FEATURE_ADDITIONAL_HEIGHT: 3,
	SINGLE_BP_FEATURE_ADDITIONAL_WIDTH: 2,
	SINGLE_BP_FEATURE_ADDITIONAL_X: 2,


	drawFeatures: function(annotatePanel, rowIndex) {

		var rows = annotatePanel.rows;
		var features = annotatePanel.model.get('features');

		// var scrollTop = annotatePanel.$el.scrollTop();
		// var scrollTop = annotatePanel.el.scrollTop;
		var scrollTop = annotatePanel.scrollTop;
		// var height = annotatePanel.$el.height();
		var height = annotatePanel.height;
		
		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		
		var row = rows[rowIndex];

		var g = annotatePanel.featuresSVG;
		for(var j=0;j<row.features.length;j++) {
			
			var featsInRow = row.features[j];
			if(featsInRow === undefined) { continue; }
			
			for(var k=0,kk=featsInRow.length;k<kk;k++) {
				var featIndex = featsInRow[k];
				var feat = features[featIndex];
				var strand = feat.get('strand');
				var start = feat.get('start');
				var end = feat.get('end');
				// if(end < start) throw new Error("TODO");
				var featStartRow = Math.floor(start/bpPerRow);
				var featEndRow = Math.floor((end-1)/bpPerRow);

				var rowStartBp = start%bpPerRow;
				var rowEndBp = (end-1)%bpPerRow;

				if(annotatePanel.showSpaceEvery10Bp) {
					rowStartBp += Math.floor(rowStartBp/10);
					rowEndBp += Math.floor(rowEndBp/10);
				}

				var rowStartPx = sequenceX1 + rowStartBp * CHAR_WIDTH;
				var rowEndPx = sequenceX1 + rowEndBp * CHAR_WIDTH;

				var offset = annotatePanel.getFeatureLayerOffset(row);
				// var featY = row.y + offset + j * 10 + 2;
				var featY = row.y + offset + j * 10 + 2 - scrollTop;
				var featHeight = this.DEFAULT_FEATURE_HEIGHT;
				

				if(end >= start) {
					var featSvg;

					if(rowIndex === featStartRow && rowIndex === featEndRow) {
						// probably needs some todo
						var featWidth = (rowEndBp - rowStartBp + 1) * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardSingleBP(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardRect(g, rowStartPx, featY, featWidth, featHeight);
						}

					} else if(rowIndex === featStartRow) {
						var featWidth = (charPerRow - rowStartBp) * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardRect(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardArrow(g, rowStartPx, featY, featWidth, featHeight);
						}
						
					} else if(rowIndex === featEndRow) {
						var featWidth = rowEndBp * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardArrow(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardRect(g, sequenceX1, featY, featWidth, featHeight);
						}
						
					} else {
						var featWidth = charPerRow * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardRect(g, sequenceX1, featY, featWidth, featHeight);
						}

					}

					featSvg.attr('fill', this.colorByType(feat.get('type').toLowerCase()));


				} else {

					var featSvg;
					if(rowIndex === featStartRow) {
						var featWidth = (charPerRow - rowStartBp) * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardRect(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardArrow(g, rowStartPx, featY, featWidth, featHeight);
						}
						featSvg.attr('fill', this.colorByType(feat.get('type').toLowerCase()));

					} else if(rowIndex === featEndRow) {
						var featWidth = rowEndBp * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardArrow(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardRect(g, sequenceX1, featY, featWidth, featHeight);
						}
						featSvg.attr('fill', this.colorByType(feat.get('type').toLowerCase()));

					} else if(rowIndex < featEndRow || rowIndex > featStartRow) {
						var featWidth = charPerRow * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardRect(g, sequenceX1, featY, featWidth, featHeight);
						}
						featSvg.attr('fill', this.colorByType(feat.get('type').toLowerCase()));

					}

				}
					
			}

		}

	},



	drawFeatureRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		return pGraphics.append("svg:rect")
			.attr("x", pX)
			.attr("y", pY)
			.attr("stroke", this.featureColor)
			.attr("width", pWidth)
			.attr("height", 6);
	},

	drawFeatureForwardRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		return pGraphics.append("svg:path")
			.attr("d", " M " + (pX) + " " + (pY) +
					   " S " + (pX + 3) + " " + (pY + pHeight / 2) + " " + (pX) + " " + (pY + pHeight) +
					   " L " + (pX + pWidth) + " " + (pY + pHeight) +
					   " L " + (pX + pWidth) + " " + (pY) +
					   " L " + (pX) + " " + (pY));
	},

	drawFeatureBackwardRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		return pGraphics.append("svg:path")
			.attr("d", " M " + (pX) + " " + (pY) +
					   " L " + (pX) + " " + (pY + pHeight) +
					   " L " + (pX + pWidth) + " " + (pY + pHeight) +
					   " S " + (pX + pWidth - 3) + " " + (pY + pHeight / 2) + " " + (pX + pWidth) + " " + (pY) +
					   " L " + (pX) + " " + (pY));
	},

	drawFeatureForwardArrow: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		if(pWidth ){
			return pGraphics.append("svg:path")
				.attr("d", " M " + (pX) + " " + (pY) +
						   " L " + (pX + pWidth - 8) + " " + (pY) +
						   " L " + (pX + pWidth) + " " + (pY + pHeight / 2) +
						   " L " + (pX + pWidth - 8) + " " + (pY + pHeight) +
						   " L " + (pX) + " " + (pY + pHeight) +
						   " S " + (pX + 3) + " " + (pY + pHeight / 2) + " " + (pX) + " " + pY);
		} else{
			return pGraphics.append("svg:path")
				.attr("d", " M " + (pX) + " " + (pY) +
						   " L " + (pX + pWidth) + " " + (pY + pHeight / 2) +
						   " L " + (pX) + " " + (pY + pHeight) +
						   " L " + (pX) + " " + (pY));
		}
	},

	drawFeatureForwardSingleBP: function(pGraphics, pX, pY, pWidth, pHeight) {
		pY += this.ALL_ADDITIONAL_Y;
		pX -= this.SINGLE_BP_FEATURE_ADDITIONAL_X;
		pWidth += this.SINGLE_BP_FEATURE_ADDITIONAL_WIDTH;
		// pHeight += this.SINGLE_BP_FEATURE_ADDITIONAL_HEIGHT;

		// return pGraphics.append("svg:path")
		// 		 .attr("d", " M " + (pX) + " " + (pY) +
		// 					" L " + (pX + pWidth) + " " + (pY + pHeight / 2) +
		// 					" L " + (pX) + " " + (pY + pHeight) +
		// 					" L " + (pX) + " " + (pY));
		return pGraphics.append("svg:path")
				.attr("d", " M " + (pX) + " " + (pY) +
						   " L " + (pX + pWidth - 8) + " " + (pY) +
						   " L " + (pX + pWidth) + " " + (pY + pHeight / 2) +
						   " L " + (pX + pWidth - 8) + " " + (pY + pHeight) +
						   " L " + (pX) + " " + (pY + pHeight) +
						   // " S " + (pX + 3) + " " + (pY + pHeight / 2) + " " + (pX) + " " + pY)
						   " L " + (pX) + " " + pY)
							;
	},

	drawFeatureBackwardArrow: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		if(pWidth){
			return pGraphics.append("svg:path")
				.attr("d", " M " + (pX + 8) + " " + (pY) +
						   " L " + (pX + pWidth) + " " + (pY) +
						   " S " + (pX + pWidth - 3) + " " + (pY + pHeight / 2) + " " + (pX + pWidth) + " " + (pY + pHeight) +
						   " L " + (pX + 8) + " " + (pY + pHeight) +
						   " L " + (pX) + " " + (pY + pHeight / 2) +
						   " L " + (pX + 8) + " " + (pY));
		} else{
			return pGraphics.append("svg:path")
				.attr("d", " M " + (pX) + " " + (pY + pHeight / 2) +
						   " L " + (pX + pWidth) + " " + (pY) +
						   " L " + (pX + pWidth) + " " + (pY + pHeight) +
						   " L " + (pX) + " " + (pY + pHeight / 2));
		}
	},

	drawFeatureBackwardSingleBP: function(pGraphics, pX, pY, pWidth, pHeight) {
		pY += this.ALL_ADDITIONAL_Y;
		pX -= this.SINGLE_BP_FEATURE_ADDITIONAL_X;
		pWidth += this.SINGLE_BP_FEATURE_ADDITIONAL_WIDTH;
		pHeight += this.SINGLE_BP_FEATURE_ADDITIONAL_HEIGHT;

		return pGraphics.append("svg:path")
				 .attr("d", " M " + (pX) + " " + (pY + pHeight / 2) +
					   " L " + (pX + pWidth) + " " + (pY) +
					   " L " + (pX + pWidth) + " " + (pY + pHeight) +
					   " L " + (pX) + " " + (pY + pHeight / 2));
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






};
































