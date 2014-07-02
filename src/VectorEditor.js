(function(){




VE.VectorEditor = function(args) {
	
	var enzymeGroupName = 'common';
	// var enzymeGroupName = 'rebase';
	VE.RestrictionEnzymeManager.loadEnzymes(enzymeGroupName, function() {
		
		VE.RestrictionEnzymeManager.currentUserEnzymeGroupName = enzymeGroupName;
	});


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

	var vePanel = this.vePanel = new VE.VePanel({
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





















































})();