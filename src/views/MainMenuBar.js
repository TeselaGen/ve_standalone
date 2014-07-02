

VE.MainMenuBar = Backbone.UI.menu.MenuBar.extend({
	
	parentEl: null,
	ve: null,

	items: null, // []


	initialize: function(elements) {
		var me = this;
		// console.log(elements.ve.options.showComplementarySequence)
		if(!elements.items) {
			this.items = [
				{
					label: 'File',
					items: [
						{
							label: 'New Sequence',
							on: {
								click: function() {
									me.ve.trigger(VE.Event.BLANK_NEW_SEQUENCE);
								},
							},
						},
						// {
						// 	type: 'menuseparator',
						// },
						// {
						// 	label: 'Save',
						// },
						// {
						// 	label: 'Save As...',
						// },
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
							items: [
								{
									label: 'GENBANK',
									on: {
										click: function() {
											var gb = VE.ExportManager.sequenceModelToGenbank(me.ve.model);
											VE.ExportManager.saveStringToFile(gb, me.ve.model.get('name') + '.gb');


										},
									},
								},
								// FASTA
								// SBOL XML/RDF
							],
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
					items: [
						{
							label: 'Cut',
							on: {
								click: function() {
									// me.ve.cutSelectionToClipboard();
								},
							},
						},
						{
							label: 'Copy',
							on: {
								click: function() {
									// me.ve.copySelectionToClipboard();
								},
							},
						},
						{
							label: 'Paste',
							on: {
								click: function() {
									// me.ve.pasteFromClipboard();
								},
							},
						},
						{
							type: 'menuseparator',
						},
						{
							label: 'Undo',
							on: {
								click: function() {
									me.ve.undo();
								},
							},
						},
						{
							label: 'Redo',
							on: {
								click: function() {
									me.ve.redo();
								},
							},
						},
					],
				},
				{
					label: 'View',
					items: [
						{
							label: 'Circular',
							type: 'checkbox',
							checked: (elements.ve.options.viewMode === 'pie') ? true : false,
							on: {
								change: function(checked) {
									if(checked) {
										me.ve.options.viewMode = 'pie';
									} else {
										me.ve.options.viewMode = 'rail';
									}

									var items = this.menu.items;
									for(var i=0,ii=items.length;i<ii;i++) {
										var item = items[i];
										if(item.label === 'Linear') {
											item.setChecked(!checked, true);
											break;
										}
									}

									me.ve.trigger(VE.VisibilityEvent.VIEW_MODE_CHANGED, me.ve.options.viewMode);
									
								},
							},
						},
						{
							label: 'Linear',
							type: 'checkbox',
							checked: (elements.ve.options.viewMode === 'rail') ? true : false,
							on: {
								change: function(checked) {
									if(checked) {
										me.ve.options.viewMode = 'rail';
									} else {
										me.ve.options.viewMode = 'pie';
									}

									var items = this.menu.items;
									for(var i=0,ii=items.length;i<ii;i++) {
										var item = items[i];
										if(item.label === 'Circular') {
											item.setChecked(!checked, true);
											break;
										}
									}

									me.ve.trigger(VE.VisibilityEvent.VIEW_MODE_CHANGED, me.ve.options.viewMode);
									
								},
							},
						},
						{
							type: 'menuseparator',
						},
						{
							label: 'Map Caret',
							type: 'checkbox',
							checked: elements.ve.options.showMapCaret,
							on: {
								click: function() {
									me.ve.options.showMapCaret = !me.ve.options.showMapCaret;
									me.ve.trigger(VE.VisibilityEvent.SHOW_MAP_CARET_CHANGED, me.ve.options.showMapCaret);

								},
							},
						},
						{
							label: 'Features',
							type: 'checkbox',
							checked: elements.ve.options.showFeatures,
							on: {
								click: function() {
									me.ve.options.showFeatures = !me.ve.options.showFeatures;
									me.ve.trigger(VE.VisibilityEvent.SHOW_FEATURES_CHANGED, me.ve.options.showFeatures);

								},
							}
						},
						{
							label: 'Alignments',
							checked: elements.ve.options.showAlignments,
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
							checked: elements.ve.options.showCutSites,
							on: {
								click: function() {
									
									me.ve.options.showCutSites = !me.ve.options.showCutSites;
									me.ve.trigger(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, me.ve.options.showCutSites);

								},
							}
						},
						{
							label: 'ORFs',
							// checked: elements.ve.options.showOrfs,
							// on: {
							// 	click: function() {
							// 		console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');
									
							// 		me.ve.options.showOrfs = !me.ve.options.showOrfs;
							// 		me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs);

							// 	},
							// },
							items: [
								{
									label: 'All Frames',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfFrames.length === 3) ? true : false,
									on: {
										change: function() {
											if(this.checked) {
												me.ve.options.orfFrames = [0, 1, 2];
												me.ve.options.showOrfs = true;
											} else {
												me.ve.options.orfFrames = [];
												// me.ve.options.showOrfs = false;
												me.ve.options.showOrfs = (me.ve.options.orfRevComFrames.length > 0) ? true : false;
											}

											var items = this.menu.items;
											for(var i=0,ii=items.length;i<ii;i++) {
												items[i].setChecked(this.checked, true);
											}

											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, me.ve.options.orfFrames, me.ve.options.orfRevComFrames);

										},
									},
								},
								{
									label: 'Frame 1',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfFrames.indexOf(0) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfFrames.indexOf(2) === -1) ? false : true;
											var orfFrames = [];
											if(this.checked) orfFrames.push(0);
											if(_1) orfFrames.push(1);
											if(_2) orfFrames.push(2);
											me.ve.options.orfFrames = orfFrames;
											// me.ve.options.showOrfs = (orfFrames.length > 0);
											me.ve.options.showOrfs = (orfFrames.length > 0 || me.ve.options.orfRevComFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
								{
									label: 'Frame 2',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfFrames.indexOf(1) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfFrames.indexOf(2) === -1) ? false : true;
											var orfFrames = [];
											if(_0) orfFrames.push(0);
											if(this.checked) orfFrames.push(1);
											if(_2) orfFrames.push(2);
											me.ve.options.orfFrames = orfFrames;
											// me.ve.options.showOrfs = (orfFrames.length > 0);
											me.ve.options.showOrfs = (orfFrames.length > 0 || me.ve.options.orfRevComFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
								{
									label: 'Frame 3',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfFrames.indexOf(2) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfFrames.indexOf(2) === -1) ? false : true;
											var orfFrames = [];
											if(_0) orfFrames.push(0);
											if(_1) orfFrames.push(1);
											if(this.checked) orfFrames.push(2);
											me.ve.options.orfFrames = orfFrames;
											// me.ve.options.showOrfs = (orfFrames.length > 0);
											me.ve.options.showOrfs = (orfFrames.length > 0 || me.ve.options.orfRevComFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
							],
						},
						{
							label: 'Revcom ORFs',
							// checked: elements.ve.options.showOrfs,
							// on: {
							// 	click: function() {
							// 		console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');
									
							// 		me.ve.options.showOrfs = !me.ve.options.showOrfs;
							// 		me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs);

							// 	},
							// },
							items: [
								{
									label: 'All Frames',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfRevComFrames.length === 3) ? true : false,
									on: {
										change: function() {
											if(this.checked) {
												me.ve.options.orfRevComFrames = [0, 1, 2];
												me.ve.options.showOrfs = true;
											} else {
												me.ve.options.orfRevComFrames = [];
												// me.ve.options.showOrfs = false;
												me.ve.options.showOrfs = (me.ve.options.orfFrames.length > 0) ? true : false;
											}

											var items = this.menu.items;
											for(var i=0,ii=items.length;i<ii;i++) {
												items[i].setChecked(this.checked, true);
											}

											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, me.ve.options.orfFrames, me.ve.options.orfRevComFrames);

										},
									},
								},
								{
									label: 'Frame 1',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfRevComFrames.indexOf(0) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfRevComFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfRevComFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfRevComFrames.indexOf(2) === -1) ? false : true;
											var orfRevComFrames = [];
											if(this.checked) orfRevComFrames.push(0);
											if(_1) orfRevComFrames.push(1);
											if(_2) orfRevComFrames.push(2);
											me.ve.options.orfRevComFrames = orfRevComFrames;
											// me.ve.options.showOrfs = (orfRevComFrames.length > 0);
											me.ve.options.showOrfs = (orfRevComFrames.length > 0 || me.ve.options.orfFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, me.ve.options.orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
								{
									label: 'Frame 2',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfRevComFrames.indexOf(1) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfRevComFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfRevComFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfRevComFrames.indexOf(2) === -1) ? false : true;
											var orfRevComFrames = [];
											if(_0) orfRevComFrames.push(0);
											if(this.checked) orfRevComFrames.push(1);
											if(_2) orfRevComFrames.push(2);
											me.ve.options.orfRevComFrames = orfRevComFrames;
											// me.ve.options.showOrfs = (orfRevComFrames.length > 0);
											me.ve.options.showOrfs = (orfRevComFrames.length > 0 || me.ve.options.orfFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, me.ve.options.orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
								{
									label: 'Frame 3',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfRevComFrames.indexOf(2) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfRevComFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfRevComFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfRevComFrames.indexOf(2) === -1) ? false : true;
											var orfRevComFrames = [];
											if(_0) orfRevComFrames.push(0);
											if(_1) orfRevComFrames.push(1);
											if(this.checked) orfRevComFrames.push(2);
											me.ve.options.orfRevComFrames = orfRevComFrames;
											// me.ve.options.showOrfs = (orfRevComFrames.length > 0);
											me.ve.options.showOrfs = (orfRevComFrames.length > 0 || me.ve.options.orfFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, me.ve.options.orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
							],
						},
						{
							type: 'menuseparator',
						},
						{
							label: 'Complementary',
							type: 'checkbox',
							checked: elements.ve.options.showComplementarySequence,
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
							checked: elements.ve.options.showSpaceEvery10Bp,
							on: {
								click: function() {
									me.ve.options.showSpaceEvery10Bp = !me.ve.options.showSpaceEvery10Bp;
									me.ve.trigger(VE.VisibilityEvent.SHOW_SPACES_CHANGED, me.ve.options.showSpaceEvery10Bp);
								},
							}
						},
						{
							label: 'Sequence AA',
							// on: {
							// 	click: function() {
							// 		console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');

							// 	},
							// },
							items: [
								{
									label: 'All Frames',
									type: 'checkbox',
									checked: (elements.ve.options.showAminoAcids && elements.ve.options.aminoAcidFrames.length === 3) ? true : false,
									on: {
										change: function() {
											if(this.checked) {
												me.ve.options.aminoAcidFrames = [0, 1, 2];
												me.ve.options.showAminoAcids = true;
											} else {
												me.ve.options.aminoAcidFrames = [];
												me.ve.options.showAminoAcids = false;
											}

											var items = this.menu.items;
											for(var i=0,ii=items.length;i<ii;i++) {
												items[i].setChecked(this.checked, true);
											}

											me.ve.trigger(VE.VisibilityEvent.SHOW_SEQUENCE_AA_CHANGED, me.ve.options.showAminoAcids, me.ve.options.aminoAcidFrames);

										},
									},
								},
								{
									label: 'Frame 1',
									type: 'checkbox',
									checked: (elements.ve.options.showAminoAcids && elements.ve.options.aminoAcidFrames.indexOf(0) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.aminoAcidFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.aminoAcidFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.aminoAcidFrames.indexOf(2) === -1) ? false : true;
											var aminoAcidFrames = [];
											if(this.checked) aminoAcidFrames.push(0);
											if(_1) aminoAcidFrames.push(1);
											if(_2) aminoAcidFrames.push(2);
											me.ve.options.aminoAcidFrames = aminoAcidFrames;
											me.ve.options.showAminoAcids = (aminoAcidFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_SEQUENCE_AA_CHANGED, me.ve.options.showAminoAcids, aminoAcidFrames);
										},
									},
								},
								{
									label: 'Frame 2',
									type: 'checkbox',
									checked: (elements.ve.options.showAminoAcids && elements.ve.options.aminoAcidFrames.indexOf(1) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.aminoAcidFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.aminoAcidFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.aminoAcidFrames.indexOf(2) === -1) ? false : true;
											var aminoAcidFrames = [];
											if(_0) aminoAcidFrames.push(0);
											if(this.checked) aminoAcidFrames.push(1);
											if(_2) aminoAcidFrames.push(2);
											me.ve.options.aminoAcidFrames = aminoAcidFrames;
											me.ve.options.showAminoAcids = (aminoAcidFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_SEQUENCE_AA_CHANGED, me.ve.options.showAminoAcids, aminoAcidFrames);
										},
									},
								},
								{
									label: 'Frame 3',
									type: 'checkbox',
									checked: (elements.ve.options.showAminoAcids && elements.ve.options.aminoAcidFrames.indexOf(2) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.aminoAcidFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.aminoAcidFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.aminoAcidFrames.indexOf(2) === -1) ? false : true;
											var aminoAcidFrames = [];
											if(_0) aminoAcidFrames.push(0);
											if(_1) aminoAcidFrames.push(1);
											if(this.checked) aminoAcidFrames.push(2);
											me.ve.options.aminoAcidFrames = aminoAcidFrames;
											me.ve.options.showAminoAcids = (aminoAcidFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_SEQUENCE_AA_CHANGED, me.ve.options.showAminoAcids, aminoAcidFrames);
										},
									},
								},
							],
						},
						// {
						// 	label: 'Revcom AA',
						// 	on: {
						// 		click: function() {
						// 			console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');

						// 		},
						// 	}
						// },
						{
							type: 'menuseparator',
						},
						{
							label: 'Feature Labels',
							type: 'checkbox',
							checked: elements.ve.options.showFeatureLabels,
							on: {
								click: function() {
									me.ve.options.showFeatureLabels = !me.ve.options.showFeatureLabels;
									me.ve.trigger(VE.VisibilityEvent.SHOW_FEATURE_LABELS_CHANGED, me.ve.options.showFeatureLabels);

								},
							}
						},
						{
							label: 'Alignment Labels',
							type: 'checkbox',
							checked: elements.ve.options.showAlignmentLabels,
							on: {
								click: function() {
									me.ve.options.showAlignmentLabels = !me.ve.options.showAlignmentLabels;
									me.ve.trigger(VE.VisibilityEvent.SHOW_ALIGNMENT_LABELS_CHANGED, me.ve.options.showAlignmentLabels);

								},
							}
						},
						{
							label: 'Cut Site Labels',
							type: 'checkbox',
							checked: elements.ve.options.showCutSiteLabels,
							on: {
								click: function() {
									me.ve.options.showCutSiteLabels = !me.ve.options.showCutSiteLabels;
									me.ve.trigger(VE.VisibilityEvent.SHOW_CUTSITE_LABELS_CHANGED, me.ve.options.showCutSiteLabels);

								},
							}
						},
						{
							type: 'menuseparator',
						},
						{
							label: 'Annotate Panel Preview',
							type: 'checkbox',
							checked: elements.ve.options.showAnnotatePreview,
							on: {
								click: function() {
									me.ve.options.showAnnotatePreview = !me.ve.options.showAnnotatePreview;
									me.ve.trigger(VE.VisibilityEvent.SHOW_ANNOTATE_PREVIEW_CHANGED, me.ve.options.showAnnotatePreview);

								},
							}
						},
					],
				},
				{
					label: 'Tools',
				},
			];
		}

		Backbone.UI.menu.MenuBar.prototype.initialize.call(this, elements);

		this.$el.addClass('ve-main-menubar')

	},




});




























































