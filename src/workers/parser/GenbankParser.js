


var GenbankParser = function(file) {

	this.fileWrapper = new FileWrapper(file);
	this.LASTTYPE = false;

	this.curSeq = null;
	// this.curFileContent = [];
	//console.log(this.isWorker);

};

// run this in global scope of window or worker. since window.self = window, we're ok
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	// huzzah! a worker!
	GenbankParser.prototype.isWorker = true;
} else {
	// I'm a window... sad trombone.
	GenbankParser.prototype.isWorker = false;
}

GenbankParser.prototype.self = {
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

GenbankParser.prototype.newSeq = function() {
	this.curSeq = {
		features: [],
		inData: {},
		sequence: []
	};
	// this.curFileContent = [];
};


GenbankParser.prototype._worker_endSeq = function(cb) {
	
	this.postProcessCurSeq();
	
	// SequenceParserWorker.upLoadSerSeq(this.curSeq, cb);
	cb(this.curSeq);



	// var data = this.generateCurSeqData();
	
	// // ajax.post('/sequences', data, function(response) {
	// // 	//console.log(response);
		
	// // });
	
	// ajax.post('/sequences', data);

	// self.postMessage({
	// 	'cmd': 'SequenceParsed',
	// });
	

};


// kind of temporary now
GenbankParser.prototype._window_endSeq = function() {
	var __LOG__ = false;
	this.postProcessCurSeq();
	var data = this.generateCurSeqData();
	if(__LOG__) {
		//console.log(JSON.parse(JSON.stringify(this.curSeq)));
		console.log(JSON.parse(JSON.stringify(data)));
	}
};


if(GenbankParser.prototype.isWorker) {
	GenbankParser.prototype.endSeq =
			GenbankParser.prototype._worker_endSeq;
} else {
	GenbankParser.prototype.endSeq =
			GenbankParser.prototype._window_endSeq;
}


// 'genbankToJbeiseqJson' for some useful stuff

GenbankParser.prototype.newFeature = function() {
	var newFeature = {
		inData: {
			locations: [],
			index: this.curSeq.features.length,
		},
		notes: [],
	};
	this.curSeq.features.push(newFeature);
};

GenbankParser.prototype.getCurrentFeature = function() {
	return this.curSeq.features[this.curSeq.features.length-1];
};

GenbankParser.prototype.getLastFeatureNote = function() {
	var feat = this.getCurrentFeature();
	return feat.notes[feat.notes.length-1];
};



GenbankParser.prototype.generateCurSeqData = function() {
	var seq = this.curSeq;
	var data = {
		dateCreated: "",
		dateModified: "",
		description: "",
		firstTimeImported: true,
		//hash: "99675bb8078663a3ce10584860bc1ce97158fb771233970b7e87bcbcbcd8c078",
		name: seq.inData.name,
		partSource: seq.inData.name,
		part_id: "",
		// sequenceFileContent: this.curFileContent.join('\r\n'),
		sequenceFileContent: "",
		sequenceFileFormat: "Genbank",
		sequenceFileName: seq.inData.name,
		serialize: seq,
		size: seq.sequence.length,
		strain_id: "",
		user_id: "",
		ve_metadata: "",
	};
	
	// data.hash = asmCrypto.SHA256.hex(data.sequenceFileContent);
	data.hash = asmCrypto.SHA256.hex(ParserUtil.serializedToGenbank(seq));
	
	return data;
}


GenbankParser.prototype.postProcessCurSeq = function() {
	var curSeq = this.curSeq;

	curSeq.sequence = curSeq.sequence.join('').split('');

	// not really if these need to be added
	// curSeq.manualUpdateStarted = false;
	// curSeq.needsRecalculateComplementSequence = true;
	// curSeq.reverseComplementSequence = [];

	for(var i=0;i<curSeq.features.length;i++) {
		curSeq.features[i] = ParserUtil.postProcessGenbankFeature(curSeq.features[i]);

		// var feat = curSeq.features[i];

		// var name = null;
		// var nameIndex = null;

		// var hasName = false;
		// var usingLabel = false;
		// var usingGene = false;

		// for(var j=0;j<feat.notes.length;j++) {
		// 	var note = feat.notes[j];
		// 	var key = note.inData.name;
		// 	var value = note.inData.value;

		// 	// SET THE LABEL FIELD. DO NOT STORE AS AN ATTRIBUTE

		// 	if (this.isAFeatureLabel(key)) {
		// 		// Priority for name attributes is: 'label' > 'gene' > 'organism'.
		// 		// We check to see if the current name is from a lower-priority
		// 		// attribute. If it is, we store it as an attribute and then
		// 		// replace it with the current higher-priority attribute.

		// 		if(key === "label") {
		// 			// Label has top priority.
					
		// 			name = value;
		// 			nameIndex = j;

		// 			usingLabel = true;
		// 		} else if(key === "gene") {

		// 			// If we're not using the label for the name, use the
		// 			// current 'gene' attribute. If we are using label for
		// 			// the name, just save the current attribute as a normal
		// 			// attribute.
		// 			if(!usingLabel) {
						
		// 				name = value;
		// 				nameIndex = j;

		// 				usingGene = true;
		// 			}
		// 		} else if(!usingLabel && !usingGene) {
		// 			// If we don't have a label from either a 'gene' or a
		// 			// 'label' field, use the current field as the name.

		// 			name = value;
		// 			nameIndex = j;

		// 		}

		// 		hasName = true;
		// 	}
		// }

		// feat.inData.name = name || "";
		// if(nameIndex !== null) {
		// 	feat.notes.splice(nameIndex, 1);
		// }

		// if(feat.inData.locations.length > 0) {
		// 	var loc = feat.inData.locations[0];
		// 	feat.inData.start = loc.start;
		// 	feat.inData.end = loc.end;
		// } else {
		// 	feat.inData.start = null;
		// 	feat.inData.end = null;
		// }
	}
}


// /**
//  * isAFeatureLabel
//  * @param {String} name Name of a attribute or qualifier
//  * @return {Boolean} isALabel
//  */
// GenbankParser.prototype.isAFeatureLabel = function(name) {
// 	if (name === "label" || name === "name"|| name === "ApEinfo_label" ||
// 		name === "note" || name === "gene" || name === "organism" || name === "locus_tag") {

// 		return true;
// 	} else {
// 		return false;
// 	}
// }



GenbankParser.prototype.parse = function(cb1, cb2) {
	var me = this;

	var i = 0;
	var setTimeoutFrequency = 1000;


	function next() {
		i++;
		if(i % setTimeoutFrequency === 0) {
			setTimeout(function() {
				return me.fileWrapper.readLine(parseLine);
			}, 0);
		} else {
			return me.fileWrapper.readLine(parseLine);
		}
	}

	function parseLine(line) {
		
		if(line === null) {
			if(typeof cb2 === 'function') { return cb2(); }
			return;
		}



		// me.curFileContent.push(line);

		//console.log(line);
		var key = me.getLineKey(line);
		var val = me.getLineVal(line);
		var isKeyRunon = me.isKeywordRunon(line);
		var isSubKey = me.isSubKeyword(line);
		var isKey = me.isKeyword(line);
		//console.log(isKey);
		//console.log([key, val, isKeyRunon, isSubKey, isKey]);
		var tmp = null;

		// IGNORE LINES: DO NOT EVEN PROCESS
		if (line.trim() === "" || key==="COMMENT" || key===";") {
			// console.warn("Parsing GenBank File: Empty line, 'COMMENT', or ';' detected. Ignoring line: " + line);
			// gb.addMessage("Empty line, 'COMMENT', or ';' detected. Ignoring line: " + line);
			return next();
		}

		me.setType(key, isKey);


		// // if(key === '//') console.log(key);
		// if(key === '/') {
		// 	// console.log(lastLine);
		// 	console.log(me.fileWrapper.file.name)
		// }
		// lastLine = line;



		//console.log(isKey);
		//console.log(line);
		//console.log(me.LASTTYPE);

		switch (me.LASTTYPE) {
		case me.self.LOCUS_TAG:
			me.newSeq();
			//console.log(line);
			me.parseLocus(line);
			break;
		case me.self.FEATURES_TAG:
			//console.log(line);
			me.parseFeatures(line, key, val);
			break;
		case me.self.ORIGIN_TAG:
			//console.log(line);
			me.parseOrigin(line, key);
			break;
		case me.self.END_SEQUENCE_TAG:
			me.endSeq(cb1);
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
				// lastObj = me.parseKeyword(line, gb);
			}  else if ( isSubKey ) {       // REGULAR SUBKEYWORD, NOT FEATURE eg AUTHOR, ORGANISM
				//console.log(line);
				// tmp = gb.getLastKeyword();
				// lastObj = me.parseSubKeyword(tmp, line, gb);
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

		return next();
	};

	me.fileWrapper.readLine(parseLine);

};


GenbankParser.prototype.parseOrigin = function(line, key) {
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




GenbankParser.prototype.parseLocus = function(line) {
	var result, locusName, seqLen, strand, naType, linear, div, date;
	var lineArr = line.split(/[\s]+/g);

	if (lineArr.length <= 1) {
		console.warn("Parsing GenBank File: WARNING! Locus line contains no values!");
		// TODO
		// gb.addMessage("WARNING! Locus line contains no values: " + line);
	}

	locusName = NameUtils.reformatName(lineArr[1]);

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


GenbankParser.prototype.parseFeatures = function(line, key, val) {
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


GenbankParser.prototype.parseFeatureLocation = function(locStr) {
	
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

	var parseLocation = ParserUtil.parseGenbankFeatureLocation;

	

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


GenbankParser.prototype.parseFeatureQualifier = function(line) {
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




GenbankParser.prototype.getLineKey = function(line) {
	var arr;
	line = line.replace(/^[\s]*/, "");

	if(line.indexOf("=") < 0) {
		arr = line.split(/[\s]+/);
	} else {
		arr = line.split(/=/);
	}

	return arr[0];
};
	
GenbankParser.prototype.getLineVal = function(line) {
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

GenbankParser.prototype.isKeyword = function(line) {
	var isKey = false;
	if ( line.substr(0,10).match(/^[\S]+/) ) {
		isKey = true;
	}
	return isKey;
};

GenbankParser.prototype.isSubKeyword = function(line) {
	var isSubKey = false;
	if ( line.substr(0,10).match(/^[\s]+[\S]+/) ) {
		isSubKey = true;
	}
	return isSubKey;
};

GenbankParser.prototype.isKeywordRunon = function(line) {
	var runon;
	if ( line.substr(0,10).match(/[\s]{10}/)) {
		runon = true;
	} else {
		runon = false;
	}
	return runon;
};

GenbankParser.prototype.isQualifier = function(line) {
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

GenbankParser.prototype.isQualifierRunon = function(line) {
	var runon = false;
	//if ( Ext.String.trim(line.substr(0,20)) === ""  && !Ext.String.trim(line).charAt(0).match(/\// ) && !isLocationRunon(line) ) {
	if ( line.substr(0,10).trim() === "" && !line.trim().charAt(0).match(/\// ) && !this.isLocationRunon(line) ) {
		//console.log("qual runon: " + line);
		runon = true;
	}
	return runon;
};

GenbankParser.prototype.isLineRunon = function(line) {
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



GenbankParser.prototype.setType = function(key, isKey) {
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

	

