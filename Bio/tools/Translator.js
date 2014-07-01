
Bio.Translator = {
	

	codonToAaMap: {
		"gct": "A",
		"gcc": "A",
		"gca": "A",
		"gcg": "A",
		"gcu": "A",
		"cgt": "R",
		"cgc": "R",
		"cga": "R",
		"cgg": "R",
		"aga": "R",
		"agg": "R",
		"cgu": "R",
		"aat": "N",
		"aac": "N",
		"aau": "N",
		"gat": "D",
		"gac": "D",
		"gau": "D",
		"tgt": "C",
		"tgc": "C",
		"ugu": "C",
		"ugc": "C",
		"gaa": "E",
		"gag": "E",
		"caa": "Q",
		"cag": "Q",
		"ggt": "G",
		"ggc": "G",
		"gga": "G",
		"ggg": "G",
		"ggu": "G",
		"cat": "H",
		"cac": "H",
		"cau": "H",
		"att": "I",
		"atc": "I",
		"ata": "I",
		"auu": "I",
		"auc": "I",
		"aua": "I",
		"ctt": "L",
		"ctc": "L",
		"cta": "L",
		"ctg": "L",
		"tta": "L",
		"ttg": "L",
		"cuu": "L",
		"cuc": "L",
		"cua": "L",
		"cug": "L",
		"uua": "L",
		"uug": "L",
		"aaa": "K",
		"aag": "K",
		"atg": "M",
		"aug": "M",
		"ttt": "F",
		"ttc": "F",
		"uuu": "F",
		"uuc": "F",
		"cct": "P",
		"ccc": "P",
		"cca": "P",
		"ccg": "P",
		"ccu": "P",
		"tct": "S",
		"tcc": "S",
		"tca": "S",
		"tcg": "S",
		"agt": "S",
		"agc": "S",
		"ucu": "S",
		"ucc": "S",
		"uca": "S",
		"ucg": "S",
		"agu": "S",
		"act": "T",
		"acc": "T",
		"aca": "T",
		"acg": "T",
		"acu": "T",
		"tgg": "W",
		"ugg": "W",
		"tat": "Y",
		"tac": "Y",
		"uau": "Y",
		"uac": "Y",
		"gtt": "V",
		"gtc": "V",
		"gta": "V",
		"gtg": "V",
		"guu": "V",
		"guc": "V",
		"gua": "V",
		"gug": "V"
	},

	startCodons: {
		"atg": {
			"NCBI4na": 1153
		},
		// "aug": true
	},

	stopCodons: {
		"taa": {
			"NCBI4na": 280
		},
		"tag": {
			"NCBI4na": 1048
		},
		"tga": {
			"NCBI4na": 328
		},
		// "uaa": true,
		// "uag": true,
		// "uga": true
	},


	stringToNCBI4na: function(str) {
		var ret = new Uint8Array(str.length);
		var strToNCBI4naMap = Bio.DnaAlphabet.strToNCBI4naMap;
		for(var i=0,ii=str.length;i<ii;i++) {
			ret[i] = strToNCBI4naMap[str[i]];
		}
		return ret;
	},



	complement_4na: function(na) {
		// var A = 1, C = 2, G = 4, T = 8;
		var A = 0, C = 1, G = 2, T = 3;
		var compl = 0;
		compl |= ((1 << A) & na) << 3;
		compl |= ((1 << C) & na) << 1;
		compl |= ((1 << G) & na) >> 1;
		compl |= ((1 << T) & na) >> 3;
		return compl;
	},

	codonToRevcomNCBI4na: function(codon) {
		// var symbols = Bio.DnaAlphabet.symbols;
		// var complement = this.complement_4na;
		// return (complement(symbols[codon[2]].NCBI4na) << 0) | (complement(symbols[codon[1]].NCBI4na) << 4) | (complement(symbols[codon[0]].NCBI4na) << 8);
		var strToNCBI4naMap = Bio.DnaAlphabet.strToNCBI4naMap;
		var complement = this.complement_4na;
		return (complement(strToNCBI4naMap[codon[2]]) << 0) | (complement(strToNCBI4naMap[codon[1]]) << 4) | (complement(strToNCBI4naMap[codon[0]]) << 8);
	},
	
	codonToNCBI4na: function(codon) {
		// var symbols = Bio.DnaAlphabet.symbols;
		// return (symbols[codon[0]].NCBI4na << 0) | (symbols[codon[1]].NCBI4na << 4) | (symbols[codon[2]].NCBI4na << 8);
		var strToNCBI4naMap = Bio.DnaAlphabet.strToNCBI4naMap;
		return (strToNCBI4naMap[codon[0]] << 0) | (strToNCBI4naMap[codon[1]] << 4) | (strToNCBI4naMap[codon[2]] << 8);
	},

	/**
	 * Takes a codon (either as an array or string) and determines if its nucleotides (and their
	 * ambiguous matches) form a stop codon.
	 * @param  {String or Array} codon A codon as a string or array.
	 * @return {Boolean} True if the codon forms a stop codon.
	 */
	isPossibleStopCodon: function(codon) {
		var codon4na = this.codonToNCBI4na(codon);
		return this.isPossibleStopCodon_4na(codon4na);
	},

	/**
	 * Takes a codon (in NCBI4na encoding) and determines if its nucleotides (and their
	 * ambiguous matches) form a stop codon.
	 * @param  {String or Array} codon A codon in NCBI4na encoding.
	 * @return {Boolean} True if the codon forms a stop codon.
	 */
	isPossibleStopCodon_4na: function(codon4na) {
		var stopCodons = this.stopCodons;
		for(var stop in stopCodons) {
			var stop4na = stopCodons[stop].NCBI4na;
			if((stop4na & codon4na) === stop4na) {
				return true;
			}
		}
		return false;
	}, 

	isStartCodonString: function(codonStr) {
		return codonStr === "atg";
	},

	isStartCodon_4na: function(codon4na) {
		return codon4na === 1153;
	},


	translateSequence: function(str, failureChar) {
		var codonToAaMap = this.codonToAaMap;
		failureChar = failureChar || '-';
		var a = [];
		for(var i=0,ii=str.length;i<ii;i+=3) {
			var aa = codonToAaMap[str[i]+str[i+1]+str[i+2]];
			aa = aa || failureChar;
			a.push(aa);
		}
		return a.join('');
	},


	// Just a temporary thing to help write this object.
	$: function() {
		var m = {};
		var a = this.stopCodons;
		var s = Bio.DnaAlphabet.symbols;
		for(var x in a) {
			if(/u/.test(x)) {
				m[x] = a[x];
				continue;
			}
			var b = 0;
			for(var i=0;i<x.length;i++) {
				var na = s[x[i]].NCBI4na;
				b |= na << (i * 4);
			}
			m[x] = {
				NCBI4na: b,
			};
		}

		console.log(JSON.stringify(m, null, '\t'));
	},



};













































