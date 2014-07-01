
if(typeof Backbone.UI !== 'object') {
	Backbone.UI = {};
}

if(typeof Backbone.UI.menu !== 'object') {
	Backbone.UI.menu = {};
}

Backbone.UI.menu.MenuManager = {
	
	active: [],

	addActive: function(item) {
		this.active[item.cid] = item;
	},

	removeActive: function(item) {
		delete this.active[item.cid];
	},

	hideAll: function() {
		for(var cid in this.active) {
			this.active[cid].hide();
		}
	},

	onWindowClick: function() {
		this.hideAll();
	},


};


// window.addEventListener('click',
// 	Backbone.UI.menu.MenuManager.onWindowClick.bind(Backbone.UI.menu.MenuManager), true);
window.addEventListener('click',
	Backbone.UI.menu.MenuManager.onWindowClick.bind(Backbone.UI.menu.MenuManager), true);
window.addEventListener('contextmenu',
	Backbone.UI.menu.MenuManager.onWindowClick.bind(Backbone.UI.menu.MenuManager), true);




Backbone.UI.menu.MenuBar = Backbone.View.extend({
	
	UNSELECTED_BACKGROUND: '#FDFDFD',
	HOVER_BACKGROUND: '#E6E6E6',
	SELECTED_BACKGROUND: '#D8D8D8',

	parentEl: null,
	items: null, // []

	backgroundEl: null,
	menuBarItems: null, // []

	events: {
		// 'click .ui-menu-bar-item': 'onMenuBarItemClick',
	},

	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		if(!this.items) {this.items = [];}
		if(!this.menuBarItems) {this.menuBarItems = [];}
	},

	render: function() {
		if(!this.backgroundEl) {
			this.backgroundEl = this.parentEl.append('div')
				.classed({
					'ui-menu-bar': true
				});
			this.el = this.backgroundEl.node();
			this.$el = $(this.el);
			this.delegateEvents(this.events);
		}

		if(this.needsToRecalculateMenuBarItems()) {
			this.menuBarItems = [];
			for(var i=0;i<this.items.length;i++) {
				var item = _.clone(this.items[i]);
				item.menuBar = this;
				item.parentEl = this.backgroundEl;
				var menuBarItem = new Backbone.UI.menu.MenuBarItem(item);
				this.menuBarItems.push(menuBarItem);
			}
		}

		for(var i=0;i<this.menuBarItems.length;i++) {
			var menuBarItem = this.menuBarItems[i];
			menuBarItem.render();
		}

		return this;
	},

	/**
	 *	Just a quick approximation. Should be redone later.
	 */
	needsToRecalculateMenuBarItems: function() {
		if(this.items.length !== this.menuBarItems.length) {
			return true;
		}
		return false;
	},

	// onMenuBarItemClick: function() {
	// 	debugger;
	// },


});




Backbone.UI.menu.MenuBarItem = Backbone.View.extend({
	
	parentEl: null,
	items: null, // []

	backgroundEl: null,
	labelSpan: null,
	menu: null,

	menuPosX: 0,
	menuPosY: 0,
	selected: false,

	background:	'#FDFDFD',


	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
	},

	render: function() {

		if(!this.backgroundEl) {
			this.backgroundEl = this.parentEl.append('div')
				.classed({
					'ui-menu-bar-item': true
				})
				.style({
					background: this.background,
				})
				.on('mouseenter', this.__onMouseEnter__.bind(this))
				.on('mouseleave', this.__onMouseLeave__.bind(this))
				.on('click', this.__onClick__.bind(this));

			this.labelSpan = this.backgroundEl.append('span')
				.text(this.label);

			this.el = this.backgroundEl.node();
			this.$el = $(this.el);
			this.delegateEvents(this.events);
		}

		this.calcMenuPos();

		if(!this.menu) {
			this.menu = new Backbone.UI.menu.Menu({
				items: this.items,
				parentEl: this.menuParent,
				posX: this.menuPosX,
				posY: this.menuPosY,
				autoDelete: false,
			});
		}
		
		this.menu.render();
		
		return this;
	},

	calcMenuPos: function() {
		var bcr = this.backgroundEl.node().getBoundingClientRect();
		this.menuPosX = bcr.left;
		this.menuPosY = bcr.bottom;
	},

	__onMouseEnter__: function() {
		this.backgroundEl.style({
			'background': this.menuBar.HOVER_BACKGROUND,
		});
		if(typeof this.on === 'object' && typeof this.on.mouseenter === 'function') {
			this.on.mouseenter.apply(this, arguments);
		}
	},

	__onMouseLeave__: function() {
		this.backgroundEl.transition()
			.duration(75)
			.ease('linear')
			.style({
				'background': this.background,
			});
		if(typeof this.on === 'object' && typeof this.on.mouseleave === 'function') {
			this.on.mouseleave.apply(this, arguments);
		}
	},

	__onClick__: function() {
		this.setSelected(true);
		var menuBarItems = this.menuBar.menuBarItems;
		for(var i=0;i<menuBarItems.length;i++) {
			var menuBarItem = menuBarItems[i];
			if(menuBarItem === this) { continue; }
			menuBarItem.setSelected(false);
		}
		if(typeof this.on === 'object' && typeof this.on.click === 'function') {
			this.on.click.apply(this, arguments);
		}
	},

	setSelected: function(selected) {
		this.selected = selected;
		if(this.selected) {
			this.background = this.menuBar.SELECTED_BACKGROUND;
			this.menu.show();
		} else {
			this.background = this.menuBar.UNSELECTED_BACKGROUND;
			this.menu.hide();
		}
		this.backgroundEl.style({
			'background': this.background,
		});

	},
	
});




Backbone.UI.menu.Menu = Backbone.View.extend({
	
	items: null, // []

	parentEl: null,
	backgroundEl: null,
	menuItems: null, // []

	autoDelete: true,
	posX: 0,
	posY: 0,
	hidden: true,

	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		if(!this.items) {this.items = [];}
		if(!this.menuItems) {this.menuItems = [];}
	},

	render: function() {
		
		if(!this.backgroundEl) {
			this.parentEl = d3.select('body');
			this.backgroundEl = this.parentEl.append('div')
				.classed({
					'ui-menu': true
				})
				.style({
					display: (this.hidden) ? 'none' : 'auto',
				});
		}

		this.backgroundEl.style({
			left: (this.posX) + 'px',
			top: (this.posY) + 'px',
		})

		if(this.needsToRecalculateMenuItems()) {
			this.menuItems = [];
			for(var i=0;i<this.items.length;i++) {
				var item = _.clone(this.items[i]);
				item.parentEl = this.backgroundEl;
				item.menu = this;
				var menuItem = new Backbone.UI.menu.MenuItem(item);
				this.menuItems.push(menuItem);
			}
		}

		for(var i=0;i<this.menuItems.length;i++) {
			var menuItem = this.menuItems[i];
			menuItem.render();
		}

		return this;
	},

	setPos: function(posX, posY) {
		this.posX = posX;
		this.posY = posY;
	},

	show: function() {
		Backbone.UI.menu.MenuManager.addActive(this);
		this.hidden = false;
		this.backgroundEl.style({
			display: null,
		});
		return this;
	},

	hide: function() {
		Backbone.UI.menu.MenuManager.removeActive(this);
		this.hidden = true;
		this.backgroundEl.style({
			display: 'none',
		});
		if(this.autoDelete) {
			this.delete();
		}
		return this;
	},

	delete: function() {
		Backbone.UI.menu.MenuManager.removeActive(this);
		if(this.backgroundEl) { this.backgroundEl.remove(); }
		this.remove();
	},

	/**
	 *	Just a quick approximation. Should be redone later.
	 */
	needsToRecalculateMenuItems: function() {
		if(this.items.length !== this.menuItems.length) {
			return true;
		}
		return false;
	},

});




Backbone.UI.menu.MenuItem = Backbone.View.extend({
	
	parentEl: null,
	items: null, // []
	type: 'default', // 'default', 'filefield', 'menuseparator', 'checkbox'

	backgroundEl: null,
	labelSpan: null,
	nestedMenuItems: null, // []

	filefieldEl: null,
	checkboxEl: null,
	
	background:	'#FAFAFA',

	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		if(!this.items) {this.items = [];}
		if(!this.nestedMenuItems) {this.nestedMenuItems = [];}
	},

	render: function() {

		if(!this.backgroundEl) {

			this.backgroundEl = this.parentEl.append('div')
				.classed({
					'ui-menu-item': true
				})
				.style({
					background: this.background,
				})
				.on('mouseenter', this.__onMouseEnter__.bind(this))
				.on('mouseleave', this.__onMouseLeave__.bind(this))
				.on('click', this.__onClick__.bind(this));

			if(this.type === 'checkbox') {

				// this.checkboxEl = this.backgroundEl.append('svg:svg')
				// 	.classed({
				// 		'ui-menu-item-checkbox': true,
				// 	})
				// 	.attr({
				// 		height: 10,
				// 		width: 10,
				// 	});
				// this.checkboxEl.append('svg:rect')
				// 	.attr({
				// 		x: 0, y:0, width: 10, height: 10,
				// 	})
				// 	.style({
				// 		stroke: 'black',
				// 		'stroke-width': 1,
				// 		fill: '#cfcfcf',
				// 	});


			}

			this.labelSpan = this.backgroundEl.append('span')
				.text(this.label);

			if(this.type === 'filefield') {
				this.filefieldEl = this.backgroundEl.append('input')
					.classed({
						'ui-menu-item-filefield': true,
					})
					.attr({
						type: 'file',
					});
				this.filefieldEl.node().addEventListener('change', this.__onFileFieldChange__.bind(this), false);
			}
		}

		if(this.needsToRecalculateNestedMenuItems()) {
			console.error('TODO');
			this.nestedMenuItems = [];
			for(var i=0;i<this.items.length;i++) {
				var item = _.clone(this.items[i]);
				item.parentEl = this.backgroundEl;
				var nestedMenuItem = new Backbone.UI.menu.NestedMenuItem(item);
				this.nestedMenuItems.push(nestedMenuItem);
			}
		}

		for(var i=0;i<this.nestedMenuItems.length;i++) {
			var nestedMenuItem = this.nestedMenuItems[i];
			nestedMenuItem.render();
		}
		

		return this;
	},

	__onMouseEnter__: function() {
		this.backgroundEl.style({
			'background': '#E6E6E6',
		});
		if(typeof this.on === 'object' && typeof this.on.mouseenter === 'function') {
			this.on.mouseenter.apply(this, arguments);
		}
	},

	__onMouseLeave__: function() {
		this.backgroundEl.transition()
			.duration(75)
			.ease('linear')
			.style({
				'background': this.background,
			});
		if(typeof this.on === 'object' && typeof this.on.mouseleave === 'function') {
			this.on.mouseleave.apply(this, arguments);
		}
	},

	__onClick__: function() {
		if(this.type === 'filefield') {
			$(this.filefieldEl.node()).trigger('click');  
		}
		if(typeof this.on === 'object' && typeof this.on.click === 'function') {
			this.on.click.apply(this, arguments);
		}
	},

	__onFileFieldChange__: function() {
		if(typeof this.on === 'object' && typeof this.on.fileselect === 'function') {
			this.on.fileselect.apply(this, arguments);
		}
	},

	/**
	 *	Just a quick approximation. Should be redone later.
	 */
	needsToRecalculateNestedMenuItems: function() {
		if(this.items.length !== this.nestedMenuItems.length) {
			return true;
		}
		return false;
	},

});


















































