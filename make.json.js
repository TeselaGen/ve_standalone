/**
 * This is `.js` instead of `.json` because JSON doesn't support commenting.
 */

{
	"name": "ve_standalone",
	// "title": 
	// "description":
	// "version":


	"sources": [
		// =====================================================================
		//  BioJs 'pseudo-module'
		// =====================================================================
		'Bio/alphabet/DnaAlphabet.js',

		'Bio/enzymes/RestrictionEnzyme.js',

		'Bio/tools/OrfFinder.js',
		'Bio/tools/Translator.js',
		'Bio/tools/SequenceAligner.js',
		'Bio/tools/CutSiteFinder.js',






		// =====================================================================
		//  UI 'pseudo-module'
		// =====================================================================
		"UI/js/menu/Menu.js",
		"UI/js/menu/MenuBar.js",
		"UI/js/menu/ContextMenu.js",
		"UI/js/Panel.js",
		"UI/js/PhonyScrollContainer.js",
		"UI/js/Window.js",
		"UI/js/RadioGroup.js",
		"UI/js/Combobox.js",






		// =====================================================================
		//  ve_standalone 'pseudo-module'
		// =====================================================================
		'src/controller/Ve.js',


		'src/event/Events.js',


		'src/constants/Constants.js',


		'src/models/VectorEditor.js',

		'src/models/Sequence.js',
		'src/models/Annotation.js',


		'src/views/VePanel.js',
		'src/views/MainMenuBar.js',
		'src/views/VectorPanel.js',
		'src/views/AnnotatePanel.js',

		'src/views/common/FeatureInspectionWindow.js',

		'src/views/annotate/AnnotateContainer.js',
		'src/views/pie/PieContainer.js',
		'src/views/rail/RailContainer.js',


		'src/manager/RestrictionEnzymeManager.js',
		// 'src/manager/WorkersManager.js',
		'src/manager/EditingManager.js',
		'src/manager/CollaborativeUndoManager.js',
		'src/manager/ExportManager.js',


		'src/renderer/Util.js',

		'src/renderer/annotate/FeatureRenderer.js',
		'src/renderer/annotate/CutSiteRenderer.js',
		'src/renderer/annotate/OrfRenderer.js',
		'src/renderer/annotate/SelectionLayerRenderer.js',
		'src/renderer/annotate/AlignmentRenderer.js',
		'src/renderer/annotate/PreviewRenderer.js',

		'src/renderer/pie/FeatureRenderer.js',
		'src/renderer/pie/LabelRenderer.js',
		'src/renderer/pie/CutSiteRenderer.js',
		'src/renderer/pie/OrfRenderer.js',
		'src/renderer/pie/SelectionLayerRenderer.js',
		'src/renderer/pie/AlignmentRenderer.js',

		'src/renderer/rail/FeatureRenderer.js',
		'src/renderer/rail/OrfRenderer.js',
		'src/renderer/rail/CutSiteRenderer.js',
		'src/renderer/rail/LabelRenderer.js',

		'src/renderer/pie3d/Pie3dRenderer.js',

		'src/renderer/webgl/WebGlUtils.js',
		'src/renderer/webgl/TextRenderer.js',

		'src/renderer/webgl/annotate/PreviewRenderer.js',


		'src/ot/util/StructOperation.js',
		'src/ot/util/RidmOperation.js',
		'src/ot/util/StringOperation.js',
		'src/ot/util/IndexShiftOperation.js',

		'src/ot/SequenceOperation.js',
		'src/ot/SymbolListOperation.js',
		'src/ot/features/FeatureOperation.js',
		'src/ot/features/FeatureModification.js',

		
		'src/parsers/GenbankParser.js',
		'src/parsers/FastaParser.js',
		'src/parsers/ParserUtil.js',
		'src/parsers/SequenceParser.js',


		'src/adaptors/TeselagenAdaptor.js',


		'src/VectorEditor.js',

	],


	"stylesheets": [
		// =====================================================================
		//  UI 'pseudo-module'
		// =====================================================================
		"UI/css/Menu.css",
		"UI/css/PhonyScrollContainer.css",
		"UI/css/Window.css",
		"UI/css/RadioGroup.css",
		"UI/css/Combobox.css",

		// =====================================================================
		//  ve_standalone 'pseudo-module'
		// =====================================================================
		"resources/css/VectorEditor.css",
	],


	"pre": [
		"src/ve_pre.js",
	],


	"dependencies": [
		
		{
			name: "d3.v3",
			src: "resources/js/d3.v3.min.js",
		},
		{
			name: "jquery-1.10.2",
			src: "resources/js/jquery-1.10.2.min.js",
		},
		{
			name: "underscore",
			src: "resources/js/underscore.js",
		},
		{
			name: "backbone",
			src: "resources/js/backbone.js",
		},
		{
			name: "crc32",
			src: "resources/js/crc32.js",
		},
		{
			name: "FileSaver",
			src: "resources/js/FileSaver.js",
		},

	],


	// "workers": [
	// 	{
	// 		"proxy": "workers/SequenceParserWorker.js",

	// 		"main": "src/workers/SequenceParserWorker.js",

	// 		"sources": [
	// 			'src/workers/lib/asmcrypto.js',
	// 			'src/workers/lib/xml-for-cocoonjs.js',

	// 			'src/workers/util/NameUtils.js',
	// 			'src/workers/util/StringUtil.js',
	// 			'src/workers/util/FileWrapper.js',
	// 			'src/workers/util/ParserUtil.js',
	// 			'src/workers/util/XmlToJson.js',
	// 			'src/workers/util/FileUtil.js',
	// 			'src/workers/util/Throttler.js',

	// 			'src/workers/parser/GenbankParser.js',
	// 			'src/workers/parser/FastaParser.js',
	// 			'src/workers/parser/JbeiseqParser.js',
	// 			'src/workers/parser/SbolParser.js',

	// 			'src/workers/util/ajax.js',
	// 		],
	// 	},
	// ],





}










































































































