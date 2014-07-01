(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};






var Window = Backbone.UI.Window = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-window',

	// width: null,
	// height: null,
	posX: null,
	posY: null,
	title: "",
	footerButtons: null,

	header: null,
	body: null,
	footer: null,


	initialize: function(elements) {
		this.$parentEl = $('body');

		for(var x in elements) {
			// if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		if(elements.css) {
			this.$el.css(elements.css);
		}

		this.setPos(this.posX, this.posY);


		this.header = $(document.createElement('div'))
			.addClass('ui-window-header')
			.on('mousedown', onHeaderMouseDown.bind(this))
			.on('mouseup', onHeaderMouseUp.bind(this))
			.appendTo(this.$el);

		this.headerLabelSpan = $(document.createElement('span'))
			.text(this.title)
			.appendTo(this.header);


		this.body = $(document.createElement('div'))
			.addClass('ui-window-body')
			// .text(this.label)
			.appendTo(this.$el);


		this.footer = $(document.createElement('div'))
			.addClass('ui-window-footer')
			// .text(this.label)
			.appendTo(this.$el);

		if(Array.isArray(this.footerButtons)) {
			for(var i=0;i<this.footerButtons.length;i++) {
				var btn = this.footerButtons[i];

				var btnEl = $(document.createElement('div'))
					.text(btn.label)
					.addClass('ui-window-footer-button')
					.appendTo(this.footer);

				if(typeof btn.onclick === 'function') {
					btnEl.on('click', btn.onclick);
				}
			}
		}


		this.$parentEl.append(this.$el);
	},

	setPos: function(posX, posY) {
		if(typeof posX === 'number') {
			this.posX = posX;
			this.$el.css('left', (this.posX) + 'px');
		}
		if(typeof posY === 'number') {
			this.posY = posY;
			this.$el.css('top', (this.posY) + 'px');
		}
	},

	show: function() {
		this.$el.removeClass('ui-hidden-window');
		this.trigger('show');
	},

	hide: function() {
		this.$el.addClass('ui-hidden-window');
		this.trigger('hide');
	},

	setTitle: function(title) {
		this.headerLabelSpan.text(title);
	},

});


function onHeaderMouseDown(evt) {
	// console.log(evt);
	// var scrollBarTop = scrollBar.$el.offset().top;
	// var y = evt.pageY - evt.data.offsetY;
	// // var y = evt.data.y;

	// var relY = y - scrollBarTop;
	$(window).on('mousemove', {
		me: this,
		offsetX: evt.offsetX,
		offsetY: evt.offsetY,
	}, onHeaderWindowMouseMove);

}

function onHeaderWindowMouseMove(evt) {
	var me = evt.data.me;
	var x =  evt.pageX - evt.data.offsetX;
	var y = evt.pageY - evt.data.offsetY;
	// console.log(y);
	me.setPos(x, y);
}

function onHeaderMouseUp(evt) {
	$(window).off('mousemove', onHeaderWindowMouseMove);
}


























































})();