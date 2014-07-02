
VE.PieContainer = Backbone.View.extend({

	tagName: "div",

	className: "PieContainer",

	events: {
		'mousedown': 'onMousedown',
		'mousemove': 'onMousemove',
		'mouseup': 'onMouseup',
		'mousewheel': 'onMousewheel',
	},

	NAMEBOX_FONT_SIZE: "10px",
	NAMEBOX_FONT_WEIGHT: "bold",

	FRAME_INNER_RADIUS_OFFSET: 3,
	FRAME_OUTLINE_WIDTH: 0.5,
	FRAME_OUTLINE_COLOR: "#8F8F8F",
	FRAME_RING_COLOR: "#ffffb3", // The color of the area between the two circles.
	
	CARET_COLOR: 'black',
	CARET_WIDTH: 1,
	CARET_OVERHANG: 10,

	WIREFRAME_OFFSET: 10,

	SELECTION_THRESHOLD: 2 * Math.PI / 360,

	MIN_PIE_DISTANCE_FROM_CENTER: 35,


	showFeatures: true,
	showCutSites: false,
	showOrfs: false,
	showAlignments: false,

	showFeatureLabels: true,
	showCutSiteLabels: true,
	showAlignmentLabels: true,

	showMapCaret: true,



	startSelectionAngle: null,
	startSelectionIndex: null,
	mouseIsDown: false,
	selectionDirection: 0,

	zoomLevel: 1,
	rotation: 0,
	hidden: false,



	initialize: function(elements) {
		
		this.center = { x: 0, y: 0 };
		this.railRadius = 100;

		this.renderedAnnotations = [];

		for(var x in elements) {
			this[x] = elements[x];
		}

		this.ve.addObjectToEvents(this);
		this.ve.model = this.model;

		this.pieSVG = d3.select(this.el)
			.append("svg:svg")
			.attr("class", "pieSVG")
			// .attr("overflow", "auto")
			;
			// .on({
			// 	mousedown: this.onMousedown.bind(this),
			// 	mousemove: this.onMousemove.bind(this),
			// 	mouseup: this.onMouseup.bind(this),
			// });

		this.parentSVG = this.pieSVG.append("svg:g")
			.attr("class", "pieParent")

			// temporary, for initial test
			.attr('transform', 'scale(1.5)');

		this.cutSiteSVG = this.parentSVG.append("svg:g")
			.attr("class", "pieCutSite");

		this.featureSVG = this.parentSVG.append("svg:g")
			.attr("class", "pieFeature");

		this.alignmentSVG = this.parentSVG.append("svg:g")
			.attr("class", "pieAlignment");

		this.orfSVG = this.parentSVG.append("svg:g")
			.attr("class", "pieOrf");

		this.labelSVG = this.parentSVG.append("svg:g")
			.attr("class", "pieLabel");


		this.orfFrames = this.orfFrames || [];
		this.orfRevComFrames = this.orfRevComFrames || [];

		// this.recalculateCenter();

		this.buildAlignmentMaps();

		this.recalculatePieRadius();

		this.initPie();


		this.render();

		this.fitWidthToContent();

		this.addListeners();



		this.hidden = (this.ve.options.viewMode === 'pie') ? false : true;
		if(this.hidden) {
			this.hide();
		} else {
			this.show();
		}

		if(this.showMapCaret) {
			this.showCaret();
		} else {
			this.hideCaret();
		}

	},



	render: function() {

		this.renderedAnnotations = [];

		this.clean();

		if(this.showFeatures) {
			VE.pie.FeatureRenderer.drawFeatures(this);
			if(this.showFeatureLabels) {
				this.renderedAnnotations.push('features');
			}
		}

		if(this.showCutSites) {
			VE.pie.CutSiteRenderer.drawCutsites(this);
			if(this.showCutSiteLabels) {
				this.renderedAnnotations.push('cutSites');
			}
		}

		if(this.showOrfs) {
			VE.pie.OrfRenderer.drawOrfs(this);
		} 

		if(this.showAlignments) {
			VE.pie.AlignmentRenderer.drawAlignments(this);
		}


		VE.pie.LabelRenderer.renderLabels(this);


		// this.fitWidthToContent();
	},

	clean: function() {
		this.cutSiteSVG.selectAll('*').remove();
		this.featureSVG.selectAll('*').remove();
		this.alignmentSVG.selectAll('*').remove();
		this.orfSVG.selectAll('*').remove();
		this.labelSVG.selectAll('*').remove();
	},




	getAlignmentOffset: function() {
		if(this.showAlignments) {
			var alignments = this.model.get('alignments');
			return alignments.length * (VE.pie.AlignmentRenderer.ALIGNMENT_HEIGHT +
						VE.pie.AlignmentRenderer.DISTANCE_BETWEEN_ALIGNMENTS);
		} else {
			return 0;
		}
	},


	fitWidthToContent: function(scrollToCenter) {
		// debugger;
		// this.pieSVG.attr('height', null);
		// this.pieSVG.attr('width', null);

		var pieBox = this.pieSVG.node().getBoundingClientRect();
		var parentBox = this.parentSVG.node().getBoundingClientRect();

		
		// var width = Math.max(parentBox.width, pieBox.width);
		// var height = Math.max(parentBox.height, pieBox.height);
		var width = Math.max(parentBox.width, pieBox.width, this.$el.width());
		var height = Math.max(parentBox.height, pieBox.height,  this.$el.height());

		var transform = this.parentSVG.node().getTransformToElement(this.pieSVG.node());
		transform.e += pieBox.left - parentBox.left;
		transform.f += pieBox.top - parentBox.top;

		if(parentBox.width < pieBox.width) {
			transform.e += pieBox.width/2 - parentBox.width/2;
		}
		if(parentBox.height < pieBox.height) {
			transform.f += pieBox.height/2 - parentBox.height/2;
		}

		this.pieSVG.attr({
			// width: parentBox.width,
			// height: parentBox.height,
			width: width,
			height: height,
		});
		var a = [];
		var keys = Object.keys(this.parentSVG.node().getTransformToElement(this.pieSVG.node())).sort();
		for(var i=0;i<keys.length;i++) {
			a.push(transform[keys[i]]);
		}
		this.parentSVG.attr({
			transform: 'matrix('+a.join(',')+')',
		});
	},




	// this should be refactored out later
	buildAlignmentMaps: function() {
		var seqLen = this.model.get('sequence').length;

		if(this.showFeatures) {
			var features = this.model.get('features');
			this.featAlignMap = VE.RendererUtil.buildAlignmentMap(features, seqLen);
		}
		if(this.showCutSites) {
			var sites = this.model.get('cutSites');
			this.cutSitesAlignMap = VE.RendererUtil.buildAlignmentMap(sites, seqLen);
		}
		if(this.showOrfs) {
			var orfs = this.model.get('orfs');
			this.orfsAlignMap = VE.RendererUtil.buildAlignmentMap(orfs, seqLen);
		}

		// TODO: alignments

	},


	/**
	 * Recalculate the pie radius due to number of features.
	 */
	recalculatePieRadius: function() {
		var MIN_PIE_DISTANCE_FROM_CENTER = this.MIN_PIE_DISTANCE_FROM_CENTER;
		if(this.showFeatures) {
			var features = this.model.get('features');
			var featAlignMap = this.featAlignMap, max = Math.max;
			var maxAlignment = 0;
			for(var i=0;i<features.length;i++) {
				maxAlignment = max(maxAlignment, featAlignMap[i]);
			}

			// console.log(maxAlignment);
			var offsetFromRail = VE.pie.FeatureRenderer.getOffsetFromRail(maxAlignment);
			// console.log(offsetFromRail);
			if(this.railRadius - offsetFromRail < MIN_PIE_DISTANCE_FROM_CENTER) {
				this.resetRailRadius(offsetFromRail + MIN_PIE_DISTANCE_FROM_CENTER);
			}

		}
		
	},

	resetRailRadius: function(newRadius) {
		this.railRadius = newRadius;
		this.frame.remove();
		this.caret.remove();
		this.initFrame();
		this.initCaret();
	},



	initPie: function() {
		this.initNameBox();
		this.initFrame();
		this.initCaret();
		this.initSelectionLayer();
		this.initWireframeSelectionLayer();
	},

	initWireframeSelectionLayer: function() {
		this.wireframeSelectionLayer = this.parentSVG.append("svg:path")
			.attr({
				class: 'pieWireframe',
			})
			.style({
				visibility: 'hidden',
			});
	},

	initSelectionLayer: function() {
		this.selectionLayer = this.parentSVG.append("svg:path")
			.attr({
				class: 'pieSelection',
			})
			.style({
				visibility: 'hidden',
			});
	},


	initCaret: function() {
		this.caret = this.parentSVG.append("svg:line")
			.attr("class", "pieCaret")
			.attr("x1", this.center.x)
			.attr("y1", this.center.y)
			.attr("x2", this.center.x)
			.attr("y2", this.center.y - this.railRadius - this.CARET_OVERHANG)
			.attr("stroke", this.CARET_COLOR)
			.attr("stroke-width", this.CARET_WIDTH)
			.style("pointer-events", "none");
	},



	initNameBox: function() {
		this.nameBox = this.parentSVG.append("svg:g")
			.attr("class", "pieNameBox")
			.attr("text-anchor", "middle")
			.attr("font-size", this.NAMEBOX_FONT_SIZE)
			.attr("font-weight", this.NAMEBOX_FONT_WEIGHT)
			.style("pointer-events", "none");
		this.renderNameBoxText();
	},

	renderNameBoxText: function() {
		var name = this.model.get('name');
		var length = this.model.get('sequence').length;
		var text1, text2;
		this.nameBox.selectAll('text').remove();
		if(!name) {
			text1 = '(' + length + ' bp)';
			this.nameBox.append("svg:text")
				.text(text1)
				.attr("x", this.center.x)
				.attr("y", this.center.y);
		} else {
			text1 = name;
			text2 = '(' + length + 'bp)';

			this.nameBox.append("svg:text")
				.text(text1)
				.attr("x", this.center.x)
				.attr("y", this.center.y);

			this.nameBox.append("svg:text")
				.attr("dy", "1em")
				.text(text2)
				.attr("x", this.center.x)
				.attr("y", this.center.y);
		}
	},


	initFrame: function() {
		var center = this.center;
		var outerRadius = this.railRadius;
		var innerRadius = outerRadius - this.FRAME_INNER_RADIUS_OFFSET;
		var outerStartPoint = {x: center.x - outerRadius, y: center.y};
		var innerStartPoint = {x: center.x - innerRadius, y: center.y};

		// Draw two concentric circles using SVG paths. We use paths instead of
		// two circle sprites so that the frame only needs one sprite.

		// NOTE: It is important that the arcs be drawn in opposite directions
		// (one draws counterclockwise, the other clockwise) to ensure the 
		// fill computes properly. See the SVG documentation on fill-rule for more.
		// Basically, ExtJS doesn't let you set fill-rule, so we can only use the
		// default of "nonzero", while we would like to set it to "evenodd".
		var path = "M" + outerStartPoint.x + " " + outerStartPoint.y + 
					"A" + outerRadius + " " + outerRadius + " 0 1 1 " + 
					outerStartPoint.x + " " + (outerStartPoint.y + 0.0001) + 
					"L" + outerStartPoint.x + " " + outerStartPoint.y + 
					"M" + innerStartPoint.x + " " + innerStartPoint.y +
					"A" + innerRadius + " " + innerRadius + " 0 1 0 " +
					innerStartPoint.x + " " + (innerStartPoint.y - 0.0001);

		this.frame = this.parentSVG.append("svg:path")
			.attr("class", "pieFrame")
			.attr("stroke", this.FRAME_OUTLINE_COLOR)
			.attr("stroke-width", this.FRAME_OUTLINE_WIDTH)
			.attr("fill", this.FRAME_RING_COLOR)
			.attr("fill-rule", "evenodd")
			.attr("d", path);

	},




	// might not be correct, at least allows for testing now
	recalculateCenter: function() {
		var rect = this.pieSVG.node().getBoundingClientRect();
		this.center.x = rect.width / 2;
		this.center.y = rect.height / 2;
	},



	addListeners: function() {
		this.on(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, this.onShowCutSitesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ORFS_CHANGED, this.onShowOrfsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ALIGNMENTS_CHANGED, this.onShowAlignmentsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_FEATURES_CHANGED, this.onShowFeaturesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_FEATURE_LABELS_CHANGED, this.onShowFeatureLabelsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ALIGNMENT_LABELS_CHANGED, this.onShowAlignmentLabelsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_CUTSITE_LABELS_CHANGED, this.onShowCutSiteLabelsChanged, this);
		this.on(VE.VisibilityEvent.VIEW_MODE_CHANGED, this.onViewModeChanged, this);
		this.on(VE.VisibilityEvent.SHOW_MAP_CARET_CHANGED, this.onShowMapCaretChanged, this);

		this.on(VE.SelectionEvent.CHANGE_CARET_POSITION, this.onChangeCaretPosition, this);
		this.on(VE.SelectionEvent.SELECT, this.onSelect, this);
		this.on(VE.SelectionEvent.DESELECT, this.onDeselect, this);

		this.on(VE.Event.NEW_SEQUENCE_OPENED, this.onNewSequenceOpened, this);

		this.on(VE.EditingEvent.CLIENT_OPERATION, this.onClientOperation, this);

		$(this.featureSVG.node())
			.on('click', 'path.pie-feature', {me: this}, this.onPieFeatureClicked)
			.on('contextmenu', 'path.pie-feature', {me: this}, this.onPieFeatureContextMenu);

		$(this.pieSVG.node())
			.on('contextmenu', {me: this}, this.onPieSvgContextMenu);

	},



	onShowMapCaretChanged: function(showMapCaret) {
		if(showMapCaret === this.showMapCaret) { return; }
		this.showMapCaret = showMapCaret;
		if(showMapCaret) {
			this.showCaret();
		} else {
			this.hideCaret();
		}
	},

	hideCaret: function() {
		this.caret.style('visibility', 'hidden');
	},

	showCaret: function() {
		this.caret.style('visibility', null);
	},


	onViewModeChanged: function(viewMode) {
		
		if(viewMode === 'pie') {
			this.show();


		} else if(viewMode === 'rail') {
			this.hide();


		} else {
			console.error('Invalid view mode: "' + viewMode + '"');
		}
	},



	hide: function() {
		this.hidden = true;
		this.pieSVG.attr('display', 'none');

		this.undelegateEvents();

	},

	show: function() {
		this.hidden = false;
		this.pieSVG.attr('display', null);
		
		this.fitWidthToContent();

		this.delegateEvents();
	},


	onPieSvgContextMenu: function(evt) {
		evt.preventDefault();
		var me = evt.data.me;

		var ve = me.ve;
		var start = ve.selectionStartBp;
		var end = ve.selectionEndBp;

		if(start !== null && end !== null) {
			var clickedInSelection;

			
			var clickAngle = me.getClickAngle(evt);
			var clickBp = me.bpAtAngle(clickAngle);
			var radiusPercent = me.getRadiusPercent(evt);
			// console.log(clickBp);

			if(radiusPercent > 1) {
				clickedInSelection = false;

			} else if(end >= start) {
				if(clickBp < end && clickBp >= start) {
					clickedInSelection = true;
				} else {
					clickedInSelection = false;
				}

			} else {
				if(clickBp < end || clickBp >= start) {
					clickedInSelection = true;
				} else {
					clickedInSelection = false;
				}

			}

			if(clickedInSelection) {
				var contextMenu = new Backbone.UI.menu.ContextMenu({
					posX: evt.clientX,
					posY: evt.clientY,
					items: [
						{
							label: 'New Annotation',
							on: {
								click: function(evt) {
									// console.log(evt);
									var featureInspectionWindow = new VE.FeatureInspectionWindow({
										title: 'New Annotation',
										startBp: start,
										endBp: end,
										name: 'New Feature',
									});
									featureInspectionWindow.show();

									featureInspectionWindow.on('ok-click', function() {
										var feat = featureInspectionWindow.createModel();
										var isValid = feat.validate(me.model);
										if(isValid) {
											var op = VE.EditingManager.generateAddFeatureOp(me.model, feat);
											me.model.applyClientOperation(op);
											me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);
										}

									});

									contextMenu.remove();
								},
							},
						},
					],
				});
				contextMenu.show();
			}

		}

	},


	onPieFeatureContextMenu: function(evt) {
		evt.preventDefault();
		evt.stopPropagation();

		var me = evt.data.me;
		var feat = this.__data__;

		var start = feat.get('start');
		var end = feat.get('end');

		me.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, end);
		me.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);

		var contextMenu = new Backbone.UI.menu.ContextMenu({
			posX: evt.clientX,
			posY: evt.clientY,
			items: [
				{
					label: 'Edit Annotation',
					on: {
						click: function(evt) {
							// console.log(evt);
							var featureInspectionWindow = new VE.FeatureInspectionWindow({
								title: 'Edit Annotation',
								startBp: start,
								endBp: end,
								name: feat.get('name'),
								strand: feat.get('strand'),
								type: feat.get('type'),
							});
							featureInspectionWindow.show();

							featureInspectionWindow.on('ok-click', function() {
								var newFeat = featureInspectionWindow.createModel();
								var isValid = newFeat.validate(me.model);
								if(isValid) {
									var op = VE.EditingManager.generateEditFeatureOp(me.model, feat, newFeat);
									me.model.applyClientOperation(op);
									me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);
								}

							});

							contextMenu.remove();
						},
					},
				},
				{
					label: 'Delete Annotation',
					on: {
						click: function(evt) {
							var op = VE.EditingManager.generateDeleteFeatureOp(me.model, feat);
							me.model.applyClientOperation(op);
							me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

							contextMenu.remove();
						},
					}
				},
			],
		});
		contextMenu.show();
	},





	onPieFeatureClicked: function(evt) {
		var me = evt.data.me;
		var feat = this.__data__;

		var start = feat.get('start');
		var end = feat.get('end');

		me.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, end);
		me.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);
	},


	onClientOperation: function(sequenceOperation) {
		this.buildAlignmentMaps();
		this.recalculatePieRadius();
		this.renderNameBoxText();
		this.render();
		this.fitWidthToContent();
	},


	onNewSequenceOpened: function(sequenceModel) {
		this.model = sequenceModel;
		this.buildAlignmentMaps();
		this.recalculatePieRadius();
		this.renderNameBoxText();
		this.render();
		this.fitWidthToContent();
	},


	onShowAlignmentLabelsChanged: function(showAlignmentLabels) {
		if(showAlignmentLabels === this.showAlignmentLabels) { return; }
		this.showAlignmentLabels = showAlignmentLabels;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowCutSiteLabelsChanged: function(showCutSiteLabels) {
		if(showCutSiteLabels === this.showCutSiteLabels) { return; }
		this.showCutSiteLabels = showCutSiteLabels;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowFeatureLabelsChanged: function(showFeatureLabels) {
		if(showFeatureLabels === this.showFeatureLabels) { return; }
		this.showFeatureLabels = showFeatureLabels;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowFeaturesChanged: function(showFeatures) {
		if(showFeatures === this.showFeatures) { return; }
		this.showFeatures = showFeatures;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowCutSitesChanged: function(showCutSites) {
		if(showCutSites === this.showCutSites) { return; }
		this.showCutSites = showCutSites;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowOrfsChanged: function(showOrfs, orfFrames, orfRevComFrames) {
		// if(showOrfs === this.showOrfs) { return; }
		this.showOrfs = showOrfs;
		this.orfFrames = orfFrames;
		this.orfRevComFrames = orfRevComFrames;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},
	
	onShowAlignmentsChanged: function(showAlignments) {
		if(showAlignments === this.showAlignments) { return; }
		this.showAlignments = showAlignments;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onChangeCaretPosition: function(bpIndex) {
		// console.log('moo')
		var angle = bpIndex * 2 * Math.PI / this.model.get('sequence').length;
		this.setCaretAngle(angle);
	},

	setCaretAngle: function(angle) {
		angle += this.rotation;
		this.caret.attr('transform', 'rotate(' + (angle * 180/Math.PI) +
			',' + (this.center.x) + ',' + (this.center.y) + ')');
	},


	onSelect: function(startBp, endBp) {
		
		// More draw wireframe to another event...
		this.drawWireframeSelectionLayer(startBp, endBp);

		this.drawSelectionLayer(startBp, endBp);
	},

	drawSelectionLayer: function(fromIndex, endIndex) {
		var seqLen = this.model.get('sequence').length;
		var path = VE.pie.SelectionLayerRenderer.generatePathD(fromIndex, endIndex, this.railRadius,
				this.center, seqLen);

		this.selectionLayer.attr('d', path)
			.style('visibility', 'visible');
	},

	drawWireframeSelectionLayer: function(fromIndex, endIndex) {
		var seqLen = this.model.get('sequence').length;
		var path = VE.pie.SelectionLayerRenderer.generatePathD(fromIndex, endIndex,
				this.railRadius + this.WIREFRAME_OFFSET, this.center, seqLen);
		this.wireframeSelectionLayer.attr('d', path)
			.style('visibility', 'visible');
	},

	onDeselect: function() {
		this.selectionLayer.style('visibility', 'hidden');
		this.wireframeSelectionLayer.style('visibility', 'hidden');
	},

	
	onMousedown: function(evt) {
		// console.log(evt);
		if(evt.button === 2) {
			evt.preventDefault();
			this.onRightMouseDown(evt);
		} else {
			this.startSelectionAngle = this.getClickAngle(evt);
			this.startSelectionIndex = this.bpAtAngle(this.startSelectionAngle);
			this.mouseIsDown = true;
			this.selectionDirection = 0;
			this.ve.trigger(VE.SelectionEvent.DESELECT);
			this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.startSelectionIndex);
		}
	},

	onMousemove: function(evt) {
		if(evt.button === 2) {
			evt.preventDefault();
			return;
		}

		var endSelectionAngle = this.getClickAngle(evt);
		var start, end;

		if(this.mouseIsDown && Math.abs(this.startSelectionAngle - endSelectionAngle) > this.SELECTION_THRESHOLD) {			
			var endSelectionIndex = this.bpAtAngle(endSelectionAngle);

			// Set the direction of selection if it has not yet been determined.
			if(this.selectionDirection == 0) {
				if(this.startSelectionAngle < Math.PI) {
					this.selectionDirection = -1;
					if(endSelectionAngle >= this.startSelectionAngle &&
							endSelectionAngle <= (this.startSelectionAngle + Math.PI)) {
						this.selectionDirection = 1;
					}
				} else {
					this.selectionDirection = 1;
					if(endSelectionAngle <= this.startSelectionAngle &&
							endSelectionAngle >= (this.startSelectionAngle - Math.PI)) {
						this.selectionDirection = -1;
					}
				}
			}

			if(this.selectionDirection == -1) {
				start = endSelectionIndex;
				end = this.startSelectionIndex;
			} else {
				start = this.startSelectionIndex;
				end = endSelectionIndex;
			}

			// this.setCaretAngle(endSelectionAngle);
			this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, endSelectionIndex);
			
			if(evt.ctrlKey) {
				this.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);

			} else {
				this.ve.trigger(VE.SelectionEvent.SELECT, start, end, true);

			}
		}
	},


	onMouseup: function(evt) {
		this.mouseIsDown = false;

		// More to put here...

		this.wireframeSelectionLayer.style('visibility', 'hidden');


	},


	onRightMouseDown: function(evt) {
		// console.warn('TODO');
		// console.log(evt.offsetX, evt.offsetY)
	},



	onMousewheel: function(evt) {
		if(evt.ctrlKey) {
			evt.preventDefault();

			var wheelDelta = evt.originalEvent.wheelDelta;
			wheelDelta /= 120;

			wheelDelta = Math.exp(wheelDelta / 24);
			// console.log(wheelDelta);

			var newZoom = this.zoomLevel * wheelDelta;

			var bb = this.el.getBoundingClientRect();
			var clientX = evt.clientX - bb.left;
			var clientY = evt.clientY - bb.top;

			var angle = this.getClickAngle(evt);
			var r = this.getRadiusPercent(evt);

			var positionParams = {
				clientX: clientX,
				clientY: clientY,
				angle: angle,
				radiusPercent: r,
			};

			this.zoom(newZoom, positionParams);
			// this.zoom(newZoom);


		} else if(evt.altKey) {
			evt.preventDefault();


			var wheelDelta = evt.originalEvent.wheelDelta;
			wheelDelta /= 120;
			// wheelDelta = Math.exp(wheelDelta / 24);
			wheelDelta *= Math.PI / 180;

			var newRotate = this.rotation + wheelDelta;
			this.rotateTo(newRotate);



		}



	},


	rotateTo: function(newRotate) {
		this.rotation = newRotate;
		this.rotation %= (2* Math.PI);

		var transformStr = 'rotate(' + (this.rotation * 180 / Math.PI) + ',' + this.center.x + ',' + this.center.y + ')';
		this.parentSVG.selectAll('g.pieParent > g:not([class="pieNameBox"])')
			.transition()
			.duration(300)
			.ease('quadratic')
			.attr('transform', transformStr);

		this.wireframeSelectionLayer.attr('transform', transformStr);
		this.selectionLayer.attr('transform', transformStr);

	},






	zoom: function(newZoom, positionParams) {
		var oldZoom = this.zoomLevel;
		this.zoomLevel = newZoom;
		var newRailRadius = this.railRadius * (newZoom/oldZoom);

		this.resetRailRadius(newRailRadius);
		this.recalculatePieRadius(); // might not be needed
		this.render();
		this.fitWidthToContent();

		if(typeof positionParams === 'object') {
			var offset = Math.PI/2;
			var transform = this.parentSVG.node().getTransformToElement(this.pieSVG.node());
			// var transform = this.pieSVG.node().getTransformToElement(this.parentSVG.node());
			var clientX = positionParams.clientX;
			var clientY = positionParams.clientY;
			var angle = positionParams.angle;
			var radiusPercent = positionParams.radiusPercent;

			var center = this.center;

			var centerX = transform.a * center.x + transform.c * center.y + transform.e;
			var centerY = transform.b * center.x + transform.d * center.y + transform.f;
			

			// var centerX = transform.a * center.x + transform.e;
			// var centerY = transform.d * center.y + transform.f;

			var r = radiusPercent * this.railRadius * transform.a;

			var dX = r * Math.cos(-angle + offset);
			var dY = - r * Math.sin(-angle + offset);

			var absX = centerX + dX;
			var absY = centerY + dY;

			// var absX = dX + transform.e;
			// var absY = dY + transform.f;

			// var scrollLeft = absX + clientX;
			// var scrollTop = absY + clientY;

			var scrollLeft = absX - clientX;
			var scrollTop = absY - clientY;

			// var scrollLeft = absX;
			// var scrollTop = absY;

			// console.log(scrollLeft, scrollTop)
			// console.log(centerX, centerY)
			// console.log(absX, absY);
			// console.log(dX, dY);

			// debugger;

			this.el.scrollTop = scrollTop;
			this.el.scrollLeft = scrollLeft;

		}
	},


	getClickAngle: function(evt) {
		var transform = this.parentSVG.node().getTransformToElement(this.pieSVG.node());
		var offsetX = evt.offsetX;
		var offsetY = evt.offsetY;

		var relX = offsetX - transform.e -
			this.center.x * transform.a;// + scrolled.left;

		var relY = offsetY - transform.f -
			this.center.y * transform.d;// + scrolled.top;

		var angle = Math.atan(relY / relX) + Math.PI / 2;
		if(relX < 0) {
			angle += Math.PI;
		}

		angle -= this.rotation;
		angle += 2* Math.PI;
		angle = angle % (2* Math.PI);

		return angle;
	},

	getRadiusPercent: function(evt) {
		var transform = this.parentSVG.node().getTransformToElement(this.pieSVG.node());
		var offsetX = evt.offsetX;
		var offsetY = evt.offsetY;

		var relX = offsetX - transform.e - this.center.x;// + scrolled.left;
		var relY = offsetY - transform.f - this.center.y;// + scrolled.top;
		relX /= transform.a;
		relY /= transform.d;

		var r = Math.sqrt(relX * relX + relY * relY);
		r /= this.railRadius;

		return r;
	},


	bpAtAngle: function(angle) {
		return Math.floor(angle * this.model.get('sequence').length/ (2 * Math.PI));
	},

});































