

var FileUtil = {};


FileUtil.readFileAsString = function(file, cb) {
	var reader = new FileReader();
	reader.onloadend = function() {
		var content = reader.result;
		return cb(content);
	};
	reader.readAsBinaryString(file);
}












