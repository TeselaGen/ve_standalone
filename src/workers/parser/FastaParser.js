

var FastaParser = function(file) {

	this.fileWrapper = new FileWrapper(file);
	this.LASTTYPE = false;

	this.curSeq = null;
	// this.curFileContent = [];
	//console.log(this.isWorker);

};

// run this in global scope of window or worker. since window.self = window, we're ok
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	// huzzah! a worker!
	FastaParser.prototype.isWorker = true;
} else {
	// I'm a window... sad trombone.
	FastaParser.prototype.isWorker = false;
}

//this.curSeq.inData.circular
FastaParser.prototype.newSeq = function() {
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


//var seqCount = 0;
FastaParser.prototype._worker_endSeq = function(cb) {
	
	// cut-off for which we upload by chunks
	var sequenceSizeCutOff = 100000;
	var chunkSize = sequenceSizeCutOff;

	this.postProcessCurSeq();

	// SequenceParserWorker.upLoadSerSeq(this.curSeq, cb);
	cb(this.curSeq);

	

	// var data = this.generateCurSeqData();

	// var seqLen = data.serialize.sequence.length;

	// // if(data.serialize.sequence.length > sequenceSizeCutOff) {
	// // 	// ajax.put('/sequences', data);
	// // 	var seqCopy = data.serialize.sequence;

	// // 	var time_stamp = new Date().toJSON();
	// // 	var n_chunks = Math.ceil(seqLen/chunkSize);

	// // 	data.chunk_upload = true;
	// // 	data.seq_range_start = 0;
	// // 	data.seq_range_end = chunkSize;
	// // 	data.chunk_index = 0;
	// // 	data.n_chunks = n_chunks;

	// // 	data.serialize.sequence = seqCopy.slice(0, chunkSize);

	// // 	data.time_stamp = time_stamp;


	// // 	ajax.post('/sequences', data);


	// // 	delete data.serialize.features;
	// // 	delete data.serialize.inData;


	// // 	var hash = data.hash;
	// // 	var name = data.name;

	// // 	for(var i=chunkSize;i<seqCopy.length;i+=chunkSize) {
			
	// // 		var seq_range_start = i;
	// // 		var seq_range_end = Math.min(seqCopy.length, i+chunkSize);

	// // 		/*data = {
	// // 			chunk_upload: true,
	// // 			seq_range_start: seq_range_start,
	// // 			seq_range_end: seq_range_end,

	// // 			sequence: seqCopy.slice(seq_range_start, seq_range_end),

	// // 			hash: hash,
	// // 			name: name,
	// // 			time_stamp: time_stamp,
	// // 		};*/

	// // 		data.seq_range_start = seq_range_end;
	// // 		data.seq_range_end = seq_range_end;
	// // 		data.chunk_index = i / chunkSize;

	// // 		data.serialize.sequence = seqCopy.slice(seq_range_start, seq_range_end);

	// // 		ajax.post('/sequences', data);

	// // 		// console.log(i);
	// // 	}


	// // } else {
	// 	ajax.post('/sequences', data);
	// // }
	

	

	
	// // ParserUtil._testCompress(data.serialize.sequence);



	// self.postMessage({
	// 	'cmd': 'SequenceParsed',
	// });

	// // console.log('SequenceParsed: '+seqLen+' bp');

	// //console.log(data.sequenceFileContent)
	// //console.log(this.curFileContent.join('\r\n'))
	// //console.log(JSON.parse(JSON.stringify(this.curSeq)));
	// // seqCount++;
	// // if(seqCount%50 === 0) {
	// // 	console.log(JSON.parse(JSON.stringify(this.curSeq)));
	// // }
};



if(FastaParser.prototype.isWorker) {
	FastaParser.prototype.endSeq =
			FastaParser.prototype._worker_endSeq;
} else {
	FastaParser.prototype.endSeq =
			FastaParser.prototype._window_endSeq;
}


FastaParser.prototype.parse = function(cb1, cb2) {
	var me = this;

	var i = 0;
	var setTimeoutFrequency = 1000;


	function next() {
		i++;
		if(i % setTimeoutFrequency === 0) {
			setTimeout(function() {
				return me.fileWrapper.readLine(parseLine);
			}, 0);
		} else {
			return me.fileWrapper.readLine(parseLine);
		}
	}
	
	// function next() {
	// 	return me.fileWrapper.readLine(parseLine);
	// }


	// TODO: stuff for bare sequences

	// TODO: stuff for Identifiers (see http://www.ncbi.nlm.nih.gov/BLAST/blastcgihelp.shtml, 3.),
	// I don't know if they should be supported.

	function parseLine(line) {
		
		if(line === null) {
			me.endSeq(cb1);
			if(typeof cb2 === 'function') { return cb2(); }
			return;
		}

		

		var isHeader = me.isHeader(line);
		//console.log(isHeader + ": " + line);
		if(isHeader) {
			if(me.curSeq) {
				me.endSeq(cb1);
			}
			me.newSeq();
			me.parseHeader(line);

		} else {
			if(!me.curSeq) {
				me.newSeq();
			}
			me.parseSequenceLine(line);

		}
		// me.curFileContent.push(line);

		return next();
	};

	//me.newSeq();
	me.fileWrapper.readLine(parseLine);

};


FastaParser.prototype.isHeader = function(line) {
	if(line[0] === '>') {
		return true;
	}
	return false;
}

FastaParser.prototype.parseHeader = function(line) {
	this.curSeq.inData.name = this.headerToName(line);
}

FastaParser.prototype.headerToName = function(line) {
	return NameUtils.reformatName(line.slice(1));
}


FastaParser.prototype.parseSequenceLine = function(line) {
	
	// Not sure if this is needed, but http://www.ncbi.nlm.nih.gov/BLAST/blastcgihelp.shtml says
	// that the sequence can be interspersed with numbers and/or spaces.
	line = line.replace(/[\s]*[0-9]*/g,"");

	// It appears that our sequences are all lower case, so make sure that the sequence is lower case.
	line = line.toLowerCase();

	this.curSeq.sequence.push(line);
}



FastaParser.prototype.postProcessCurSeq = function() {
	var curSeq = this.curSeq;

	// curSeq.sequence = curSeq.sequence.join('').split('');
	curSeq.sequence = curSeq.sequence.join('');

	// not really if these need to be added
	// curSeq.manualUpdateStarted = false;
	// curSeq.needsRecalculateComplementSequence = true;
	// curSeq.reverseComplementSequence = [];
}


FastaParser.prototype.generateCurSeqData = function() {
	var seq = this.curSeq;
	var data = {
		dateCreated: "",
		dateModified: "",
		description: "",
		firstTimeImported: true,
		//hash: "99675bb8078663a3ce10584860bc1ce97158fb771233970b7e87bcbcbcd8c078",
		name: seq.inData.name,
		partSource: seq.inData.name,
		part_id: "",
		// sequenceFileContent: ParserUtil.serializedToGenbank(seq),
		sequenceFileContent: "",
		sequenceFileFormat: "Genbank",
		sequenceFileName: seq.inData.name,
		serialize: seq,
		size: seq.sequence.length,
		strain_id: "",
		user_id: "",
		ve_metadata: "",
	};
	
	// data.hash = asmCrypto.SHA256.hex(data.sequenceFileContent);
	data.hash = asmCrypto.SHA256.hex(ParserUtil.serializedToGenbank(seq));

	return data;
}




































