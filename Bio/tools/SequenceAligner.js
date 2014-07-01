// Much of this program was written by Paul Stothard, University of Alberta, Canada
// It was modified for speed and use by Michael Matena.

/*
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


(function(){


Bio.SequenceAligner = {

	pairwiseAlignDna: function(params) {
		var query = params.query;
		var subject = params.subject;
		var matchScore = params.matchScore || 2;
		var mismatchScore = params.mismatchScore || -1;
		var gapPenalty = params.gapPenalty || 2;
		var beginGapPenalty = params.beginGapPenalty || 0;
		var endGapPenalty = params.endGapPenalty || 0;

		if(!query || !subject) {
			return;
		}

		if(Array.isArray(query)) { query = query.join(''); }
		if(Array.isArray(subject)) { subject = subject.join(''); }

		query = query.toLowerCase();
		subject = subject.toLowerCase();

		//can use one or both.
		//can compare scores (should be identical)
		var useLinearSpace = true;
		var useQuadraticSpace = false;

		var matrix = new Identity();
		matrix.setMatch(matchScore);
		matrix.setMismatch(mismatchScore);

		var scoreSet = new ScoreSet();
		scoreSet.setScoreSetParam(matrix, gapPenalty, beginGapPenalty, endGapPenalty);
		
		var alignment;
		if (useLinearSpace) {
			alignment = new AlignPairLinear();
			alignment.setAlignParam(query, subject, scoreSet);
			alignment.align();
		}

		if (useQuadraticSpace) {

			alignment = new AlignPairQuad();
			alignment.initializeMatrix(query, subject, scoreSet);
			alignment.fillMatrix();
			//alignment.dumpMatrix();
			alignment.align();
		}
		var alignedSequenceStringM = alignment.getAlignedM();
		var alignedSequenceStringN = alignment.getAlignedN();

		console.log(alignedSequenceStringM)
		console.log(alignedSequenceStringN)

		var toAlignmentArgs = {
			query: query,
			alignedQuery: alignedSequenceStringM,
			subject: subject,
			alignedSubject: alignedSequenceStringN,
		};
		var alignmentArray = this.alignedSequenceStringsToAlignmentArray(toAlignmentArgs);
		return alignmentArray;
	},

	alignedSequenceStringsToAlignmentArray: function(args) {
		var query = args.query;
		var alignedQuery = args.alignedQuery;
		var subject = args.subject;
		var alignedSubject = args.alignedSubject;

		var lastAlignment = null;
		var queryIndex = 0;
		var alignmentArray = [];

		for(var i=0,ii=alignedQuery.length;i<ii;i++) {
			var c1 = alignedQuery[i];
			var c2 = alignedSubject[i];

			var lastType = lastAlignment ? lastAlignment.type : null;

			var type;
			if(c1 === c2) { // type = 'match'
				type = 'match';
				if(type === lastType) {
					lastAlignment.subjectSequence += c2;
				} else {
					lastAlignment = {
						type: type,
						subjectSequence: c2,
						queryStart: queryIndex,
					};
					alignmentArray.push(lastAlignment);
				}

			} else if (c1 === '-') { // type = 'queryGap'
				type = 'queryGap';
				if(type === lastType) {
					lastAlignment.subjectSequence += c2;
				} else {
					lastAlignment = {
						type: type,
						subjectSequence: c2,
						queryStart: queryIndex,
					};
					alignmentArray.push(lastAlignment);
				}

			} else if (c2 === '-') { // type = 'subjectGap'
				// type = 'subjectGap';
				lastAlignment = null;

			} else { // type = 'mismatch'
				type = 'mismatch';
				if(type === lastType) {
					lastAlignment.subjectSequence += c2;
				} else {
					lastAlignment = {
						type: type,
						subjectSequence: c2,
						queryStart: queryIndex,
					};
					alignmentArray.push(lastAlignment);
				}
			}

			if(c1 !== '-') {
				queryIndex++;
			}

		}

		return alignmentArray;
	},



};




// Just a temporary thing to help with testing.
Bio.SequenceAligner.$ = function() {
	// 'blastn -outfmt 5 -query query.fasta -subject subject.fasta';
	// 'blastn -outfmt 5 -query NT_187301.gb -subject NT_187300.gb';

	function getSequenceFromFile(sequenceFileName, cb) {
		$.ajax({
			type: "GET",
			url: '/GET_SEQUENCE_FILE/' + sequenceFileName,
			success: function(data) {
				// console.log(data);
				window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
				var errorHandler = null;

				requestFileSystem(TEMPORARY, 1024*1024, function(fs) {
					
					fs.root.getFile(sequenceFileName, {create: true}, function(fileEntry) {

						// Create a FileWriter object for our FileEntry (log.txt).
						fileEntry.createWriter(function(fileWriter) {

							fileWriter.onwriteend = function(e) {
								// console.log('Write completed.');

								fileEntry.file(function(file) {
									_ve.trigger(VE.IoEvent.PARSE_SEQUENCE_FROM_FILE, file, function(sequence) {
										return cb(sequence);
									});
								});
							};

							fileWriter.onerror = function(e) {
								console.log('Write failed: ' + e.toString());
							};

							// Create a new Blob and write it to log.txt.
							// var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});
							var blob = new Blob([data]);
							fileWriter.write(blob);

						}, errorHandler);

					}, errorHandler);

				}, errorHandler);

			}
		});
	}

	// 'blastn -outfmt 5 -query 176946_ref_Python_molurus_bivittatus-5.0.2_chrMT.fa -subject ppn_ref_panpan1_chrMT.fa -out blast_test.xml';
	getSequenceFromFile('176946_ref_Python_molurus_bivittatus-5.0.2_chrMT.fa', function(query) {
		getSequenceFromFile('ppn_ref_panpan1_chrMT.fa', function(subject) {
			query = query.get('sequence');
			subject = subject.get('sequence');


			var FACTOR = 1;
			query = query.slice(0, query.length/FACTOR/15);
			subject = subject.slice(0, subject.length/FACTOR);
			// console.log(subject.join(''));

			// query = Bio.Translator.stringToNCBI4na(query);
			// subject = Bio.Translator.stringToNCBI4na(subject);

			console.time('A')
			Bio.SequenceAligner.pairwiseAlignDna({
				query: query,
				subject: subject,
			});
			console.timeEnd('A')
			console.log('query: ' + query.length + ' (bp)')
			console.log('subject: ' + subject.length + ' (bp)')

		});

	});



	// console.time('A')
	// Bio.SequenceAligner.pairwiseAlignDna({
	// 	query: "gcgcgtgcgcggaaggagccaaggtgaagttgtagcagtgtgtcagaagaggtgcgtggcaccatgctgtcccccgaggcggagcgggtgctgcggtacctggtcgaagtagaggagttg".split(''),
	// 	subject: "gacttgtggaacctacttcctgaaaataaccttctgtcctccgagctctccgcacccgtggatgacctgctcccgtacacagatgttgccacctggctggatgaatgtccgaatgaagcg".split(''),
	// });
	// console.timeEnd('A')



	// A: 3694.634ms SequenceAligner.js:142
	// query: 704 (bp) SequenceAligner.js:143
	// subject: 16563 (bp)

	// Inlined `ScoreSet.prototype.getScore`
	// A: 3114.478ms SequenceAligner.js:142
	// query: 704 (bp) SequenceAligner.js:143
	// subject: 16563 (bp) 
}


// function asdfsadf() {
// 	q = Ext.getCmp('mainAppPanel').getActiveTab().model;
// 	var alignments = q.getAlignments();
// 	alignments[0].queryGaps.push({
// 		index: alignments[0].start + 5,
// 		sequence: 'X',
// 	});

// }





function ScoreSet () {
	this.scoringMatrix;
	this.gap;
	this.beginGap;
	this.endGap;
	this.useBeginGapTop = true;
	this.useBeginGapLeft = true;
	this.useEndGapBottom = true;
	this.useEndGapRight = true;
}

ScoreSet.prototype.getScore = function(r1, r2) {
	// return this.scoringMatrix.scoringMatrix_getScore(r1, r2);
	return (r1 === r2) ? this.scoringMatrix.match : this.scoringMatrix.mismatch;	
};

ScoreSet.prototype.setScoreSetParam = function(scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty) {
	this.scoringMatrix = scoringMatrix;
	this.gap = gapPenalty;
	this.beginGap = beginGapPenalty;
	this.endGap = endGapPenalty;
};



function ScoringMatrix() {
	this.mismatch;
	this.match;
}

ScoringMatrix.prototype.scoringMatrix_getScore = function(r1, r2) {
	// r1 = r1.toLowerCase();
	// r2 = r2.toLowerCase();
	// if (r1 == r2) {
	// 	return this.match;
	// } else {
	// 	return this.mismatch;
	// }
	return (r1 === r2) ? this.match : this.mismatch;
}



function Identity() {
}

Identity.prototype = ScoringMatrix.prototype;

Identity.prototype.setMismatch = function(mismatchScore) {
	this.mismatch = mismatchScore;
};
Identity.prototype.setMatch = function(matchScore) {
	this.match = matchScore;
};






//Written by Paul Stothard, University of Alberta, Canada

//This class performs alignments in linear space, by recursively dividing
//the alignment. Once subalignments of acceptable size are obtained, they
//are solved using the quadratic space implementation in align_pair_quad.js.

//To use this class: (see pairwise_dna.js for example)
//var alignment = new AlignPairLinear();
//alignment.initializeMatrix(sequenceArrayM, sequenceArrayN, scoreSet);
//alignment.fillMatrix();
//alignment.align();
//var alignedSequenceStringM = alignment.getAlignedM();
//var alignedSequenceStringN = alignment.getAlignedN();

function AlignPairLinear() {
	this.M;
	this.N;
	this.alignedM;
	this.alignedN;
	this.scoreSet;
	this.Sn;
	this.Sp;
	this.score;
}


AlignPairLinear.prototype.align = function() {
	if (this.M.length == 0) {

		for (var j = 1; j <= this.N.length; j++) {
			this.alignedM.push("-");
			this.alignedN.push(this.N[j - 1]);
			this.score = this.score + this.scoreSet.gap;			
		}
	}
	else if (this.N.length == 0) {
		for (var j = 1; j <= this.M.length; j++) {
			this.alignedN.push("-");
			this.alignedM.push(this.M[j - 1]);
			this.score = this.score + this.scoreSet.gap;			
		}

	}
	else if ((this.M.length == 0) && (this.N.length == 0)) {
		//do nothing
	}
	else {
		this.path(0, 0, this.M.length, this.N.length);
	}
}


AlignPairLinear.prototype.pathA = function(i1, j1, i2, j2) {
	//align using quadratic space alignment
	var subM = new Array();
	var subN = new Array();

	for (var i = i1 + 1; i <= i2; i++) {
		subM.push(this.M[i-1]);	
	}

	for (var j = j1 + 1; j <= j2; j++) {
		subN.push(this.N[j-1]);	
	}

	var alignment = new AlignPairQuad();

	var subScoreSet = new ScoreSet();

	if (j1 == j2) {

		if (j1 == 0) {
			subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.beginGap, this.scoreSet.beginGap, this.scoreSet.beginGap);
		}
		else if (j1 == this.N.length) {
			subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.endGap, this.scoreSet.endGap, this.scoreSet.endGap);
		}
		else {
			subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.gap, this.scoreSet.gap);
		}
	}
	else {
		
		subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.beginGap, this.scoreSet.endGap);
		subScoreSet.useBeginGapTop = false;
		subScoreSet.useBeginGapLeft = false;
		subScoreSet.useEndGapBottom = false;
		subScoreSet.useEndGapRight = false;

		if (i1 == 0) {
			subScoreSet.useBeginGapTop = true;
		}

		if (j1 == 0) {
			subScoreSet.useBeginGapLeft = true;
		}
		
		if (j2 == this.N.length) {
			subScoreSet.useEndGapRight = true;
		}

		if (i2 == this.M.length) {
			subScoreSet.useEndGapBottom = true;
		}
	}

	alignment.initializeMatrix(subM, subN, subScoreSet);
	alignment.fillMatrix();
	alignment.align();
	//alignment.dumpMatrix();
	this.alignedM.push(alignment.getAlignedM());
	this.alignedN.push(alignment.getAlignedN());

	this.score = this.score + alignment.score;	
}

AlignPairLinear.prototype.pathB = function(i1, j1, i2, j2) {
	var middle = Math.floor((i1 + i2)/2);

	var scoreSet = this.scoreSet;
	var beginGap = scoreSet.beginGap;
	var gap = scoreSet.gap;
	var endGap = scoreSet.endGap;
	var Sn = this.Sn;
	var Sp = this.Sp;
	var N = this.N;
	var M = this.M;
	var N_length = N.length;
	var M_length = M.length;
	var match = scoreSet.scoringMatrix.match;
	var mismatch = scoreSet.scoringMatrix.mismatch;
	
	var Math_max = Math.max;


	// ((r1 === r2) ? match : mismatch);

	//linear-space computation of alignment score to middle row
	//forward pass

	//gaps along top

	Sn[j1] = 0;
	
	if (i1 == 0) {
		for (var j = j1 + 1; j <= j2; j++) {
			Sn[j] = Sn[j - 1] - beginGap;
		}
	}
	else {
		for (var j = j1 + 1; j <= j2; j++) {
			Sn[j] = Sn[j - 1] - gap;
		}
	}

	//now continue down rows to middle row
	var diag;
	var left;
	//for (var i = i1 + 1; i <= i2; i++) {
	for (var i = i1 + 1; i <= middle; i++) {
		diag = Sn[j1];
		left;
		if (j1 == 0) {
			left = Sn[j1] - beginGap;
		}
		else {
			left = Sn[j1] - gap;
		}

		Sn[j1] = left;		
		var _Mi = M[i-1];

		//we need three values to set the score: diag, left, and above to fill in the row
		for (var j = j1 + 1; j <= j2; j++) {
			//above will be in the Sn array, which is holding a mixture of the previous row and the new row
			//var above = Sn[j];
			// diag + scoreSet.getScore(M[i-1], N[j-1])

			var _something = diag + ((_Mi === N[j-1]) ? match : mismatch);

			//pick max of three and store in next left
			if ((j === N_length) && (i === M_length)) {
				left = Math_max(Sn[j] - endGap, (left - endGap), _something);
			}
			else if (i === M_length) {
				left = Math_max(Sn[j] - gap, (left - endGap), _something);
			}
			else if (j === N_length) {
				left = Math_max(Sn[j] - endGap, (left - gap), _something);
			}
			else {
				left = Math_max(Sn[j] - gap, (left - gap), _something);
			}
			diag = Sn[j];
			
			//prepares Sn for use in next iteration of i loop
			Sn[j] = left;

		}	
	}

	//linear-space computation of alignment score to middle row
	//reverse pass

	//gaps along bottom

	Sp[j2] = 0;
	
	if (i2 == M_length) {
		for (var j = j2 - 1; j >= j1; j--) {
			Sp[j] = Sp[j + 1] - endGap;
		}
	}
	else {
		for (var j = j2 - 1; j >= j1; j--) {
			Sp[j] = Sp[j + 1] - gap;
		}
	}

	//now continue up rows to middle row
	var right;
	//for (var i = i2 - 1; i >= i1; i--) {
	for (var i = i2 - 1; i >= middle; i--) {
		diag = Sp[j2];
		if (j2 == N_length) {
			right = Sp[j2] - endGap;	
		}
		else {
			right = Sp[j2] - gap;	
		}

		Sp[j2] = right;

		var _Mi = M[i + 1 - 1];

		//we need three values to set the score: diag, right, and below to fill in the row			
		for (var j = j2 - 1; j >= j1; j--) {
			//below will be in the Sp array, which is holding a mixture of the previous row and the new row
			//var below = Sp[j];

			var _something = diag + ((_Mi === N[j + 1 - 1]) ? match : mismatch);

			//pick max of three and store in next right
			if ((j === 0) && (i === 0)) {
				right = Math_max(Sp[j] - beginGap, (right - beginGap), _something);
			}
			else if (j === 0) {
				right = Math_max(Sp[j] - beginGap, (right - gap), _something);
			}
			else if (i === 0) {
				right = Math_max(Sp[j] - gap, (right - beginGap), _something);
			}
			else {
				right = Math_max(Sp[j] - gap, (right - gap), _something);
			}		
			diag = Sp[j];
			Sp[j] = right;
		}

	}

	//now find the value of j that maximizes Sn[j] + Sp[j]
	//this point will be in the maximum scoring path in the final alignment.
	//once we have this point we can divide the problem into two new problems,
	

	var maxValue = Sn[j1] + Sp[j1];
	var maxJ = j1;

	for (var j = j1 + 1; j <= j2; j++) {
		if (Sn[j] + Sp[j] >= maxValue) {
			maxValue = Sn[j] + Sp[j];
			maxJ = j;
		}
	}

	this.path(i1, j1, middle, maxJ);
	this.path(middle, maxJ, i2, j2);
}

AlignPairLinear.prototype.path = function(i1, j1, i2, j2) {

	//alert ("i1, j1, : i2, j2 " + i1 +", " + j1 + ", " + i2 + ", " + j2);

	if ((i1 + 1 === i2) || (j1 === j2)) {
		// align using quadratic space alignment
		this.pathA(i1, j1, i2, j2);

	} else {
		this.pathB(i1, j1, i2, j2);

	}
}

AlignPairLinear.prototype.getAlignedM = function() {
	return this.alignedM.join("");
}


AlignPairLinear.prototype.getAlignedN = function() {
	return this.alignedN.join("");
}


AlignPairLinear.prototype.setAlignParam = function(M, N, scoreSet) {
	this.M = M;
	this.N = N;
	this.alignedM = new Array();
	this.alignedN = new Array();
	this.scoreSet = scoreSet;
	this.Sn = new Array(this.N.length);
	this.Sp = new Array(this.N.length);
	// this.Sn = [];
	// this.Sp = [];
	this.score = 0;
}






//Written by Paul Stothard, University of Alberta, Canada

//This class should be used for small alignments,
//since it uses O(nm) memory, where n and m are the sequence lengths.
//For larger alignments use the linear space algorithm implemented
//in align_pair_linear.js

//To use this class: (see pairwise_dna.js for example)
//var alignment = new AlignPairQuad();
//alignment.initializeMatrix(sequenceArrayM, sequenceArrayN, scoreSet);
//alignment.fillMatrix();
//alignment.align();
//var alignedSequenceStringM = alignment.getAlignedM();
//var alignedSequenceStringN = alignment.getAlignedN();


function Node() {
	this.value;
	this.tracebackI;
	this.tracebackJ;
}



function AlignPairQuad () {
	this.M;
	this.N;
	this.scoreSet;
	this.nodes;
	this.alignedM;
	this.alignedN;
	this.score;
}

AlignPairQuad.prototype.initializeMatrix = function(sequenceOne, sequenceTwo, scoreSet) {


	this.scoreSet = scoreSet;

	this.M = sequenceOne;
	this.N = sequenceTwo;
	this.score = 0;

	//create an two-dimensional array of nodes
	this.nodes = new Array(this.M.length + 1);

	//row i
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodes[i] = new Array(this.N.length + 1);
		//column j
		for (var j = 0; j < this.nodes[i].length; j++) {
				this.nodes[i][j] = new Node();
		}
	}


	this.nodes[0][0].value = 0;

	
	//i rows
	for (var i = 1; i < this.nodes.length; i++)	{
		if (this.scoreSet.useBeginGapLeft) {
			this.nodes[i][0].value = this.nodes[i - 1][0].value - this.scoreSet.beginGap;
		}
		else {
			this.nodes[i][0].value = this.nodes[i - 1][0].value - this.scoreSet.gap;
		}
		this.nodes[i][0].tracebackI = i - 1;
		this.nodes[i][0].tracebackJ = 0;
	}

	//j columns
	for (var j = 1; j < this.nodes[0].length; j++)	{
		if (this.scoreSet.useBeginGapTop) {	
			this.nodes[0][j].value = this.nodes[0][j - 1].value - this.scoreSet.beginGap;
		}
		else {
			this.nodes[0][j].value = this.nodes[0][j - 1].value - this.scoreSet.gap;
		}
		this.nodes[0][j].tracebackI = 0;
		this.nodes[0][j].tracebackJ = j - 1;
	}
	
};

AlignPairQuad.prototype.fillMatrix = function() {

	//i rows
	for (var i = 1; i < this.nodes.length; i++)	{
		//j columns
		for (var j = 1; j < this.nodes[0].length; j++)	{

			var a;
			var b;
			var c;

			//handle end gaps here

			if ((i == this.nodes.length - 1) && (j == this.nodes[0].length - 1)) {
				if (this.scoreSet.useEndGapRight) {
					a = this.nodes[i - 1][j].value - this.scoreSet.endGap;
				}
				else {
					a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				}

				if (this.scoreSet.useEndGapBottom) {
					b = this.nodes[i][j - 1].value - this.scoreSet.endGap;
				}
				else {
					b = this.nodes[i][j - 1].value - this.scoreSet.gap;
				}
			}
			else if (i == this.nodes.length - 1) {
				a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				if (this.scoreSet.useEndGapBottom) {
					b = this.nodes[i][j - 1].value - this.scoreSet.endGap;
				}
				else {
					b = this.nodes[i][j - 1].value - this.scoreSet.gap;
				}
			}
			else if (j == this.nodes[0].length - 1) {
				if (this.scoreSet.useEndGapRight) {
					a = this.nodes[i - 1][j].value - this.scoreSet.endGap;
				}
				else {
					a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				}
				b = this.nodes[i][j - 1].value - this.scoreSet.gap;			
			}
			else {
				a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				b = this.nodes[i][j - 1].value - this.scoreSet.gap;
			}

			c = this.nodes[i - 1][j - 1].value + this.scoreSet.getScore(this.M[i - 1], this.N[j - 1]);

			if ((a >= b) && (a >= c)) {
				this.nodes[i][j].value = a;
				this.nodes[i][j].tracebackI = i - 1;
				this.nodes[i][j].tracebackJ = j;
			}
			else if ((b >= c) && (b >= a)) {
				this.nodes[i][j].value = b;			
				this.nodes[i][j].tracebackI = i;
				this.nodes[i][j].tracebackJ = j - 1;				
			}
			else {
				this.nodes[i][j].value = c;			
				this.nodes[i][j].tracebackI = i - 1;
				this.nodes[i][j].tracebackJ = j - 1;
			}			
		}
	}
	this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;	

};

AlignPairQuad.prototype.align = function() {
	this.alignedM = new Array();	
	this.alignedN = new Array();
	
	var currentI = this.nodes.length - 1;
	var currentJ = this.nodes[0].length - 1;
 
	var currentNode = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1];

	while ((currentNode.tracebackI != undefined) && (currentNode.tracebackJ != undefined)) {

		if ((currentNode.tracebackI == currentI - 1) && (currentNode.tracebackJ == currentJ - 1)) { 
			this.alignedM.push(this.M.pop());	
			this.alignedN.push(this.N.pop());
		}

		else if (currentNode.tracebackJ == currentJ - 1) {
			this.alignedM.push("-");
			this.alignedN.push(this.N.pop());
		}
		else { 
			this.alignedM.push(this.M.pop());			
			this.alignedN.push("-");			
		}

		currentI = currentNode.tracebackI;
		currentJ = currentNode.tracebackJ;

		currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
		
	}

	this.alignedM = this.alignedM.reverse();
	this.alignedN = this.alignedN.reverse();	
};

AlignPairQuad.prototype.getAlignedM = function() {
	return this.alignedM.join("");
};

AlignPairQuad.prototype.getAlignedN = function() {
	return this.alignedN.join("");
};






































})();