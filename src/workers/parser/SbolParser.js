

var SbolParser = {};

SbolParser.sbolXmlToSerSeq = function(xml) {
	var serSeqs = [];

	var json = XmlToJson.xml2json(xml);

	var jsonSeq = json['rdf:RDF'] || json['RDF'];
	var dnaComps = jsonSeq.DnaComponent_asArray;

	for(var i=0;i<dnaComps.length;i++) {
		var dnaComp = dnaComps[i];
		var serSeq = this.sbolJsonSeqToSerSeq(dnaComp);
		serSeqs.push(serSeq);
	}

	return serSeqs;
}


SbolParser.sbolJsonSeqToSerSeq = function(jsonSeq) {
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
				type: 'misc_feature',
			},
			notes: [],
		};
	}


	result.inData.name = jsonSeq.displayId;
	// result.inData.circular = circ;
	// I'm not sure if there is a 'circular' field. I guess 'false' is the default.
	result.inData.circular = false;

	var seq = jsonSeq.dnaSequence.DnaSequence.nucleotides.toLowerCase();
	result.sequence = seq.split('');


	var annotations = jsonSeq.annotation_asArray;
	for(var i=0;i<annotations.length;i++) {
		
		var feat = new_Feature();

		var annotation = annotations[i].SequenceAnnotation;

		var loc = {
			start:  annotation.bioStart,
			end:    annotation.bioEnd,
			to:     '..'
		};

		loc = ParserUtil.parseGenbankFeatureLocation(loc);
		feat.inData.locations.push(loc);


		feat.inData.strand = (annotation.strand === '+') ? 1 : -1;

		var name = annotation.subComponent.DnaComponent.displayId;
		var qual = {
			inData: {
				name:      "label",
				value:      name,
				quoted:     true
			}
		};
		feat.notes.push(qual);


		feat = ParserUtil.postProcessGenbankFeature(feat);
		result.features.push(feat);
	}

	return result;
}





























