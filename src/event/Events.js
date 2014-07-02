(function() {







var eventsObj = {
	
	VisibilityEvent: {
		SHOW_FEATURES_CHANGED: "ShowFeaturesChanged",
		SHOW_ALIGNMENTS_CHANGED: "ShowAlignmentsChanged",
		SHOW_CUTSITES_CHANGED: "ShowCutSitesChanged",
		SHOW_ORFS_CHANGED: "ShowOrfsChanged",
		SHOW_COMPLEMENTARY_CHANGED: "ShowComplementaryChanged",
		SHOW_SPACES_CHANGED: "ShowSpacesChanged",
		SHOW_SEQUENCE_AA_CHANGED: "ShowSequenceAAChanged",
		SHOW_REVCOM_AA_CHANGED: "ShowRevcomAAChanged",
		SHOW_FEATURE_LABELS_CHANGED: "ShowFeatureLabelsChanged",
		SHOW_ALIGNMENT_LABELS_CHANGED: "ShowAlignmentLabelsChanged",
		SHOW_CUTSITE_LABELS_CHANGED: "ShowCutSiteLabelsChanged",
		SHOW_MAP_CARET_CHANGED: "ShowMapCaretChanged",

		// View mode changes from pie <-> rail.
		VIEW_MODE_CHANGED: "ViewModeChanged", // viewMode

		SHOW_ANNOTATE_PREVIEW_CHANGED: "VE::VisibilityEvent::SHOW_ANNOTATE_PREVIEW_CHANGED", // showAnnotatePreview
	},

	SelectionEvent: {
		SELECT: "VE::SelectionEvent::SELECT", // startBpIndex, endBpIndex
		CHANGE_CARET_POSITION: "VE::SelectionEvent::CHANGE_CARET_POSITION", // bpIndex
		DESELECT: "VE::SelectionEvent::DESELECT",
	},

	IoEvent: {
		PARSE_SEQUENCE_FROM_FILE: "VE::IoEvent::PARSE_SEQUENCE_FROM_FILE", // file, cb(sequenceModel)
	},

	Event: {
		NEW_SEQUENCE_OPENED: "VE::Event::NEW_SEQUENCE_OPENED", // sequenceModel
		BLANK_NEW_SEQUENCE: "VE::Event::BLANK_NEW_SEQUENCE",
	},

	PieEvent: {
		ZOOM: "VE::PieEvent::ZOOM", // newZoom,
	},

	EditingEvent: {
		PASTE: 'VE::EditingEvent::PASTE', // pastedString, startBpIndex, endBpIndex

		CLIENT_OPERATION: 'VE::EditingEvent::CLIENT_OPERATION', // sequenceOperation
	},

};













for(var x in eventsObj) {
	if(eventsObj.hasOwnProperty(x)) {
		VE[x] = eventsObj[x];
	}
}







})();