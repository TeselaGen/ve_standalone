(function(){





VE.FeatureInspectionWindow = Backbone.UI.Window.extend({
	
	header: null,
	body: null,
	footer: null,


	initialize: function(elements) {
		var me = this;

		var defaultElements = {

			css: {
				'width': '400px',
				// 'min-height': '500px',

				'top': '30px',
				'left': '30px',
			},

			// title: "New Annotation",

			footerButtons: [
				{
					label: 'Cancel',
					onclick: function(evt) {
						// console.log('cancel');
						// me.hide();
						me.trigger('cancel-click', me);
						me.hide();

					},
				},
				{
					label: 'Ok',
					onclick: function(evt) {
						// console.log('ok');
						me.trigger('ok-click', me);
						me.hide();
						
					},
				},
			],

		};

		// defaultElements.title = elements.title || "";

		// defaultElements.posX = elements.posX;
		// defaultElements.posY = elements.posY;

		Backbone.UI.Window.prototype.initialize.call(this, defaultElements);

		this.$el.addClass('feature-inspector-window');


		var body = this.body;


		var nameRow = $(document.createElement('div'))
			.addClass('feature-inspector-row');

		var nameLabel = $(document.createElement('div'))
			.text('Name:')
			.appendTo(nameRow);

		var nameInput = this.nameInput = $(document.createElement('input'))
			.attr({
				type: 'text',
				// size: 1,
			})
			.appendTo(nameRow);

		nameRow.appendTo(body);


		var strandRow = $(document.createElement('div'))
			.addClass('feature-inspector-row');

		var strandLabel = $(document.createElement('div'))
			.text('Strand:')
			.appendTo(strandRow);

		var strandRadioGroup = this.strandRadioGroup = new Backbone.UI.RadioGroup({
			renderTo: strandRow,
			onlyOneButtonMustBeSelected: true,
			items: [
				{
					label: 'Positive',
				},
				{
					label: 'Negative',
				},
			],
		});

		strandRow.appendTo(body);


		var typeRow =  $(document.createElement('div'))
			.addClass('feature-inspector-row');

		var typeLabel = $(document.createElement('div'))
			.text('Type:')
			.appendTo(typeRow);

		var typeComboBox = this.typeComboBox = new Backbone.UI.Combobox({
			renderTo: typeRow,
			defaultValue: VE.Constants.FEATURE_TYPES[0],
			items: VE.Constants.FEATURE_TYPES,
		});

		typeRow.appendTo(body);


		var startRow = $(document.createElement('div'))
			.addClass('feature-inspector-row');

		var startLabel = $(document.createElement('div'))
			.text('Start:')
			.appendTo(startRow);

		var startInput = this.startInput = $(document.createElement('input'))
			.attr({
				type: 'number',
				// size: 1,
			})
			.appendTo(startRow);

		startRow.appendTo(body);


		var endRow = $(document.createElement('div'))
			.addClass('feature-inspector-row');

		var endLabel = $(document.createElement('div'))
			.text('End:')
			.appendTo(endRow);

		var endInput = this.endInput = $(document.createElement('input'))
			.attr({
				type: 'number',
				// size: 1,
			})
			.appendTo(endRow);

		endRow.appendTo(body);


		if(typeof elements === 'object') {

			var title = elements.title || "";
			var start = elements.startBp || 0;
			var end = elements.endBp || 0;
			var name = elements.name || "";
			var strand = elements.strand || 1;

			this.setTitle(title);
			startInput.prop('value', start);
			endInput.prop('value', end);
			nameInput.prop('value', name);

			strandRadioGroup.setSelected(strand === 1 ? 0 : 1);

			if(elements.type) {
				typeComboBox.setValue(elements.type);
			}

		}

	},


	createModel: function() {
		var start = parseInt(this.startInput.prop('value'));
		var end = parseInt(this.endInput.prop('value'));
		var name = this.nameInput.prop('value');
		var strand = (this.strandRadioGroup.getSelected()[0] === 0) ? 1 : -1;
		var type = this.typeComboBox.value;
		type = (typeof type === 'object') ? type.data : type;
		
		// console.warn('TODO: validate feature');

		// if(isNan(end) || isNan(start)) {
		// 	return null;
		// }

		// if(name.trim().length === 0) {
		// 	return null;
		// }

		var annot = new VE.Annotation({
			start: start,
			end: end,
			name: name,
			strand: strand,
			type: type,
		});

		// console.log(annot);

		


		return annot;
	},	





});























































})();