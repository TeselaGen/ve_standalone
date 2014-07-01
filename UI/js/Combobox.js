(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};






var Combobox = Backbone.UI.Combobox = Backbone.View.extend({
	
	tagName: 'div',
	className: 'ui-combobox',

	renderTo: null,
	items: null, // []
	defaultValue: "",

	displayField: null,
	arrowDiv: null,
	itemsList: null,


	initialize: function(elements) {
		var me = this;

		for(var x in elements) {
			// if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		var defaultDisplay = (typeof this.defaultValue === 'object') ? this.defaultValue.label : this.defaultValue;
		this.value = defaultDisplay;
		
		this.displayField = $(document.createElement('div'))
			.addClass('ui-combobox-display-field')
			.text(defaultDisplay)
			.appendTo(this.$el);

		this.arrowDiv = $(document.createElement('div'))
			.addClass('ui-combobox-arrow')
			.on('click', onArrowDivClick.bind(this))
			.appendTo(this.$el);

		this.itemsList = new ItemsList({
			combobox: this,
			items: this.items,
		});

		this.itemsList.delegate('click', 'li', onItemClick.bind(this));

		this.$el.appendTo(this.renderTo);
	},

	setValue: function(value) {
		this.value = value;
		var display = (typeof value === 'object') ? value.label : value;
		this.displayField.text(display);
	},


});


function onItemClick(evt) {
	var target = $(evt.target);
	var index = Number(target.attr('index'));
	var item = this.items[index];
	this.setValue(item);
	this.itemsList.hide();
}


function onArrowDivClick(evt) {
	if(this.itemsList.hidden) {
		this.itemsList.show();
	} else {
		this.itemsList.hide();
	}
}







var ItemsList = Backbone.View.extend({
	
	tagName: 'div',
	className: 'ui-combobox-items',

	items: null, // []
	posX: 0,
	posY: 0,
	hidden: true,

	ul: null,


	initialize: function(elements) {
		var me = this;
		this.$parentEl = $('body');

		for(var x in elements) {
			// if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		this.setPos(this.posX, this.posY);

		this.ul = $(document.createElement('ul'));

		for(var i=0;i<this.items.length;i++) {
			var item = this.items[i];
			var label = item.label;

			var li = $(document.createElement('li'))
				.attr('index', i)
				.text(label)
				.appendTo(this.ul);

		}

		// this.ul.css('width', this.combobox.$el.outerWidth());

		if(this.hidden) {
			this.$el.addClass('ui-hidden-combobox-items');
		}

		this.ul.appendTo(this.$el);

		this.$el.appendTo(this.$parentEl);
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
		this.hidden = false;
		this.$el.removeClass('ui-hidden-combobox-items');
		this.$el.css('width', this.combobox.$el.outerWidth());
		var offset = this.combobox.$el.offset();
		var height = this.combobox.$el.outerHeight();
		var x = offset.left;
		var y = offset.top + height;
		this.setPos(x, y);

		this.trigger('show');
	},

	hide: function() {
		this.hidden = true;
		this.$el.addClass('ui-hidden-combobox-items');
		this.trigger('hide');
	},


});























































})();