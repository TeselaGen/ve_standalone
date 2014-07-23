(function(){

if(typeof Backbone.UI !== 'object') {
	Backbone.UI = {};
}



// Backbone.UI.Panel = Backbone.View.extend({
	

// 	parentEl: null,
// 	classed: null, // {}
// 	title: null,

// 	backgroundEl: null,
// 	headerEl: null,
// 	bodyEl: null,


// 	initialize: function(elements) {
// 		for(var x in elements) {
// 			this[x] = elements[x];
// 		}
// 		if(!this.classed) { this.classed = {}; }
// 	},

// 	render: function() {
// 		if(!this.backgroundEl) {
// 			this.backgroundEl = this.parentEl.append('div')
// 				.classed(this.classed)
// 				.classed({ 'ui-background': true });
// 		}
// 		if(!this.headerEl) {
// 			this.headerEl = this.backgroundEl.append('div')
// 				.classed(this.classed)
// 				.classed({ 'ui-header': true })
// 				.text(this.title || "");
// 		}
// 		if(!this.bodyEl) {
// 			this.bodyEl = this.backgroundEl.append('div')
// 				.classed(this.classed)
// 				.classed({ 'ui-body': true });
// 		}

// 		return this;
// 	},


// });





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

		var _classed = createJQueryAddClassString(this.classed);

		if(!this.backgroundEl) {
			this.backgroundEl = $(document.createElement('div'))
				.addClass(_classed)
				.addClass('ui-background')
				.appendTo(this.parentEl);
		}
		if(!this.headerEl) {
			this.headerEl = $(document.createElement('div'))
				.addClass(_classed)
				.addClass('ui-header')
				.text(this.title || "")
				.appendTo(this.backgroundEl);
		}
		if(!this.bodyEl) {
			this.bodyEl = $(document.createElement('div'))
				.addClass(_classed)
				.addClass('ui-body')
				.appendTo(this.backgroundEl);
		}

		return this;
	},





});



/**
 * Might not be 100% accurate. I think if a classed key is set to false
 * it should remove the class; however, this function just ignores those keys.
 */
function createJQueryAddClassString(classed) {
	var a = [];
	for(var x in classed) {
		if(classed[x]) {
			a.push(x);
		}
	}
	return a.join(' ');
}



















































})();