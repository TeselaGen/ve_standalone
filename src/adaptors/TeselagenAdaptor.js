

VE.TeselagenAdaptor = {};


VE.TeselagenAdaptor.createSequence = function(paramsObj) {
	var seqMan = paramsObj['sequenceManager'];

	var alignments = paramsObj['alignments'];
	var orfs = paramsObj['orfs'];
	var cutSites = paramsObj['cutSites'];

	var params = {
		features: [],
		alignments: [],
		orfs: [],
		cutSites: [],
	};

	params.name = seqMan.getName();
	params.circular = seqMan.getCircular();

	// copy the sequence
	params.sequence = seqMan.getSequence().slice(0);

	var features = seqMan.getFeatures();
	for(var i=0;i<features.length;i++) {
		var feat = features[i];
		var annot = new VE.Annotation({
			name: feat.getName(),
			start: feat.getStart(),
			end: feat.getEnd(),
			strand: feat.getStrand(),
			type: feat.getType(),
		});
		params.features.push(annot);
	}



	// TODO: alignments

	if(Array.isArray(alignments)) {
		if(alignments.length > 0) {
			throw new Error("TODO");
		}
	}


	if(Array.isArray(cutSites)) {
		for(var i=0;i<cutSites.length;i++) {
			var site = cutSites[i];
			var enzyme = site.getRestrictionEnzyme();
			var annot = new VE.Annotation({
				start: site.getStart(),
				end: site.getEnd(),
				strand: site.getStrand(),
				numCuts: site.getNumCuts(),
				restrictionEnzyme: new Backbone.Model({
					name: enzyme.getName(),
					dsForward: enzyme.getDsForward(),
					dsReverse: enzyme.getDsReverse(),
				}),
			});
			params.cutSites.push(annot);
		}
	}

	if(Array.isArray(orfs)) {
		for(var i=0;i<orfs.length;i++) {
			var orf = orfs[i];
			var annot = new VE.Annotation({
				start: orf.getStart(),
				end: orf.getEnd(),
				strand: orf.getStrand(),
				startCodons: orf.getStartCodons(),
				frame: orf.getFrame(),
			});
			params.orfs.push(annot);
		}
	}

	var sequence = new VE.Sequence(params);
	return sequence;
};




VE.TeselagenAdaptor.intertwineEvents_ExtToBackbone = function() {
	var _fireEventArgs = Vede.application.fireEventArgs;

	Vede.application.fireEventArgs = function() {
		Backbone.trigger.apply(Backbone, arguments);
		return _fireEventArgs.apply(Vede.application, arguments);
	};

	// Backbone.on('all', function() {console.log(arguments[0]);});


	// Backbone.on(VE.VisibilityEvent.$getAllEvents().join(' '), function() {
	// 	console.log(arguments);
	// 	VE.activeVectorEditor.trigger.apply(VE.activeVectorEditor, arguments);
	// });
	
	var _EventFunctionObject01 = function(eventName) {
		this.eventName = eventName;
	};
	
	_EventFunctionObject01.prototype.callback = function() {
		var args = arguments[0];
		args.unshift(this.eventName);
		VE.activeVectorEditor.trigger.apply(VE.activeVectorEditor, args);
	};
	
	for(var x in VE.VisibilityEvent) {
		var eventName = VE.VisibilityEvent[x];
		var functionObject = new _EventFunctionObject01(eventName);
		Backbone.on(eventName, functionObject.callback.bind(functionObject));
	}

};


















































