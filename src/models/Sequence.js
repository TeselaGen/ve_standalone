

VE.Sequence = Backbone.Model.extend({

	defaults: {
		name: "",
		circular: false,

		sequence: [],

		features: [],
		
		alignments: [],
		orfs: [],
		cutSites: [],
	},

	sequence_4na: null,
	needsRecalc__sequence_4na: false,

	needsRecalc__orfs: false,
	needsRecalc__cutSites: false,

	undoManager: null,


	initialize: function() {
		this.undoManager = new VE.CollaborativeUndoManager();
	},

	getSequence_4na: function() {
		if(!this.sequence_4na || this.needsRecalc__sequence_4na) {
			this.sequence_4na = Bio.Translator.stringToNCBI4na(this.get('sequence'));
			this.needsRecalc__sequence_4na = false;
		}
		return this.sequence_4na;
	},


	/*
	 * @param {Integer} minimumLength Minimum length of orf.
	 * @param {Array<Integer>} forwardFrames An array of frames to calculate orfs on the forward strand for. Default is all frames.
	 * @param {Array<Integer>} reverseFrames An array of frames to calculate orfs on the reverse strand for. Default is all frames.
	 */
	calculateOrfs: function(minimumLength, forwardFrames, reverseFrames) {
		if(!forwardFrames) {
			forwardFrames = [0, 1, 2];
		}
		if(!reverseFrames) {
			reverseFrames = [0, 1, 2];
		}
		if(!minimumLength && minimumLength !== 0) {
			minimumLength = -1;
		}
		
		var _orfs = [];

		// var sequence = Bio.Translator.stringToNCBI4na(this.get('sequence'));
		var sequence = this.getSequence_4na();
		var isCircular = this.get('circular');

		function calcOrfs(frames, strand) {
			for(var i=0;i<frames.length;i++) {
				var orfs = Bio.OrfFinder.calculateOrfsInFrame_4na(sequence, frames[i], isCircular, minimumLength, strand);
				for(var j=0;j<orfs.length;j++) {
					// var annot = new VE.Annotation(orfs[j]);
					var annot = new VE.LightAnnotation(orfs[j]);
					_orfs.push(annot);
				}
			}
		}


		calcOrfs(forwardFrames, 1);
		calcOrfs(reverseFrames, -1);

		this.set('orfs', _orfs);
	},


	/*
	 * @param {String/Array<char>/VE.Sequence} sequence Sequence to align with.
	 * @param {Object} params Optional parameters of matchScore, mismatchScore, gapPenalty, beginGapPenalty, and endGapPenalty.
	 */
	calculateAlignment: function(sequence, params) {
		if(sequence instanceof VE.Sequence) {
			sequence = sequence.get('sequence');
		}

		if(typeof params !== 'object') {
			params = {};
		}

		var query = this.get('sequence');
		var subject = sequence;

		var alignArgs = {
			query: query,
			subject: subject,
			matchScore: params.matchScore,
			mismatchScore: params.mismatchScore,
			gapPenalty: params.gapPenalty,
			beginGapPenalty: params.beginGapPenalty,
			endGapPenalty: params.endGapPenalty,
		};

		var alignmentArray = Bio.SequenceAligner.pairwiseAlignDna(alignArgs);
		// console.log(alignmentArray);
		this.get('alignments').push(alignmentArray);
	},


	recalculateCutSites: function() {
		var RestrictionEnzymeManager = VE.RestrictionEnzymeManager;
		var userEnzymes = RestrictionEnzymeManager.getCurrentUserEnzymeGroup();

		var cutSites = [];
		var _cutSites = Bio.CutSiteFinder.cutSequence(userEnzymes, this.get('sequence'));

		for(var i=0,ii=_cutSites.length;i<ii;i++) {
			var site = _cutSites[i];
			var annot = new VE.LightAnnotation(site);
			annot.set('restrictionEnzyme', new VE.LightAnnotation(site.restrictionEnzyme));
			cutSites.push(annot);
		}

		this.set('cutSites', cutSites);
	},


	length: function() {
		return this.get('sequence').length;
	},

	getSubstring: function(start, end) {
		return this.get('sequence').slice(start, end).join('');
	},


	applyClientOperation: function(op) {
		this.needsRecalc__sequence_4na = true;
		var inverse = op.apply(this);
		// console.log(inverse);
		this.undoManager.add(inverse);
	},




	toJSON: function() {
		var json = Backbone.Model.prototype.toJSON.call(this);

		function arrayToJson(arrayKey) {
			var a = [];
			for(var i=0;i<json[arrayKey].length;i++) {
				a[i] = json[arrayKey][i].toJSON();
			}
			json[arrayKey] = a;
		}

		arrayToJson('features');
		// arrayToJson('alignments');
		arrayToJson('orfs');

		arrayToJson('cutSites');

		return json;
	},


});



VE.Sequence.deserialize = function(serSeq) {
	var params = {
		name: serSeq.inData.name,
		circular: serSeq.inData.circular,
		sequence: Array.isArray(serSeq.sequence) ? serSeq.sequence : serSeq.sequence.split(''),
		features: [],
		alignments: [],
		orfs: [],
		cutSites: [],
	};

	for(var i=0;i<serSeq.features.length;i++) {
		var feat = serSeq.features[i];
		var annot = new VE.Annotation({
			name: feat.inData.name,
			start: feat.inData.start,
			end: feat.inData.end,
			strand: feat.inData.strand,
			type: feat.inData.type,
		});
		params.features.push(annot);
	}

	return new VE.Sequence(params);
};


VE.Sequence.fromJSON = function(json) {
	var ret = new VE.Sequence(json);

	function annotationArrayFromJson(arrayKey) {
		var a = [];
		for(var i=0;i<ret.get(arrayKey).length;i++) {
			a[i] = new VE.Annotation(ret.get(arrayKey)[i]);
			if(arrayKey === 'cutSites') {
				a[i].set('restrictionEnzyme', new Backbone.Model(a[i].get('restrictionEnzyme')));
			}
		}
		ret.set(arrayKey, a);
	}

	annotationArrayFromJson('features');
	// annotationArrayFromJson('alignments');
	annotationArrayFromJson('orfs');
	annotationArrayFromJson('cutSites');

	return ret;

};

















































































