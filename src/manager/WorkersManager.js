

VE.WorkersManager = {

	sequenceParserWorkerPath: VE.PREFIX + 'workers/SequenceParserWorker.js',
	sequenceParserWorker: null,

	_parseSequenceFromFile_lastCb: null,

	createSequenceParserWorker: function() {
		var me = this;
		this.sequenceParserWorker = new Worker(this.sequenceParserWorkerPath);
		this.sequenceParserWorker.addEventListener('message', function(e) {
			var data = e.data;
			var WorkersManager = VE.WorkersManager;

			switch (data.cmd) {
				case 'SequenceParsed':
					var serSeq = data.data;
					if(typeof me._parseSequenceFromFile_lastCb === 'function') {
						var sequence = VE.Sequence.deserialize(serSeq);
						me._parseSequenceFromFile_lastCb(sequence);
					}
					break;
				default:
			};
			//console.log(e.data);
		}, false);
	},

	killSequenceParserWorker: function() {
		this.sequenceParserWorker.terminate();
	},

	restartSequenceParserWorker: function() {
		this.killSequenceParserWorker();
		this.createSequenceParserWorker();
	},

	parseSequenceFromFile: function(file, cb) {
		this.sequenceParserWorker.postMessage({
			'cmd': 'ParseSequenceFile',
			'file': file,
		});
		this._parseSequenceFromFile_lastCb = cb;
	},




};

_.extend(VE.WorkersManager, Backbone.Events);


VE.WorkersManager.on(VE.IoEvent.PARSE_SEQUENCE_FROM_FILE, function(file, cb) {
	this.parseSequenceFromFile(file, cb);
});




// VE.WorkersManager.createSequenceParserWorker();


















































