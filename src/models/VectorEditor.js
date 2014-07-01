

VE.VectorEditor = Backbone.Model.extend({

	defaults: {
		sequence: null,

		annotatePanel: null,
		annotatePanelParent: null,

		pieContainer: null,
		pieContainerParent: null,
	},

	initialize: function() {
		
		VE.activeVectorEditor = this;

		if(this.get('annotatePanelParent')) {
			this.set('annotatePanel', new VE.AnnotateContainer({
				el: this.get('annotatePanelParent'),
				model: this.get('sequence'),
				vectorEditor: this,
			}));
		}

		if(this.get('pieContainerParent')) {
			this.set('pieContainer', new VE.PieContainer({
				el: this.get('pieContainerParent'),
				model: this.get('sequence'),
				vectorEditor: this,
			}));
		}


		this.on('all', function() {
			if(this.get('annotatePanel')) {
				this.get('annotatePanel').trigger.apply(this.get('annotatePanel'), arguments);
			}
			if(this.get('pieContainer')) {
				this.get('pieContainer').trigger.apply(this.get('pieContainer'), arguments);
			}
		});

	},


});