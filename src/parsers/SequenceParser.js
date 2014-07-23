(function(){





var SequenceParser = VE.SequenceParser = {
	


	parseSequenceFile: function(file, cb) {
		var name = file.name;
		var ext = this.extractFileExtension(name);

		if(/^(fasta|fas|fa|fna|ffn)$/.test(ext)) { // FASTA
			this.importFastaFile(file, cb);

		} else if(/^(gb|gbk|seq)$/.test(ext)) { // GENBANK
			this.importGenbankFile(file, cb);

		} else if(/^(json)$/.test(ext)) { // JSON
			this.importJsonFile(file, cb);
			
		} else if(/^(xml|rdf)$/.test(ext)) { // XML/RDF
			this.importXmlFile(file, cb);
			
		} else {
			cb(null, 'Unrecognized file extension "' + ext + '".');
		}

	},


	importGenbankFile: function(file, cb) {
		VE.ParserUtil.readFile(file, function(content) {
			var serSeq = VE.GenbankParser.genbankToSerialized(content);
			var sequence = VE.Sequence.deserialize(serSeq);
			cb(sequence, null);
		});
	},



	importFastaFile: function(file, cb) {
		VE.ParserUtil.readFile(file, function(content) {
			var serSeq = VE.FastaParser.fastaToSerialized(content);
			var sequence = VE.Sequence.deserialize(serSeq);
			cb(sequence, null);
		});
	},

	importJsonFile: function(file, cb) {
		console.error('TODO');
		cb(null, 'TODO')
	},

	importXmlFile: function(file, cb) {
		console.error('TODO');
		cb(null, 'TODO')
	},


	extractFileExtension: function(name) {
		var ext = "";
		var match = name.match(/\.(\w+)$/);
		if(match&&match[1]) { ext = match[1]; }
		return ext;
	},




};




_.extend(SequenceParser, Backbone.Events);


SequenceParser.on(VE.IoEvent.PARSE_SEQUENCE_FROM_FILE, function(file, cb) {
	SequenceParser.parseSequenceFile(file, cb);
});



	

	

	

	
	

	

	

	

	

	

	

	

	


})();