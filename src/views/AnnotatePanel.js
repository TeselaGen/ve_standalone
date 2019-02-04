

VE.AnnotatePanel = Backbone.UI.Panel.extend({
	
	parentEl: null,
	ve: null,
	
	items: null, // []
	phonyScrollContainer: null,

	initialize: function(elements) {
		if (!SVGElement.prototype.getTransformToElement) {
			SVGElement.prototype.getTransformToElement = function(_element) {
				return _element
					.getScreenCTM()
					.inverse()
					.multiply(this.getScreenCTM());
			};
		}

		
		Backbone.UI.Panel.prototype.initialize.call(this, elements);
	},

	render: function() {
		Backbone.UI.Panel.prototype.render.call(this);




		// this.bodyEl.remove();

		// this.el = this.backgroundEl.node();
		// this.$el = $(this.el);

		// this.phonyScrollContainer = new Backbone.UI.PhonyScrollContainer({
		// 	renderTo: this.el,
		// 	showPreview: this.showAnnotatePreview,
		// })
		// .render();



		this.bodyEl.remove();

		this.el = this.backgroundEl[0];
		this.$el = $(this.el);

		this.phonyScrollContainer = new Backbone.UI.PhonyScrollContainer({
			renderTo: this.el,
			showPreview: this.showAnnotatePreview,
		})
		.render();



		

		return this;
	},


});




























































