(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}



var StringOperation = VE.ot.StringOperation;


var SequenceOperation = VE.ot.SequenceOperation = VE.ot.StructOperation.extend({
	orderArray: [
		'featureOperation',
		'symbolListOperation',
		// 'gridOperation',
		// 'ruleOperation'//,
		//'deviceInDataOperation'
	],
	
	config: {
		featureOperation: {
			copy: function(value) {
				return value.copy();
			},
			serialize: function(value) {
				return value.serialize();
			},
			apply: function(sequence, value) {
				return value.apply(sequence.get('features'));
			},
			deSerialize: function(value) {
				return VE.ot.FeatureOperation.deSerialize(value);
			},
			transform: function(value1, value2) {
				return VE.ot.FeatureOperation.transform(value1, value2);
			},
			compose: function(value1, value2) {
				return VE.ot.FeatureOperation.compose(value1, value2);
			}
		},
		symbolListOperation: {
			copy: function(value) {
				return value.copy();
			},
			serialize: function(value) {
				return value.serialize();
			},
			apply: function(sequence, value) {
				return value.apply(sequence.get('sequence'));
			},
			deSerialize: function(value) {
				return VE.ot.SymbolListOperation.deSerialize(value);
			},
			transform: function(value1, value2) {
				return VE.ot.SymbolListOperation.transform(value1, value2);
			},
			compose: function(value1, value2) {
				return VE.ot.SymbolListOperation.compose(value1, value2);
			}
		},
	},



});

/**
 * This function was meant to be used transform the caretIndex and
 * SelectionLayer start and end.
 */
SequenceOperation.prototype.transformIndex = function(index) {
	var sl = this.symbolListOperation;
	if(sl === null || sl.isNoop()) { return index; }
	
	var isRetain = sl.isRetain;
	var isInsert = sl.isInsert;
	var isDelete = sl.isDelete;
	
	var comps = sl.components;
	
	var pos = 0;
	var posShift = 0;
	for(var i=0;i<comps.length;i++) {
		var c = comps[i];
		if(c.retain !== undefined) {
			if(index>=pos && index<=pos+c.retain) {
				break;
			} else {
				pos += c.retain;
			}
		} else if(c.insert !== undefined) {
			posShift += c.insert.length;
		} else if(c.delete !== undefined) {
			if(index>=pos && index<=pos+c.delete) {
				posShift -= index-pos;
				break;
			} else {
				posShift -= c.delete;
			}
		}
	}
	
	return index + posShift;
};


























































































})()