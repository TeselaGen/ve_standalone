(function(){

var BASE_URL = '/../Bio/assets/enzymes/';

// VE.RestrictionEnzymeManager.getEnzymes('common')

/**
 * Retrieves xml text from a given group name and hands it to the parser.
 * @param {String} groupName Which enzyme group to get.
 * @param {Function(Array<Bio.RestrictionEnzyme>)} cb Callback.
 */
function getEnzymes(groupName, cb) {
	var x = new XMLHttpRequest();
	var url = BASE_URL + groupName + '.xml';

	function callback(responseText) {
		// console.log(responseText);
		var enzymes = Bio.RestrictionEnzyme.parseListFromXML(responseText);
		cb(enzymes);
	}

	x.open('GET', url, true);
	x.onreadystatechange = function() {
		if (x.readyState == 4) {
			callback(x.responseText)
		}
	};
	
	x.send(null);
}


VE.RestrictionEnzymeManager = {

	currentUserEnzymeGroupName: null,

	enzymeGroups: {},

	/**
	 * @param {String} groupName Which enzyme group to load.
	 * @param {Function()} cb Optional callback.
	 */
	loadEnzymes: function(groupName, cb) {
		var me = this;
		getEnzymes(groupName, function(enzymes) {
			me.enzymeGroups[groupName] = enzymes;
			if(typeof cb === 'function') { cb(); }
		});
	},

	/**
	 * @param {String} groupName Which enzyme group to get.
	 */
	getEnzymeGroup: function(groupName) {
		return this.enzymeGroups[groupName];
	},

	getCurrentUserEnzymeGroup: function() {
		return this.enzymeGroups[this.currentUserEnzymeGroupName];
	},

	


};














































})();