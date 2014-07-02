(function(){

if(typeof Backbone.UI !== 'object') {
	Backbone.UI = {};
}



Backbone.UI.PhonyScrollContainer = Backbone.View.extend({
	
	tagName: 'div',
	className: 'phony-scroll-container-wrapper',
	// attributes: {},

	events: {
		'mousewheel': 'onMousewheel',
	},

	renderTo: null,
	showPreview: false,

	scrollBar: null,
	scroller: null,
	scrollBody: null,

	phonyHeight: 0,
	scrollPercent: 0,

	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		this.$el.on('mouseover', onPhonyScrollContainerMouseOver.bind(this));
		this.$el.on('mouseout', onPhonyScrollContainerMouseOut.bind(this));

		this.$el.appendTo(this.renderTo);

		this.scrollBar = new Backbone.UI.PhonyScrollBar({
			wrapper: this,
		});
		this.scroller = this.scrollBar.scroller;

		if(this.showPreview) {
			this.scrollPreview = new Backbone.UI.PhonyScrollPreview({
				wrapper: this,
			});
		}

		this.scrollBody = new Backbone.UI.PhonyScrollBody({
			wrapper: this,
		});

		this.on({
			'scrollTo': this.onScrollTo,
		});
	},

	render: function() {
		this.scrollBar.render();
		return this;
	},


	onScrollTo: function(scrollPercent) {
		if(scrollPercent < 0) { scrollPercent = 0; }
		else if(scrollPercent > 1) { scrollPercent = 1; }

		this.scrollPercent = scrollPercent;

		var scrollBarHeight = this.scrollBar.$el.height();
		var scrollerHeight = this.scroller.$el.height();
		var effectiveScrollBarHeight = scrollBarHeight - scrollerHeight;

		this.scroller.$el.css('top', scrollPercent * effectiveScrollBarHeight);
	},

	setPhonyHeight: function(phonyHeight) {
		this.phonyHeight = phonyHeight;

		// var bodyHeight = this.scrollBody.$el.height();
		var bodyHeight = this.$el.height();
		var ratio = bodyHeight / phonyHeight;
		if(ratio > 1) { ratio = 1; }

		var scrollBarHeight = this.scrollBar.$el.height();
		var scrollerHeight = ratio * scrollBarHeight;
		this.scroller.$el.height(scrollerHeight);

		if(this.showPreview) {
			this.scrollPreview.setPhonyHeight(phonyHeight);
		}
	},

	// Returns the phony height - the height of its visible portion (the 'scrollBody' height)
	getEffectivePhonyHeight: function() {
		// var bodyHeight = this.scrollBody.$el.height();
		var bodyHeight = this.$el.height();
		return this.phonyHeight - bodyHeight;
	},

	getPhonyScrollTop: function() {
		// var bodyHeight = this.scrollBody.$el.height();
		var bodyHeight = this.$el.height();
		var top = (this.phonyHeight - bodyHeight) * this.scrollPercent;
		return top;
	},

	setPhonyScrollTop: function(scrollTop) {
		var scrollPercent = scrollTop / this.getEffectivePhonyHeight();
		if(scrollPercent < 0) { scrollPercent = 0; }
		else if(scrollPercent > 1) { scrollPercent = 1; }
		this.trigger('scrollTo', scrollPercent);
	},

	onMousewheel: function(evt) {
		evt.preventDefault();

		var wheelDelta = evt.originalEvent.wheelDelta;
		wheelDelta = -wheelDelta;

		// Based on some tests. Might not be correct.
		var approximateDeltaScrollTop;
		if(wheelDelta > 0) {
			approximateDeltaScrollTop = wheelDelta / (1/wheelDelta * 3000 + 3);
			// approximateDeltaScrollTop = wheelDelta / (1/wheelDelta * 3000);
		} else {
			approximateDeltaScrollTop = wheelDelta / (1/-wheelDelta * 3000 + 3);
			// approximateDeltaScrollTop = wheelDelta / (1/-wheelDelta * 3000);
		}

		this.setPhonyScrollTop(this.getPhonyScrollTop() + approximateDeltaScrollTop);
	},

	hidePreview: function() {
		this.showPreview = false;
		if(this.scrollPreview) {
			this.scrollPreview.remove();
		}	
	},

	displayPreview: function() {
		this.showPreview = true;
		this.scrollPreview = new Backbone.UI.PhonyScrollPreview({
			wrapper: this,
		});
	},



});


function onPhonyScrollContainerMouseOver(evt) {
	this.scrollBar.$el.addClass('mouse-over-container');
	this.scrollBar.scroller.$el.addClass('mouse-over-container');
}

function onPhonyScrollContainerMouseOut(evt) {
	this.scrollBar.$el.removeClass('mouse-over-container');
	this.scrollBar.scroller.$el.removeClass('mouse-over-container');
}




Backbone.UI.PhonyScrollBody = Backbone.View.extend({
	
	tagName: 'div',
	className: 'phony-scroll-body',

	wrapper: null,
	
	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		this.$el.appendTo(this.wrapper.el);
	},

	render: function() {
		return this;
	},


});




Backbone.UI.PhonyScrollBar = Backbone.View.extend({
	
	tagName: 'div',
	className: 'phony-scroll-bar',
	// attributes: {},

	wrapper: null,
	
	scroller: null,

	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}

		this.$el.on('mousedown', onPhonyScrollBarMouseDown.bind(this));

		this.$el.appendTo(this.wrapper.el);
		this.scroller = new Backbone.UI.PhonyScrollScroller({
			scrollBar: this,
		});
	},

	render: function() {
		this.scroller.render()

		return this;
	},


});



function onPhonyScrollBarMouseDown(evt) {
	if(evt.button !== 0) { return; }

	var scroller = this.scroller;
	var wrapper = this.wrapper;

	if(evt.target === scroller.el) { return; }

	var scrollBarHeight = this.$el.height();
	var scrollerHeight = scroller.$el.height();
	var effectiveScrollBarHeight = scrollBarHeight - scrollerHeight;

	var scrollBarTop = this.$el.offset().top;
	var y = evt.pageY;

	var relY = y - scrollBarTop;
	relY -= scrollerHeight / 2;
	var scrollPercent = relY / effectiveScrollBarHeight;


	if(scrollPercent < 0) { scrollPercent = 0; }
	else if(scrollPercent > 1) { scrollPercent = 1; }

	wrapper.trigger('scrollTo', scrollPercent);

}





Backbone.UI.PhonyScrollScroller = Backbone.View.extend({
	
	tagName: 'div',
	className: 'phony-scroll-scroller',

	scrollBar: null,

	events: {
		'mousedown': 'startScrolling',	
	},
	


	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		this.$el.appendTo(this.scrollBar.el);
	},

	render: function() {
		return this;
	},

	// scrollTo: function(scrollPercent) {
	// 	this.$el.css('top', scrollPercent * effectiveScrollBarHeight);
	// },

	startScrolling: function(evt) {
		$(window).one('mouseup', this.stopScrolling.bind(this))
			.on('mousemove', {
					scroller: this,
					offsetY: evt.offsetY
				}, this.onScroll);
	},

	onScroll: function(evt) {
		var scroller = evt.data.scroller;
		var scrollBar = scroller.scrollBar;
		var wrapper = scrollBar.wrapper;

		var scrollBarHeight = scrollBar.$el.height();
		var scrollerHeight = scroller.$el.height();
		var effectiveScrollBarHeight = scrollBarHeight - scrollerHeight;

		var scrollBarTop = scrollBar.$el.offset().top;
		var y = evt.pageY - evt.data.offsetY;
		// var y = evt.data.y;

		var relY = y - scrollBarTop;
		var scrollPercent = relY / effectiveScrollBarHeight;

		if(scrollPercent < 0) { scrollPercent = 0; }
		else if(scrollPercent > 1) { scrollPercent = 1; }

		// console.log(scrollPercent);

		// scroller.$el.css('top', scrollPercent * effectiveScrollBarHeight);
		wrapper.trigger('scrollTo', scrollPercent);


	},

	stopScrolling: function(evt) {
		$(window).off('mousemove', this.onScroll);
	},


});








// -------------------------------------------------------------------------------------------------
//  Scroll Preview
// -------------------------------------------------------------------------------------------------


Backbone.UI.PhonyScrollPreview = Backbone.View.extend({
	tagName: 'div',
	className: 'phony-scroll-preview',

	wrapper: null,

	scroller: null,

	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}

		this.canvas = $(document.createElement('canvas'))
			.addClass('phony-scroll-preview')
			.appendTo(this.el);

		this.context = this.canvas[0].getContext("2d");

		// this.gl = this.canvas[0].getContext("webgl") || this.canvas[0].getContext("experimental-webgl");


		this.scroller = new ScrollPreviewScroller({
			preview: this,
		});

		this.listenTo(this.wrapper, 'scrollTo', this.onScrollTo);

		this.$el.on('mousedown', onPhonyScrollPreviewMouseDown.bind(this));

		// this.$el.appendTo(this.wrapper.el);
		this.wrapper.$('.phony-scroll-bar').after(this.$el);
	},

	onScrollTo: function(scrollPercent) {
		var height = this.$el.height();
		var scrollerHeight = this.scroller.$el.height();
		var effectiveHeight = height - scrollerHeight;

		this.scroller.$el.css('top', scrollPercent * effectiveHeight);

		var top = - (this.phonyHeight * this.ratio - height) * scrollPercent;
		this.canvas.css({
			top: (top) + 'px',
		});
	},

	setPhonyHeight: function(phonyHeight) {
		this.phonyHeight = phonyHeight;

		var width = this.$el.width();
		var bodyWidth = this.wrapper.scrollBody.$el.width();
		var ratio = width / bodyWidth;
		this.ratio = ratio;
		var height = this.$el.height();
		var scollerHeight = height * ratio;
		this.scroller.$el.height(scollerHeight);

		
		

		// console.log(Number(this.canvas.attr('height')), phonyHeight * ratio);
		if(Number(this.canvas.attr('height')) !== phonyHeight * ratio) {
			this.canvas.attr({
				// width: $('.phony-scroll-preview').width(),
				width: width,
				height: ratio * phonyHeight,
			});
			
			this.context.resetTransform();
			this.context.scale(ratio, ratio);

			if(typeof this.render === 'function') {
				this.render();
			}
		}
		
		this.context.resetTransform();
		this.context.scale(ratio, ratio);

		


	},


});


function onPhonyScrollPreviewMouseDown(evt) {
	if(evt.button !== 0) { return; }

	var scroller = this.scroller;
	var wrapper = this.wrapper;

	if(evt.target === scroller.el) { return; }

	// var previewHeight = this.$el.height();
	// var scrollerHeight = scroller.$el.height();
	// var effectivePreviewHeight = previewHeight - scrollerHeight;

	// var previewTop = this.$el.offset().top;
	// var y = evt.pageY;

	// var relY = y - previewTop;
	// relY -= scrollerHeight / 2;
	// var scrollPercent = relY / effectivePreviewHeight;



	// var scrollerHeight = scroller.$el.height();
	var previewTop = this.$el.offset().top;
	var y = evt.pageY;

	var relY = y - previewTop;
	var canvasTop = this.canvas.offset().top;
	var canvasHeight = this.canvas.height();

	var canvasY = -canvasTop + relY;

	var scrollPercent = canvasY / canvasHeight;


	if(scrollPercent < 0) { scrollPercent = 0; }
	else if(scrollPercent > 1) { scrollPercent = 1; }

	wrapper.trigger('scrollTo', scrollPercent);

}






var ScrollPreviewScroller = Backbone.View.extend({
	
	tagName: 'div',
	className: 'phony-scroll-preview-scroller',

	preview: null,

	events: {
		'mousedown': 'startScrolling',	
	},
	


	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		this.$el.appendTo(this.preview.el);
	},

	render: function() {
		return this;
	},

	scrollTo: function(scrollPercent) {
		this.$el.css('top', scrollPercent * effectiveScrollBarHeight);
	},

	startScrolling: function(evt) {
		$(window).one('mouseup', this.stopScrolling.bind(this))
			.on('mousemove', {
					scroller: this,
					offsetY: evt.offsetY
				}, this.onScroll);
	},

	onScroll: function(evt) {
		var scroller = evt.data.scroller;
		var preview = scroller.preview;
		var wrapper = preview.wrapper;

		var previewHeight = preview.$el.height();
		var scrollerHeight = scroller.$el.height();
		var effectivePreviewHeight = previewHeight - scrollerHeight;

		var previewTop = preview.$el.offset().top;
		var y = evt.pageY - evt.data.offsetY;

		var relY = y - previewTop;
		var scrollPercent = relY / effectivePreviewHeight;

		if(scrollPercent < 0) { scrollPercent = 0; }
		else if(scrollPercent > 1) { scrollPercent = 1; }

		wrapper.trigger('scrollTo', scrollPercent);
	},


	stopScrolling: function(evt) {
		$(window).off('mousemove', this.onScroll);
	},


});



























































})();