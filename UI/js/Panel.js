
if(typeof Backbone.UI !== 'object') {
	Backbone.UI = {};
}



Backbone.UI.Panel = Backbone.View.extend({
	

	parentEl: null,
	classed: null, // {}
	title: null,

	backgroundEl: null,
	headerEl: null,
	bodyEl: null,


	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		if(!this.classed) { this.classed = {}; }
	},

	render: function() {
		if(!this.backgroundEl) {
			this.backgroundEl = this.parentEl.append('div')
				.classed(this.classed)
				.classed({ 'ui-background': true });
		}
		if(!this.headerEl) {
			this.headerEl = this.backgroundEl.append('div')
				.classed(this.classed)
				.classed({ 'ui-header': true })
				.text(this.title || "");
		}
		if(!this.bodyEl) {
			this.bodyEl = this.backgroundEl.append('div')
				.classed(this.classed)
				.classed({ 'ui-body': true });
		}

		return this;
	},


});


























































