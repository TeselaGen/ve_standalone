(function(){




Bio.CutSiteFinder = {
	
	/**
	 * Cut sequence by list of restriction enzymes.
	 * @param {Array} restrictionEnzymes List of restriction enzymes to cut sequence with.
	 * @param {String/Array} sequence The DNA sequence to be cut.
	 */
	cutSequence: function(restrictionEnzymes, sequence) {
		var reCuts = [];

		if(Array.isArray(sequence)) { sequence = sequence.join(''); }

		for(var i = 0, ii=restrictionEnzymes.length; i < ii; i++) {
			var re = restrictionEnzymes[i];
			this.cutSequenceByRestrictionEnzyme(re, sequence, reCuts);
		}

		return reCuts;
	},

	/**
	 * Cut sequence with one restriction enzyme.
	 * @param {RestrictionEnzyme} restrictionEnzyme Restriction enzyme to cut the sequence with.
	 * @param {String/Array} sequence DNA sequence.
	 * @param {Array} restrictionCutSites Optional array to add cut sites to.
	 */
	cutSequenceByRestrictionEnzyme: function(restrictionEnzyme, sequence, restrictionCutSites) {
		if(!restrictionCutSites) { restrictionCutSites = []; }
		var restrictionCutSite;

		var forwardRegExpPattern = new RegExp(restrictionEnzyme.forwardRegex.toLowerCase(), "g");
		var reverseRegExpPattern = new RegExp(restrictionEnzyme.reverseRegex.toLowerCase(), "g");
		// var forwardRegExpPattern = restrictionEnzyme.forwardRegex;
		// var reverseRegExpPattern = restrictionEnzyme.reverseRegex;

		var reLength = restrictionEnzyme.site.length;
		if(reLength != restrictionEnzyme.dsForward + restrictionEnzyme.dsReverse) {
			reLength = restrictionEnzyme.dsForward;
		}

		if(Array.isArray(sequence)) { sequence = sequence.join(''); }
		var seqLength = sequence.length;

		var matchIndex = sequence.search(forwardRegExpPattern);
		var startIndex = 0;
		var subSequence = sequence;

		var start;
		var end;

		while(matchIndex != -1) {
			if(matchIndex + startIndex + reLength - 1 >= sequence.length) { // subSequence is too short
				break;
			}

			start = matchIndex + startIndex;
			end = matchIndex + reLength + startIndex;

			restrictionCutSite = {
				start: start,
				end: end,
				strand: 1,
				// numCuts: 0,
				restrictionEnzyme: restrictionEnzyme
			};
			restrictionCutSites.push(restrictionCutSite);

			// Make sure that we always store the previous match index to ensure
			// that we are always storing indices relative to the whole sequence,
			// not just the subSequence.
			startIndex = startIndex + matchIndex + 1;

			// Search again on subSequence, starting from the index of the last match + 1.
			subSequence = sequence.substring(startIndex, sequence.length);
			matchIndex = subSequence.search(forwardRegExpPattern);
		}

		if(!restrictionEnzyme.isPalindromic()) {
			matchIndex = sequence.search(reverseRegExpPattern);
			startIndex = 0;
			subSequence = sequence;
			while(matchIndex != -1) {
				if(matchIndex + startIndex + reLength - 1 >= sequence.length) { // subSequence is too short
					break;
				}

				start = matchIndex + startIndex -
					(restrictionEnzyme.dsForward - restrictionEnzyme.site.length);
				end = start + reLength;

				if(start >= 0) {
					restrictionCutSite = {
						start: start,
						end: end,
						strand: -1,
						// numCuts: 0,
						restrictionEnzyme: restrictionEnzyme
					};

					restrictionCutSites.push(restrictionCutSite);
				}

				// Make sure that we always store the previous match index to ensure
				// that we are always storing indices relative to the whole sequence,
				// not just the subSequence.
				startIndex = startIndex + matchIndex + 1;

				// Search again on subSequence, starting from the index of the last match + 1.
				subSequence = sequence.substring(startIndex, sequence.length);
				matchIndex = subSequence.search(reverseRegExpPattern);
			}
		}

		return restrictionCutSites;
	},



};














































})();