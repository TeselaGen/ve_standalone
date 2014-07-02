

VE.VePanel = Backbone.View.extend({
	
	parentEl: null,
	ve: null,

	backgroundEl: null,

	mainMenuBar: null,
	mainToolBar: null,
	veSubPanel: null,
	vectorPanel: null,
	annotatePanel: null,


	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		this.ve.vePanel = this;
	},



	render: function() {
		


		if(!this.backgroundEl) {
			this.backgroundEl = this.parentEl.append('div')
				.classed({
					've-panel-background': true
				});
		}

		if(!this.mainMenuBar) {
			this.mainMenuBar = new VE.MainMenuBar({
				// parentEl: this.backgroundEl,
				renderTo: this.backgroundEl.node(),
				ve: this.ve,
			});
		}
		this.mainMenuBar.render();


		if(!this.veSubPanel) {
			this.veSubPanel = this.backgroundEl.append('div')
				.classed({
					've-subpanel': true
				});
		}

		if(!this.vectorPanel) {
			this.vectorPanel = new VE.VectorPanel({
				parentEl: this.veSubPanel,
				classed: {
					've-vector-panel': true,
				},
				ve: this.ve,
				title: 'Map',
			});
		}
		this.vectorPanel.render();

		if(!this.annotatePanel) {
			this.annotatePanel = new VE.AnnotatePanel({
				parentEl: this.veSubPanel,
				classed: {
					've-annotate-panel': true,
				},
				ve: this.ve,
				title: 'Sequence',
				showAnnotatePreview: this.ve.showAnnotatePreview,
			});
		}
		this.annotatePanel.render();


		
		$(this.backgroundEl.node()).attr('tabindex', "0")
			.on('keydown',  this.ve.onKeyDown.bind(this.ve));


		return this;
	},



});




























































