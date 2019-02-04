
// http://localhost:8888/index.html

var fs = require('fs');
var http = require('http');
//var httpProxy = require('http-proxy');
var url = require("url");
var path = require("path");

var port = process.argv[2] || 8888;



// var path_to_sequence_file_directory = '/Users/mmatena/Desktop/web_worker_test_data/';

// function getSequenceFile(filename, cb) {
// 	filename = path_to_sequence_file_directory + filename;
// 	path.exists(filename, function(exists) {
// 		if(!exists) {
// 			if(typeof cb === 'function') { cb('File doesn\'t exist', null); }
// 			return;
// 		}
// 		fs.readFile(filename, "binary", function(err, file) {
// 			if(typeof cb === 'function') { cb(err, file); }
// 			return;
// 		});
// 	});

// }



var app = http.createServer(function(request, response) {
	var uri = url.parse(request.url).pathname;
	var match;

	// if(match = uri.match(/^\/GET_SEQUENCE_FILE\/(.+)$/)) {
	// 	var sequenceFileName = match[1];
	// 	getSequenceFile(sequenceFileName, function(err, file) {
	// 		if(err) {
	// 			response.writeHead(500, {"Content-Type": "text/plain"});
	// 			response.write(err + "\n");
	// 			response.end();
	// 			return;
	// 		}
			
	// 		response.writeHead(200, {"Content-Type": "text/plain"});
	// 		response.write(file, "binary");
	// 		response.end();
	// 	});
	// 	return;

	// } else
	if(uri === '/index.html' || uri === '/main.js') {
		// uri = '/../test' + uri;
		uri = '/test' + uri;
	} else {
		// uri = '/../' + uri;
	}
	
	var filename = path.join(process.cwd(), uri);
	// console.log(filename)

	var contentTypesByExtension = {
		'.html': "text/html",
		'.css':  "text/css",
		'.js':   "text/javascript"
	};
	
	if (fs.existsSync(filename)) {


		
		fs.readFile(filename, "binary", function(err, file) {
			if(err) {
				response.writeHead(500, {"Content-Type": "text/plain"});
				response.write(err + "\n");
				response.end();
				return;
			}
			
			var headers = {};
			var contentType = contentTypesByExtension[path.extname(filename)];
			if(contentType) headers["Content-Type"] = contentType;
			response.writeHead(200, headers);
			response.write(file, "binary");
			response.end();
		});
	
	} else {
		
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not Found\n");
		response.end();
		return;
	
	}
}).listen(port);
















































