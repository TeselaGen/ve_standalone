

importScripts(
	
	'lib/asmcrypto.js', // http://vibornoff.com/asmcrypto.js
	'lib/xml-for-cocoonjs.js', // https://github.com/videlais/xml-for-cocoonjs/blob/master/src/xml-for-cocoonjs.js
	// 'lib/xml2json.js',

	'util/NameUtils.js',
	'util/StringUtil.js',
	'util/FileWrapper.js',
	'util/ParserUtil.js',
	'util/XmlToJson.js',
	'util/FileUtil.js',
	'util/Throttler.js',

	'parser/GenbankParser.js',
	'parser/FastaParser.js',
	'parser/JbeiseqParser.js',
	'parser/SbolParser.js',

	'util/ajax.js'

);

// importScripts(
// 	'util/compression/lzma-full.js',
// 	'util/compression/zee.js',
// 	'util/compression/zopfli.min.js',
// 	'util/compression/zpipe.min.js'
// );


var SequenceParserWorker = {
	// pendingSavedSequences: 0,
};


SequenceParserWorker.extractFileExtension = function(name) {
	var ext = "";
	var match = name.match(/\.(\w+)$/);
	if(match&&match[1]) { ext = match[1]; }
	return ext;
}


// cb1 is called after each sequence is saved to the server
// cb2 is called after each sequence file is parsed
SequenceParserWorker.importSequenceFile = function(file, cb1, cb2) {
	throw new Error('Deprecated');
	var name = file.name;
	var ext = this.extractFileExtension(name);

	if(/^(fasta|fas|fa|fna|ffn)$/.test(ext)) { // FASTA
		this.importFastaFile(file, cb1, cb2);

	} else if(/^(gb|gbk|seq)$/.test(ext)) { // GENBANK
		this.importGenbankFile(file, cb1, cb2);

	} else if(/^(json)$/.test(ext)) { // JSON
		this.importJsonFile(file, cb1, cb2);

	} else if(/^(xml|rdf)$/.test(ext)) { // XML/RDF
		this.importXmlFile(file, cb1, cb2);

	} else {
		// if(typeof cb === 'function') { return cb(); }
		if(typeof cb1 === 'function') { cb1(); }
		if(typeof cb2 === 'function') { cb2(); }
	}
}


SequenceParserWorker.importFastaFile = function(file, cb1, cb2) {
	var parser = new FastaParser(file);
	parser.parse(cb1, cb2);
}

SequenceParserWorker.importGenbankFile = function(file, cb1, cb2) {
	var parser = new GenbankParser(file);
	parser.parse(cb1, cb2);
}

SequenceParserWorker.importJsonFile = function(file, cb1, cb2) {
	FileUtil.readFileAsString(file, function(content) {
		var jbeiseqJson = JSON.parse(content);
		var serSeq = JbeiseqParser.jbeiseqJsonToSerSeq(jbeiseqJson);

		// SequenceParserWorker.upLoadSerSeq(serSeq, cb1);
		// if(typeof cb === 'function') { return cb(); }
		if(typeof cb1 === 'function') { cb1(serSeq); }
		if(typeof cb2 === 'function') { cb2(); }
	});
}

SequenceParserWorker.importXmlFile = function(file, cb1, cb2) {
	FileUtil.readFileAsString(file, function(content) {

		// might not be a good idea to do it this way...
		content = ParserUtil.removeXmlTagNamespaces(content);

		var doc = ParserUtil.detectXMLFormat(content);
		if(doc.format === 'JBEI') {
			var serSeq = JbeiseqParser.jbeiseqXmlToSerSeq(doc.xml);
			// SequenceParserWorker.upLoadSerSeq(serSeq, cb1);
			if(typeof cb1 === 'function') { cb1(serSeq); }

		} else if(doc.format === 'SBOL') {
			var serSeqs = SbolParser.sbolXmlToSerSeq(doc.xml);
			for(var i=0;i<serSeqs.length;i++) {
				var serSeq = serSeqs[i];
				// SequenceParserWorker.upLoadSerSeq(serSeq, cb1);
				if(typeof cb1 === 'function') { cb1(serSeq); }
			}

		}
		// if(typeof cb === 'function') { return cb(); }
		// if(typeof cb1 === 'function') { cb1(); }
		if(typeof cb2 === 'function') { cb2(); }

	});
}

// var ___ = 0;
SequenceParserWorker.upLoadSerSeq = function(serSeq, cb) {
	var me = this;
	var data = ParserUtil.serSeqToSeqData(serSeq);

	// me.pendingSavedSequences++;

	ajax.post('/sequences', data, function(responseText) {
		// me.pendingSavedSequences--;
		// if(me.pendingSavedSequences === 0) {
		// 	self.postMessage({
		// 		'cmd': 'SequenceSavedToServer',
		// 	});
		// }
		// console.log(___);___++;
		if(typeof cb === 'function') { cb(responseText); }
	});
}



// cb1 is called after all sequences is saved to the server
// cb2 is called after each sequence file is parsed
SequenceParserWorker.bulkImportSequenceFiles = function(files, cb1, cb2) {
	
	var buffer = [];

	var count = files.length;
	function afterSeqParsed(serSeq) {
		if(serSeq) {
			var data = ParserUtil.serSeqToSeqData(serSeq);
			buffer.push(data);
		}
	}

	function afterFileParsed() {
		if(typeof cb2 === 'function') { cb2(); }
		if(!--count) {
			ajax.post('/sequences', buffer, function(responseText) {
				if(typeof cb1 === 'function') { cb1(responseText); }
			});
		}
	}

	for(var i=0;i<files.length;i++) {
		var file = files[i];
		var name = file.name;
		var ext = this.extractFileExtension(name);
		
		if(/^(fasta|fas|fa|fna|ffn)$/.test(ext)) { // FASTA
			// afterFileParsed();console.error('TODO');
			this.importFastaFile(file, afterSeqParsed, afterFileParsed);

		} else if(/^(gb|gbk|seq)$/.test(ext)) { // GENBANK
			this.importGenbankFile(file, afterSeqParsed, afterFileParsed);

		} else if(/^(json)$/.test(ext)) { // JSON
			this.importJsonFile(file, afterSeqParsed, afterFileParsed);
			// afterFileParsed();console.error('TODO');
			
		} else if(/^(xml|rdf)$/.test(ext)) { // XML/RDF
			this.importXmlFile(file, afterSeqParsed, afterFileParsed);
			// afterFileParsed();console.error('TODO');
			
		} else {
			afterFileParsed();
			// if(typeof cb2 === 'function') { cb2(); }
		}
	}

}



SequenceParserWorker.batchImportFromFiles = function(files) {
	var me = this;

	var fileBatchChunkSize = 1000;

	console.log(files.length);

	function upLoadBatch(files, start, end, cb) {
		var chunk = files.slice(start, end);
		me.bulkImportSequenceFiles(chunk, function() {
			if(typeof cb === 'function') { cb(); }
		}, function() {
			self.postMessage({
				'cmd': 'SequenceFileParsed',
			});
		});
	}



	var start = 0;
	var end = fileBatchChunkSize;

	function fn() {		
		if(start >= files.length) {
			console.log('***DONE***')
			self.postMessage({
				'cmd': 'SequenceSavedToServer',
			});
		} else {
			console.log('CHUNK #' + ((start-fileBatchChunkSize)/fileBatchChunkSize))
			upLoadBatch(files, start, end, fn);
			start += fileBatchChunkSize;
			end += fileBatchChunkSize;
		}
	}

	// upLoadBatch(files, start, end, fn);
	fn();
}


SequenceParserWorker.parseSequenceFile = function(file, cb) {
	
	function afterSeqParsed(serSeq) {
		cb(serSeq);
	}

	// function afterFileParsed() {
	// 	if(typeof cb2 === 'function') { cb2(); }
	// 	if(!--count) {
	// 		ajax.post('/sequences', buffer, function(responseText) {
	// 			if(typeof cb1 === 'function') { cb1(responseText); }
	// 		});
	// 	}
	// }
	var afterFileParsed = null;

	var name = file.name;
	var ext = this.extractFileExtension(name);
	
	if(/^(fasta|fas|fa|fna|ffn)$/.test(ext)) { // FASTA
		// afterFileParsed();console.error('TODO');
		this.importFastaFile(file, afterSeqParsed, afterFileParsed);

	} else if(/^(gb|gbk|seq)$/.test(ext)) { // GENBANK
		this.importGenbankFile(file, afterSeqParsed, afterFileParsed);

	} else if(/^(json)$/.test(ext)) { // JSON
		this.importJsonFile(file, afterSeqParsed, afterFileParsed);
		// afterFileParsed();console.error('TODO');
		
	} else if(/^(xml|rdf)$/.test(ext)) { // XML/RDF
		this.importXmlFile(file, afterSeqParsed, afterFileParsed);
		// afterFileParsed();console.error('TODO');
		
	} else {
		// afterFileParsed();
		cb(null);
		// if(typeof cb2 === 'function') { cb2(); }
	}
	

}

SequenceParserWorker.onParseSequenceFile = function(file) {
	this.parseSequenceFile(file, function(serSeq) {
		self.postMessage({
			'cmd': 'SequenceParsed',
			'data': serSeq,
		});
	});
}


self.addEventListener('message', function(e) {
	var data = e.data;
	switch (data.cmd) {
		case 'ImportGenbankFile':
			var file = data.file;
			//console.log(file);
			
			var parser = new GenbankParser(file);
			//console.log(parser);

			parser.parse();

			break;
		case 'ImportFastaFile':
			var file = data.file;
			//console.log(file);
			
			var parser = new FastaParser(file);
			//console.log(parser);

			parser.parse();

			break;
		case 'ImportXmlFile':
			var file = data.file;

			var reader = new FileReader();
			reader.onloadend = function() {
				var content = reader.result;


				// content = content.replace(/\<(\/?)\w+\:/g, "<$1");
				// might not be a good idea to do it this way...
				content = ParserUtil.removeXmlTagNamespaces(content);

				var doc = ParserUtil.detectXMLFormat(content);
				console.log(doc);

				if(doc.format === 'JBEI') {
					var serSeq = JbeiseqParser.jbeiseqXmlToSerSeq(doc.xml);
					// console.log(serSeq);

				} else if(doc.format === 'SBOL') {
					// throw new Error('TODO');
					var serSeq = SbolParser.sbolXmlToSerSeq(doc.xml);
					console.log(serSeq);


				}
				
			};
			reader.readAsBinaryString(file);

			break;
		case 'BatchImportFromFiles':
			var files = data.files;

			SequenceParserWorker.batchImportFromFiles(files);

			break;
		case 'ParseSequenceFile':
			var file = data.file;
			SequenceParserWorker.onParseSequenceFile(file);
			break;
		default:
	};
}, false);




















