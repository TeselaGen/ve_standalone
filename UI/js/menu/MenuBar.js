(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};
if(typeof Backbone.UI.menu !== 'object') Backbone.UI.menu = {};


var Menu = Backbone.UI.menu.Menu;



var MenuBar = Backbone.UI.menu.MenuBar = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menubar',

	events: {

	},

	renderTo: null,
	items: null, // []


	initialize: function(elements) {
		
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}
		
		if(this.items) {
			var items = this.items;
			this.items = [];

			for(var i=0,ii=items.length;i<ii;i++) {
				var item = items[i];
				var item = _.clone(item);
				item.menubar = this;
				var menuBarItem = new MenuBarItem(item);
				this.items.push(menuBarItem);
			}
		}

		this.$el.appendTo(this.renderTo);

	},

	render: function() {
		return this;
	},



});





var MenuBarItem = Backbone.UI.menu.MenuBarItem = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menubar-item',

	events: {

	},

	menubar: null,
	items: null, // []
	label: null,

	menu: null,
	labelSpan: null,


	initialize: function(elements) {
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		this.labelSpan = $(document.createElement('span'))
			.text(this.label)
			.appendTo(this.$el);

		this.menubar.$el.append(this.$el);

		this.menu = new MenuBarMenu({
			menuBarItem: this,
			items: this.items,
		});

		this.$el.on('click', onMenuBarItemClick.bind(this));

		this.menu.on('hide', onMenuBarItemMenuHide.bind(this));
	},

	render: function() {
		return this;
	},

});


function onMenuBarItemMenuHide() {
	this.$el.removeClass('ui-menubar-item-active');
}

function onMenuBarItemClick(evt) {
	this.$el.addClass('ui-menubar-item-active');
	this.menu.show();
}





var MenuBarMenu = Menu.extend({

	menuBarItem: null,
	items: null, // []

	posX: 0,
	posY: 0,

	initialize: function(elements) {
		
		this.menuBarItem = elements.menuBarItem;

		Menu.prototype.initialize.call(this, elements);

		this.$el.addClass('ui-menubar-menu');

		this.on('show', onMenuBarMenuShow.bind(this));
	},



});


function onMenuBarMenuShow() {
	var $el = this.menuBarItem.$el;
	var offset = $el.offset();
	var height = $el.outerHeight();
	var x = offset.left;
	var y = offset.top + height;
	this.setPos(x, y);
}










































})();