(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}


var RidmOperation = VE.ot.RidmOperation;

var FeatureOperation = VE.ot.FeatureOperation = function() {
	return new RidmOperation(this.constructor);
};

RidmOperation.setUpStatics(FeatureOperation);


FeatureOperation.config = {
	getModificationClass: function() {
		return VE.ot.FeatureModification;
	},
	
	getInsertClassArrayFromApplyClassObj: function(features) {
		return features;
	},
	setInsertClassArrayOfApplyClassObj: function(features, newFeatures) {
		features.splice(0, features.length);
		for(var i=0,ii=newFeatures.length;i<ii;i++) {
			features[i] = newFeatures[i];
		}
	},
	
	
	cloneInsertClassObject: function(feature) {
		// Maybe redefine later.
		return JSON.parse(JSON.stringify(feature));
	},
	serializeInsertClassObject: function(feature) {
		return feature;
	},
	deSerializeInsertClassObject: function(feature) {
		return feature;
	}
	
};

	



























































































})()