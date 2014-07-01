(function(){



Bio.DnaAlphabet = {

	symbols: {
		"a": {
			"ambiguousMatches": {},
			"NCBI4na": 1,
		},
		"g": {
			"ambiguousMatches": {},
			"NCBI4na": 4,
		},
		"c": {
			"ambiguousMatches": {},
			"NCBI4na": 2,
		},
		"t": {
			"ambiguousMatches": {},
			"NCBI4na": 8,
		},
		"m": {
			"ambiguousMatches": {
				"a": true,
				"c": true
			},
			"NCBI4na": 3
		},
		"r": {
			"ambiguousMatches": {
				"a": true,
				"g": true
			},
			"NCBI4na": 5
		},
		"w": {
			"ambiguousMatches": {
				"a": true,
				"t": true
			},
			"NCBI4na": 9
		},
		"s": {
			"ambiguousMatches": {
				"c": true,
				"g": true
			},
			"NCBI4na": 6
		},
		"y": {
			"ambiguousMatches": {
				"c": true,
				"t": true
			},
			"NCBI4na": 10
		},
		"k": {
			"ambiguousMatches": {
				"g": true,
				"t": true
			},
			"NCBI4na": 12
		},
		"v": {
			"ambiguousMatches": {
				"a": true,
				"c": true,
				"g": true
			},
			"NCBI4na": 7
		},
		"h": {
			"ambiguousMatches": {
				"a": true,
				"c": true,
				"t": true
			},
			"NCBI4na": 11
		},
		"d": {
			"ambiguousMatches": {
				"a": true,
				"g": true,
				"t": true
			},
			"NCBI4na": 13
		},
		"b": {
			"ambiguousMatches": {
				"c": true,
				"g": true,
				"t": true
			},
			"NCBI4na": 14
		},
		"n": {
			"ambiguousMatches": {
				"a": true,
				"c": true,
				"g": true,
				"t": true
			},
			"NCBI4na": 15
		}
	},


	// Just a temporary thing to help write this object.
	$: function() {
		var a = this.symbols;
		var e = {
			"a": {
				"ambiguousMatches": {},
				NCBI4na: 1,
			},
			"g": {
				"ambiguousMatches": {},
				NCBI4na: 4,
			},
			"c": {
				"ambiguousMatches": {},
				NCBI4na: 2,
			},
			"t": {
				"ambiguousMatches": {},
				NCBI4na: 8,
			},
		};
		for(var x in a) {
			var b = a[x];
			var c = b.ambiguousMatches;
			var na = 0;
			for(var y in c) {
				var d = e[y].NCBI4na;
				na |= d;
			}
			b.NCBI4na = na;
		}
		console.log(JSON.stringify(a, null, '\t'));
	},


	validateString: function(str) {
		var symbols = this.symbols;
		for(var i=0,ii=str.length;i<ii;i++) {
			if(!symbols[str[i]]) { return false; }
		}
		return true;
	},




};




Bio.DnaAlphabet.strToNCBI4naMap = {};
for(var x in Bio.DnaAlphabet.symbols) {
	var na = Bio.DnaAlphabet.symbols[x];
	Bio.DnaAlphabet.strToNCBI4naMap[x] = na.NCBI4na;
}










































})();