(function(){


function getTime(time) {
	var now = new Date().getTime();
	return (time === undefined) ? now : now - time;
}




VE.AnnotateContainer = Backbone.View.extend({

	tagName: "div",

	className: "AnnotateContainer",

	events: {
		"scroll": "onScroll",
		"mousedown .annotateSVG": "onAnnotateSvgMousedown",
		"mouseup .annotateSVG": "onAnnotateSvgMouseup",
		"mousemove .annotateSVG": "onAnnotateSvgMousemove",
	},


	CHAR_WIDTH: 9,

	ALIGNMENT_HEIGHT: 20,
	EMPTY_AA_HEIGHT: 0,
	FONT_SIZE: 12,
	FONT_FAMILY: "Ubuntu Mono",
	COMPLEMENTARY_SEQUENCE_FILL: "#b0b0b0",
	COMPLEMENTARY_VERTICAL_OFFSET: 16,
	LETTER_SPACING: "3px",

	CARET_TIMER_REFRESH_SPEED: "1s", // blink time of the caret, in seconds

	BOTTOM_PADDING: 6,

	showSpaceEvery10Bp: true,
	showComplementarySequence: true,
	showFeatures: true,

	showCutSites: false,
	showOrfs: false,
	showAlignments: false,
	showAminoAcids: false,
	showAminoAcidsRevCom: false,


	N_ROWS_TOP_BUFFER: 2,
	N_ROWS_BOT_BUFFER: 2,

	
	selectionStartBp: null,
	selectionEndBp: null,
	caretBpIndex: 0,

	phonyScrollContainer: null,


	initialize: function(elements) {
		var me = this;
		// this.listenTo(this.model, "change", this.render);

		for(var x in elements) {
			this[x] = elements[x];
		}

		// this.el = this.phonyScrollContainer.scrollBody.el;
		// this.$el = this.phonyScrollContainer.scrollBody.$el;
		this.setElement(this.phonyScrollContainer.scrollBody.el);

		this.listenTo(this.phonyScrollContainer, 'all', function() {
			this.trigger.apply(this, arguments);
		});

		this.ve.addObjectToEvents(this);
		this.ve.model = this.model;
		this.ve.annotateContainer = this;

		this.calculateLogLength();

		this.annotateSVG = d3.select(this.el)
			.append("svg:svg")
			.attr("class", "annotateSVG");

		this.linesSVG = this.annotateSVG.append("svg:g")
			.attr("class", "linesSVG");

		this.sequenceSVG = this.annotateSVG.append("svg:g")
			.attr("class", "sequenceSVG");

		this.bpLabelsSVG = this.annotateSVG.append("svg:g")
			.attr("class", "bpLabelsSVG");

		this.aminoAcidsSVG = this.annotateSVG.append("svg:g")
			.attr("class", "aminoAcidsSVG");

		this.alignmentsSVG = this.annotateSVG.append("svg:g")
			.attr("class", "alignmentsSVG");

		this.queryGapSVG = this.annotateSVG.append("svg:g")
			.attr("class", "queryGapSVG");

		this.featuresSVG = this.annotateSVG.append("svg:g")
			.attr("class", "featuresSVG");


		this.orfsSVG = this.annotateSVG.append("svg:g")
			.attr("class", "orfsSVG");

		this.cutSitesSVG = this.annotateSVG.append("svg:g")
			.attr("class", "cutSitesSVG");


		this.selectionLayerSVG = this.annotateSVG.append("svg:g")
			.attr("class", "selectionLayerSVG");
		// this.cutSitesSVG = VE.annotate.CutSiteRenderer.newCutSitesSVG(this.annotateSVG);

		VE.annotate.CutSiteRenderer.appendCurvyLinePattern(this.annotateSVG);

		
		this.aminoAcidFrames = this.aminoAcidFrames || [];
		this.aminoAcidRevComFrames = this.aminoAcidRevComFrames || [];
		this.orfFrames = this.orfFrames || [];
		this.orfRevComFrames = this.orfRevComFrames || [];

		// this.scrollTop = 0;
		// this.height = 0;
		this.scrollTop = this.phonyScrollContainer.getPhonyScrollTop();
		this.height = this.$el.height();


		// temporary, for testing purposes
		// this.bpPerRow = 40;
		
		this.bpPerRow = this.calculateBpPerRow();

		this.addListeners();

		this.calculateRows();


		this.initCaret();

		// this.onScroll();



		if(this.phonyScrollContainer.showPreview) {
			
			// 350 - 380

			this.phonyScrollContainer.scrollPreview.render = function() {
				// console.time('a');

				VE.annotate.PreviewRenderer.drawPreview(me.phonyScrollContainer.scrollPreview.canvas,
					me.phonyScrollContainer.scrollPreview.context, me);

				// console.timeEnd('a');
			}
			
		}

		var svgHeight = this.rows[this.rows.length-1].y+this.rows[this.rows.length-1].height;
		svgHeight += this.BOTTOM_PADDING;
		this.phonyScrollContainer.setPhonyHeight(svgHeight);

		// debugger;

	},
	

	calculateRows: function() {
		var bpPerRow = this.bpPerRow;

		var sequence = this.model.get('sequence');
		var seqLen = sequence.length;

		var n_rows = Math.ceil(seqLen / bpPerRow);

		// -----------------------------------------------------
		//  Initialize the new rows
		// -----------------------------------------------------

		// var newRows = new Array(n_rows);
		// for(var i=0;i<n_rows;i++) {
		// 	newRows[i] = {
		// 		height: null,
		// 		y: null, // position at top of row
				
		// 		// these are arrays of indices
		// 		features: [],
		// 		alignments: [],
		// 		orfs: [],
		// 		cutSites: [],
		// 	};
		// }

		var newRows = this.rows || new Array(n_rows);
		newRows.length = n_rows;

		for(var i=0;i<n_rows;i++) {
			var newRow;
			if(newRow = newRows[i]) {
				newRow.height = null;
				newRow.y = null; // position at top of row
				
				// these are arrays of indices
				newRow.features = newRow.features.length ? [] : newRow.features;
				newRow.alignments = newRow.alignments.length ? [] : newRow.alignments;
				newRow.orfs = newRow.orfs.length ? [] : newRow.orfs;
				newRow.cutSites = newRow.cutSites.length ? [] : newRow.cutSites;

				// newRow.features = [];
				// newRow.alignments = [];
				// newRow.orfs = [];
				// newRow.cutSites = [];

			} else {
				newRows[i] = {
					height: null,
					y: null, // position at top of row
					
					// these are arrays of indices
					features: [],
					alignments: [],
					orfs: [],
					cutSites: [],
				};
			}
		}


		// -----------------------------------------------------
		//  Adding the features
		// -----------------------------------------------------
		if(this.showFeatures) {
			// var features = this.model.get('features');

			// // map from feature index to alignment index
			// this.featAlignMap = VE.RendererUtil.buildAlignmentMap(features, seqLen);

			// for(var i=0;i<features.length;i++) {
			// 	var annot = features[i];
			// 	var start = annot.get('start');
			// 	var end = annot.get('end');
			// 	if(end < start) throw new Error("TODO");

			// 	var annotStartRow = this.bpToRowIndex(start);
			// 	var annotEndRow = this.bpToRowIndex(end-1);

			// 	var alignIndex = this.featAlignMap[i];
			// 	// console.log(annotStartRow, alignIndex)

			// 	for(var j=annotStartRow;j<=annotEndRow;j++) {
			// 		// putting the index rather than the feature is significantly faster
			// 		// newRows[j].features[alignIndex] = i;
			// 		if(newRows[j].features[alignIndex] === undefined) {
			// 			newRows[j].features[alignIndex] = [];
			// 		}
			// 		newRows[j].features[alignIndex].push(i);
			// 	}
			// }
			var features = this.model.get('features');

			// map from feature index to alignment index
			this.featAlignMap = VE.RendererUtil.buildAlignmentMap(features, seqLen);

			for(var i=0;i<features.length;i++) {
				var annot = features[i];
				var start = annot.get('start');
				var end = annot.get('end');

				var annotStartRow = this.bpToRowIndex(start);
				var annotEndRow = this.bpToRowIndex(end-1);

				var alignIndex = this.featAlignMap[i];
				// console.log(annotStartRow, alignIndex)

				if(end >= start) {
					
					for(var j=annotStartRow;j<=annotEndRow;j++) {
						// putting the index rather than the feature is significantly faster
						// newRows[j].features[alignIndex] = i;
						if(newRows[j].features[alignIndex] === undefined) {
							newRows[j].features[alignIndex] = [];
						}
						newRows[j].features[alignIndex].push(i);
					}

				} else { // feature spanning origin
				
					for(var j=0;j<=annotStartRow;j++) {
						// putting the index rather than the feature is significantly faster
						if(newRows[j].features[alignIndex] === undefined) {
							newRows[j].features[alignIndex] = [];
						}
						newRows[j].features[alignIndex].push(i);
					}

					for(var j=annotStartRow;j<n_rows;j++) {
						// putting the index rather than the feature is significantly faster
						if(newRows[j].features[alignIndex] === undefined) {
							newRows[j].features[alignIndex] = [];
						}
						newRows[j].features[alignIndex].push(i);
					}

				}
			}
		}

		// -----------------------------------------------------
		//  Adding the cut sites
		// -----------------------------------------------------
		if(this.showCutSites) {
			var sites = this.model.get('cutSites');
			this.cutSitesAlignMap = VE.RendererUtil.buildAlignmentMap(sites, seqLen);

			for(var i=0;i<sites.length;i++) {
				var annot = sites[i];
				var start = annot.get('start');
				var end = annot.get('end');
				if(end < start) throw new Error("TODO");

				var annotStartRow = this.bpToRowIndex(start);
				var annotEndRow = this.bpToRowIndex(end-1);

				var alignIndex = this.cutSitesAlignMap[i];

				for(var j=annotStartRow;j<=annotEndRow;j++) {
					newRows[j].cutSites[alignIndex] = i;
				}
			}
		}

		// -----------------------------------------------------
		//  Adding the ORFs
		// -----------------------------------------------------
		if(this.showOrfs) {
			var orfs = this.model.get('orfs');
			this.orfsAlignMap = VE.RendererUtil.buildAlignmentMap(orfs, seqLen);

			for(var i=0;i<orfs.length;i++) {
				var annot = orfs[i];
				var start = annot.get('start');
				var end = annot.get('end');
				if(end < start) throw new Error("TODO");

				var annotStartRow = this.bpToRowIndex(start);
				var annotEndRow = this.bpToRowIndex(end-1);

				var alignIndex = this.orfsAlignMap[i];

				for(var j=annotStartRow;j<=annotEndRow;j++) {
					newRows[j].orfs[alignIndex] = i;
				}
			}
		}

		// -----------------------------------------------------
		//  Adding the alignments
		// -----------------------------------------------------
		if(this.showAlignments) {
			// VE.RendererUtil.assignAlignmentRenderInfoToRows(this, newRows);

			var alignments = this.model.get('alignments');
			for(var i=0;i<alignments.length;i++) {
				var aligns = alignments[i];
				for(var j=0;j<newRows.length;j++) {
					newRows[j].alignments[i] = [];
				}
				for(var j=0;j<aligns.length;j++) {
					var align = aligns[j];

					var start = align.queryStart;
					var end = (align.type === 'queryGap') ? start : start + align.subjectSequence.length;
					if(end < start) throw new Error("TODO");

					var annotStartRow = this.bpToRowIndex(start);
					var annotEndRow = this.bpToRowIndex(end-1);

					for(var k=annotStartRow;k<=annotEndRow;k++) {
						newRows[k].alignments[i].push(j);
					}
				}
			}
		}



		// ------------------------------------------------------------
		//  Calculate the base height of each row (same for all rows)
		// ------------------------------------------------------------
		var rowBaseHeight = 20 + 3;
		if(this.showComplementarySequence) {
			rowBaseHeight += 20;
		}
		if(this.showAminoAcids) {
			rowBaseHeight += 20 * this.aminoAcidFrames.length;
		}
		if(this.showAminoAcidsRevCom){
			rowBaseHeight += 20 * this.aminoAcidRevComFrames.length;
		}

		// ------------------------------------------------------------
		//  Calculate the additional height for each row
		// ------------------------------------------------------------
		function calculateHeight(row) {
			var rowHeight = rowBaseHeight;
			rowHeight += (row.features.length > 0) ? row.features.length * (10) + 2 : 0;
			rowHeight += row.alignments.length * (20);
			rowHeight += row.orfs.length * (6);
			rowHeight += row.cutSites.length * (30);
			return rowHeight;
		}


		newRows[0].y = 0;
		newRows[0].height = calculateHeight(newRows[0]);
		for(var i=1;i<n_rows;i++) {
			newRows[i].height = calculateHeight(newRows[i]);

			newRows[i].y = newRows[i-1].y + newRows[i-1].height;
		}

		this.rows = newRows;

	},



	render: function() {
		// var start = getTime();
		// console.time('A')

		this.clean();

		// var scrollTop = this.$el.scrollTop();
		var scrollTop = this.scrollTop;
		// var height = this.$el.height();
		var height = this.height;

		var bpPerRow = this.bpPerRow;
		var charPerRow = this.getCharPerRow();
		var CHAR_WIDTH = this.CHAR_WIDTH;

		var rowIndices = this.getVisibleRowIndices();

		var sequenceX1 = this.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		// this.annotateSVG.attr("height", this.rows[this.rows.length-1].y+this.rows[this.rows.length-1].height);

		var svgHeight = this.rows[this.rows.length-1].y+this.rows[this.rows.length-1].height;
		svgHeight += this.BOTTOM_PADDING;
		this.phonyScrollContainer.setPhonyHeight(svgHeight);


		for(var i=rowIndices.top;i<=rowIndices.bottom;i++) {
			var row = this.rows[i];

			this.drawSplitLine(0, sequenceX2 + CHAR_WIDTH, row.y);

			this.renderBpLabel(i*bpPerRow + 1, 10, row.y + 20);

			this.drawBpText(i);

			if(this.showComplementarySequence) {
				this.drawRevcomBpText(i);
			}

			if(this.showFeatures) {
				VE.annotate.FeatureRenderer.drawFeatures(this, i);
			}

			if(this.showCutSites) {
				VE.annotate.CutSiteRenderer.drawCutSites(this, i);
			}

			if(this.showOrfs) {
				VE.annotate.OrfRenderer.drawOrfs(this, i);
			}

			if(this.showAlignments) {
				VE.annotate.AlignmentRenderer.drawAlignments(this, i);
			}

			if(this.showAminoAcids) {
				this.renderAA(i);
			}

			if(this.showAminoAcidsRevCom) {
				this.renderRevComAA(i);
			}

		}


		if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
			this.drawSelectionLayer(this.selectionStartBp, this.selectionEndBp);
		}


		// console.time('A')
		// this.sequenceSVG.selectAll("text")
		// 				.attr("font-family", this.FONT_FAMILY)
		// 				.attr("font-size", this.FONT_SIZE)
		// 				.attr("letter-spacing", this.LETTER_SPACING)
		// 				.style('pointer-events', 'none');

		// this.sequenceSVG.selectAll(".complementarySequenceSVG")
		// 				.attr("fill", this.COMPLEMENTARY_SEQUENCE_FILL);

		// this.sequenceSVG.selectAll(".bpLabelSVG")
		// 				.attr("xml:space", "preserve");


		this.aminoAcidsSVG.selectAll("text")
						.attr("xml:space", "preserve")
						.attr("fill", "blue")
						.attr("font-family", this.FONT_FAMILY)
						.attr("font-size", this.FONT_SIZE)
						.attr("letter-spacing", this.LETTER_SPACING);
		// console.timeEnd('A')

		// var elapsed = getTime(start);
		// console.log(elapsed);
		// console.timeEnd('A')

		// 2648.3514099783083

		// VE.annotate.PreviewRenderer.drawPreview(this.phonyScrollContainer.scrollPreview.canvas,
				// this.phonyScrollContainer.scrollPreview.context, this);
	},




	renderAA: function(rowIndex) {
		var row = this.rows[rowIndex];
		var bpPerRow = this.bpPerRow;

		var rowStartBp = rowIndex * bpPerRow;

		var leadingFrame = rowStartBp % 3;

		var frames = this.aminoAcidFrames;

		var sequenceX1 = this.getSequenceX1();
		var yOffset = this.getAminoAcidLayerOffset(row);

		for(var i=0,ii=frames.length;i<ii;i++) {
			var str = this.getRowAaStr(rowIndex, frames[i]);
			// console.log(str)
			this.aminoAcidsSVG.append("svg:text")
				.attr("class", "aminoAcidSVG")
				.attr("x", sequenceX1)
				.attr("y", row.y - this.scrollTop + yOffset - (ii - i - 1) * 20)
				.style('pointer-events', 'none')
				.text(str);
		}


	},


	getRowAaStr: function(rowIndex, frame) {
		var bpPerRow = this.bpPerRow;
		var rowStartBp = rowIndex * bpPerRow;
		var rowEndBp = (rowIndex + 1) * bpPerRow;

		var start = rowStartBp + frame;
		var len = Math.ceil((rowEndBp - start)/3) * 3;
		var end = start + len;

		var bps = this.model.getSubstring(start, end).toLowerCase();

		var aas = Bio.Translator.translateSequence(bps);

		var a = [];
		for(var i=0;i<frame;i++) {
			a.push(' ');
		}
		for(var i=0,ii=aas.length;i<ii;i++) {
			a.push(aas[i], '  ');
		}

		aas = a.join('');

		if(this.showSpaceEvery10Bp) {
			var a = [];
			for(var i=0;i<aas.length;i+=10) {
				a.push(aas.slice(i,i+10));
			}
			return a.join(' ');
		} else {
			return aas;
		}
	},



	renderRevComAA: function(rowIndex) {
		var row = this.rows[rowIndex];
		var bpPerRow = this.bpPerRow;

		var rowStartBp = rowIndex * bpPerRow;

		var leadingFrame = rowStartBp % 3;

		var frames = this.aminoAcidRevComFrames;

		var sequenceX1 = this.getSequenceX1();
		var yOffset = this.getAminoAcidRevComLayerOffset(row);

		for(var i=0,ii=frames.length;i<ii;i++) {
			
			var str = this.getRowRevcomAaStr(rowIndex, frames[i]);
			// console.log(str)


			this.aminoAcidsSVG.append("svg:text")
				.attr("class", "aminoAcidRevComSVG")
				.attr("x", sequenceX1)
				.attr("y", row.y - this.scrollTop + yOffset + (i) * 20 - 6)
				// .attr("y", row.y - this.scrollTop + yOffset)
				.style('pointer-events', 'none')
				.text(str);
		}


	},


	// incorrect
	getRowRevcomAaStr: function(rowIndex, frame) {
		var seqlen = this.model.length();
		var bpPerRow = this.bpPerRow;

		var rowStartBp = rowIndex * bpPerRow;
		var rowEndBp = (rowIndex + 1) * bpPerRow;

		var rowStartBpPrime = seqlen - rowEndBp;
		var rowEndBpPrime = seqlen - rowStartBp;

		var startPrime = rowStartBpPrime + frame;
		var len = Math.ceil((rowEndBpPrime - startPrime)/3) * 3;
		var endPrime = startPrime + len;


		var start = seqlen - endPrime;
		var end = seqlen - startPrime;

		var bps = this.model.getSubstring(start, end).toLowerCase();


		var revcomBps = [];
		for(var i=bps.length-1;i>=0;i--) {
			revcomBps.push(VE.RendererUtil.complementSymbol(bps[i]))
		}
		
		// console.log(bps)

		// var start = rowStartBp + frame;
		// var len = Math.ceil((rowEndBp - start)/3) * 3;
		// var end = start + len;


		// var bps = this.model.getSubstring(start, end).toLowerCase();

		var aas = Bio.Translator.translateSequence(revcomBps);
		// console.log(aas);


		var a = [];
		for(var i=0;i<frame;i++) {
			a.push(' ');
		}
		for(var i=0,ii=aas.length;i<ii;i++) {
			a.push(aas[i], '  ');
		}

		aas = a.join('');

		if(this.showSpaceEvery10Bp) {
			var a = [];
			for(var i=0;i<aas.length;i+=10) {
				a.push(aas.slice(i,i+10));
			}
			return a.join(' ');
		} else {
			return aas;
		}
	},



	drawBpText: function(rowIndex) {
		var row = this.rows[rowIndex];
		var rowStr = this.getRowStr(rowIndex);
		this.sequenceSVG.append("svg:text")
				.attr("class", "sequenceSVG")
				.attr("x", this.getSequenceX1())
				// .attr("y", row.y +this.getBpTextOffset(row))
				.attr("y", row.y + this.getBpTextOffset(row) - this.scrollTop)
				.text(rowStr);
	},

	drawRevcomBpText: function(rowIndex) {
		var row = this.rows[rowIndex];
		var revComStr = this.getRowRevcomStr(rowIndex);
		this.sequenceSVG.append("svg:text")
			.attr("class", "complementarySequenceSVG")
			.attr("x", this.getSequenceX1())
			// .attr("y", row.y + this.getBpTextOffset(row) + this.COMPLEMENTARY_VERTICAL_OFFSET)
			.attr("y", row.y + this.getBpTextOffset(row) + this.COMPLEMENTARY_VERTICAL_OFFSET - this.scrollTop)
			.text(revComStr);
	},



	drawSplitLine: function(x1, x2, y) {
		this.linesSVG.append("svg:line")
			.attr("x1", x1)
			// .attr("y1", y)
			.attr("y1", y - this.scrollTop)
			.attr("x2", x2)
			// .attr("y2", y)
			.attr("y2", y - this.scrollTop)
			.attr("stroke", "lightgray");
	},


	renderBpLabel: function(basePairs, labelX, labelY){
		this.sequenceSVG.append("svg:text")
			.attr("class", "bpLabelSVG")
			.attr("x", labelX)
			// .attr("y", labelY)
			.attr("y", labelY - this.scrollTop)
			.text(this.renderIndexString(basePairs));
	},

	renderIndexString: function(pIndex){
		var whiteSpaceString = "                                                ";
		var result = String(pIndex);

		// var logLength = Math.log(this.model.length() + 1)/Math.LN10;
		// logLength = Math.ceil(logLength);
		// logLength = Math.max(logLength, 4);
		var logLength = this.logLength;

		result = whiteSpaceString.slice(0, logLength - result.length) + result;

		// if(pIndex < 10){
		// 	result = "   "  + result;
		// } else if(pIndex < 100){
		// 	result = "  " + result;
		// } else if(pIndex < 1000){
		// 	result = " " + result;
		// } else if(pIndex < 10000){
		// 	result = "" + result;
		// }

		return result;
	},

	calculateLogLength: function() {
		var logLength = Math.log(this.model.length() + 1)/Math.LN10;
		logLength = Math.ceil(logLength);
		logLength = Math.max(logLength, 4);
		return this.logLength = logLength;
	},

	getBpTextOffset: function(row) {
		var offset = 20;
		if(this.showAminoAcids) {
			offset += 20 * this.aminoAcidFrames.length;
		}
		if(this.showAlignments) {
			offset += row.alignments.length * (20);
		}
		if(this.showOrfs) {
			offset += row.orfs.length * (6);
		}
		if(this.showCutSites) {
			offset += row.cutSites.length * (30);
		}
		return offset;
	},

	getFeatureLayerOffset: function(row) {
		var offset = this.getBpTextOffset(row);
		if(!this.showComplementarySequence) {
			offset -= 20;
		}
		if(this.showAminoAcidsRevCom) {
			offset += 20 * this.aminoAcidRevComFrames.length;
		}
		return offset;
	},

	getCutSiteLayerOffset: function(row) {
		return 0;
	},

	// might mean different thing than other offsets... (maybe)
	getOrfLayerOffset: function(row) {
		return row.cutSites.length * (30) + row.orfs.length * (6);
	},

	// might mean different thing than other offsets... (maybe)
	getAlignmentLayerOffset: function(row) {
		return row.cutSites.length * (30) + row.orfs.length * (6) + row.alignments.length * (20);
	},

	// might mean different thing than other offsets... (maybe)
	getAminoAcidLayerOffset: function(row) {
		return row.cutSites.length * (30) + row.orfs.length * (6) + row.alignments.length * (20) + this.aminoAcidFrames.length * 20;
	},

	getAminoAcidRevComLayerOffset: function(row) {
		var offset = this.getBpTextOffset(row);
		if(!this.showComplementarySequence) {
			offset -= 20;
		}
		offset += 40;
		return offset;
	},


	bpToRowIndex: function(bpIndex) {
		return Math.floor(bpIndex/this.bpPerRow);
	},

	bpToColIndex: function(bpIndex) {
		var colIndex = bpIndex%this.bpPerRow;
		if(this.showSpaceEvery10Bp) {
			colIndex += Math.floor(colIndex/10);
		}
		return colIndex;
	},


	getCharPerRow: function() {
		if(this.showSpaceEvery10Bp) {
			return this.bpPerRow + Math.ceil(this.bpPerRow/10) - 1;
		}
		return this.bpPerRow;
	},


	binarySearchRows: function(y) {

		// TODO: can be made faster, given that space between rows are roughly the same
		function binarySearch(searchElement) {
			'use strict';

			var minIndex = 0;
			var maxIndex = this.length - 1;
			var currentIndex;
			var currentElement;

			while (minIndex <= maxIndex) {
				currentIndex = (minIndex + maxIndex) / 2 | 0;
				currentElement = this[currentIndex].y;
				// console.log(currentElement);

				if (currentElement < searchElement) {
					minIndex = currentIndex + 1;
					if(currentIndex < this.length - 1) {
						if(searchElement < currentElement + this[currentIndex].height) {
							return currentIndex;
						}
					}
				}
				else if (currentElement > searchElement) {
					maxIndex = currentIndex - 1;
				}
				else {
					return currentIndex;
				}
			}

			// not really sure if this is correct
			return currentIndex;
		}

		var rowIndex = binarySearch.call(this.rows, y);
		return rowIndex;
	},

	getVisibleRowIndices: function(useCachedValues) {
		var rows = this.rows;
		// var scrollTop = this.el.scrollTop;
		// var height = this.$el.height();
		var scrollTop, height;
		// if(useCachedValues) {
			scrollTop = this.scrollTop;
			height = this.height;
		// } else {
		// 	scrollTop = this.el.scrollTop;
		// 	height = this.$el.height();
		// }
		
		var scrollBottom = scrollTop + height;

		var temTopRowIndex = this.binarySearchRows(scrollTop);
		var temBotRowIndex = rows.length - 1;
		for(var i=temTopRowIndex;i<rows.length;i++) {
			if(rows[i].y > scrollBottom) {
				temBotRowIndex = i;
				break;
			}
		}

		var topRowIndex = temTopRowIndex - this.N_ROWS_TOP_BUFFER;
		var botRowIndex = temBotRowIndex + this.N_ROWS_BOT_BUFFER;
		if(topRowIndex < 0) { topRowIndex = 0; }
		if(botRowIndex > rows.length - 1) { botRowIndex = rows.length - 1; }

		return {
			top: topRowIndex,
			bottom: botRowIndex
		};
	},


	getSequenceX1: function() {
		// var logLength = Math.log(this.model.length() + 1)/Math.LN10;
		// logLength = Math.ceil(logLength);
		// logLength = Math.max(logLength, 4);
		return (2 + this.logLength) * this.CHAR_WIDTH;

		// return 6 * this.CHAR_WIDTH;
	},


	getRowStr: function(rowIndex) {
		// var bpPerRow = this.bpPerRow;
		// var rowArray = this.model.get('sequence').slice(rowIndex*bpPerRow, rowIndex*bpPerRow + bpPerRow);
		// if(this.showSpaceEvery10Bp) {
		// 	var a = [];
		// 	for(var i=0;i<rowArray.length;i+=10) {
		// 		a.push(rowArray.slice(i,i+10).join(''));
		// 	}
		// 	return a.join(' ').toUpperCase();
		// } else {
		// 	return rowArray.join('').toUpperCase();
		// }

		var bpPerRow = this.bpPerRow;
		var sequence = this.model.get('sequence');
		var start = rowIndex*bpPerRow;
		var bpInRow = Math.min(start + bpPerRow, sequence.length) - start;
		var ret = "";

		if(this.showSpaceEvery10Bp) {
			for(var i=0;i<bpInRow;i++) {
				var j = start + i;
				if(i !== 0 && i%10 === 0) {
					ret += ' ';
				}
				ret += sequence[j];
			}

		} else {
			for(var i=0;i<bpInRow;i++) {
				ret += sequence[start + i];
			}

		}
		ret = ret.toUpperCase();
		
		return ret;
	},

	getRowRevcomStr: function(rowIndex) {
		var str = this.getRowStr(rowIndex);
		return VE.RendererUtil.complement(str).toUpperCase();
	},


	clean: function() {
		this.linesSVG.selectAll('*').remove();
		this.sequenceSVG.selectAll('*').remove();
		this.bpLabelsSVG.selectAll('*').remove();
		this.aminoAcidsSVG.selectAll('*').remove();
		this.alignmentsSVG.selectAll('*').remove();
		this.featuresSVG.selectAll('*').remove();

		this.orfsSVG.selectAll('*').remove();
		this.cutSitesSVG.selectAll('*').remove();

		// this.selectionLayerSVG.selectAll('*').remove();
		this.queryGapSVG.selectAll('*').remove();
	},

	initCaret: function() {
		var sequenceX1 = this.getSequenceX1();
		var row = this.rows[0];
		var y1 = row.y + this.getBpTextOffset(row) - this.FONT_SIZE;
		var caretHeight = this.showComplementarySequence ? 2*this.FONT_SIZE + 8: this.FONT_SIZE + 8;

		this.caret = this.annotateSVG.append("svg:line")
			.attr("class", "annotateCaret")
			.attr("x1", -1)
			.attr("y1", 0)
			.attr("x2", -1)
			.attr("y2", caretHeight);

		var x = sequenceX1;
		var y = row.y + this.getBpTextOffset(row) - this.FONT_SIZE;
		this.caret.attr('transform', 'translate(' + x + ',' + y + ')');

		this.caret.append("svg:animate")
			.attr("attributeName", "visibility")
			.attr("from", "hidden")
			.attr("to", "visible")
			.attr("dur", this.CARET_TIMER_REFRESH_SPEED)
			.attr("repeatCount", "indefinite")
			.style("pointer-events", "none");

	},


	addListeners: function() {
		this.on(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, this.onShowCutSitesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ORFS_CHANGED, this.onShowOrfsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_COMPLEMENTARY_CHANGED, this.onShowComplementaryChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ALIGNMENTS_CHANGED, this.onShowAlignmentsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_SPACES_CHANGED, this.onShowSpacesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_FEATURES_CHANGED, this.onShowFeaturesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_SEQUENCE_AA_CHANGED, this.onShowSequenceAAChanged, this);

		this.on(VE.SelectionEvent.CHANGE_CARET_POSITION, this.onChangeCaretPosition, this);
		this.on(VE.SelectionEvent.SELECT, this.onSelect, this);
		this.on(VE.SelectionEvent.DESELECT, this.onDeselect, this);

		this.on(VE.Event.NEW_SEQUENCE_OPENED, this.onNewSequenceOpened, this);

		this.on(VE.EditingEvent.CLIENT_OPERATION, this.onClientOperation, this);

		this.on('scrollTo', this.onScrollTo);

	},


	onClientOperation: function(sequenceOperation) {
		this.calculateRows();
		this.render();
	},


	onNewSequenceOpened: function(sequenceModel) {
		this.model = sequenceModel;

		var logLength = Math.log(this.model.length() + 1)/Math.LN10;
		logLength = Math.ceil(logLength);
		logLength = Math.max(logLength, 4);
		this.logLength = logLength;
		
		this.bpPerRow = this.calculateBpPerRow();

		this.calculateRows();
		this.render();
	},


	onShowSequenceAAChanged: function(showAminoAcids, aminoAcidFrames) {
		this.showAminoAcids = showAminoAcids;
		this.aminoAcidFrames = aminoAcidFrames;
		this.calculateRows();
		this.render()
	},

	onShowFeaturesChanged: function(showFeatures) {
		if(showFeatures === this.showFeatures) { return; }
		this.showFeatures = showFeatures;
		this.calculateRows();
		this.render()
	},

	onShowSpacesChanged: function(showSpaceEvery10Bp) {
		if(showSpaceEvery10Bp === this.showSpaceEvery10Bp) { return; }
		this.showSpaceEvery10Bp = showSpaceEvery10Bp;
		this.calculateRows();
		this.render()
	},

	onShowAlignmentsChanged: function(showAlignments) {
		if(showAlignments === this.showAlignments) { return; }
		this.showAlignments = showAlignments;
		this.calculateRows();
		this.render();
	},
	
	onShowCutSitesChanged: function(showCutSites) {
		if(showCutSites === this.showCutSites) { return; }
		this.showCutSites = showCutSites;
		this.calculateRows();
		this.render();
	},

	onShowOrfsChanged: function(showOrfs, orfFrames, orfRevComFrames) {
		// if(showOrfs === this.showOrfs) { return; }
		this.showOrfs = showOrfs;
		this.orfFrames = orfFrames;
		this.orfRevComFrames = orfRevComFrames;
		this.calculateRows();
		this.render();
	},

	onShowComplementaryChanged: function(showComplementarySequence) {
		if(showComplementarySequence === this.showComplementarySequence) { return; }
		this.showComplementarySequence = showComplementarySequence;
		this.caret.attr("y2", this.showComplementarySequence ? 2*this.FONT_SIZE + 8: this.FONT_SIZE + 4);
		this.calculateRows();
		this.render();
	},

	onScroll: function() {
		this.scrollTop = this.el.scrollTop;
		this.height = this.$el.height();
		this.render();
	},



	onScrollTo: function(scrollPercent) {
		var scrollTop = this.phonyScrollContainer.getPhonyScrollTop();
		var deltaScrollTop = scrollTop - this.scrollTop;

		this.scrollTop = scrollTop;
		this.height = this.$el.height();

		this.render();

		var caretNode = this.caret.node();
		var caretTransform = caretNode.getTransformToElement(this.annotateSVG.node());

		caretTransform = caretTransform.translate(0, -deltaScrollTop);
		this.caret.attr('transform', 'translate(' + caretTransform.e + ',' + caretTransform.f + ')');
	},




	onAnnotateSvgMousedown: function(evt) {
		if(evt.button === 2) {
			evt.preventDefault();
			// this.onRightMouseDown(evt);
		} else {
			// this.startSelectionIndex = this.bpAtPoint(evt.offsetX, evt.offsetY);
			this.startSelectionIndex = this.bpAtPoint(evt.offsetX, evt.offsetY + this.scrollTop);
			this.mouseIsDown = true;
			this.selectionDirection = 0;
			this.ve.trigger(VE.SelectionEvent.DESELECT);
			this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.startSelectionIndex);
		}
	},


	bpAtPoint: function(offsetX, offsetY) {
		var rowIndex = this.binarySearchRows(offsetY);
		// var rowIndex = this.binarySearchRows(offsetY + this.scrollTop);
		var bp = rowIndex * this.bpPerRow;

		var charPerRow = this.getCharPerRow();

		var sequenceX1 = this.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * this.CHAR_WIDTH;
		if(offsetX < sequenceX1) {

		} else if(offsetX > sequenceX2) {
			bp += this.bpPerRow;

		} else {
			var x = offsetX - sequenceX1;
			var chars = Math.floor(x / this.CHAR_WIDTH);
			if(this.showSpaceEvery10Bp) {
				chars -= Math.floor((chars - 1) / 10);
			}
			bp += chars;
		}
		return bp;
	},


	onAnnotateSvgMousemove: function(evt) {
		if(evt.button === 2) {
			evt.preventDefault();
			return;
		}

		var start, end;
		if(this.mouseIsDown) {
			var x = evt.offsetX, y = evt.offsetY;
			var seqlen = this.model.get('sequence').length;
			// if(evt.target !== this.annotateSVG.node()) {
			// 	var attr = evt.target.attributes;
			// 	var attrX, attrY;
			// 	var xform = evt.target.getTransformToElement(this.annotateSVG.node());
			// 	// if(attrX = attr.x) { x += Number(attrX.value) + xform.e; }
			// 	// if(attrY = attr.y) { y += Number(attrY.value) + xform.f; }
			// 	if(attr.x) {
			// 		var _x = Number(attr.x.value) || 0;
			// 		var _y = Number(attr.y.value) || 0;
			// 		var _x_ = xform.a * _x + xform.c * _y + xform.e;
			// 		var _y_ = xform.b * _x + xform.d * _y + xform.f;
			// 		x += _x_;
			// 		y += _y_;
			// 	}
			// 	// console.log(evt.target)
			// }
			
			// var bpIndex = this.bpAtPoint(x, y);
			var bpIndex = this.bpAtPoint(x, y + this.scrollTop);
			var endSelectionIndex = bpIndex;
		
			if(this.startSelectionIndex < endSelectionIndex) {
				start = this.startSelectionIndex;
				end = endSelectionIndex;
			} else {
				end = this.startSelectionIndex;
				start = endSelectionIndex;
			}

			this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, endSelectionIndex);
			this.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);

		}

	},


	onAnnotateSvgMouseup: function(evt) {
		this.mouseIsDown = false;

		// More to put here...

	},




	onChangeCaretPosition: function(bpIndex) {
		var sequenceX1 = this.getSequenceX1();
		var rowIndex = this.bpToRowIndex(bpIndex);
		var row = this.rows[rowIndex];
		var colIndex = this.bpToColIndex(bpIndex);

		var x = sequenceX1 + colIndex * this.CHAR_WIDTH;
		// var y = row.y + this.getBpTextOffset(row) - this.FONT_SIZE;
		var y = row.y + this.getBpTextOffset(row) - this.FONT_SIZE - this.scrollTop;
		this.caret.attr('transform', 'translate(' + x + ',' + y + ')');

		this.caretBpIndex = bpIndex;

		this.scrollToBp(bpIndex);
		// this.caret.style('visibility', 'visible');
	},

	scrollToBp: function(bpIndex) {
		var rowIndex = this.bpToRowIndex(bpIndex);
		var row = this.rows[rowIndex];

		var scrollTop = this.scrollTop;
		var height = this.height;

		var rowIndices = this.getVisibleRowIndices();

		if(rowIndex >= rowIndices.top && rowIndex <= rowIndices.bottom) {
			return;

		} else if(rowIndex < rowIndices.top) {
			// this.el.scrollTop = row.y;
			this.phonyScrollContainer.setPhonyScrollTop(row.y);

		} else {
			// this.el.scrollTop = Math.max(0, row.y + row.height - height);
			this.phonyScrollContainer.setPhonyScrollTop(Math.max(0, row.y + row.height - height));

		}
	},


	calculateBpPerRow: function() {
		var width = $(this.annotateSVG.node()).width();
		var effectiveWidth = width - this.getSequenceX1();

		var chunkSize = 10 * this.CHAR_WIDTH;
		if(this.showSpaceEvery10Bp) {
			chunkSize += this.CHAR_WIDTH;
		}

		var bpPerRow = 10 * Math.floor(effectiveWidth/chunkSize);
		return bpPerRow;
	},

	

	cleanSelectionLayer: function() {
		this.selectionLayerSVG.selectAll('*').remove();
	},

	onSelect: function(startBp, endBp) {
		this.selectionStartBp = startBp;
		this.selectionEndBp = endBp;

		this.drawSelectionLayer(this.selectionStartBp, this.selectionEndBp);
	},

	drawSelectionLayer: function(startBp, endBp) {
		this.cleanSelectionLayer();

		var SelectionLayerRenderer = VE.annotate.SelectionLayerRenderer;

		var scrollTop = this.scrollTop;
		var height = this.height;

		var bpPerRow = this.bpPerRow;
		var charPerRow = this.getCharPerRow();
		var CHAR_WIDTH = this.CHAR_WIDTH;

		var rowIndices = this.getVisibleRowIndices();

		var sequenceX1 = this.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		var startRow = this.bpToRowIndex(startBp);
		var startCol = this.bpToColIndex(startBp);
		var endRow = this.bpToRowIndex(endBp);
		var endCol = this.bpToColIndex(endBp);

		var rowStartBp = startBp%bpPerRow;
		var rowEndBp = (endBp)%bpPerRow;
		if(this.showSpaceEvery10Bp) {
			rowStartBp += Math.floor(rowStartBp/10);
			rowEndBp += Math.floor(rowEndBp/10);
		}
		var rowStartPx = sequenceX1 + rowStartBp * CHAR_WIDTH;
		var rowEndPx = sequenceX1 + rowEndBp * CHAR_WIDTH;

		var g = this.selectionLayerSVG;
		var slHeight = this.showComplementarySequence ? 2*this.FONT_SIZE + 8 : this.FONT_SIZE + 4;

		// Not sure about inclusivity vs exclusivity.
		if(startBp <= endBp) {
			for(var i=rowIndices.top;i<=rowIndices.bottom;i++) {
				var row = this.rows[i];
				// var slY = row.y + this.getBpTextOffset(row) - this.FONT_SIZE;
				var slY = row.y + this.getBpTextOffset(row) - this.FONT_SIZE - this.scrollTop;

				if(i === startRow && i === endRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, rowStartPx, slY, rowEndPx-rowStartPx, slHeight);

				} else if(i === startRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, rowStartPx, slY, sequenceX2-rowStartPx, slHeight);

				} else if(i === endRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, sequenceX1, slY, rowEndBp * CHAR_WIDTH, slHeight);

				} else if(i > startRow && i < endRow) {
					var slWidth = charPerRow * CHAR_WIDTH;
					SelectionLayerRenderer.drawSelectionLayerRect(g, sequenceX1, slY, slWidth, slHeight);

				}
			}

		} else {
			
			for(var i=rowIndices.top;i<=rowIndices.bottom;i++) {
				var row = this.rows[i];

				var slY = row.y + this.getBpTextOffset(row) - this.FONT_SIZE - this.scrollTop;

				if(i === startRow && i === endRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, sequenceX1, slY, rowEndBp * CHAR_WIDTH, slHeight);
					SelectionLayerRenderer.drawSelectionLayerRect(g, rowStartPx, slY, sequenceX2-rowStartPx, slHeight);

				} else if(i === startRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, rowStartPx, slY, sequenceX2-rowStartPx, slHeight);

				} else if(i === endRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, sequenceX1, slY, rowEndBp * CHAR_WIDTH, slHeight);

				} else if(i < endRow || i > startRow) {
					var slWidth = charPerRow * CHAR_WIDTH;
					SelectionLayerRenderer.drawSelectionLayerRect(g, sequenceX1, slY, slWidth, slHeight);

				}

			}
		}

		
	},


	onDeselect: function() {
		this.selectionStartBp = null;
		this.selectionEndBp = null;
		this.cleanSelectionLayer();
	},


	


});























































})();