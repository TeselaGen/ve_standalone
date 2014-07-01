(function() {

if(typeof Bio != 'object') {
	Bio = {};
}

if(!Array.isArray(Bio.scriptQueue)) {
	Bio.scriptQueue = [];
}

Bio.allScriptsAddedToQueue = false;


function includeScript(url, charset, noPrefix) {

	var PREFIX = Bio.PREFIX || "../Bio/";
	var script = document.createElement('script');
	script.type = 'text/javascript';
	if (charset) {
		script.charset = charset;
	}
	if(noPrefix !== true) {
		url = PREFIX + url;
	}
	script.src = url;

	script.onload = function() {
		Bio.scriptQueue.shift();
		if(Bio.scriptQueue.length > 0) {
			document.getElementsByTagName('head')[0].appendChild(Bio.scriptQueue[0]);
		} else if(Bio.allScriptsAddedToQueue) {
			if(typeof Bio.onload === 'function') {
				Bio.onload();
			}
		}
	};

	script.onerror = function() {
		Bio.scriptQueue.shift();
		if(Bio.scriptQueue.length > 0) {
			document.getElementsByTagName('head')[0].appendChild(Bio.scriptQueue[0]);
		} else if(Bio.allScriptsAddedToQueue) {
			if(typeof Bio.onload === 'function') {
				Bio.onload();
			}
		}
	};

	Bio.scriptQueue.push(script);

	if(Bio.scriptQueue.length === 1) {
		document.getElementsByTagName('head')[0].appendChild(script);
	}

}



includeScript('alphabet/DnaAlphabet.js');

includeScript('enzymes/RestrictionEnzyme.js');

includeScript('tools/OrfFinder.js');
includeScript('tools/Translator.js');
includeScript('tools/SequenceAligner.js');
includeScript('tools/CutSiteFinder.js');












Bio.allScriptsAddedToQueue = true;





















})();