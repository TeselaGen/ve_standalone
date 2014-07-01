(function(){

if(typeof VE.rail !== 'object') { VE.rail = {}; }




VE.rail.LabelRenderer = {
	
	FONT_FAMILY: "Maven Pro",
	FONT_SIZE: "8px",

	LABEL_DISTANCE_FROM_RAIL: 3,
	LABEL_HEIGHT: 7,
	LABEL_CONNECTION_WIDTH: 0.5,
	LABEL_CONNECTION_COLOR: "#d2d2d2",



	renderLabels: function(railContainer) {
		var me = this;

		var labels = [];

		var renderedAnnotations = railContainer.renderedAnnotations;
		var seqLen = railContainer.model.length();

		for(var i=0;i<renderedAnnotations.length;i++) {
			var annotType = renderedAnnotations[i];
			this.drawLabels(railContainer, labels, annotType);
		}

		this.adjustLabelPositions(railContainer, labels);

	},

	adjustLabelPositions: function(railContainer, labels) {
		var me = this;

		var seqLen = railContainer.model.length();
		
		labels.sort(this.labelSort.bind(this));

		var rightLabels = [];
		var leftLabels = [];

		var totalNumberOfLabels = labels.length;
		for(var i = 0; i < totalNumberOfLabels; i++) {
			var label = labels[i];
			if(i < (totalNumberOfLabels/2)) {
				leftLabels.push(label);
			} else {
				rightLabels.push(label);
			}
		}

		var lastLabelYPosition = - 10; // -10 to count label height

		for(var i=0,ii=leftLabels.length;i<ii;i++) {
			var label = leftLabels[i];
			var d3Label = d3.select(label);

			var xPosition = label.center;
			var yPosition = this.LABEL_HEIGHT;

			if(yPosition < lastLabelYPosition) {
				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
				.style("text-anchor", "end");

			this.drawConnection(railContainer, label, xPosition, yPosition);
		}

		for(var i=0,ii=rightLabels.length;i<ii;i++) {
			var label = rightLabels[i];
			var d3Label = d3.select(label);

			var xPosition = label.center;
			var yPosition = this.LABEL_HEIGHT;

			if(yPosition < lastLabelYPosition) {
				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
				.style("text-anchor", "start");

			this.drawConnection(railContainer, label, xPosition, yPosition);
		}

	},


	drawConnection: function(railContainer, label, labelX, labelY) {
		var offset = Math.PI/2;

		var radius = label.radius;
		var center = label.center;

		var x = center;
		var y = radius;

		var path = "M" + labelX + " " + labelY + "L" + x + " " + y;

		railContainer.labelSVG.append("svg:path")
							.attr("stroke", this.LABEL_CONNECTION_COLOR)
							.attr("stroke-width", this.LABEL_CONNECTION_WIDTH)
							.attr("d", path);
	},


	drawLabels: function(railContainer, labels, annotationType) {
		var annots = railContainer.model.get(annotationType);
		
		// var labelDrawerFn = this.LabelDrawers[annotationType].bind(this);
		var labelDrawerFn = this.getLabelDrawerFn(annotationType);

		labelDrawerFn(railContainer, labels, annots);

	},

	getLabelDrawerFn: function(annotationType) {
		return this.LabelDrawers[annotationType].bind(this);
	},


	LabelDrawers: {

		'features': function(railContainer, labels, annotations) {
			var seqLen = railContainer.model.length();
			var railWidth = railContainer.railWidth;
			var annotLabels = railContainer.labelSVG.selectAll('text.undefined_class')
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
				annotLabels[0][i].center = this.calculateCenter(seqLen, annotLabels[0][i], railWidth);
				annotLabels[0][i].radius = VE.rail.FeatureRenderer.getFeatureOffset(railContainer, i);
				labels.push(annotLabels[0][i]);
			}
		},

		'cutSites': function(railContainer, labels, annotations) {
			var seqLen = railContainer.model.get('sequence').length;
			var seqLen = railContainer.model.length();
			var railWidth = railContainer.railWidth;
			var annotLabels = railContainer.labelSVG.selectAll('text.undefined_class')
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
				annotLabels[0][i].center = this.calculateCenter(seqLen, annotLabels[0][i], railWidth);
				// annotLabels[0][i].radius = railContainer.railRadius + 10;
				annotLabels[0][i].radius = 0;
				labels.push(annotLabels[0][i]);
			}
		},

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

	calculateCenter: function(seqLen, label, railWidth) {
		var annot = label.__data__;
		var startPos = annot.get('start') / seqLen * railWidth;
		var endPos = annot.get('end') / seqLen * railWidth;
		return startPos;
	},





};














































































})();