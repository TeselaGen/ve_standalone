




var menubar = new Backbone.UI.menu.MenuBar({

	renderTo: $('body'),

	items: [
		{
			label: 'File',
			items: [
				{
					label: 'New Sequence',
				},
				{
					type: 'menuseparator',
				},
				{
					label: 'Save',
				},
				{
					label: 'Save As...',
				},
				{
					type: 'menuseparator',
				},
				{
					label: 'Open a Sequence File',
					type: 'filefield',
					on: {
						fileselect: function(evt) {
							var files = evt.target.files;
							var file = files[0];
							me.ve.trigger(VE.IoEvent.PARSE_SEQUENCE_FROM_FILE, file, function(sequence) {
								// console.log(sequence);
								me.ve.trigger(VE.Event.NEW_SEQUENCE_OPENED, sequence);
							});
						},
					},
				},
				{
					label: 'Export To File',
				},
				{
					type: 'menuseparator',
				},
				{
					label: 'Print',
				},
				{
					type: 'menuseparator',
				},
				{
					label: 'Properties',
				},
				{
					label: 'Preferences...',
				},
			],
		},
		{
			label: 'Edit',
		},
		{
			label: 'View',
			items: [
				{
					label: 'Circular',
					type: 'checkbox',
				},
				{
					label: 'Linear',
					type: 'checkbox',
				},
				{
					type: 'menuseparator',
				},
				{
					label: 'Map Caret',
					type: 'checkbox',
					on: {
						click: function() {
							
						},
					}
				},
				{
					label: 'Features',
					type: 'checkbox',
					on: {
						click: function() {
							
						},
					}
				},
				{
					label: 'Alignments',
					on: {
						click: function() {
							console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');
							me.ve.options.showAlignments = !me.ve.options.showAlignments;
							me.ve.trigger(VE.VisibilityEvent.SHOW_ALIGNMENTS_CHANGED, me.ve.options.showAlignments);

						},
					}
				},
				{
					label: 'Cut Sites',
					type: 'checkbox',
					on: {
						click: function() {
							
							me.ve.options.showCutSites = !me.ve.options.showCutSites;
							me.ve.trigger(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, me.ve.options.showCutSites);

						},
					}
				},
				{
					label: 'ORFs',
					on: {
						click: function() {
							console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');
							
							me.ve.options.showOrfs = !me.ve.options.showOrfs;
							me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs);

						},
					}
				},
				{
					type: 'menuseparator',
				},
				{
					label: 'Complementary',
					type: 'checkbox',
					on: {
						click: function() {
							me.ve.options.showComplementarySequence = !me.ve.options.showComplementarySequence;
							me.ve.trigger(VE.VisibilityEvent.SHOW_COMPLEMENTARY_CHANGED, me.ve.options.showComplementarySequence);
						},
					}
				},
				{
					label: 'Spaces',
					type: 'checkbox',
					on: {
						click: function() {
							
						},
					}
				},
				{
					label: 'Sequence AA',
					on: {
						click: function() {
							console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');

						},
					}
				},
				{
					label: 'Revcom AA',
					on: {
						click: function() {
							console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');

						},
					}
				},
				{
					type: 'menuseparator',
				},
				{
					label: 'Feature Labels',
					type: 'checkbox',
					on: {
						click: function() {
							
						},
					}
				},
				{
					label: 'Alignment Labels',
					type: 'checkbox',
					on: {
						click: function() {
							
						},
					}
				},
				{
					label: 'Cut Site Labels',
					type: 'checkbox',
					on: {
						click: function() {
							
						},
					}
				},
			],
		},
		{
			label: 'Tools',
		},
	],



});

























// var menu = new Backbone.UI.menu.Menu({
// 	posX: 50,
// 	posY: 70,

// 	items: [
// 		{
// 			label: 'New Sequence',
// 		},
// 		{
// 			type: 'menuseparator',
// 		},
// 		{
// 			label: 'Save',
// 		},
// 		{
// 			label: 'Save As...',
// 		},
// 		{
// 			type: 'menuseparator',
// 		},
// 		{
// 			label: 'Open a Sequence File',
// 			type: 'filefield',
// 			// on: {
// 			// 	fileselect: function(evt) {
// 			// 		var files = evt.target.files;
// 			// 		var file = files[0];
// 			// 		me.ve.trigger(VE.IoEvent.PARSE_SEQUENCE_FROM_FILE, file, function(sequence) {
// 			// 			// console.log(sequence);
// 			// 			me.ve.trigger(VE.Event.NEW_SEQUENCE_OPENED, sequence);
// 			// 		});
// 			// 	},
// 			// },
// 		},
// 		{
// 			label: 'Export To File',
// 		},
// 		{
// 			type: 'menuseparator',
// 		},
// 		{
// 			label: 'Print',
// 		},
// 		{
// 			type: 'menuseparator',
// 		},
// 		{
// 			label: 'Properties',
// 		},
// 		{
// 			label: 'Preferences...',
// 		},
// 	],
// });















