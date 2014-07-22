(function(){




VE.VectorEditor = function(args) {
	
	// var enzymeGroupName = 'common';
	// // var enzymeGroupName = 'rebase';
	// VE.RestrictionEnzymeManager.loadEnzymes(enzymeGroupName, function() {
		
	// 	VE.RestrictionEnzymeManager.currentUserEnzymeGroupName = enzymeGroupName;
	// });

	initializeRestrictionEnzymes();


	var renderTo = args.renderTo;
	var sequence = args.sequence;
	var options = args.options;

	if(!renderTo) {
		throw new Error("`renderTo` argument required.");
	}
	if(!sequence) {
		throw new Error("`sequence` argument required.");
	}

	sequence.needsRecalc__orfs = true;
	sequence.needsRecalc__cutSites = true;

	var ve = this.ve = new VE.Ve();

	if(typeof options === 'object') {
		for(var x in options) {
			ve.options[x] = options[x];
		}
	}

	var vePanel = ve.vePanel = this.vePanel = new VE.VePanel({
		parentEl: renderTo,
		ve: ve,
	}).render();

	var annotateContainerArgs = {
		phonyScrollContainer: vePanel.annotatePanel.phonyScrollContainer,
		model: sequence,
		ve: ve,
	};

	var pieContainerArgs = {
		el: vePanel.vectorPanel.bodyEl.node(),
		model: sequence,
		ve: ve,
	};

	var railContainerArgs = {
		el: vePanel.vectorPanel.bodyEl.node(),
		model: sequence,
		ve: ve,
	};

	for(var x in ve.options) {
		annotateContainerArgs[x] = pieContainerArgs[x] = railContainerArgs[x] = ve.options[x];
	}

	var annotateContainer = this.annotateContainer = new VE.AnnotateContainer(annotateContainerArgs);
	var pieContainer = this.pieContainer = new VE.PieContainer(pieContainerArgs);
	var railContainer = this.railContainer = new VE.RailContainer(railContainerArgs);

	annotateContainer.render();
	pieContainer.render();
	railContainer.render();


};










function initializeRestrictionEnzymes() {
	var RestrictionEnzyme = Bio.RestrictionEnzyme;
	var enzymeGroupName = 'common';

	var enzymes = [
		new RestrictionEnzyme({
			"name": "AatII",
			"site": "gacgtc",
			"cutType": 0,
			"forwardRegex": "gacgtc",
			"reverseRegex": "gacgtc",
			"dsForward": 5,
			"dsReverse": 1
		}),
		new RestrictionEnzyme({
			"name": "AvrII",
			"site": "cctagg",
			"cutType": 0,
			"forwardRegex": "c{2}tag{2}",
			"reverseRegex": "c{2}tag{2}",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "BamHI",
			"site": "ggatcc",
			"cutType": 0,
			"forwardRegex": "g{2}atc{2}",
			"reverseRegex": "g{2}atc{2}",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "BglII",
			"site": "agatct",
			"cutType": 0,
			"forwardRegex": "agatct",
			"reverseRegex": "agatct",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "BsgI",
			"site": "gtgcag",
			"cutType": 0,
			"forwardRegex": "gtgcag",
			"reverseRegex": "ctgcac",
			"dsForward": 22,
			"dsReverse": 20
		}),
		new RestrictionEnzyme({
			"name": "EagI",
			"site": "cggccg",
			"cutType": 0,
			"forwardRegex": "cg{2}c{2}g",
			"reverseRegex": "cg{2}c{2}g",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "EcoRI",
			"site": "gaattc",
			"cutType": 0,
			"forwardRegex": "ga{2}t{2}c",
			"reverseRegex": "ga{2}t{2}c",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "EcoRV",
			"site": "gatatc",
			"cutType": 0,
			"forwardRegex": "gatatc",
			"reverseRegex": "gatatc",
			"dsForward": 3,
			"dsReverse": 3
		}),
		new RestrictionEnzyme({
			"name": "HindIII",
			"site": "aagctt",
			"cutType": 0,
			"forwardRegex": "a{2}gct{2}",
			"reverseRegex": "a{2}gct{2}",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "KpnI",
			"site": "ggtacc",
			"cutType": 0,
			"forwardRegex": "g{2}tac{2}",
			"reverseRegex": "g{2}tac{2}",
			"dsForward": 5,
			"dsReverse": 1
		}),
		new RestrictionEnzyme({
			"name": "MseI",
			"site": "ttaa",
			"cutType": 0,
			"forwardRegex": "t{2}a{2}",
			"reverseRegex": "t{2}a{2}",
			"dsForward": 1,
			"dsReverse": 3
		}),
		new RestrictionEnzyme({
			"name": "NcoI",
			"site": "ccatgg",
			"cutType": 0,
			"forwardRegex": "c{2}atg{2}",
			"reverseRegex": "c{2}atg{2}",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "NdeI",
			"site": "catatg",
			"cutType": 0,
			"forwardRegex": "catatg",
			"reverseRegex": "catatg",
			"dsForward": 2,
			"dsReverse": 4
		}),
		new RestrictionEnzyme({
			"name": "NheI",
			"site": "gctagc",
			"cutType": 0,
			"forwardRegex": "gctagc",
			"reverseRegex": "gctagc",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "NotI",
			"site": "gcggccgc",
			"cutType": 0,
			"forwardRegex": "gcg{2}c{2}gc",
			"reverseRegex": "gcg{2}c{2}gc",
			"dsForward": 2,
			"dsReverse": 6
		}),
		new RestrictionEnzyme({
			"name": "PstI",
			"site": "ctgcag",
			"cutType": 0,
			"forwardRegex": "ctgcag",
			"reverseRegex": "ctgcag",
			"dsForward": 5,
			"dsReverse": 1
		}),
		new RestrictionEnzyme({
			"name": "PvuI",
			"site": "cgatcg",
			"cutType": 0,
			"forwardRegex": "cgatcg",
			"reverseRegex": "cgatcg",
			"dsForward": 4,
			"dsReverse": 2
		}),
		new RestrictionEnzyme({
			"name": "SacI",
			"site": "gagctc",
			"cutType": 0,
			"forwardRegex": "gagctc",
			"reverseRegex": "gagctc",
			"dsForward": 5,
			"dsReverse": 1
		}),
		new RestrictionEnzyme({
			"name": "SacII",
			"site": "ccgcgg",
			"cutType": 0,
			"forwardRegex": "c{2}gcg{2}",
			"reverseRegex": "c{2}gcg{2}",
			"dsForward": 4,
			"dsReverse": 2
		}),
		new RestrictionEnzyme({
			"name": "SalI",
			"site": "gtcgac",
			"cutType": 0,
			"forwardRegex": "gtcgac",
			"reverseRegex": "gtcgac",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "SmaI",
			"site": "cccggg",
			"cutType": 0,
			"forwardRegex": "c{3}g{3}",
			"reverseRegex": "c{3}g{3}",
			"dsForward": 3,
			"dsReverse": 3
		}),
		new RestrictionEnzyme({
			"name": "SpeI",
			"site": "actagt",
			"cutType": 0,
			"forwardRegex": "actagt",
			"reverseRegex": "actagt",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "SphI",
			"site": "gcatgc",
			"cutType": 0,
			"forwardRegex": "gcatgc",
			"reverseRegex": "gcatgc",
			"dsForward": 5,
			"dsReverse": 1
		}),
		new RestrictionEnzyme({
			"name": "XbaI",
			"site": "tctaga",
			"cutType": 0,
			"forwardRegex": "tctaga",
			"reverseRegex": "tctaga",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "XhoI",
			"site": "ctcgag",
			"cutType": 0,
			"forwardRegex": "ctcgag",
			"reverseRegex": "ctcgag",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "XmaI",
			"site": "cccggg",
			"cutType": 0,
			"forwardRegex": "c{3}g{3}",
			"reverseRegex": "c{3}g{3}",
			"dsForward": 1,
			"dsReverse": 5
		})
	];

	VE.RestrictionEnzymeManager.enzymeGroups[enzymeGroupName] = enzymes;

	VE.RestrictionEnzymeManager.currentUserEnzymeGroupName = enzymeGroupName;
}










































})();