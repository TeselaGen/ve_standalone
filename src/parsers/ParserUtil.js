(function(){



var StringUtil = {
	/** Trims white space at beginning and end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	trim: function(line) {
		return line.replace(/^\s+|\s+$/g,"");
	},

	/** Trims white space at beginning string
	 * @param {String} line
	 * @returns {String} line
	 */
	ltrim: function(line) {
		return line.replace(/^\s+/,"");
	},

	/** Trims white space at end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	rtrim: function(line) {
		return line.replace(/\s+$/,"");
	},

	/** Pads white space at beginning of string
	 * @param {String} line
	 * @returns {String} line
	 */
	lpad: function(line, padString, length) {
		var str = line;
		while (str.length < length)
			str = padString + str;
		return str;
	},

	/** Pads white space at end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	rpad: function(line, padString, length) {
		var str = line;
		while (str.length < length)
			str = str + padString;
		return str;
	}
};





var ParserUtil = VE.ParserUtil = {};



ParserUtil.serializedToGenbank = function(serSeq) {
	
	function cutUpArray(val, start, end) {
		return val.slice(start, end).join('');
	}

	function cutUpStr(val, start, end) {
		return val.slice(start, end);
	}

	var cutUp = (typeof serSeq.sequence === 'string') ? cutUpStr : cutUpArray;


	var lines = [];
	lines.push(this.createGenbankLocus(serSeq));
	

	if(serSeq.features.length > 0) {
		lines.push("FEATURES             Location/Qualifiers");

		for(var i=0;i<serSeq.features.length;i++) {
			var feat = serSeq.features[i];
			lines.push(this.featureToGenbankString(feat));
		}

	}


	lines.push("ORIGIN      ");
	for (var i=0 ; i < serSeq.sequence.length; i=i+60) {
		var line = [];
		var ind = StringUtil.lpad( (""+(i+1))," ", 9);
		line.push(ind);

		for (var j=i; j < i+60; j=j+10) {
			// line.push(serSeq.sequence.slice(j,j+10).join(''));
			line.push(cutUp(serSeq.sequence, j, j+10));
		}
		lines.push(line.join(' '));
	}

	lines.push('//');

	return lines.join('\r\n');
};

ParserUtil.createGenbankLocus = function (serSeq) {
	var tmp;

	var naType = 'DNA'; // change if we support other types of sequences
	var date = this.getCurrentDateString();

	var line = StringUtil.rpad("LOCUS"," ", 12);
	line += StringUtil.rpad(serSeq.inData.name," ", 16);
	line += " "; // T.H line 2778 of GenbankFormat.as col 29 space
	line += StringUtil.lpad(String(serSeq.sequence.length)," ", 11);
	line += " bp "; // col 41
	// if (this.strandType !== "") {
	// 	tmp =  this.strandType + "-";
	// } else {
		tmp = "";
	// }
	line += StringUtil.lpad(tmp, " ", 3);
	line += StringUtil.rpad(naType," ",6);
	line += "  ";

	if (serSeq.inData.circular === false) {
		line += "linear  ";
		//line += "        ";
	} else {
		line += "circular";
	}

	line += " "; //col 64
	// if (this.divisionCode !== undefined) {
	// 	line += StringUtil.rpad(this.divisionCode," ", 3);
	// } else {
		StringUtil.rpad(line, " ", 3);
	// }
	line += " "; // col 68
	// DOES NOT PARSE DATE USEFULLY ORIGINALLY!
	line += date;
	//line += "\n";

	return line;
};

ParserUtil.getCurrentDateString = function() {
	var date = new Date();
	date = date.toString().split(' ');
	var day = date[2];
	var month = date[1].toUpperCase();
	var year = date[3];
	return day+'-'+month+'-'+year;
}


ParserUtil.parseGenbankFeatureLocation = function(location) {
	var retval = {};
	if (location.start !== undefined) {
		retval.start  = parseInt((location.start).toString().replace(/\<|\>/, ""));
	}
	if (location.end !== undefined) {
		retval.end    = parseInt((location.end).toString().replace(/\<|\>/, ""));
	} else {
		retval.end = retval.start;  // If there is no end, make it the same as start
		retval.to  = "..";
	}
	if (location.to) {
		retval.to          = location.to;
		// This joins the start and end. start..
	}
	return retval;
}


ParserUtil.postProcessGenbankFeature = function(feat) {
	var name = null;
	var nameIndex = null;

	var hasName = false;
	var usingLabel = false;
	var usingGene = false;

	for(var j=0;j<feat.notes.length;j++) {
		var note = feat.notes[j];
		var key = note.inData.name;
		var value = note.inData.value;

		// SET THE LABEL FIELD. DO NOT STORE AS AN ATTRIBUTE

		if (this.isAGenbankFeatureLabel(key)) {
			// Priority for name attributes is: 'label' > 'gene' > 'organism'.
			// We check to see if the current name is from a lower-priority
			// attribute. If it is, we store it as an attribute and then
			// replace it with the current higher-priority attribute.

			if(key === "label") {
				// Label has top priority.
				
				name = value;
				nameIndex = j;

				usingLabel = true;
			} else if(key === "gene") {

				// If we're not using the label for the name, use the
				// current 'gene' attribute. If we are using label for
				// the name, just save the current attribute as a normal
				// attribute.
				if(!usingLabel) {
					
					name = value;
					nameIndex = j;

					usingGene = true;
				}
			} else if(!usingLabel && !usingGene) {
				// If we don't have a label from either a 'gene' or a
				// 'label' field, use the current field as the name.

				name = value;
				nameIndex = j;

			}

			hasName = true;
		}
	}

	feat.inData.name = name || "";
	if(nameIndex !== null) {
		feat.notes.splice(nameIndex, 1);
	}

	
	if(feat.inData.locations.length > 0) {
		// var loc = feat.inData.locations[0];
		// feat.inData.start = loc.start;
		// feat.inData.end = loc.end;

		var start = 999999999999999999999;
		var end = 0;
		var locs = feat.inData.locations;
		for(var i=0;i<locs.length;i++) {
			var loc = locs[i];
			start = Math.min(start, loc.start);
			end = Math.max(end, loc.end);
		}
		feat.inData.start = start;
		feat.inData.end = end;

	} else {
		feat.inData.start = null;
		feat.inData.end = null;
	}

	return feat;
}



/**
 * isAFeatureLabel
 * @param {String} name Name of a attribute or qualifier
 * @return {Boolean} isALabel
 */
ParserUtil.isAGenbankFeatureLabel = function(name) {
	if (name === "label" || name === "name"|| name === "ApEinfo_label" ||
		name === "note" || name === "gene" || name === "organism" || name === "locus_tag") {

		return true;
	} else {
		return false;
	}
}


ParserUtil.featureNoteInDataToGenbankString = function(noteInData) {
	if(noteInData.quoted) {
		return StringUtil.lpad("/", " ", 22) + noteInData.name + "=\"" + noteInData.value + "\"";
	} else {
		return StringUtil.lpad("/"," ", 22) + noteInData.name + "=" + noteInData.value ;
	}
}

ParserUtil.featureToGenbankString = function(feat) {
	var lines = [];

	var line = "     " + StringUtil.rpad(feat.inData.type, " ", 16);
	var locStr = [];

	for(var i=0;i<feat.inData.locations.length;i++) {
		var loc = feat.inData.locations[i];
		locStr.push(loc.start + '..' + loc.end);
	}
	locStr = locStr.join(',');

	if(feat.inData.strand === -1) {
		locStr = "complement(" + locStr + ")";
	}

	lines.push(line + locStr);

	lines.push(this.featureNoteInDataToGenbankString({
		name: 'label',
		value: feat.inData.name,
		quoted: true
	}));

	for(var i=0;i<feat.notes.length;i++) {
		var noteInData = feat.notes[i].inData;
		lines.push(this.featureNoteInDataToGenbankString(noteInData));
	}

	return lines.join('\r\n');
}


ParserUtil.detectXMLFormat = function(data) {
	// use DOM parser from xml-for-cocoonjs.js as web workers can't access the DOM
	var DOMParser = domParser;

	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(data, "text/xml");
	var diff = xmlDoc.getElementsByTagName("seq:seq");
	if(diff.length === 0) {diff = xmlDoc.getElementsByTagName("seq");}
	// var json = xml2json(data);
	
	if (diff.length > 0) {
		// JBEI-SEQ
		return {
			format: 'JBEI',
			xml: xmlDoc
		};
	} else {
		// SBOL
		return {
			format: 'SBOL',
			xml: xmlDoc
		};
	}
}


// not really tested
ParserUtil.removeXmlTagNamespaces = function(str) {
	return str.replace(/\<(\/?)\w+\:/g, "<$1");
}


ParserUtil.serSeqToSeqData = function(serSeq) {
	var data = {
		dateCreated: "",
		dateModified: "",
		description: "",
		firstTimeImported: true,
		name: serSeq.inData.name,
		partSource: serSeq.inData.name,
		part_id: "",
		sequenceFileContent: "",
		sequenceFileFormat: "Genbank",
		sequenceFileName: serSeq.inData.name,
		serialize: serSeq,
		size: serSeq.sequence.length,
		strain_id: "",
		user_id: "",
		ve_metadata: "",
	};
	
	data.hash = asmCrypto.SHA256.hex(ParserUtil.serializedToGenbank(serSeq));

	return data;
}


























































})();