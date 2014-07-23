(function(){





var GenbankParser = VE.GenbankParser = {
	LASTTYPE: false,
	curSeq: null,
};


GenbankParser.self = {
	LOCUS_TAG: "LOCUS",
	DEFINITION_TAG: "DEFINITION",
	ACCESSION_TAG: "ACCESSION",
	VERSION_TAG: "VERSION",
	KEYWORDS_TAG: "KEYWORDS",
	//SEGMENT_TAG:"SEGMENT"
	SOURCE_TAG: "SOURCE",
	ORGANISM_TAG: "ORGANISM",
	REFERENCE_TAG: "REFERENCE",
	AUTHORS_TAG: "AUTHORS",
	CONSORTIUM_TAG: "CONSRTM",
	TITLE_TAG: "TITLE",
	JOURNAL_TAG: "JOURNAL",
	PUBMED_TAG: "PUBMED",
	REMARK_TAG: "REMARK",
	COMMENT_TAG: "COMMENT",
	FEATURES_TAG: "FEATURES",
	BASE_COUNT_TAG: "BASE COUNT",
	//CONTIG_TAG: "CONTIG"
	ORIGIN_TAG: "ORIGIN",
	END_SEQUENCE_TAG: "//",
};

GenbankParser.reset = function() {
	this.LASTTYPE = false;
	this.curSeq = null;
};


GenbankParser.newSeq = function() {
	this.curSeq = {
		features: [],
		inData: {},
		sequence: []
	};
	// this.curFileContent = [];
};



// 'genbankToJbeiseqJson' for some useful stuff

GenbankParser.newFeature = function() {
	var newFeature = {
		inData: {
			locations: [],
			index: this.curSeq.features.length,
		},
		notes: [],
	};
	this.curSeq.features.push(newFeature);
};

GenbankParser.getCurrentFeature = function() {
	return this.curSeq.features[this.curSeq.features.length-1];
};

GenbankParser.getLastFeatureNote = function() {
	var feat = this.getCurrentFeature();
	return feat.notes[feat.notes.length-1];
};


GenbankParser.postProcessCurSeq = function() {
	var curSeq = this.curSeq;

	curSeq.sequence = curSeq.sequence.join('').split('');

	var features = curSeq.features;
	for(var i=0,ii=features.length;i<ii;i++) {
		features[i] = VE.ParserUtil.postProcessGenbankFeature(features[i]);
	}
}


/**
 * @param {String} genbank Genbank file content as a string.
 */
GenbankParser.genbankToSerialized = function(genbank) {
	this.reset();

	var lines = genbank.split(/\r?\n/);
	loop: for(var i=0,ii=lines.length;i<ii;i++) {
		var line = lines[i];

		var key = this.getLineKey(line);
		var val = this.getLineVal(line);
		var isKeyRunon = this.isKeywordRunon(line);
		var isSubKey = this.isSubKeyword(line);
		var isKey = this.isKeyword(line);

		// IGNORE LINES: DO NOT EVEN PROCESS
		if (line.trim() === "" || key==="COMMENT" || key===";") {
			// console.warn("Parsing GenBank File: Empty line, 'COMMENT', or ';' detected. Ignoring line: " + line);
			// gb.addMessage("Empty line, 'COMMENT', or ';' detected. Ignoring line: " + line);
			continue;
		}

		this.setType(key, isKey);


		switch (this.LASTTYPE) {
		case this.self.LOCUS_TAG:
			this.newSeq();
			//console.log(line);
			this.parseLocus(line);
			break;
		case this.self.FEATURES_TAG:
			//console.log(line);
			this.parseFeatures(line, key, val);
			break;
		case this.self.ORIGIN_TAG:
			//console.log(line);
			this.parseOrigin(line, key);
			break;
		case this.self.END_SEQUENCE_TAG:
			break loop;
			//console.warn("Parsing GenBank File: End of GenBank file detected.");
			//console.log(line);
			break;
		case "COMMENT":
			// do nothing
			// console.warn("GenbankManager.lineParser(: This line contains a 'COMMENT' and has been ignored: " + line);
			break;
		default: // FOLLOWING FOR KEYWORDS NOT PREVIOUSLY DEFINED IN CASES
			//console.log(line);
			if ( key === "BASE") {
				// do nothing;              // BLANK LINES || line with ;;;;;;;;;  || "BASE COUNT"
				// console.warn("Parsing GenBank File: This line with BaseCount has been ignored: " + line);
				// gb.addMessage("This line with BaseCount has been ignored: " + line);
				break;
			} else if ( isKey ) {
				//console.log(line);
				// REGULAR KEYWORDS (NOT LOCUS/FEATURES/ORIGIN) eg VERSION, ACCESSION, SOURCE, REFERENCE
				// lastObj = this.parseKeyword(line, gb);
			}  else if ( isSubKey ) {       // REGULAR SUBKEYWORD, NOT FEATURE eg AUTHOR, ORGANISM
				//console.log(line);
				// tmp = gb.getLastKeyword();
				// lastObj = this.parseSubKeyword(tmp, line, gb);
			} else if ( isKeyRunon ) {      // RUNON LINES FOR NON-FEATURES
				//console.log(line);
				//console.log(line);
				// lastObj.setValue(lastObj.getValue() + Teselagen.StringUtil.rpad("\n"," ",13) + Ext.String.trim(line));
				// lastObj.appendValue(Teselagen.StringUtil.rpad("\n"," ",13) + Ext.String.trim(line), gb);
			} else {
				// console.warn("Parsing GenBank File: This line has been ignored: " + line);
				// gb.addMessage("This line has been ignored: " + line);
				//console.log(line);
			}
		}

	}

	this.postProcessCurSeq();

	var seq = this.curSeq;
	this.curSeq = null;
	return seq;
};



GenbankParser.parseOrigin = function(line, key) {
	// var result;
	if (key === this.self.ORIGIN_TAG) {
		// result = Ext.create("Teselagen.bio.parsers.GenbankOriginKeyword");
		// result.setKeyword(this.self.ORIGIN_TAG);
		// gb.setOrigin(result);
		// gb.addKeywordTag(this.self.ORIGIN_TAG);
		//console.log(line);
	} else {
		// result = gb.getOrigin();
		//console.log(line);
		line = line.replace(/[\s]*[0-9]*/g,"");
		// result.appendSequence(line);
		this.curSeq.sequence.push(line);
	}

	// if (result === null || result === undefined) {
	// 	console.warn("Parsing GenBank File: Could not create a GenbankOriginKeyword");
	// 	gb.addMessage("Could not create a GenbankOriginKeyword at line " + line);
	// }

	// return result;
};




GenbankParser.parseLocus = function(line) {
	var result, locusName, seqLen, strand, naType, linear, div, date;
	var lineArr = line.split(/[\s]+/g);

	if (lineArr.length <= 1) {
		console.warn("Parsing GenBank File: WARNING! Locus line contains no values!");
		// TODO
		// gb.addMessage("WARNING! Locus line contains no values: " + line);
	}

	locusName = reformatName(lineArr[1]);

	// BAC180K
	//console.log(locusName);

	// if(!Teselagen.utils.NameUtils.isLegalName(locusName)) {
	// 	locusName = Teselagen.utils.NameUtils.reformatName(locusName);
	// 	gb.addMessage('Invalid locus name. Illegal characters replaced with \'_\'.');
	// }

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
		//console.log(strand);
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


	this.curSeq.inData.name = locusName;
	this.curSeq.inData.circular = !linear;


	// // Just rewrite the existing Locus object. It's easier than setting everything.
	// result = Ext.create("Teselagen.bio.parsers.GenbankLocusKeyword", {
	// 	locusName: locusName,
	// 	sequenceLength: seqLen,
	// 	strandType: strand,
	// 	naType: naType,
	// 	linear: linear,
	// 	divisionCode: div,
	// 	date: date
	// });

	// if (result === null || result === undefined) {
	// 	console.warn("Parsing GenBank File: Could not create a GenbankLocusKeyword");
	// 	gb.addMessage("Could not create a GenbankLocusKeyword at line " + line);
	// }

	// result.setKeyword(this.self.LOCUS_TAG);
	// gb.addKeyword(result);
	// gb.addKeywordTag(this.self.LOCUS_TAG);
	// return result;
};


GenbankParser.parseFeatures = function(line, key, val) {
	var result, featElm, featQual, lastElm, strand;
	//console.log(line);
	// FOR THE MAIN FEATURES LOCATION/QUALIFIER LINE
	if (key === this.self.FEATURES_TAG) {
		// result = Ext.create("Teselagen.bio.parsers.GenbankFeaturesKeyword");
		// result.setKeyword(this.self.FEATURES_TAG);
		// gb.setFeatures(result);
		// gb.addKeywordTag(this.self.FEATURES_TAG);
		// return result;
		return;
	}
	
	//throw new Error("DO SOMETHING HERE");

	// FOR LOCATION && QUALIFIER LINES

	var isQual		= this.isQualifier(line);
	var isLineRunon	= this.isLineRunon(line);
	// result = gb.getFeatures();

	//console.log(line);

	if (!isLineRunon) {    // New Element/Qualifier lines. Not runon lines.

		if ( !isQual ) {    // is a new Feature Element (e.g. source, CDS) in the form of  "[\s] KEY  SEQLOCATION"
			//strand = val.replace(/\(|\)|[\d]+|[.]+|,|>|</g, "");
			if (val.match(/complement/g)) {
				strand = -1;
			} else {
				strand = 1;
			}
			//console.log(line);

			this.newFeature();
			var feat = this.getCurrentFeature();
			feat.inData.type = key;
			feat.inData.strand = strand;


			this.parseFeatureLocation(val);

			/*featElm = Ext.create("Teselagen.bio.parsers.GenbankFeatureElement", {
				keyword: key,
				strand: strand,
				complement: false,
				join: false,
				index: result.getFeaturesElements().length
			}); // set complement and join correctly when parsing FeatureLocation
			// Could be multiple locations per Element; Parses true/false complement||join
			this.parseFeatureLocation(featElm, val, gb);

			result.addElement(featElm);
			lastObj = featElm;*/

			this.lastLineWasLocation = true;

		} else {    // is a FeatureQualifier in the /KEY="BLAH" format; could be multiple per Element
			
			this.parseFeatureQualifier(line);
			// lastElm  = result.getLastElement();
			// lastElm.addFeatureQualifier(featQual);
			// lastObj  = featQual;

			this.lastLineWasLocation = false;
		}

	} else {
		//console.log(line);
		if(this.lastLineWasLocation) {
			// this.parseFeatureLocation( result.getLastElement() , Ext.String.trim(line), gb);
			//console.log(line);
			this.parseFeatureLocation(line.trim());

			this.lastLineWasLocation = true;
		} else {
			// result.getLastElement().getLastFeatureQualifier().appendValue(Ext.String.trim(line).replace(/\"/g, ""));
			this.getLastFeatureNote().value += line.trim().replace(/\"/g, "");
			this.lastLineWasLocation = false;
		}
	}

	// if (result === null || result === undefined) {
	// 	console.warn("Parsing GenBank File: Could not create a GenbankFeaturesKeyword");
	// 	gb.addMessage("Could not create a GenbankFeaturesKeyword at line " + line);
	// }

	// return result;
};


GenbankParser.parseFeatureLocation = function(locStr) {
	
	// function parseLocation(location) {
	// 	var retval = {};
	// 	if (location.start !== undefined) {
	// 		retval.start  = parseInt((location.start).toString().replace(/\<|\>/, ""));
	// 	}
	// 	if (location.end !== undefined) {
	// 		retval.end    = parseInt((location.end).toString().replace(/\<|\>/, ""));
	// 	} else {
	// 		retval.end = retval.start;  // If there is no end, make it the same as start
	// 		retval.to  = "..";
	// 	}
	// 	if (location.to) {
	// 		retval.to          = location.to;
	// 		// This joins the start and end. start..
	// 	}
	// 	return retval;
	// }

	var parseLocation = VE.ParserUtil.parseGenbankFeatureLocation;

	

	var location;
	var complement = false;
	var join       = false;

	locStr = locStr.trim();

	if (locStr.match(/complement/i) ) {
		complement = true;
		// featElm.setComplement(true); //defult is false
	}
	if (locStr.match(/join/i) ) {
		join = true;
		// featElm.setJoin(true);
	}

	//locStr = locStr.replace(/complement|join|\(|\)|\>|\</g,"");
	locStr = locStr.replace(/^,|,$|complement|join|\(|\)/g,"");
	locArr = locStr.split(/,/g);

	

	for (var i=0; i<locArr.length; i++) {
		var ind   = locArr[i].split(/[.]+/);
		var toArr = locArr[i].match(/[.]+|\^/) || [];
		var to    = toArr[0] || "";
		// // GenbankFeatureLocation will deal with the partial <||> cases.
		// location = Ext.create("Teselagen.bio.parsers.GenbankFeatureLocation", {
		// 	start: ind[0],
		// 	end: ind[1],
		// 	to: to
		// });
		// featElm.addFeatureLocation(location);

		var location = {
			start: ind[0],
			end: ind[1],
			to: to
		};
		location = parseLocation(location);
		var feat = this.getCurrentFeature();
		feat.inData.locations.push(location);
		//console.log([ind[0],ind[1],to]);
	}
	if (complement && join) {
		// Do ReverseLocations Case
		// This may not be neccesary with the inclusion of join and complement booleans.
	}

	// if (location === null || location === undefined) {
	// 	console.warn("Parsing GenBank File: Could not create a GenbankFeatureLocation");
	// 	gb.addMessage("Could not create a GenbankFeatureLocation from text '" + locStr + "'");
	// }

	// return location;
};


GenbankParser.parseFeatureQualifier = function(line) {
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

	this.getCurrentFeature().notes.push(note);

	// featQual = Ext.create("Teselagen.bio.parsers.GenbankFeatureQualifier", {
	// 	name: lineArr[0],
	// 	value: val,
	// 	quoted: quoted
	// });

	// if (featQual === null || featQual === undefined) {
	// 	console.warn("Parsing GenBank File: Could not create a GenbankFeatureQualifier");
	// 	gb.addMessage("Could not create a GenbankFeatureQualifier at line " + line);
	// }
	// return featQual;
};




GenbankParser.getLineKey = function(line) {
	var arr;
	line = line.replace(/^[\s]*/, "");

	if(line.indexOf("=") < 0) {
		arr = line.split(/[\s]+/);
	} else {
		arr = line.split(/=/);
	}

	return arr[0];
};
	
GenbankParser.getLineVal = function(line) {
	var arr;

	if(line.indexOf("=") < 0) {
		line = line.replace(/^[\s]*[\S]+[\s]+|[\s]+$/, "");
		line = line.trim();
		return line;
	} else {
		arr = line.split(/=/);
		return arr[1];
	}
};

GenbankParser.isKeyword = function(line) {
	var isKey = false;
	if ( line.substr(0,10).match(/^[\S]+/) ) {
		isKey = true;
	}
	return isKey;
};

GenbankParser.isSubKeyword = function(line) {
	var isSubKey = false;
	if ( line.substr(0,10).match(/^[\s]+[\S]+/) ) {
		isSubKey = true;
	}
	return isSubKey;
};

GenbankParser.isKeywordRunon = function(line) {
	var runon;
	if ( line.substr(0,10).match(/[\s]{10}/)) {
		runon = true;
	} else {
		runon = false;
	}
	return runon;
};

GenbankParser.isQualifier = function(line) {
	var qual = false;
	/*if (line.charAt(21) === "/") {//T.H. Hard coded method
			qual = true;
		}*/
	if ( line.trim().charAt(0).match(/\// )) { // searches based on looking for / in beginning of line
		qual = true;
	} else if ( line.match(/^[\s]*\/[\w]+=[\S]+/) ) { // searches based on "   /key=BLAH" regex
		qual = true;
	}
	return qual;
};

GenbankParser.isQualifierRunon = function(line) {
	var runon = false;
	//if ( Ext.String.trim(line.substr(0,20)) === ""  && !Ext.String.trim(line).charAt(0).match(/\// ) && !isLocationRunon(line) ) {
	if ( line.substr(0,10).trim() === "" && !line.trim().charAt(0).match(/\// ) && !this.isLocationRunon(line) ) {
		//console.log("qual runon: " + line);
		runon = true;
	}
	return runon;
};

GenbankParser.isLineRunon = function(line) {
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
};


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



GenbankParser.setType = function(key, isKey) {
	if (key === "LOCUS") {
		this.LASTTYPE = key;
	} else if (key === "REFERENCE") {
		this.LASTTYPE = key;
	} else if (key === "FEATURES") {
		this.LASTTYPE = key;
	} else if (key === "ORIGIN") {
		this.LASTTYPE = key;
	} else if (key === "//") {
		this.LASTTYPE = key;
	} else if (isKey === true) {
		this.LASTTYPE = key;
	}
	//console.log(this.LASTTYPE);
}



/**
 * Reformat name to be only alphanumeric with underscores "_" or hyphens "-".
 * Replaces special characters with underscores.
 *(REFACTORED FROM DEVICEDESIGNMANAGER)
 * @param {String} pName
 * @returns {String} New name.
 */
function reformatName(pName) {
	return pName.toString().replace(/[^a-zA-Z0-9_\-]/g, "_");
}

	

	

	

	
	

	

	

	

	

	

	

	

	


})();