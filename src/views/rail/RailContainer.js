(function(){


VE.RailContainer = Backbone.View.extend({

	// tagName: "div",

	// className: "RailContainer",

	events: {
		'mousedown': 'onMousedown',
		'mousemove': 'onMousemove',
		'mouseup': 'onMouseup',
		'mousewheel': 'onMousewheel',
	},

	
	RAIL_PAD: 100,

	FRAME_RECT_REFERENCE: {x: 0, y: 0},
	FRAME_RECT_HEIGHT: 3,
	FRAME_RECT_GAP: 3,
	FRAME_OUTLINE_WIDTH: 0.5,
	FRAME_OUTLINE_COLOR: "#dddddd",
	FRAME_RING_COLOR: "#ffffb3", // The color of the area between the two circles.

	NAMEBOX_FONT_SIZE: "10px",
	NAMEBOX_FONT_WEIGHT: "bold",

	CARET_COLOR : 'black',
	CARET_WIDTH : 1,
	CARET_HEIGHT: 7,

	SELECTION_LAYER_HEIGHT: 12,
	WIREFRAME_SELECTION_LAYER_HEIGHT: 12,


	showFeatures: true,
	showCutSites: false,
	showOrfs: false,
	showAlignments: false,

	showFeatureLabels: true,
	showCutSiteLabels: true,
	showAlignmentLabels: true,

	showMapCaret: true,



	startSelectionIndex: null,
	mouseIsDown: false,
	selectionDirection: 0,

	zoomLevel: 1,
	hidden: false,



	initialize: function(elements) {
		
		// this.railWidth = 300;
		this.railWidth = 600;
		this.center = { x: 150, y: 50 };

		for(var x in elements) {
			this[x] = elements[x];
		}

		this.ve.addObjectToEvents(this);
		this.ve.model = this.model;

		this.railSVG = d3.select(this.el)
			.append("svg:svg")
			.attr("class", "railSVG");

		this.parentSVG = this.railSVG.append("svg:g")
			.attr("class", "railParent")
			.attr("transform", "scale(1.5, 1.5)");

		this.cutSiteSVG = this.parentSVG.append("svg:g")
			.attr("class", "railCutSite");

		this.featureSVG = this.parentSVG.append("svg:g")
			.attr("class", "railFeature");

		this.alignmentSVG = this.parentSVG.append("svg:g")
			.attr("class", "railAlignment");

		this.orfSVG = this.parentSVG.append("svg:g")
			.attr("class", "railOrf");

		this.labelSVG = this.parentSVG.append("svg:g")
			.attr("class", "railLabel");


		this.orfFrames = this.orfFrames || [];
		this.orfRevComFrames = this.orfRevComFrames || [];

		this.buildAlignmentMaps();


		this.initRail();


		this.render();

		this.fitWidthToContent();


		this.addListeners();


		this.hidden = (this.ve.options.viewMode === 'rail') ? false : true;
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
			VE.rail.FeatureRenderer.drawFeatures(this);
			if(this.showFeatureLabels) {
				this.renderedAnnotations.push('features');
			}
		}

		if(this.showCutSites) {
			VE.rail.CutSiteRenderer.drawCutsites(this);
			if(this.showCutSiteLabels) {
				this.renderedAnnotations.push('cutSites');
			}
		}

		if(this.showOrfs) {
			VE.rail.OrfRenderer.drawOrfs(this);
		}

		VE.rail.LabelRenderer.renderLabels(this);

		this.adjustCenter();
	},

	adjustCenter: function() {
		var MIN_DIST = 25;

		if(this.showFeatures) {
			var features = this.model.get('features');
			var featAlignMap = this.featAlignMap, max = Math.max;
			var maxAlignment = 0;
			for(var i=0,ii=features.length;i<ii;i++) {
				maxAlignment = max(maxAlignment, featAlignMap[i]);
			}

			var offsetFromRail = VE.rail.FeatureRenderer.getOffsetFromRail(maxAlignment);
			this.center.y = offsetFromRail + MIN_DIST;
			this.renderNameBoxText();
			
		}
	},



	getAlignmentOffset: function() {
		if(this.showAlignments) {
			// var alignments = this.model.get('alignments');
			// return alignments.length * (VE.pie.AlignmentRenderer.ALIGNMENT_HEIGHT +
			// 			VE.pie.AlignmentRenderer.DISTANCE_BETWEEN_ALIGNMENTS);
			console.error('TODO');

		} else {
			return 0;
		}
	},



	initRail: function() {
		this.initFrame();
		this.initNameBox();
		this.initCaret();
		this.initSelectionLayer();
		this.initWireframeSelectionLayer();
	},

	initWireframeSelectionLayer: function() {
		this.wireframeSelectionLayer = this.parentSVG.append("svg:rect")
			.attr({
				class: 'railWireframe',
				y: -this.WIREFRAME_SELECTION_LAYER_HEIGHT / 2,
				height: this.WIREFRAME_SELECTION_LAYER_HEIGHT,
			})
			.style({
				visibility: 'hidden',
			});
	},

	initSelectionLayer: function() {
		this.selectionLayer = this.parentSVG.append("svg:rect")
			.attr({
				class: 'railSelection',
				y: -this.SELECTION_LAYER_HEIGHT / 2,
				height: this.SELECTION_LAYER_HEIGHT,
			})
			.style({
				visibility: 'hidden',
			});
	},

	initCaret: function() {
		this.caret = this.parentSVG.append("svg:line")
			.attr("class", "railCaret")
			.attr("x1", 0)
			.attr("y1", this.CARET_HEIGHT / 2)
			.attr("x2", 0)
			.attr("y2", -this.CARET_HEIGHT / 2)
			.attr("stroke", this.CARET_COLOR)
			.attr("stroke-width", this.CARET_WIDTH)
			.style("pointer-events", "none");
	},

	initNameBox: function() {
		this.nameBox = this.parentSVG.append("svg:g")
			.attr("class", "railNameBox")
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
		this.frame = this.parentSVG.append("svg:rect")
			.attr("x", 0)
			.attr("y", 0)
			.attr("width", this.railWidth)
			.attr("height", this.FRAME_RECT_HEIGHT)
			.attr("stroke", this.FRAME_OUTLINE_COLOR)
			.attr("stroke-width", this.FRAME_OUTLINE_WIDTH)
			.attr("fill", this.FRAME_RING_COLOR)
			.attr("fill-rule", "evenodd");
	},
		

	clean: function() {
		this.cutSiteSVG.selectAll('*').remove();
		this.featureSVG.selectAll('*').remove();
		this.alignmentSVG.selectAll('*').remove();
		this.orfSVG.selectAll('*').remove();
		this.labelSVG.selectAll('*').remove();
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


	fitWidthToContent: function(scrollToCenter) {
		// debugger;
		// this.railSVG.attr('height', null);
		// this.railSVG.attr('width', null);

		var railBox = this.railSVG.node().getBoundingClientRect();
		var parentBox = this.parentSVG.node().getBoundingClientRect();

		
		// var width = Math.max(parentBox.width, railBox.width);
		// var height = Math.max(parentBox.height, railBox.height);
		var width = Math.max(parentBox.width, railBox.width, this.$el.width());
		var height = Math.max(parentBox.height, railBox.height,  this.$el.height());

		// console.log(parentBox.width, railBox.width, this.$el.width());
		// console.log(parentBox.height, railBox.height,  this.$el.height());


		var transform = this.parentSVG.node().getTransformToElement(this.railSVG.node());
		transform.e += railBox.left - parentBox.left;
		transform.f += railBox.top - parentBox.top;

		if(parentBox.width < railBox.width) {
			transform.e += railBox.width/2 - parentBox.width/2;
		}
		if(parentBox.height < railBox.height) {
			transform.f += railBox.height/2 - parentBox.height/2;
		}

		this.railSVG.attr({
			// width: parentBox.width,
			// height: parentBox.height,
			width: width,
			height: height,
		});
		var a = [];
		var keys = Object.keys(this.parentSVG.node().getTransformToElement(this.railSVG.node())).sort();
		for(var i=0;i<keys.length;i++) {
			a.push(transform[keys[i]]);
		}
		this.parentSVG.attr({
			transform: 'matrix('+a.join(',')+')',
		});
	},



	addListeners: function() {
		this.on(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, this.onShowCutSitesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ORFS_CHANGED, this.onShowOrfsChanged, this);
		// this.on(VE.VisibilityEvent.SHOW_ALIGNMENTS_CHANGED, this.onShowAlignmentsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_FEATURES_CHANGED, this.onShowFeaturesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_FEATURE_LABELS_CHANGED, this.onShowFeatureLabelsChanged, this);
		// this.on(VE.VisibilityEvent.SHOW_ALIGNMENT_LABELS_CHANGED, this.onShowAlignmentLabelsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_CUTSITE_LABELS_CHANGED, this.onShowCutSiteLabelsChanged, this);
		this.on(VE.VisibilityEvent.VIEW_MODE_CHANGED, this.onViewModeChanged, this);
		this.on(VE.VisibilityEvent.SHOW_MAP_CARET_CHANGED, this.onShowMapCaretChanged, this);

		this.on(VE.SelectionEvent.CHANGE_CARET_POSITION, this.onChangeCaretPosition, this);
		this.on(VE.SelectionEvent.SELECT, this.onSelect, this);
		this.on(VE.SelectionEvent.DESELECT, this.onDeselect, this);

		this.on(VE.Event.NEW_SEQUENCE_OPENED, this.onNewSequenceOpened, this);

		this.on(VE.EditingEvent.CLIENT_OPERATION, this.onClientOperation, this);



		$(this.featureSVG.node())
			.on('click', 'path.rail-feature', {me: this}, this.onRailFeatureClicked)
			.on('contextmenu', 'path.rail-feature', {me: this}, this.onRailFeatureContextMenu)
			;

		$(this.selectionLayer.node())
			.on('contextmenu', {me: this}, this.onSelectionLayerContextMenu);

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
			this.hide();


		} else if(viewMode === 'rail') {
			this.show();


		} else {
			console.error('Invalid view mode: "' + viewMode + '"');
		}
	},



	hide: function() {
		this.hidden = true;
		this.railSVG.attr('display', 'none');

		this.undelegateEvents();

	},

	show: function() {
		this.hidden = false;
		this.railSVG.attr('display', null);

		this.fitWidthToContent();

		this.delegateEvents();

	},



	onSelectionLayerContextMenu: function(evt) {
		evt.preventDefault();
		var me = evt.data.me;

		var ve = me.ve;
		var start = ve.selectionStartBp;
		var end = ve.selectionEndBp;

		if(start !== null && end !== null) {
		
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

	

	},


	onRailFeatureContextMenu: function(evt) {
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

	onRailFeatureClicked: function(evt) {
		var me = evt.data.me;
		var feat = this.__data__;

		var start = feat.get('start');
		var end = feat.get('end');

		me.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, end);
		me.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);
	},



	onClientOperation: function(sequenceOperation) {
		this.buildAlignmentMaps();
		// this.recalculatePieRadius();
		this.renderNameBoxText();
		this.render();
		this.fitWidthToContent();
	},


	onNewSequenceOpened: function(sequenceModel) {
		this.model = sequenceModel;
		this.buildAlignmentMaps();
		// this.recalculatePieRadius();
		this.renderNameBoxText();
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

	onShowOrfsChanged: function(showOrfs, orfFrames, orfRevComFrames) {
		// if(showOrfs === this.showOrfs) { return; }
		this.showOrfs = showOrfs;
		this.orfFrames = orfFrames;
		this.orfRevComFrames = orfRevComFrames;
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


	onChangeCaretPosition: function(bpIndex) {
		// console.log('moo')
		// var angle = bpIndex * 2 * Math.PI / this.model.get('sequence').length;
		this.setCaretIndex(bpIndex);
	},

	setCaretIndex: function(bpIndex) {
		var seqLen = this.model.get('sequence').length;
		var x = bpIndex / seqLen * this.railWidth;
		this.caret.attr({
			x1: x,
			x2: x,
		});
	},

	onSelect: function(startBp, endBp) {
		
		// More draw wireframe to another event...
		this.drawWireframeSelectionLayer(startBp, endBp);

		this.drawSelectionLayer(startBp, endBp);
	},

	drawSelectionLayer: function(fromIndex, endIndex) {
		var seqLen = this.model.get('sequence').length;
		if(fromIndex > endIndex) {
			// console.error('todo');

		} else {
			var x = fromIndex / seqLen * this.railWidth;
			var width = (endIndex - fromIndex) / seqLen * this.railWidth;

			this.selectionLayer.attr('width', width)
				.attr('x', x)
				.style('visibility', 'visible');
		}
		
	},

	drawWireframeSelectionLayer: function(fromIndex, endIndex) {
		var seqLen = this.model.get('sequence').length;
		if(fromIndex > endIndex) {
			// console.error('todo');
			
		} else {
			var x = fromIndex / seqLen * this.railWidth;
			var width = (endIndex - fromIndex) / seqLen * this.railWidth;

			this.wireframeSelectionLayer.attr('width', width)
				.attr('x', x)
				.style('visibility', 'visible');
		}
	},

	onDeselect: function() {
		this.selectionLayer.style('visibility', 'hidden');
		this.wireframeSelectionLayer.style('visibility', 'hidden');
	},


	onMousedown: function(evt) {
		if(evt.button === 2) {
			evt.preventDefault();
			this.onRightMouseDown(evt);
		} else {
			var bp = this.getClickBp(evt);
			this.startSelectionIndex = bp;
			this.mouseIsDown = true;
			this.selectionDirection = 0;
			this.ve.trigger(VE.SelectionEvent.DESELECT);
			if(this.startSelectionIndex !== null) {
				this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.startSelectionIndex);
			}
		}
	},



	onMousemove: function(evt) {
		// var SELECTION_THRESHOLD = 0;
		if(evt.button === 2) {
			evt.preventDefault();
			return;
		}

		var endSelectionIndex = this.getClickBp(evt);
		var start, end;

		if(this.mouseIsDown) {			
			
			if(this.startSelectionIndex === null && endSelectionIndex !== null) {
				this.startSelectionIndex = endSelectionIndex;
				this.selectionDirection = 0;
				this.ve.trigger(VE.SelectionEvent.DESELECT);
				this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.startSelectionIndex);


			} else if(this.startSelectionIndex !== null && endSelectionIndex !== null) {
				// Set the direction of selection if it has not yet been determined.
				if(this.selectionDirection == 0) {
					if(this.startSelectionIndex <= endSelectionIndex) {
						this.selectionDirection = 1;
					} else {
						this.selectionDirection = -1;
					}
				}

				if(this.selectionDirection == -1) {
					start = endSelectionIndex;
					end = this.startSelectionIndex;
				} else {
					start = this.startSelectionIndex;
					end = endSelectionIndex;
				}

				this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, endSelectionIndex);
				
				if(evt.ctrlKey) {
					this.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);

				} else {
					this.ve.trigger(VE.SelectionEvent.SELECT, start, end, true);

				}

			}

		}
	},


	onMouseup: function(evt) {
		this.mouseIsDown = false;
		this.startSelectionIndex = null;

		// More to put here...

		// this.wireframeSelectionLayer.style('visibility', 'hidden');


	},


	onRightMouseDown: function(evt) {
		// console.warn('TODO');
		// console.log(evt.offsetX, evt.offsetY)
	},



	getClickBp: function(evt) {
		// console.log(evt);
		if(evt.target === this.el) { return null; }

		var transform = this.parentSVG.node().getTransformToElement(this.railSVG.node());
		var offsetX = evt.offsetX;

		var relX = offsetX / transform.a - transform.e;
		var percent = relX / this.railWidth;

		if(percent < 0) { percent = 0; }
		else if(percent > 1) { percent = 1; }
		
		var seqLen = this.model.length();

		var bp = Math.floor(percent * seqLen)

		return bp;
	},


	onMousewheel: function(evt) {
		if(evt.ctrlKey) {
			evt.preventDefault();

			var wheelDelta = evt.originalEvent.wheelDelta;
			wheelDelta /= 120;

			wheelDelta = Math.exp(wheelDelta / 24);
			var newZoom = this.zoomLevel * wheelDelta;

			var bb = this.el.getBoundingClientRect();
			// var clientX = evt.clientX - bb.left;
			// var clientY = evt.clientY - bb.top;
			var clientX = evt.clientX;
			var clientY = evt.clientY;

			var bp = this.getClickBp(evt);
			// var r = this.getRadiusPercent(evt);

			var positionParams = {
				clientX: clientX,
				clientY: clientY,
				bp: bp,
				// radiusPercent: r,
			};

			this.zoom(newZoom, positionParams);
			// this.zoom(newZoom);
		} 

	},

	resetRailWidth: function(newRailWidth) {
		this.railWidth = newRailWidth;
		this.frame.remove();
		this.caret.remove();
		this.initFrame();
		this.initCaret();
	},

	zoom: function(newZoom, positionParams) {
		var oldZoom = this.zoomLevel;
		this.zoomLevel = newZoom;
		var newRailWidth = this.railWidth * (newZoom/oldZoom);

		this.resetRailWidth(newRailWidth);
		this.render();
		this.fitWidthToContent();

		if(typeof positionParams === 'object') {
			var $el = this.$el;
			// var $el = $('.ve-subpanel'); // temporary

			var seqLen = this.model.length();

			var transform = this.parentSVG.node().getTransformToElement(this.railSVG.node());
			// var transform = this.railSVG.node().getTransformToElement(this.parentSVG.node());
			var clientX = positionParams.clientX;
			var clientY = positionParams.clientY;
			var bp = positionParams.bp;
			// var radiusPercent = positionParams.radiusPercent;


			var frame = $(this.frame.node());

			var frameOffset = frame.offset();
			var containerOffset = $el.offset();
			var currentScrollLeft = $el.scrollLeft();

			var frameWidth = frame[0].getBoundingClientRect().width;
			// var frameBb = frame[0].getBoundingClientRect();
			// var containerBb = this.el.getBoundingClientRect();

			// var frameWidth = frameBb.width;



			var percent = bp / seqLen;
			var xPos = frameWidth * percent;

			// xPos += frameOffset.left;
			var diff = frameOffset.left + currentScrollLeft - containerOffset.left;
			// console.log(frameOffset.left, $el.scrollLeft(), diff);

			// var diff = frameOffset.left - containerOffset.left;
			// console.log(frameOffset.left, containerOffset.left, diff);

			// var diff = frameBb.left - containerBb.left;
			// console.log(frameBb.left, containerBb.left, diff);

			// debugger;


			// var xPos2 = xPos - (containerOffset.left - clientX);

			// var scrollLeft = xPos2 - frameOffset.left;
			// var scrollLeft = xPos - containerOffset.left + clientX;


			// var scrollLeft = diff + xPos + clientX;
			var scrollLeft = diff + xPos;
			// var scrollLeft = diff + xPos + clientX - containerOffset.left;

			// console.log(bp);
			// console.log(scrollLeft);

			$el.scrollLeft(scrollLeft);

			// console.log(frameWidth);

			// console.log(frameOffset, containerOffset);






			// this.el.scrollTop = scrollTop;
			// this.el.scrollLeft = scrollLeft;

			// var center = this.center;

			// var centerX = transform.a * center.x + transform.c * center.y + transform.e;
			// var centerY = transform.b * center.x + transform.d * center.y + transform.f;
			

			// // var centerX = transform.a * center.x + transform.e;
			// // var centerY = transform.d * center.y + transform.f;

			// var r = radiusPercent * this.railRadius * transform.a;

			// var dX = r * Math.cos(-angle + offset);
			// var dY = - r * Math.sin(-angle + offset);

			// var absX = centerX + dX;
			// var absY = centerY + dY;

			// // var absX = dX + transform.e;
			// // var absY = dY + transform.f;

			// // var scrollLeft = absX + clientX;
			// // var scrollTop = absY + clientY;

			// var scrollLeft = absX - clientX;
			// var scrollTop = absY - clientY;

			// // var scrollLeft = absX;
			// // var scrollTop = absY;

			// // console.log(scrollLeft, scrollTop)
			// // console.log(centerX, centerY)
			// // console.log(absX, absY);
			// // console.log(dX, dY);

			// // debugger;

			// this.el.scrollTop = scrollTop;
			// this.el.scrollLeft = scrollLeft;

		}
	},




});



















































})();