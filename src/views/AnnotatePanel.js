

VE.AnnotatePanel = Backbone.UI.Panel.extend({
	
	parentEl: null,
	ve: null,
	
	items: null, // []
	phonyScrollContainer: null,

	initialize: function(elements) {
		

		
		Backbone.UI.Panel.prototype.initialize.call(this, elements);
	},

	render: function() {
		Backbone.UI.Panel.prototype.render.call(this);




		this.bodyEl.remove();

		this.el = this.backgroundEl.node();
		this.$el = $(this.el);

		this.phonyScrollContainer = new Backbone.UI.PhonyScrollContainer({
			renderTo: this.el,
			// showPreview: true,
		})
		.render()
		;

		// this.$el.on('keydown', this.ve.onKeyDown.bind(this.ve));

		

		return this;
	},


});




























































