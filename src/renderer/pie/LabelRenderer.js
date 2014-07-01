
if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.LabelRenderer = {

	FONT_FAMILY: "Maven Pro",
	FONT_SIZE: "8px",
	LABEL_DISTANCE_FROM_RAIL: 35,
	LABEL_HEIGHT: 10,
	LABEL_CONNECTION_WIDTH: 0.5,
	LABEL_CONNECTION_COLOR: "#d2d2d2",

	MIN_INLINE_FEATURE_LABEL_PADDING: 5,

	options: {
		LABEL_STYLE: 1, // 0: normal, 1: 'inline' feature labels
	},

	renderLabels: function(pieContainer) {
		var me = this;

		var labels = [];

		var renderedAnnotations = pieContainer.renderedAnnotations;
		var seqLen = pieContainer.model.get('sequence').length;

		for(var i=0;i<renderedAnnotations.length;i++) {
			var annotType = renderedAnnotations[i];
			this.drawLabels(pieContainer, labels, annotType);
		}

		this.adjustLabelPositions(pieContainer, labels);

	},

	adjustLabelPositions: function(pieContainer, labels) {
		var me = this;
		var offset = Math.PI/2;

		var pieCenter = pieContainer.center;
		var seqLen = pieContainer.model.get('sequence').length;
		
		labels.sort(this.labelSort.bind(this));
		// labels = d3.selectAll(labels);

		var rightTopLabels = [];
		var rightBottomLabels = [];
		var leftTopLabels = [];
		var leftBottomLabels = [];
		
		var totalLength = 2 * Math.PI;
		for(var i = 0; i < labels.length; i++) {
			var label = labels[i];
			
			// var labelCenter = label.center;
			// var labelCenter = (label.center + Math.PI/2) % (2 * Math.PI);
			// var labelCenter = (-label.center + offset + 16 * Math.PI) % (2 * Math.PI);
			var labelCenter = (label.center + 4*offset) % (2 * Math.PI);
			
			var angle = -label.center + offset;
			var x = Math.cos(angle);
			var y = Math.sin(angle);


			if(x > 0) {
				if(y > 0) {
					rightTopLabels.push(label);
				} else {
					rightBottomLabels.push(label);
				}
			} else {
				if(y > 0) {
					leftTopLabels.push(label);
				} else {
					leftBottomLabels.push(label);
				}
			}
		}
		
		var labelRadius = pieContainer.railRadius + this.LABEL_DISTANCE_FROM_RAIL;


		if(pieContainer.showOrfs) {
			console.error('TODO: adjust labelRadius');
		}
		if(pieContainer.showAlignments) {
			console.error('TODO: adjust labelRadius');
		}
		

		// Scale Right Top Labels
		var lastLabelYPosition = - 15; // -15 to count label height
		var numberOfRightTopLabels = rightTopLabels.length;

		for(var i = numberOfRightTopLabels - 1; i >= 0; i--) {
			var label = rightTopLabels[i];
			var d3Label = d3.select(label);
			
			var angle = label.center - offset;

			var xPosition = Math.cos(angle) * labelRadius;
			var yPosition = Math.sin(angle) * labelRadius;

			if(yPosition < lastLabelYPosition) {
				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
				.style("text-anchor", "start");
			this.drawConnection(pieContainer, label, xPosition, yPosition);
			
		}

		// Scale Right Bottom Labels
		lastLabelYPosition = 0;
		var numberOfRightBottomLabels = rightBottomLabels.length;

		for(var j = 0; j < numberOfRightBottomLabels; j++) {
			var label = rightBottomLabels[j];
			var d3Label = d3.select(label);

			// var angle = -label.center + offset;
			var angle = label.center - offset;

			var xPosition = Math.cos(angle) * labelRadius;
			var yPosition = Math.sin(angle) * labelRadius;

			if(yPosition > lastLabelYPosition) {
				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
				.style("text-anchor", "start");

			this.drawConnection(pieContainer, label, xPosition, yPosition);
			
		}

		// Scale Left Top Labels
		lastLabelYPosition = - 15; // -15 to count label totalHeight
		var numberOfLeftTopLabels = leftTopLabels.length;

		for(var k = 0; k < numberOfLeftTopLabels; k++) {
			var label = leftTopLabels[k];
			var d3Label = d3.select(label);

			// var angle = -label.center + offset;
			var angle = label.center - offset;

			var xPosition = Math.cos(angle) * labelRadius;
			var yPosition = Math.sin(angle) * labelRadius;

			if(yPosition < lastLabelYPosition) {
				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
					   .style("text-anchor", "end");

			this.drawConnection(pieContainer, label, xPosition, yPosition);
		
		}

		// Scale Left Bottom Labels
		lastLabelYPosition = 0;
		var numberOfLeftBottomLabels = leftBottomLabels.length;

		for(var l = numberOfLeftBottomLabels - 1; l >= 0; l--) {
			var label = leftBottomLabels[l];
			var d3Label = d3.select(label);

			// var angle = -label.center + offset;
			var angle = label.center - offset;

			var xPosition = Math.cos(angle) * labelRadius;
			var yPosition = Math.sin(angle) * labelRadius;

			if(yPosition > lastLabelYPosition) {
				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
					   .style("text-anchor", "end");

			this.drawConnection(pieContainer, label, xPosition, yPosition);
		
		}


		// debugger;

	},


	drawConnection: function(pieContainer, label, labelX, labelY) {
		var offset = Math.PI/2;

		var radius = label.radius;
		var angle = label.center;

		var x = radius * Math.cos(-angle + offset) + pieContainer.center.x;
		var y = -radius * Math.sin(-angle + offset) + pieContainer.center.y;


		var path = "M" + labelX + " " + labelY + "L" + x + " " + y;

		pieContainer.labelSVG.append("svg:path")
							.attr("stroke", this.LABEL_CONNECTION_COLOR)
							.attr("stroke-width", this.LABEL_CONNECTION_WIDTH)
							.attr("d", path);
	},


	drawLabels: function(pieContainer, labels, annotationType) {
		var annots = pieContainer.model.get(annotationType);
		
		// var labelDrawerFn = this.LabelDrawers[annotationType].bind(this);
		var labelDrawerFn = this.getLabelDrawerFn(annotationType);

		labelDrawerFn(pieContainer, labels, annots);

	},

	getLabelDrawerFn: function(annotationType) {
		var LABEL_STYLE = this.options.LABEL_STYLE;
		if(LABEL_STYLE === 0) { // normal
			return this.LabelDrawers[annotationType].bind(this);
		} else if(LABEL_STYLE === 1) { // draw 'inline' feature labels
			if(annotationType === 'features') {
				return this.LabelDrawers['features_1'].bind(this);
			} else {
				return this.LabelDrawers[annotationType].bind(this);
			}
		}

	},


	LabelDrawers: {

		'features': function(pieContainer, labels, annotations) {
			var seqLen = pieContainer.model.get('sequence').length;
			var annotLabels = pieContainer.labelSVG.selectAll('text.undefined_class')
				.data(annotations)
				.enter().append('svg:text')
				.attr({
					fill: "#333234",
					'font-family': this.FONT_FAMILY,
					'font-size': this.FONT_SIZE,
				})
				.text(function(annot) {
					return annot.get('name').trim() || "";
				});

			for(var i=0;i<annotLabels[0].length;i++) {
				annotLabels[0][i].center = this.calculateCenter(seqLen, annotLabels[0][i]);
				annotLabels[0][i].radius = VE.pie.FeatureRenderer.getFeatureRadius(pieContainer, i);
				labels.push(annotLabels[0][i]);
			}
			// labels.push(annotLabels);
		},

		'cutSites': function(pieContainer, labels, annotations) {
			var seqLen = pieContainer.model.get('sequence').length;
			var annotLabels = pieContainer.labelSVG.selectAll('text.undefined_class')
				.data(annotations)
				.enter().append('svg:text')
				.attr({
					fill: function(annot) {
						return (annot.get('numCuts') == 1) ? "#E57676" : "#888888";
					},
					'font-family': this.FONT_FAMILY,
					'font-size': this.FONT_SIZE,
				})
				.text(function(annot) {
					return annot.get('restrictionEnzyme').get('name').trim() || "";
				});

			for(var i=0;i<annotLabels[0].length;i++) {
				annotLabels[0][i].center = this.calculateCenter(seqLen, annotLabels[0][i]);
				annotLabels[0][i].radius = pieContainer.railRadius + 10;
				labels.push(annotLabels[0][i]);
			}
			// labels.push(annotLabels);
		},
		



		'features_1': function(pieContainer, labels, annotations) {
			var PI = Math.PI;
			var PI_2 = 2 * PI;
			var MIN_INLINE_FEATURE_LABEL_PADDING = this.MIN_INLINE_FEATURE_LABEL_PADDING;
			var FeatureRenderer = VE.pie.FeatureRenderer;
			var RendererUtil = VE.RendererUtil;
			var cid = pieContainer.cid;
			var seqLen = pieContainer.model.get('sequence').length;

			function getLabelText(annot) {
				return annot.get('name').trim() || "";
			}

			function getPathId(radius) {
				return cid + '-feature-label-path-' + radius;
			}

			function createPathRadius(radius) {
				var d = [], largeArcFlag = 1, sweepFlag = 1, x, y, offset = Math.PI/2;
				d.push('M', '0', -radius);
				x = 0; y = radius;
				d.push('A', radius, radius, 0, largeArcFlag, sweepFlag, x, y);
				x = 0; y = -radius;
				d.push('A', radius, radius, 0, largeArcFlag, sweepFlag, x, y);
				d = d.join(' ');

				var path = pieContainer.labelSVG.append('svg:path')
					.attr('d', d)
					.attr('id', getPathId(radius))
					.style('display', 'none');
				return path;
			}

			var paths = {};

			function getPath(radius) {
				if(!paths[radius]) {
					return paths[radius] = createPathRadius(radius);
				}
				return paths[radius];
			}

			// var fontSize = FeatureRenderer.DEFAULT_FEATURE_HEIGHT - 2;
			// var fontSize = this.FONT_SIZE;
			var fontSize = 8;
			var charWidth = fontSize / 2;
			var ARC_THRESHOLD = FeatureRenderer.ARC_THRESHOLD;
			var floor = Math.floor;

			var textEl = pieContainer.labelSVG.append('svg:text')
				.attr('class', 'pie-feature-label');

			for(var i=0,ii=annotations.length;i<ii;i++) {
				var annot = annotations[i];
				var strand = annot.get('strand');
				var radius = FeatureRenderer.getFeatureRadius(pieContainer, i);
				var angles = RendererUtil.calculateAngles(annot, seqLen);

				var path = getPath(radius);
				var pathId = getPathId(radius);
				var labelText = getLabelText(annot);

				var textPath = textEl.append('svg:textPath')
					.attr('class', 'pie-feature-label')
					.attr('xlink:href', '#'+pathId)
					.style('font-size', fontSize);


				var startAngle = angles[0];
				var endAngle = angles[1];
				var centerAngle = (startAngle + endAngle) / 2;

				var annotLength = (endAngle - startAngle) * radius;

				textPath.attr('startOffset', (100 * centerAngle / PI_2) + '%')
					.style('text-anchor', 'middle');

				if(strand === -1) {
					centerAngle += ARC_THRESHOLD / radius;

				} else {
					centerAngle -= ARC_THRESHOLD / radius;
				}

				var effectiveAnnotLength = annotLength - 2 * MIN_INLINE_FEATURE_LABEL_PADDING;
				effectiveAnnotLength -= ARC_THRESHOLD;


				var textLength = labelText.length * charWidth;
				if(textLength > effectiveAnnotLength) {
					var maxChars = floor(effectiveAnnotLength / charWidth);
					if(maxChars > 3) {
						labelText = labelText.slice(0, maxChars - 3) + '...';
						textPath.text(labelText);
					}
				} else {
					textPath.text(labelText);
				}
			}


		},




	},
	


	calculateCenter: function(seqLen, label) {
		var annot = label.__data__;
		var angle1 = annot.get('start') * 2 * Math.PI / seqLen;
		var angle2 = annot.get('end') * 2 * Math.PI / seqLen;
		if(angle1 > angle2) {
			angle2 += 2 * Math.PI;
		}
		return (angle1 + angle2) / 2;
		// return ((angle1 + angle2) / 2) % (2 * Math.PI);
	},

	labelSort: function(label1, label2) {
		// label1.center = this.calculateCenter(seqLen, label1);
		// label2.center = this.calculateCenter(seqLen, label2);
		if(label1.center > label2.center) {
			return 1;
		} else if(label1.center < label2.center) {
			return -1;
		} else  {
			return 0;
		}
	},




	







};

























































