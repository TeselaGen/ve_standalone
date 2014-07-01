(function(){



/**
 * Creates a RestrictionEnzyme object.
 * @param {String} name Enzyme name.
 * @param {String} site Enzyme site.
 * @param {Int} cutType Downstream or Upstream cut type. Values: 0 = downstream, 1 = upstream
 * @param {String} forwardRegex Forward regular expression.
 * @param {String} reverseRegex Reverse regular expression.
 * @param {Int} dsForward Downstream 3" strand cut position.
 * @param {Int} dsReverse Downstream 5" strand cut position.
 * @param {Int} usForward Upstream 3" strand cut position.
 * @param {Int} usReverse Upstream 5" strand cut position.
 * @returns {RestrictionEnzyme} Restriction Enzyme object.
 */
Bio.RestrictionEnzyme = function(json) {
	this.name = json.name;
	this.site = json.site;
	this.cutType = json.cutType;
	// this.forwardRegex = new RegExp(json.forwardRegex.toLowerCase(), "g");
	// this.reverseRegex = new RegExp(json.reverseRegex.toLowerCase(), "g");
	this.forwardRegex = json.forwardRegex;
	this.reverseRegex = json.reverseRegex;
	this.dsForward = json.dsForward;
	this.dsReverse = json.dsReverse;
	this.usForward = json.usForward;
	this.usReverse = json.usReverse;
};


Bio.RestrictionEnzyme.prototype.isPalindromic = function() {
	return this.forwardRegex === this.reverseRegex;
};

Bio.RestrictionEnzyme.prototype.get = function(field) {
	return this[field];
};



function reXmlNodeToJson(xmlNode) {
	var json = {
		name: xmlNode.getElementsByTagName('n')[0].childNodes[0].nodeValue,
		site: xmlNode.getElementsByTagName('s')[0].childNodes[0].nodeValue,
		cutType: Number(xmlNode.getElementsByTagName('c')[0].childNodes[0].nodeValue),
		forwardRegex: xmlNode.getElementsByTagName('fr')[0].childNodes[0].nodeValue,
		reverseRegex: xmlNode.getElementsByTagName('rr')[0].childNodes[0].nodeValue,
	};

	var ds = xmlNode.getElementsByTagName('ds')[0];
	var df = ds.getElementsByTagName('df')[0];
	var dr = ds.getElementsByTagName('dr')[0];
	json.dsForward = Number(df.childNodes[0].nodeValue);
	json.dsReverse = Number(dr.childNodes[0].nodeValue);

	var us = xmlNode.getElementsByTagName('us')[0];
	var uf = us.getElementsByTagName('uf')[0];
	var ur = us.getElementsByTagName('ur')[0];
	if(uf) { json.usForward = Number(uf.childNodes[0].nodeValue); }
	if(ur) { json.usReverse = Number(ur.childNodes[0].nodeValue); }

	return json;
}


/**
 * @param {String} xmlString XML string to parse.
 * @param {Array<Bio.RestrictionEnzyme>} list Optional array to add parsed enzymes to.
 */
Bio.RestrictionEnzyme.parseListFromXML = function(xmlString, list) {
	if(!list) { list = []; }
	var RestrictionEnzyme = Bio.RestrictionEnzyme; 

	var doc = new DOMParser().parseFromString(xmlString, "text/xml");

	var enzymesNode = doc.getElementsByTagName('enzymes')[0];
	var enzymesListXml = enzymesNode.getElementsByTagName('e');

	for(var i=0,ii=enzymesListXml.length;i<ii;i++) {
		var enzymeNode = enzymesListXml[i];
		var enzymeJson = reXmlNodeToJson(enzymeNode);
		var enzyme = new RestrictionEnzyme(enzymeJson);
		list.push(enzyme);
	}

	return list;
};














































})();