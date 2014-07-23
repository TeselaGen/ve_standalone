(function(){


// State variables
var LASTTYPE = false;
var curSeq = null;
var lastLineWasLocation = false;
var _originContent = "";

// Properties of state variables (to reduce number of property look-ups)
var _curSeq__sequence = null;




// Constants
var LOCUS_TAG = "LOCUS",
	DEFINITION_TAG = "DEFINITION",
	ACCESSION_TAG = "ACCESSION",
	VERSION_TAG = "VERSION",
	KEYWORDS_TAG = "KEYWORDS",
	//SEGMENT_TAG ="SEGMENT"
	SOURCE_TAG = "SOURCE",
	ORGANISM_TAG = "ORGANISM",
	REFERENCE_TAG = "REFERENCE",
	AUTHORS_TAG = "AUTHORS",
	CONSORTIUM_TAG = "CONSRTM",
	TITLE_TAG = "TITLE",
	JOURNAL_TAG = "JOURNAL",
	PUBMED_TAG = "PUBMED",
	REMARK_TAG = "REMARK",
	COMMENT_TAG = "COMMENT",
	FEATURES_TAG = "FEATURES",
	BASE_COUNT_TAG = "BASE COUNT",
	//CONTIG_TAG = "CONTIG"
	ORIGIN_TAG = "ORIGIN",
	END_SEQUENCE_TAG = "//";





function reset() {
	LASTTYPE = false;
	curSeq = null;
	lastLineWasLocation = false;
	_originContent = "";

	_curSeq__sequence = null;
}

function newSeq() {
	curSeq = {
		features: [],
		inData: {},
		sequence: []
	};

	_curSeq__sequence = curSeq.sequence;
}

function newFeature() {
	var newFeature = {
		inData: {
			locations: [],
			index: curSeq.features.length,
		},
		notes: [],
	};
	curSeq.features.push(newFeature);
}


function getCurrentFeature() {
	return curSeq.features[curSeq.features.length-1];
}

function getLastFeatureNote() {
	var feat = getCurrentFeature();
	return feat.notes[feat.notes.length-1];
}


function postProcessCurSeq() {
	// curSeq.sequence = curSeq.sequence.join('').split('');
	curSeq.sequence = _originContent.replace(/[\s\d]/g,"").split('');
	
	var features = curSeq.features;
	for(var i=0,ii=features.length;i<ii;i++) {
		features[i] = VE.ParserUtil.postProcessGenbankFeature(features[i]);
	}
	
}



/**
 * @param {String} genbank Genbank file content as a string.
 */
function genbankToSerialized(genbank) {
	// console.profile();


	reset();

	var lines = genbank.split(/\r?\n/);
	loop: for(var i=0,ii=lines.length;i<ii;i++) {
		var line = lines[i];

		var key = getLineKey(line);
		// var val = getLineVal(line);
		// var isKeyRunon = isKeywordRunon(line);
		// var isSubKey = isSubKeyword(line);
		
		// IGNORE LINES: DO NOT EVEN PROCESS
		if (line.trim() === "" || key==="COMMENT" || key===";") {
			continue;
		}

		var isKey = isKeyword(line);
		setType(key, isKey);


		switch (LASTTYPE) {
		case LOCUS_TAG:
			newSeq();
			parseLocus(line);
			break;
		case FEATURES_TAG:
			// parseFeatures(line, key, val);
			parseFeatures(line, key, getLineVal(line));
			break;
		case ORIGIN_TAG:
			parseOrigin(line, key);
			break;
		case END_SEQUENCE_TAG:
			break loop;
			break;
		case "COMMENT":
			// do nothing
			break;
		default: // FOLLOWING FOR KEYWORDS NOT PREVIOUSLY DEFINED IN CASES
			// if ( key === "BASE") {
			// 	// do nothing;              // BLANK LINES || line with ;;;;;;;;;  || "BASE COUNT"
			// 	// console.warn("Parsing GenBank File: This line with BaseCount has been ignored: " + line);
			// 	// gb.addMessage("This line with BaseCount has been ignored: " + line);
			// 	break;
			// } else if ( isKey ) {
			// 	//console.log(line);
			// 	// REGULAR KEYWORDS (NOT LOCUS/FEATURES/ORIGIN) eg VERSION, ACCESSION, SOURCE, REFERENCE
			// 	// lastObj = parseKeyword(line, gb);
			// }  else if ( isSubKey ) {       // REGULAR SUBKEYWORD, NOT FEATURE eg AUTHOR, ORGANISM
			// 	//console.log(line);
			// 	// tmp = gb.getLastKeyword();
			// 	// lastObj = parseSubKeyword(tmp, line, gb);
			// } else if ( isKeyRunon ) {      // RUNON LINES FOR NON-FEATURES
			// 	//console.log(line);
			// 	//console.log(line);
			// 	// lastObj.setValue(lastObj.getValue() + Teselagen.StringUtil.rpad("\n"," ",13) + Ext.String.trim(line));
			// 	// lastObj.appendValue(Teselagen.StringUtil.rpad("\n"," ",13) + Ext.String.trim(line), gb);
			// } else {
			// 	// console.warn("Parsing GenBank File: This line has been ignored: " + line);
			// 	// gb.addMessage("This line has been ignored: " + line);
			// 	//console.log(line);
			// }
		}

	}

	// doneParsingOrigin();


	postProcessCurSeq();

	var seq = curSeq;
	reset();


	// console.profileEnd();


	return seq;
};





function parseOrigin(line, key) {
	if (key !== ORIGIN_TAG) {
		_originContent += line;
	}
}

// function doneParsingOrigin(line, key) {
// 	var a = _originContent.replace(/[\s\d]/g,"");
// 	curSeq.sequence.push(a);
// }


// function parseOrigin(line, key) {
// 	if (key !== ORIGIN_TAG) {
// 		line = line.replace(/[\s]*[0-9]*/g,"");
// 		curSeq.sequence.push(line);
// 	}
// }

// function parseOrigin(line, key) {
// 	if (key !== ORIGIN_TAG) {
// 		line = line.replace(/[\s\d]/g,"");
// 		_curSeq__sequence.push(line);
// 	}
// }






function parseLocus(line) {
	var result, locusName, seqLen, strand, naType, linear, div, date;
	var lineArr = line.split(/[\s]+/g);

	if (lineArr.length <= 1) {
		console.warn("Parsing GenBank File: WARNING! Locus line contains no values!");
	}

	locusName = VE.ParserUtil.reformatName(lineArr[1]);


	// Sequence Length and bp
	seqLen = "";
	for (var i=1; i < lineArr.length; i++) {
		if (lineArr[i].match(/^bp$/gi)) {
			seqLen = parseInt(lineArr[i-1]);
		}
	}


	// StrandType: T.H. Code defaults only to ds-DNA
	strand = "";
	for (i=1; i < lineArr.length; i++) {
		if (lineArr[i].match(/^ss/gi)) {
			strand = "ss";
		} else if (lineArr[i].match(/^ds/gi)) {
			strand = "ds";
		}
	}


	// naType: T.H. defaults to DNA.
	naType = "";
	for (i=1; i < lineArr.length; i++) {
		if (lineArr[i].match(/DNA$/gi)) {
			naType = "DNA";
		} else if (lineArr[i].match(/RNA$/gi)) {
			naType = "RNA";
		}
	}


	// Linear vs Circular?; CANNOT HANDLE TANDEM
	linear = true;
	for (i=1; i < lineArr.length; i++) {
		if (lineArr[i].match(/circular/gi)) {
			linear = false;
		}
	}

	// Date and Div
	// Date is in this format:1-APR-2012
	for (i=1; i < lineArr.length; i++) {
		if (lineArr[i].match(/-[A-Z]{3}-/g)) {
			date = lineArr[i];
		}
		if (lineArr[i].match(/^[A-Z]{3}/g) && lineArr[i].length === 3 && !lineArr[i].match(/DNA|RNA/g)) {
			div = lineArr[i];
		}
	}


	curSeq.inData.name = locusName;
	curSeq.inData.circular = !linear;

}


function parseFeatures(line, key, val) {
	var result, featElm, featQual, lastElm, strand;

	// FOR THE MAIN FEATURES LOCATION/QUALIFIER LINE
	if (key === FEATURES_TAG) {
		return;
	}
	
	// FOR LOCATION && QUALIFIER LINES

	var isQual		= isQualifier(line);
	var isLineRunon_	= isLineRunon(line);

	//console.log(line);

	if (!isLineRunon_) {    // New Element/Qualifier lines. Not runon lines.
		if ( !isQual ) {    // is a new Feature Element (e.g. source, CDS) in the form of  "[\s] KEY  SEQLOCATION"
			//strand = val.replace(/\(|\)|[\d]+|[.]+|,|>|</g, "");
			if (val.match(/complement/g)) {
				strand = -1;
			} else {
				strand = 1;
			}
			//console.log(line);

			newFeature();
			var feat = getCurrentFeature();
			feat.inData.type = key;
			feat.inData.strand = strand;


			parseFeatureLocation(val);


			lastLineWasLocation = true;

		} else {    // is a FeatureQualifier in the /KEY="BLAH" format; could be multiple per Element
			parseFeatureQualifier(line);
			lastLineWasLocation = false;
		}

	} else {
		if(lastLineWasLocation) {
			parseFeatureLocation(line.trim());

			lastLineWasLocation = true;

		} else {
			getLastFeatureNote().value += line.trim().replace(/\"/g, "");
			lastLineWasLocation = false;

		}

	}

}


function parseFeatureLocation(locStr) {
	
	var parseLocation = VE.ParserUtil.parseGenbankFeatureLocation;

	

	var location;
	var complement = false;
	var join       = false;

	locStr = locStr.trim();

	if (locStr.match(/complement/i) ) {
		complement = true;
	}
	if (locStr.match(/join/i) ) {
		join = true;
	}

	locStr = locStr.replace(/^,|,$|complement|join|\(|\)/g,"");
	locArr = locStr.split(/,/g);


	for (var i=0; i<locArr.length; i++) {
		var ind   = locArr[i].split(/[.]+/);
		var toArr = locArr[i].match(/[.]+|\^/) || [];
		var to    = toArr[0] || "";

		var location = {
			start: ind[0],
			end: ind[1],
			to: to
		};
		location = parseLocation(location);
		var feat = getCurrentFeature();
		feat.inData.locations.push(location);
		//console.log([ind[0],ind[1],to]);
	}
	// if (complement && join) {
	// 	// Do ReverseLocations Case
	// 	// This may not be neccesary with the inclusion of join and complement booleans.
	// }

}


function parseFeatureQualifier(line) {
	var featQual, newLine, lineArr;

	newLine = line.trim();
	newLine = newLine.replace(/^\/|"$/g, "");
	lineArr = newLine.split(/=\"|=/);

	var quoted = false;
	var val = lineArr[1];

	if(val) {
		val = val.replace(/\\/g, " ");

		if (line.match(/=\"/g)) {
			quoted = true;
			val = val.replace(/\".*/g, "");
		} else if (val.match(/^\d+$/g)) {
			val = parseInt(val);
		} else {
			quoted = false;
		}
	}

	var note = {
		inData: {
			name: lineArr[0],
			value: val,
			quoted: quoted
		}
	};

	getCurrentFeature().notes.push(note);
}



function getLineKey(line) {
	 var match;
	if(line.indexOf("=") < 0) {
		match = line.match(/^\s*(\S*)/);
	} else {
		match = line.match(/^\s*([^\=]*)/);
	}
	return match[1];
}




// function getLineVal(line) {
// 	var arr;

// 	if(line.indexOf("=") < 0) {
// 		line = line.replace(/^[\s]*[\S]+[\s]+|[\s]+$/, "");
// 		line = line.trim();
// 		return line;
// 	} else {
// 		arr = line.split(/=/);
// 		return arr[1];
// 	}
// }


function getLineVal(line) {
	var arr;

	if(line.indexOf("=") < 0) {
		line = line.replace(/^\s*\S+\s+|\s+$/, "");
		line = line.trim();
		return line;
	} else {
		arr = line.split('=');
		return arr[1];
	}
}






function isKeyword(line) {
	var isKey = false;
	if ( line.substr(0,10).match(/^\S+/) ) {
		isKey = true;
	}
	return isKey;
}

function isSubKeyword(line) {
	var isSubKey = false;
	if ( line.substr(0,10).match(/^\s+\S+/) ) {
		isSubKey = true;
	}
	return isSubKey;
}

function isKeywordRunon(line) {
	var runon;
	if ( line.substr(0,10).match(/\s{10}/)) {
		runon = true;
	} else {
		runon = false;
	}
	return runon;
}

function isQualifier(line) {
	var qual = false;
	/*if (line.charAt(21) === "/") {//T.H. Hard coded method
			qual = true;
		}*/
	if ( line.trim().charAt(0).match(/\// )) { // searches based on looking for / in beginning of line
		qual = true;
	} else if ( line.match(/^\s*\/\w+=\S+/) ) { // searches based on "   /key=BLAH" regex
		qual = true;
	}
	return qual;
}

function isQualifierRunon(line) {
	var runon = false;
	//if ( Ext.String.trim(line.substr(0,20)) === ""  && !Ext.String.trim(line).charAt(0).match(/\// ) && !isLocationRunon(line) ) {
	if ( line.substr(0,10).trim() === "" && !line.trim().charAt(0).match(/\// ) && !isLocationRunon(line) ) {
		//console.log("qual runon: " + line);
		runon = true;
	}
	return runon;
}

function isLineRunon(line) {
	var trimmed = line.trim();

	// Regex to be applied to the trimmed line to determine if the line
	// contains a prefix like complement( or join( for the definition of the
	// feature location, as per specifications here:
	// ftp://ftp.ncbi.nih.gov/genbank/gbrel.txt
	//
	// Prefixes can be in the form: ^<prefix> (
	// I've made the space after the prefix optional to increase flexibility.
	var prefixRegex = /^(order|join|complement)\s*\(/;

	return line.substr(0,10).trim() === "" && (!trimmed.charAt(0).match(/\//) || trimmed.match(prefixRegex));
}


// /**
//  * isAFeatureLabel
//  * @param {String} name Name of a attribute or qualifier
//  * @return {Boolean} isALabel
//  */
// GenbankParser.isAFeatureLabel = function(name) {
// 	if (name === "label" || name === "name"|| name === "ApEinfo_label" ||
// 		name === "note" || name === "gene" || name === "organism" || name === "locus_tag") {

// 		return true;
// 	} else {
// 		return false;
// 	}
// }



function setType(key, isKey) {
	// if(LASTTYPE === "ORIGIN" && key !== "ORIGIN") {
	// 	doneParsingOrigin();
	// }

	if (key === "LOCUS") {
		LASTTYPE = key;
	} else if (key === "REFERENCE") {
		LASTTYPE = key;
	} else if (key === "FEATURES") {
		LASTTYPE = key;
	} else if (key === "ORIGIN") {
		LASTTYPE = key;
	} else if (key === "//") {
		LASTTYPE = key;
	} else if (isKey === true) {
		LASTTYPE = key;
	}
}














var GenbankParser = VE.GenbankParser = {
	genbankToSerialized: genbankToSerialized,
};






// debugger;















































})();