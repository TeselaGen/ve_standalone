(function(){

if(typeof VE.annotate !== 'object') { VE.annotate = {}; }





VE.annotate.PreviewRenderer = {

	BP_FONT: '12px Ubuntu Mono',


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


	CODON_SHIFT: -6,
	ORF_COLOR: ["#FF0000", "#31B440", "#3366CC"],
	ORF_STROKE_WIDTH: 2,


	drawPreview: function(canvas, context, annotateContainer) {
		var sequence = annotateContainer.model;
		var rows = annotateContainer.rows;

		var CHAR_WIDTH = annotateContainer.CHAR_WIDTH;
		var bpPerRow = annotateContainer.bpPerRow;
		var charPerRow = annotateContainer.getCharPerRow();

		var sequenceX1 = annotateContainer.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		context.font = this.BP_FONT;

		var showFeatures = annotateContainer.showFeatures;
		var showComplementarySequence = annotateContainer.showComplementarySequence;
		var showOrfs = annotateContainer.showOrfs;


		for(var i=0,ii=rows.length;i<ii;i++) {
			var row = rows[i];

			var rowStr = annotateContainer.getRowStr(i);
			// console.log(rowStr);

			var x = sequenceX1;
			var y = row.y + annotateContainer.getBpTextOffset(row);

			context.fillStyle = '#000000';
			context.strokeStyle = '#000000';

			for(var j=0,jj=rowStr.length;j<jj;j++) {
				var _x = x + j * (CHAR_WIDTH);
				var bp = rowStr[j];

				// context.strokeText(bp, _x, y);
				context.fillText(bp, _x, y);
			}

			if(showComplementarySequence) {
				this.drawRevcomBpText(context, annotateContainer, i);
			}

			this.drawSplitLine(context, 0, sequenceX2 + CHAR_WIDTH, row.y);

			this.renderBpLabel(context, annotateContainer, i*bpPerRow + 1, 10, row.y + 20);



			if(showFeatures) {
				this.drawFeatures(canvas, context, annotateContainer, i);
			}

			if(showOrfs) {
				this.drawOrfs(canvas, context, annotateContainer, i);
			}
			

		}

		// debugger;
		





	},


	renderBpLabel: function(context, annotateContainer, basePairs, labelX, labelY){
		var CHAR_WIDTH = annotateContainer.CHAR_WIDTH;

		var str = annotateContainer.renderIndexString(basePairs);

		context.fillStyle = '#000000';
		context.strokeStyle = '#000000';

		for(var j=0,jj=str.length;j<jj;j++) {
			var _x = labelX + j * (CHAR_WIDTH);
			var ch = str[j];

			// context.strokeText(ch, _x, labelY);
			context.fillText(ch, _x, labelY);
		}
	},



	drawRevcomBpText: function(context, annotateContainer, rowIndex) {
		var CHAR_WIDTH = annotateContainer.CHAR_WIDTH;
		var row = annotateContainer.rows[rowIndex];
		var revComStr = annotateContainer.getRowRevcomStr(rowIndex);
		var x = annotateContainer.getSequenceX1();
		var y = row.y + annotateContainer.getBpTextOffset(row) + annotateContainer.COMPLEMENTARY_VERTICAL_OFFSET;

		context.fillStyle = '#b0b0b0';
		context.strokeStyle = '#b0b0b0';

		for(var j=0,jj=revComStr.length;j<jj;j++) {
			var _x = x + j * (CHAR_WIDTH);
			var bp = revComStr[j];

			// context.strokeText(bp, _x, y);
			context.fillText(bp, _x, y);
		}
	},



	drawSplitLine: function(context, x1, x2, y) {
		context.strokeStyle = 'lightgray';

		context.beginPath();
		context.moveTo(x1, y);
		context.lineTo(x2, y);
		context.stroke();
		context.closePath();
	},


	drawFeatures: function(canvas, context, annotatePanel, rowIndex) {

		var rows = annotatePanel.rows;
		var features = annotatePanel.model.get('features');

		var height = annotatePanel.height;
		
		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		
		var row = rows[rowIndex];

		// var g = annotatePanel.featuresSVG;
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
				var featY = row.y + offset + j * 10 + 2;
				var featHeight = this.DEFAULT_FEATURE_HEIGHT;
				

				if(end >= start) {
					
					context.fillStyle = VE.annotate.FeatureRenderer.colorByType(feat.get('type').toLowerCase());

					if(rowIndex === featStartRow && rowIndex === featEndRow) {
						// probably needs some todo
						var featWidth = (rowEndBp - rowStartBp + 1) * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardSingleBP(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardRect(context, rowStartPx, featY, featWidth, featHeight);
						}

					} else if(rowIndex === featStartRow) {
						var featWidth = (charPerRow - rowStartBp) * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardRect(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardArrow(context, rowStartPx, featY, featWidth, featHeight);
						}
						
					} else if(rowIndex === featEndRow) {
						var featWidth = rowEndBp * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardArrow(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardRect(context, sequenceX1, featY, featWidth, featHeight);
						}
						
					} else {
						var featWidth = charPerRow * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardRect(context, sequenceX1, featY, featWidth, featHeight);
						}

					}


				} else {
					context.fillStyle = VE.annotate.FeatureRenderer.colorByType(feat.get('type').toLowerCase());

					if(rowIndex === featStartRow) {
						var featWidth = (charPerRow - rowStartBp) * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardRect(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardArrow(context, rowStartPx, featY, featWidth, featHeight);
						}

					} else if(rowIndex === featEndRow) {
						var featWidth = rowEndBp * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardArrow(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardRect(context, sequenceX1, featY, featWidth, featHeight);
						}

					} else if(rowIndex < featEndRow || rowIndex > featStartRow) {
						var featWidth = charPerRow * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardRect(context, sequenceX1, featY, featWidth, featHeight);
						}

					}

				}
					
			}

		}

	},


	drawFeatureRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;
		pGraphics.fillRect(pX, pY, pWidth, pHeight);
	},

	drawFeatureForwardRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		pGraphics.quadraticCurveTo((pX + 3), (pY + pHeight / 2), (pX), (pY + pHeight));
		// pGraphics.lineTo((pX), (pY + pHeight));
		pGraphics.lineTo(pX + pWidth, pY + pHeight);
		pGraphics.lineTo(pX + pWidth, pY)
		pGraphics.lineTo(pX, pY);
		pGraphics.fill();
		pGraphics.closePath();
	},

	drawFeatureBackwardRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		pGraphics.lineTo(pX, pY + pHeight);
		pGraphics.lineTo(pX + pWidth, pY + pHeight);
		pGraphics.quadraticCurveTo((pX + pWidth - 3), (pY + pHeight / 2), (pX + pWidth), (pY));
		// pGraphics.lineTo((pX + pWidth), (pY));
		pGraphics.lineTo(pX, pY);
		pGraphics.fill();
		pGraphics.closePath();
	},

	drawFeatureForwardArrow: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		pGraphics.lineTo((pX + pWidth - 8), (pY));
		pGraphics.lineTo((pX + pWidth), (pY + pHeight / 2));
		pGraphics.lineTo((pX + pWidth - 8), (pY + pHeight));
		pGraphics.lineTo((pX), (pY + pHeight));
		pGraphics.quadraticCurveTo((pX + 3), (pY + pHeight / 2), (pX), pY);
		// pGraphics.lineTo(pX, pY);
		pGraphics.fill();
		pGraphics.closePath();
	},

	drawFeatureBackwardArrow: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		pGraphics.lineTo((pX + pWidth), (pY));
		pGraphics.quadraticCurveTo((pX + pWidth - 3), (pY + pHeight / 2), (pX + pWidth), (pY + pHeight));
		// pGraphics.lineTo((pX + pWidth), (pY + pHeight));
		pGraphics.lineTo((pX + 8), (pY + pHeight));
		pGraphics.lineTo((pX), (pY + pHeight / 2));
		pGraphics.lineTo((pX + 8), (pY));
		pGraphics.fill();
		pGraphics.closePath();
	},

	drawFeatureForwardSingleBP: function(pGraphics, pX, pY, pWidth, pHeight) {
		pY += this.ALL_ADDITIONAL_Y;
		pX -= this.SINGLE_BP_FEATURE_ADDITIONAL_X;
		pWidth += this.SINGLE_BP_FEATURE_ADDITIONAL_WIDTH;
		
		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		pGraphics.lineTo((pX + pWidth - 8), (pY));
		pGraphics.lineTo((pX + pWidth), (pY + pHeight / 2));
		pGraphics.lineTo((pX + pWidth - 8), (pY + pHeight));
		pGraphics.lineTo((pX), (pY + pHeight));
		pGraphics.lineTo((pX), pY);
		pGraphics.fill();
		pGraphics.closePath();
							
	},

	drawFeatureBackwardSingleBP: function(pGraphics, pX, pY, pWidth, pHeight) {
		pY += this.ALL_ADDITIONAL_Y;
		pX -= this.SINGLE_BP_FEATURE_ADDITIONAL_X;
		pWidth += this.SINGLE_BP_FEATURE_ADDITIONAL_WIDTH;
		pHeight += this.SINGLE_BP_FEATURE_ADDITIONAL_HEIGHT;


		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		

		pGraphics.lineTo((pX + pWidth), (pY));
		pGraphics.lineTo((pX + pWidth), (pY + pHeight));
		pGraphics.lineTo((pX), (pY + pHeight / 2));


		pGraphics.fill();
		pGraphics.closePath();

		// return pGraphics.append("svg:path")
		// 		 .attr("d", " M " + (pX) + " " + (pY + pHeight / 2) +
		// 			   (pX + pWidth) + " " + (pY)
		// 			   (pX + pWidth) + " " + (pY + pHeight)
		// 			   (pX) + " " + (pY + pHeight / 2)
	},




	drawOrfs: function(canvas, context, annotatePanel, rowIndex) {

		var rows = annotatePanel.rows;
		var orfs = annotatePanel.model.get('orfs');

		var height = annotatePanel.height;

		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		
		var row = rows[rowIndex];
		// var g = annotatePanel.orfsSVG;
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
			var orfY = row.y + offset - upShift;
			
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



			context.strokeStyle = color;
			context.fillStyle = color;
			context.lineWidth = this.ORF_STROKE_WIDTH;

			context.beginPath();
			context.moveTo(orfX1, orfY);
			context.lineTo(orfX2, orfY);
			context.stroke();
			context.closePath();




			if(rowIndex === endRow && strand === 1) {
				var codonEndPointX1 = rowEndPx + CHAR_WIDTH;
				var codonEndPointY1 = orfY;

				// draw arrow ends
				context.beginPath();
				context.moveTo(codonEndPointX1 - 10, codonEndPointY1 - 4);
				context.lineTo(codonEndPointX1, codonEndPointY1);
				context.lineTo((codonEndPointX1 - 10), (codonEndPointY1 + 4));
				context.lineTo((codonEndPointX1 - 10), (codonEndPointY1 - 4));
				context.fill();
				context.closePath();

			}

			if(rowIndex === startRow && strand === -1) {
				var codonEndPointX2 = rowStartPx - CHAR_WIDTH;
				var codonEndPointY2 = orfY;

				// draw arrow ends
				context.beginPath();
				context.moveTo(codonEndPointX2, codonEndPointY2);

				context.lineTo((codonEndPointX2 + 10), (codonEndPointY2 - 4));
				context.lineTo((codonEndPointX2 + 10), (codonEndPointY2 + 4));
				context.lineTo(codonEndPointX2, codonEndPointY2);

				context.fill();
				context.closePath();
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

				var cx = codonPx + CHAR_WIDTH + this.CODON_SHIFT;
				var cy = orfY;
				var r = 3.5;

				context.beginPath();
				context.arc(cx,cy,r,0,2*Math.PI);
				context.fill();
				context.closePath();
			}


		}

	},











};





















































})();