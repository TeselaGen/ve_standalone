(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}


function transformPrimitiveStructOps(value1, value2) {
	var ret = [null, null];
	if(value1 !== null) {
		ret[0] = value1;
	} else if(value2 !== null) {
		ret[1] = value2;
	}
	return ret;
}

function composePrimitiveStructOps(value1, value2) {
	if(value2 !== null) { return value2;}
	else { return value1; }
}

function applyFeaturePrimitiveStructOps(feature, value, field) {
	var oldValue = feature.get(field);
	feature.set(field, value);
	return oldValue;
}



var FeatureModification = VE.ot.FeatureModification = VE.ot.StructOperation.extend({
	orderArray: [
		'shiftStart',
		'shiftEnd',
		'changeName',
		'changeType',
		'changeStrand',
	],
	
	config: {
		shiftStart: {
			copy: function(value) {
				return value.copy();
			},
			serialize: function(value) {
				return value.serialize();
			},
			apply: function(feature, value) {
				feature.set('start', value.apply(feature.get('start')));
				return value.inverse();
			},
			deSerialize: function(value) {
				return IndexShiftOperation.deSerialize(value);
			},
			transform: function(value1, value2) {
				return IndexShiftOperation.transform(value1, value2);
			},
			compose: function(value1, value2) {
				return IndexShiftOperation.compose(value1, value2);
			}
		},
		shiftEnd: {
			copy: function(value) {
				return value.copy();
			},
			serialize: function(value) {
				return value.serialize();
			},
			apply: function(feature, value) {
				feature.set('end', value.apply(feature.get('end') - 1) + 1);
				return value.inverse();
			},
			deSerialize: function(value) {
				return IndexShiftOperation.deSerialize(value);
			},
			transform: function(value1, value2) {
				return IndexShiftOperation.transform(value1, value2);
			},
			compose: function(value1, value2) {
				return IndexShiftOperation.compose(value1, value2);
			}
		},
		changeName: {
			copy: function(value) {
				return value;
			},
			serialize: function(value) {
				return value;
			},
			apply: function(feature, value) {
				return applyFeaturePrimitiveStructOps(feature, value, 'name');
			},
			deSerialize: function(value) {
				return value;
			},
			transform: function(value1, value2) {
				return transformPrimitiveStructOps(value1, value2);
			},
			compose: function(value1, value2) {
				return composePrimitiveStructOps(value1, value2);
			}
		},
		changeType: {
			copy: function(value) {
				return value;
			},
			serialize: function(value) {
				return value;
			},
			apply: function(feature, value) {
				return applyFeaturePrimitiveStructOps(feature, value, 'type');
			},
			deSerialize: function(value) {
				return value;
			},
			transform: function(value1, value2) {
				return transformPrimitiveStructOps(value1, value2);
			},
			compose: function(value1, value2) {
				return composePrimitiveStructOps(value1, value2);
			}
		},
		changeStrand: {
			copy: function(value) {
				return value;
			},
			serialize: function(value) {
				return value;
			},
			apply: function(feature, value) {
				return applyFeaturePrimitiveStructOps(feature, value, 'strand');
			},
			deSerialize: function(value) {
				return value;
			},
			transform: function(value1, value2) {
				return transformPrimitiveStructOps(value1, value2);
			},
			compose: function(value1, value2) {
				return composePrimitiveStructOps(value1, value2);
			}
		},


	},



});


	



























































































})()