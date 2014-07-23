(function(){




var FastaParser = VE.FastaParser = {
	curSeq: null,
};


FastaParser.reset = function() {
	this.LASTTYPE = false;
	this.curSeq = null;
};


FastaParser.newSeq = function() {
	this.curSeq = {
		features: [],
		inData: {
			name: '',
			circular: false, // guessing that this is the correct default
		},
		sequence: []
	};
	//this.curFileContent = [];
};


/**
 * @param {String} fasta Fasta file content as a string.
 */
FastaParser.fastaToSerialized = function(fasta) {
	this.reset();

	var lines = fasta.split(/\r?\n/);
	for(var i=0,ii=lines.length;i<ii;i++) {
		var line = lines[i];

		var isHeader = this.isHeader(line);
		if(isHeader) {
			if(this.curSeq) {
				break;
			}
			this.newSeq();
			this.parseHeader(line);

		} else {
			if(!this.curSeq) {
				this.newSeq();
			}
			this.parseSequenceLine(line);

		}
	}

	this.postProcessCurSeq();

	var seq = this.curSeq;
	this.curSeq = null;
	return seq;
};


FastaParser.isHeader = function(line) {
	if(line[0] === '>') {
		return true;
	}
	return false;
}

FastaParser.parseHeader = function(line) {
	this.curSeq.inData.name = this.headerToName(line);
}

FastaParser.headerToName = function(line) {
	return VE.ParserUtil.reformatName(line.slice(1));
}


FastaParser.parseSequenceLine = function(line) {
	
	// Not sure if this is needed, but http://www.ncbi.nlm.nih.gov/BLAST/blastcgihelp.shtml says
	// that the sequence can be interspersed with numbers and/or spaces.
	line = line.replace(/[\s]*[0-9]*/g,"");

	// It appears that our sequences are all lower case, so make sure that the sequence is lower case.
	line = line.toLowerCase();

	this.curSeq.sequence.push(line);
}



FastaParser.postProcessCurSeq = function() {
	var curSeq = this.curSeq;

	// curSeq.sequence = curSeq.sequence.join('').split('');
	curSeq.sequence = curSeq.sequence.join('');
}













































})();