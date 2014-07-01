(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};
if(typeof Backbone.UI.menu !== 'object') Backbone.UI.menu = {};





var MenuManager = {
	
	_hidePrevented: {},

	preventHide: function(item) {
		this._hidePrevented[item.cid] = true;
	},

	isHidePrevented: function(item) {
		return this._hidePrevented[item.cid] ? true : false;
	},

	removePreventHide: function(item) {
		delete this._hidePrevented[item.cid];
	},

// 	active: [],
// 	_preventHide: false,

// 	addActive: function(item) {
// 		this.active[item.cid] = item;
// 	},

// 	removeActive: function(item) {
// 		delete this.active[item.cid];
// 	},

// 	hideAll: function() {
// 		for(var cid in this.active) {
// 			this.active[cid].hide();
// 		}
// 	},

// 	onWindowClick: function() {
// 		if(!this._preventHide) {
// 			this.hideAll();
// 		}
// 		this._preventHide = false;
// 	},

// 	preventHide: function() {
// 		this._preventHide = true;
// 	},

};


// $(window).on('click', MenuManager.onWindowClick.bind(MenuManager));

// window.addEventListener('click', MenuManager.onWindowClick.bind(MenuManager), true);
// Just commented out to help with testing. Uncomment later.
// window.addEventListener('contextmenu', MenuManager.onWindowClick.bind(MenuManager), true);




var Menu = Backbone.UI.menu.Menu = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menu',

	events: {

	},

	items: null, // []

	hidden: true,
	posX: 0,
	posY: 0,


	initialize: function(elements) {
		var me = this;
		this.$parentEl = $('body');

		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}
		
		this.$el.css({
			left: (this.posX) + 'px',
			top: (this.posY) + 'px',
		});

		
		if(this.items) {
			var items = this.items;
			this.items = [];

			for(var i=0,ii=items.length;i<ii;i++) {
				var item = items[i];
				var item = _.clone(item);
				item.menu = this;
				var menuItem = MenuItem.create(item);
				this.items.push(menuItem);
			}
		}

		if(this.hidden) { this.$el.addClass('ui-hidden-menu'); }

		this.$el.on('mousedown', function(evt) {
			evt.stopPropagation();
		});

		this.$parentEl.append(this.$el);
	},

	render: function() {
		return this;
	},

	show: function() {
		// MenuManager.addActive(this);
		$(window).one('mousedown', activeMenuHandler.bind(this));
		this.hidden = false;
		this.$el.removeClass('ui-hidden-menu');
		this.trigger('show');
	},

	hide: function() {
		// MenuManager.removeActive(this);
		this.hidden = true;
		this.$el.addClass('ui-hidden-menu');
		this.trigger('hide');
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

});


function activeMenuHandler() {
	if(MenuManager.isHidePrevented(this)) {
		MenuManager.removePreventHide(this);
		$(window).one('mousedown', activeMenuHandler.bind(this));

	} else if(!this.hidden) {
		this.hide();
	}
}






var MenuItem = Backbone.UI.menu.MenuItem = {
	
	create: function(elements) {
		var type = elements.type;
		var on = elements.on;
		var constructor = getConstructorByType(type);
		var menuItem = new constructor(elements);
		addMenuItemListeners(menuItem, on);
		return menuItem;
	},

};


function addMenuItemListeners(menuItem, on) {
	menuItem.$el.on('mouseover', onMenuItemMouseOver.bind(menuItem));
	menuItem.$el.on('mouseout', onMenuItemMouseOut.bind(menuItem));

	if(typeof on === 'object') {
		for(var x in on) {
			var eventName = x;
			var handler = on[x];

			if(eventName === 'click') {
				menuItem.$el.on(eventName, handler);
			} else {
				menuItem.on(eventName, handler);
			}
		}
	}

}

function onMenuItemMouseOver(evt) {
	this.$el.addClass('ui-menuitem-mouseover');
}

function onMenuItemMouseOut(evt) {
	this.$el.removeClass('ui-menuitem-mouseover');
}




var menuItemTypes = {
	'default': null,
	'filefield': null,
	'menuseparator': null,
	'checkbox': null,
};

function getConstructorByType(type) {
	if(!type) { type = 'default'; }
	return menuItemTypes[type];
}






var NestedMenu = Menu.extend({

	menuItem: null,
	items: null, // []

	posX: 0,
	posY: 0,

	initialize: function(elements) {
		
		this.menuItem = elements.menuItem;

		Menu.prototype.initialize.call(this, elements);

		this.$el.addClass('ui-nested-menu');

		this.on('show', onNestedMenuShow.bind(this));
	},


});


function onNestedMenuShow() {
	var $el = this.menuItem.$el;
	var offset = $el.offset();
	var width = $el.outerWidth();
	// var height = $el.outerHeight();
	var x = offset.left + width;
	var y = offset.top;
	this.setPos(x, y);
}





var DefaultMenuItem = menuItemTypes['default'] = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menuitem ui-default-menuitem',

	events: {

	},

	menu: null,
	type: 'default',
	label: null,
	items: null, // []

	labelSpan: null,
	nestedMenu: null,

	initialize: function(elements) {
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}
		
		this.labelSpan = $(document.createElement('span'))
			.text(this.label)
			.appendTo(this.$el);


		if(this.items) {
			
			this.nestedMenu = new NestedMenu({
				menuItem: this,
				items: this.items,
			});

			this.$el.on('mouseover', onNestedMenuMenuItemMouseOver.bind(this));
			
		}


		this.menu.$el.append(this.$el);
	},

	render: function() {
		return this;
	},

});


function onNestedMenuMenuItemMouseOver() {
	var me = this;

	this.$el.one('mouseleave', function() {
		me.menu.$el.one('mouseover', function() {
			me.nestedMenu.hide();
		});
	});
	
	this.nestedMenu.show();
}






var FileFieldMenuItem = menuItemTypes['filefield'] = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menuitem ui-filefield-menuitem',

	events: {

	},

	menu: null,
	type: 'filefield',
	label: null,

	labelSpan: null,
	filefieldEl: null,

	initialize: function(elements) {
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}
		
		this.labelSpan = $(document.createElement('span'))
			.text(this.label)
			.appendTo(this.$el);

		this.filefieldEl = $(document.createElement('input'))
			.attr('type', 'file')
			.addClass('ui-filefield-menuitem')
			.on('click', onFileFieldMenuItemInputClick.bind(this))
			.on('change', onFileFieldMenuItemInputChange.bind(this))
			.appendTo(this.$el);

		this.$el.on('click', onFileFieldMenuItemDivClick.bind(this));

		this.menu.$el.append(this.$el);
	},

	render: function() {
		return this;
	},


});


function onFileFieldMenuItemInputChange(evt, proxied) {
	this.trigger('fileselect', evt);
}

function onFileFieldMenuItemDivClick(evt) {
	this.filefieldEl.trigger('click', true);
}

function onFileFieldMenuItemInputClick(evt, proxied) {
	if(proxied) {
		evt.stopPropagation();
	}
}




var CheckboxMenuItem = menuItemTypes['checkbox'] = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menuitem ui-checkbox-menuitem',

	events: {

	},

	menu: null,
	type: 'checkbox',
	label: null,
	items: null, // []

	checked: false,
	checkboxEl: null,
	labelSpan: null,


	initialize: function(elements) {
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}
		
		// this.checkboxEl = createCheckboxEl().appendTo(this.$el);
		this.checkbox = createCheckbox(this.el);
		this.checkbox.classed({
			'checked': this.checked,
			'unchecked': !this.checked,
		});

		this.labelSpan = $(document.createElement('span'))
			.text(this.label)
			.appendTo(this.$el);

		this.$el.on('click', onCheckboxMenuItemDivClick.bind(this));

		// if(this.items) { var items = this.items; }
		this.menu.$el.append(this.$el);
	},

	render: function() {
		return this;
	},

	setChecked: function(checked, silent) {
		if(this.checked !== checked) {
			this.checked = checked;
			this.checkbox.classed({
				'checked': this.checked,
				'unchecked': !this.checked,
			});
			if(!silent) { this.trigger('change', checked); }
		}
	},

	toggle: function() {
		this.setChecked(!this.checked);
	},


});


function onCheckboxMenuItemDivClick(evt) {
	MenuManager.preventHide(this);
	// this.menu.
	this.toggle();
}


// var checkBoxPathD = ['M',4,6, 'L',3,7, 'L',7,12, 'L',13,3, 'L',12,2, 'L',7,10, 'Z'].join(' ');
var checkBoxPathD = ['M',4,6, 'L',3,7.5, 'L',7,13, 'L',13,3.5, 'L',12,2, 'L',7,10, 'Z'].join(' ');

function createCheckbox(el) {
	var svg = d3.select(el).append('svg:svg')
		.attr({
			class: 'ui-checkbox-menuitem',
		});

	svg.append('svg:path')
		.attr({
			d: checkBoxPathD,
			transform: 'translate(-3, -2)',
		});

	return svg;
}










var MenuSeparator = menuItemTypes['menuseparator'] = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menuseparator',

	events: {

	},

	menu: null,
	type: 'menuseparator',

	initialize: function(elements) {
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		this.menu.$el.append(this.$el);
	},

	render: function() {
		return this;
	},

});
















































})();