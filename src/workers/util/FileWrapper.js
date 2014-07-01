

var FileWrapper = function(file) {
	this.file = file;
	this.lines = null;
	this.linePos = 0;
};


FileWrapper.prototype.readLine = function(cb) {
	var me = this;

	if(this.lines) {
		if(this.linePos >= this.lines.length) {
			return cb(null);
		} else {
			var line = this.lines[this.linePos++];
			return cb(line);
		}
		
	}

	var reader = new FileReader();
	reader.onloadend = function() {
		var content = reader.result;
		me.lines = content.split(/\r?\n/);
		var line = me.lines[me.linePos++];
		return cb(line);
	};

	reader.readAsBinaryString(this.file);
};





// var FileWrapper = function(file) {

// 	this.file = file;
// 	this.pos = 0;
// 	this.buffer = "";
// 	this.bufferPos = 0;
// 	this.bufferSize = 64*1024;

// 	//this.reader = new FileReader();
// };


// FileWrapper.prototype.readLine = function(cb) {
// 	var me = this;
// 	// if(this.pos >= this.file.size && this.buffer.length === 0) {
// 	if(this.pos-this.bufferSize+this.bufferPos >= this.file.size) {
		

// 		// console.log((this.pos-this.bufferSize+this.bufferPos) + ' : ' + (this.file.size))

// 		return cb(null);
// 	}

// 	var ind = this.buffer.indexOf('\n', this.bufferPos);

// 	if(ind === -1) {
// 		var temBuf = this.buffer.slice(this.bufferPos);



// 		console.log(temBuf)
// 		// console.log(this.buffer)
// 		// console.log((this.pos - this.bufferSize + this.buffer.length) + ' : ' + (this.file.size))



// 		if(this.pos - this.bufferSize + this.buffer.length === this.file.size) {
// 			var line = temBuf;
// 			this.pos += this.bufferSize;
// 			return cb(line);
// 		}


// 		//var reader = this.reader;
// 		var reader = new FileReader();

// 		reader.onloadend = function() {
// 			// var content = reader.result;
// 			// console.log(content);
			
// 			me.buffer = temBuf + reader.result;
// 			me.bufferPos = 0;
// 			var ind = me.buffer.indexOf('\n', me.bufferPos);
// 			var line = me.buffer[ind-1] === '\r' ? me.buffer.slice(me.bufferPos, ind-1) :
// 					 me.buffer.slice(me.bufferPos, ind);
// 			me.bufferPos = ind + 1;


// 			// console.log(me.buffer)
// 			// console.log(ind)
// 			// console.log(line)

// 			return cb(line);
// 		};
// 		//debugger;
// 		reader.readAsBinaryString(this.file.slice(this.pos, this.pos+this.bufferSize));
// 		this.pos += this.bufferSize;
// 		//console.log(this.pos);
// 	} else {
// 		var ind = me.buffer.indexOf('\n', me.bufferPos);
// 		var line = me.buffer[ind-1] === '\r' ? me.buffer.slice(me.bufferPos, ind-1) :
// 				 me.buffer.slice(me.bufferPos, ind);
// 		me.bufferPos = ind + 1;
// 		// console.log(line)
// 		console.log((this.pos - this.bufferSize + this.buffer.length) + ' : ' + (this.file.size))
// 		return cb(line);
// 	}
// };

