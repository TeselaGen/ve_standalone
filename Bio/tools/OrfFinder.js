(function(){



Bio.OrfFinder = {



	calculateOrfsInFrame: function(sequence, frame, minimumLength, strand) {
		
		var getCodonAtIndex_startShift = (strand === -1) ? -3 : 0;
		var getCodonAtIndex_endShift = (strand === -1) ? 0 : 3;

		function getCodonAtIndex_String(index) {
			return sequence.slice(index + getCodonAtIndex_startShift, index + getCodonAtIndex_endShift);
		}

		function getCodonAtIndex_Array(index) {
			return sequence.slice(index + getCodonAtIndex_startShift, index + getCodonAtIndex_endShift).join("");
		}

		var getCodonAtIndex = Array.isArray(sequence) ? getCodonAtIndex_Array : getCodonAtIndex_String;

		if(!minimumLength && minimumLength !== 0) {
			minimumLength = -1;
		}
		if(!strand && strand !== 0) {
			strand = 1;
		}
		
		
		var Translator = Bio.Translator;
		var orfs = [];
		var seqLen = sequence.length;

		var index = (strand === -1) ? seqLen - frame : frame;
		var startIndex = -1;
		var endIndex = -1;
		var startCodonIndexes = [];

		var indexIncrement = (strand === -1) ? -3 : 3;
		var codonToNCBI4na = (strand === -1) ? Translator.codonToRevcomNCBI4na : Translator.codonToNCBI4na;
		codonToNCBI4na = codonToNCBI4na.bind(Translator);

		// Loop through sequence and generate list of ORFs.
		while(
			( (strand === -1) && (index - 2 > 0) ) ||
			( (strand !== -1) && (index + 2 < seqLen) )
		) {
			// var triplet = sequence.slice(index, index + 3).join("");
			var triplet = getCodonAtIndex(index).toLowerCase();
			var triplet4na = codonToNCBI4na(triplet);

			// If we've found a start codon, add its index to startCodonIndexes.
			if(Translator.isStartCodon_4na(triplet4na)) {
				// If we're not currently in an ORF, start evaluating a new potential ORF at current index.
				if(startIndex == -1) {
					startIndex = index;
				}

				if(startCodonIndexes == null) {
					startCodonIndexes = [];
				}
				startCodonIndexes.push(index);

				index += indexIncrement;

				continue;
			}

			// If we've reached a stop codon with a corresponding start codon and
			// its length is greater than minimumLength, create an ORF object and add it to orfs.
			if(Translator.isPossibleStopCodon_4na(triplet4na)) {
				if(startIndex != -1) {
					endIndex = index + indexIncrement;
					if(Math.abs(endIndex - startIndex) >= minimumLength) {
						if(startCodonIndexes == null) {
							startCodonIndexes = [];
						}

						var start = (strand === -1) ? endIndex : startIndex;
						var end = (strand === -1) ? startIndex : endIndex;
						if(strand === -1) {
							startCodonIndexes.reverse();
						}

						var orf = {
							start: start,
							end: end,
							strand: strand,
							frame: frame,
							startCodons: startCodonIndexes
						};

						orfs.push(orf);
					}
				}

				startIndex = -1;
				endIndex = -1;
				startCodonIndexes = null;
			}
			
			index += indexIncrement;
		}

		return orfs;
	},

	calculateOrfsInFrame_4na: function(sequence, frame, isCircular, minimumLength, strand) {
		if(strand === -1) {
			return this.calculateOrfsInReverseFrame_4na(sequence, frame, isCircular, minimumLength);
		} else {
			return this.calculateOrfsInForwardFrame_4na(sequence, frame, isCircular, minimumLength);
		}
	},

	calculateOrfsInForwardFrame_4na: function(sequence, frame, isCircular, minimumLength) {	
		// Start codons will be represented by a number greater than or equal to 0.
		// Stop codons will be represented by a number less than 0.
		var codons = [];

		var Translator = Bio.Translator;
		for(var i=frame, ii=sequence.length;i<ii;i+=3) {
			var codon = (sequence[i]) | (sequence[i+1] << 4) | (sequence[i+2] << 8);
			
			if(Translator.isStartCodon_4na(codon)) {
			// if(codon === 1153) {
				codons.push(i);
			} else if(Translator.isPossibleStopCodon_4na(codon)) {
				codons.push(-(i+3));
			}
		}
		
		return codonIndicesToOrfs(codons, frame, 1, isCircular, minimumLength);
	},

	calculateOrfsInReverseFrame_4na: function(sequence, frame, isCircular, minimumLength) {	
		// Start codons will be represented by a number greater than or equal to 0.
		// Stop codons will be represented by a number less than 0.
		var codons = [];

		var Translator = Bio.Translator;
		for(var i=sequence.length-1-frame;i>1;i-=3) {
			var codon = (Translator.complement_4na(sequence[i])) |
						(Translator.complement_4na(sequence[i-1]) << 4) |
						(Translator.complement_4na(sequence[i-2]) << 8);

			if(Translator.isStartCodon_4na(codon)) {
			// if(codon === 1153) {
				codons.push(i+1);
			} else if(Translator.isPossibleStopCodon_4na(codon)) {
				codons.push(-(i-2));
			}
		}
		
		return codonIndicesToOrfs(codons, frame, -1, isCircular, minimumLength);
	},


	__test: function() {
		console.time('A');

		var sequence = Bio.Translator.stringToNCBI4na(annotateContainer.model.get('sequence'));
		var isCircular = annotateContainer.model.get('circular');
		var minLen = -1;

		var ff0 = this.calculateOrfsInForwardFrame_4na(sequence, 0, isCircular, minLen);
		var ff1 = this.calculateOrfsInForwardFrame_4na(sequence, 1, isCircular, minLen);
		var ff2 = this.calculateOrfsInForwardFrame_4na(sequence, 2, isCircular, minLen);

		var rf0 = this.calculateOrfsInReverseFrame_4na(sequence, 0, isCircular, minLen);
		var rf1 = this.calculateOrfsInReverseFrame_4na(sequence, 1, isCircular, minLen);
		var rf2 = this.calculateOrfsInReverseFrame_4na(sequence, 2, isCircular, minLen);

		console.timeEnd('A')

		// console.log(ff0, ff1, ff2);
		// console.log(rf0, rf1, rf2);
	},


};


// Start codons will be represented by a number greater than or equal to 0.
// Stop codons will be represented by a number less than 0.
function codonIndicesToOrfs(codons, frame, strand, isCircular, minimumLength) {
	var orfs = [{
		start: -1,
		end: -1,
		strand: strand,
		frame: frame,
		startCodons: []
	}];

	var start = -1;
	for(var i=0, ii=codons.length;i<ii;i++) {
		var index = codons[i];
		if(index >= 0) { // start codon
			if(start === -1) { start = index; }
			orfs[orfs.length-1].startCodons.push(index);

		} else { // stop codon
			index = -index;
			if(start !== -1) {
				if(Math.abs(index - start) >= minimumLength) {
					var lastOrf = orfs[orfs.length-1];

					if(strand === -1) {
						lastOrf.end = start;
						lastOrf.start = index;
					} else {
						lastOrf.end = index;
						lastOrf.start = start;
					}

					orfs.push({
						start: -1,
						end: -1,
						strand: strand,
						frame: frame,
						startCodons: []
					});		
				}
			}
			start = -1;
			orfs[orfs.length-1].startCodons = [];

		}
	}

	if(isCircular) {
		console.error('TODO: circular orfs.');

		// This part of code is temporary, but prevents errors.
		if(orfs[orfs.length-1].end === -1) {
			orfs.pop();
		}



	} else {
		if(orfs[orfs.length-1].end === -1) {
			orfs.pop();
		}
	}

	if(orfs.length === 1 && orfs[0].start === -1) {
		return [];
	} else {
		return orfs;
	}
}






































})();