(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};






var RadioGroup = Backbone.UI.RadioGroup = Backbone.View.extend({
	
	tagName: 'div',
	className: 'ui-radio-group',

	renderTo: null,
	items: null, // []
	onlyOneButtonMustBeSelected: false,

	buttons: null, // []


	initialize: function(elements) {
		var me = this;

		for(var x in elements) {
			// if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		this.buttons = [];

		for(var i=0,ii=this.items.length;i<ii;i++) {
			var item = this.items[i];
			item = _.clone(item);
			item.renderTo = this.el;
			item.radioGroup = this;
			var radioButton = new RadioButton(item);
			// this.listenTo(radioButton);
			this.buttons.push(radioButton);
		}

		this.$el.on('click', 'svg.ui-radio-button', function(evt) {
			var buttons = me.buttons;
			if(me.onlyOneButtonMustBeSelected) {
				for(var i=0,ii=buttons.length;i<ii;i++) {
					var button = buttons[i];
					if(button.radioSvg.node() === this) {
						button.setSelected(true);
					} else {
						button.setSelected(false);
					}
				}
			}
		});

		this.$el.appendTo(this.renderTo);
	},

	setSelected: function(index) {
		var buttons = this.buttons;
		if(this.onlyOneButtonMustBeSelected) {
			for(var i=0,ii=buttons.length;i<ii;i++) {
				var button = buttons[i];
				if(i === index) {
					button.setSelected(true);
				} else {
					button.setSelected(false);
				}
			}
		} else {
			buttons[index].setSelected(true);
		}
	},

	getSelected: function() {
		var selected = [];
		var buttons = this.buttons;
		for(var i=0,ii=buttons.length;i<ii;i++) {
			var button = buttons[i];
			if(button.selected) {
				selected.push(i);
			}
		}
		return selected;
	},



});






var RadioButton = Backbone.UI.RadioButton = Backbone.View.extend({
	
	tagName: 'div',
	className: 'ui-radio-button',

	renderTo: null,
	label: '',
	selected: false,

	radioSvg: null,


	initialize: function(elements) {
		var me = this;
		for(var x in elements) {
			// if(x === 'on') { continue; }
			this[x] = elements[x];
		}


		this.radioSvg = createRadioSvg(this.el);
		this.radioSvg.classed({ 'selected': this.selected, 'unselected': !this.selected });

		this.labelSpan = $(document.createElement('span'))
			.text(this.label)
			.appendTo(this.$el);

		this.$el.appendTo(this.renderTo);
	},

	setSelected: function(selected, silent) {
		if(this.selected !== selected) {
			this.selected = selected;
			this.radioSvg.classed({
				'selected': this.selected,
				'unselected': !this.selected,
			});
			if(!silent) { this.trigger('change', selected); }
		}
	},

	toggle: function(silent) {
		this.setSelected(!this.selected, silent);
	},




});


function createRadioSvg(el) {
	var svg = d3.select(el).append('svg:svg')
		.attr({
			class: 'ui-radio-button',
		});

	svg.append('svg:circle')
		.attr({
			class: 'ui-radio-button-outline',
			r: 6.5,
			transform: 'translate(7.5, 7.5)',
		});

	svg.append('svg:circle')
		.attr({
			class: 'ui-radio-button-center',
			r: 4,
			transform: 'translate(7.5, 7.5)',
		});

	return svg;
}


























































})();