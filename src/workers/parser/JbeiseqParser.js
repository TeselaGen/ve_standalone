

var JbeiseqParser = {};


JbeiseqParser.jbeiseqJsonToSerSeq = function(json) {
	
	var result = {
		features: [],
		inData: {},
		sequence: []
	};

	function new_Feature() {
		return {
			inData: {
				locations: [],
				index: result.features.length,
			},
			notes: [],
		};
	}


	//===============
	// LOCUSKEYWORD

	var name    = NameUtils.reformatName(json["seq:seq"]["seq:name"]);
	var circ    = (json["seq:seq"]["seq:circular"] === "true" || json["seq:seq"]["seq:circular"] === true);
	result.inData.name = name;
	result.inData.circular = circ;

	var seq     = json["seq:seq"]["seq:sequence"].toLowerCase();
	result.sequence = seq.split('');

	//===============
	// FEATURESKEYWORD

	var features = [];

	var feats = json["seq:seq"]["seq:features"];

	for (var i=0; i < feats.length; i++) {
		
		var feat = new_Feature();

		var ft = feats[i]["seq:feature"];

		var locations   = [];
		var qualifiers  = [];

		var type       = ft["seq:type"];
		var complement = ft["seq:complement"];

		feat.inData.type = type;

		//===============
		// LOCATION
		for (var j=0; j < ft["seq:location"].length; j++) {
			var start = ft["seq:location"][j]["seq:genbankStart"];
			var end   = ft["seq:location"][j]["seq:end"];
			var to    = "..";

			var loc = {
				start:  start,
				end:    end,
				to:     to
			};

			loc = ParserUtil.parseGenbankFeatureLocation(loc);
			feat.inData.locations.push(loc);
		}

		//===============
		// ATTRIBUTES -> QUALIFIERS
		var label = ft["seq:label"];

		var qual = {
			inData: {
				name:      "label",
				value:      label,
				quoted:     true
			}
		};
		feat.notes.push(qual);

		for (var j=0; j < ft["seq:attribute"].length; j++) {
			var qual = {
				inData: {
					name:   ft["seq:attribute"][j]["_name"],
					value:  ft["seq:attribute"][j]["__text"],
					quoted: ft["seq:attribute"][j]["_quoted"]
				}
			};
			feat.notes.push(qual);
		}

		// POST CALCULATIONS
		var strand;
		if (complement === true) {
			strand = -1;
		} else {
			strand = 1;
		}

		feat.inData.strand = strand;

		// var join;
		// if (locations.length>1) {
		// 	join = true;
		// } else {
		// 	join = false;
		// }

		// // THIS DOESNT WORK YET
		// var na;
		// if (seq.match(/[^U][^RYMKSWHBVDN][ACGT]/gi)) {
		// 	na = "DNA";
		// } else if (seq.match(/[^T][^RYMKSWHBVDN][ACGU]/gi)) {
		// 	na = "RNA";
		// } else if (seq.match(/[^U][ACGTRYMKSWHBVDNacgtrymkswhbvdn]+/gi)) {
		// 	na = "PRO";
		// } else {
		// 	na = "NAN";
		// }
		
		feat = ParserUtil.postProcessGenbankFeature(feat);
		result.features.push(feat);
	}

	return result;
};

// JbeiseqParser.jbeiseqXmlToSerSeq = function(xml) {
	
// 	var result = {
// 		features: [],
// 		inData: {},
// 		sequence: []
// 	};

// 	function new_Feature() {
// 		return {
// 			inData: {
// 				locations: [],
// 				index: result.features.length,
// 			},
// 			notes: [],
// 		};
// 	}


// 	var seqNode = xml.childNodes[0];

// 	//===============
// 	// LOCUSKEYWORD

// 	var name = seqNode.getElementsByTagName('seq:name')[0].getElementsByTagName('#text')[0].data || "";
// 	name = NameUtils.reformatName(name);
// 	var circ = (seqNode.getElementsByTagName('seq:circular')[0].getElementsByTagName('#text')[0].data === 'true') ? true : false;
// 	result.inData.name = name;
// 	result.inData.circular = circ;

// 	var seq     = seqNode.getElementsByTagName('seq:sequence')[0].getElementsByTagName('#text')[0].data.toLowerCase();
// 	result.sequence = seq.split('');


// 	//===============
// 	// FEATURESKEYWORD

// 	var features = [];

// 	var feats = seqNode.getElementsByTagName('seq:features')[0].childNodes;

// 	for (var i=0; i < feats.length; i++) {
		
// 		var feat = new_Feature();

// 		var ft = feats[i];

// 		var locations   = [];
// 		var qualifiers  = [];

// 		var type       = ft.getElementsByTagName("seq:type")[0].getElementsByTagName('#text')[0].data;
// 		var complement = ft.getElementsByTagName("seq:complement")[0].getElementsByTagName('#text')[0].data;

// 		feat.inData.type = type;

// 		//===============
// 		// LOCATION

// 		var locations = ft.getElementsByTagName('seq:location');

// 		for (var j=0; j < locations.length; j++) {
			
// 			var location = locations[j];

// 			var start = location.getElementsByTagName("seq:genbankStart")[0].getElementsByTagName('#text')[0].data;
// 			var end   = location.getElementsByTagName("seq:end")[0].getElementsByTagName('#text')[0].data;
// 			var to    = "..";

// 			var loc = {
// 				start:  start,
// 				end:    end,
// 				to:     to
// 			};

// 			loc = ParserUtil.parseGenbankFeatureLocation(loc);
// 			feat.inData.locations.push(loc);
// 		}


// 		//===============
// 		// ATTRIBUTES -> QUALIFIERS
// 		var label = ft.getElementsByTagName('seq:label')[0].getElementsByTagName('#text')[0].data;

// 		var qual = {
// 			inData: {
// 				name:      "label",
// 				value:      label,
// 				quoted:     true
// 			}
// 		};
// 		feat.notes.push(qual);

// 		var attributes = ft.getElementsByTagName('seq:attribute');
// 		for (var j=0; j < attributes.length; j++) {
// 			var attribute = attributes[j];

// 			var qual = {
// 				inData: {
// 					name:   attribute.attr.name.value,
// 					value:  attribute.getElementsByTagName('#text')[0].data,
// 					quoted: false
// 				}
// 			};
// 			feat.notes.push(qual);

// 		}

// 		// POST CALCULATIONS
// 		var strand;
// 		if (complement === true) {
// 			strand = -1;
// 		} else {
// 			strand = 1;
// 		}

// 		feat.inData.strand = strand;

// 		feat = ParserUtil.postProcessGenbankFeature(feat);
// 		result.features.push(feat);
// 	}

// 	return result;
// };


JbeiseqParser.jbeiseqXmlToSerSeq = function(xml) {
	
	var result = {
		features: [],
		inData: {},
		sequence: []
	};

	function new_Feature() {
		return {
			inData: {
				locations: [],
				index: result.features.length,
			},
			notes: [],
		};
	}


	var seqNode = xml.childNodes[0];

	//===============
	// LOCUSKEYWORD

	var name = seqNode.getElementsByTagName('name')[0].getElementsByTagName('#text')[0].data || "";
	name = NameUtils.reformatName(name);
	var circ = (seqNode.getElementsByTagName('circular')[0].getElementsByTagName('#text')[0].data === 'true') ? true : false;
	result.inData.name = name;
	result.inData.circular = circ;

	var seq     = seqNode.getElementsByTagName('sequence')[0].getElementsByTagName('#text')[0].data.toLowerCase();
	result.sequence = seq.split('');


	//===============
	// FEATURESKEYWORD

	var features = [];

	var feats = seqNode.getElementsByTagName('features')[0].childNodes;

	for (var i=0; i < feats.length; i++) {
		
		var feat = new_Feature();

		var ft = feats[i];

		var locations   = [];
		var qualifiers  = [];

		var type       = ft.getElementsByTagName("type")[0].getElementsByTagName('#text')[0].data;
		var complement = ft.getElementsByTagName("complement")[0].getElementsByTagName('#text')[0].data;

		feat.inData.type = type;

		//===============
		// LOCATION

		var locations = ft.getElementsByTagName('location');

		for (var j=0; j < locations.length; j++) {
			
			var location = locations[j];

			var start = location.getElementsByTagName("genbankStart")[0].getElementsByTagName('#text')[0].data;
			var end   = location.getElementsByTagName("end")[0].getElementsByTagName('#text')[0].data;
			var to    = "..";

			var loc = {
				start:  start,
				end:    end,
				to:     to
			};

			loc = ParserUtil.parseGenbankFeatureLocation(loc);
			feat.inData.locations.push(loc);
		}


		//===============
		// ATTRIBUTES -> QUALIFIERS
		var label = ft.getElementsByTagName('label')[0].getElementsByTagName('#text')[0].data;

		var qual = {
			inData: {
				name:      "label",
				value:      label,
				quoted:     true
			}
		};
		feat.notes.push(qual);

		var attributes = ft.getElementsByTagName('attribute');
		for (var j=0; j < attributes.length; j++) {
			var attribute = attributes[j];

			var qual = {
				inData: {
					name:   attribute.attr.name.value,
					value:  attribute.getElementsByTagName('#text')[0].data,
					quoted: false
				}
			};
			feat.notes.push(qual);

		}

		// POST CALCULATIONS
		var strand;
		if (complement === true) {
			strand = -1;
		} else {
			strand = 1;
		}

		feat.inData.strand = strand;

		feat = ParserUtil.postProcessGenbankFeature(feat);
		result.features.push(feat);
	}
	
	return result;
};



// Just a past bin for code to paste into console to generate jbei seq json
// as I don't have any examples.
JbeiseqParser.__temp_test = function() {
	
	function __getJsonFromSeqLib(i) {
		var sequences = Teselagen.manager.ProjectManager.sequences.data.items;
		var seq = sequences[i];
		var genbankStr = seq.get('sequenceFileContent');
		// console.log(genbankStr);
		var gb = Teselagen.utils.FormatUtils.fileToGenbank(genbankStr, 'gb');
		var json = Teselagen.bio.parsers.JbeiseqParser.genbankToJbeiseqJson(gb);
		console.log(json);
		return json;
	}


}

























