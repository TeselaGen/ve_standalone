
var isArray = Array.isArray;
var isString = function(v) { return typeof v === 'string'; }
var isObject = function(v) { return typeof v === 'object'; }
var isFunction = function(v) { return typeof v === 'function'; }


var fs = require('fs');



var make_json_js_fileName = 'make.json.js';
var make_json_js_fileContent = fs.readFileSync(make_json_js_fileName, 'binary');


var makeJson;
eval('makeJson = ' + make_json_js_fileContent);


var name = makeJson.name;
var sources = makeJson.sources;
var stylesheets = makeJson.stylesheets;
var pre = makeJson.pre;
var dependencies = makeJson.dependencies;
var workers = makeJson.workers;


var oSources = "",
	oStylesheets = "",
	oPre = "",
	oDependencies = "",
	oWorkers = "";

if(sources) {
	oSources = concatFiles(sources, ';\n');
}

if(stylesheets) {
	oStylesheets = concatFiles(stylesheets, '\n');
}

if(pre) {
	oPre = concatFiles(pre, ';\n');
}

if(dependencies) {
	oDependencies = concatDependencies(dependencies);
}

if(workers) {
	oWorkers = concatWorkers(workers);
}


var oJs, oCss;

oCss = oStylesheets;

oJs = [oDependencies, oWorkers, oPre, oSources].join(';\n');


var buildDir = 'build/';

var oJsFileName = buildDir + name + '.js';
var oCssFileName = buildDir + name + '.css';

fs.writeFileSync(oJsFileName, oJs);
fs.writeFileSync(oCssFileName, oCss);

















var workerProxies = {};


function concatWorkers(workers) {
	var cat = [];

	for(var i=0,ii=workers.length;i<ii;i++) {
		var worker = workers[i];
		cat.push(processWorker(worker));
	}

	cat = cat.join('\n');

	var ret = '(function(){' +
		'var workerProxies = {};' +
		cat + 
		'\n' + 
		'var _Worker = window.Worker;\n' +
		'window.Worker = function(a) {\n' +
			'if(workerProxies[a]) { a = workerProxies[a]; }\n' +
			'return new _Worker(a);\n' +
		'}\n' +
		'})();\n';

	return ret;

}


function processWorker(worker) {
	var proxy = worker.proxy;
	var sources = worker.sources;
	var main = worker.main;

	var oSources = concatFiles(sources);
	var oMain = concatFiles([main]);

	var src = [oSources, oMain].join('\n');


	// src = '(function(){' + 
	// 	'importScripts = function(){};' +
	// 	src +
	// 	'})()';

	// src = 'workerProxies['+JSON.stringify(proxy)+'] = URL.createObjectURL( new Blob([' +
	// 	src +
	// 	'], { type: "application/javascript" }));\n';




	src = 'function(){' + 
		'importScripts = function(){};' +
		src +
		'}.toString()';

	src = 'workerProxies['+JSON.stringify(proxy)+'] = URL.createObjectURL( new Blob(["(",' +
		src +
		', ")()"], { type: "application/javascript" }));\n';




	return src;
}



function concatDependencies(deps, joinChar) {
	joinChar = (joinChar === undefined) ? '\n': joinChar;
	var cat = [];
	for(var i=0,ii=deps.length;i<ii;i++) {
		var fileName = deps[i].src;
		var fileContent = fs.readFileSync(fileName, 'binary');
		cat.push(fileContent);
	}

	cat = cat.join(joinChar);
	return cat;
}



function concatFiles(fileNames, joinChar) {
	joinChar = (joinChar === undefined) ? '\n': joinChar;
	var cat = [];
	for(var i=0,ii=fileNames.length;i<ii;i++) {
		var fileName = fileNames[i];
		var fileContent = fs.readFileSync(fileName, 'binary');
		cat.push(fileContent);
	}

	cat = cat.join(joinChar);
	return cat;
}






















