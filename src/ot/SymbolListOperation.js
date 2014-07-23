(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}


var StringOperation = VE.ot.StringOperation;
var IndexShiftOperation = VE.ot.IndexShiftOperation;

var SymbolListOperation = VE.ot.SymbolListOperation = StringOperation.extend({

	/**
	 * Generates the feature operation that will shift the indices of the features.
	 * @param {Array<VE.Annotation>} annotationsList
	 * @returns {VE.ot.FeatureOperation} fOp
	 */
	generateShiftedFeatureIndicesOp: function(annotationsList) {
		var fOp = new VE.ot.FeatureOperation();

		if(this.isNoop()) { return fOp; }

		for(var i=0;i<annotationsList.length;i++) {
			var feature = annotationsList[i];

			var start = IndexShiftOperation.wrap(feature.get('start'));
			var end = IndexShiftOperation.wrap(feature.get('end') - 1); // As ends are exclusive.

			var xStartOp = start.transformAgainstSymbolListOperation(this);
			var xEndOp = end.transformAgainstSymbolListOperation(this);

			var startOp = IndexShiftOperation.compose(start, xStartOp);
			var endOp = IndexShiftOperation.compose(end, xEndOp);

			if(startOp.toInteger() === endOp.toInteger()) {
				fOp.delete(1);

			} else {
				var featMod = new VE.ot.FeatureModification({
					shiftStart: startOp,
					shiftEnd: endOp
				});

				fOp.modify(featMod);
				fOp.retain(1);
			}

		}

		return fOp;
	},


	apply: function(sequence) {
		if(this.isNoop()) { return true; }
		
		// var str = sequence.join('');
		
		if(this.baseLength !== sequence.length) {
			throw new Error("The operation's base length ("+this.baseLength+") must be equal to the sequence's length ("+sequence.length+").");
		}

		var inverse = new this.constructor();

		var isRetain = StringOperation.isRetain;
		var isInsert = StringOperation.isInsert;
		var isDelete = StringOperation.isDelete;

		// var newStr = [];
		var i1 = 0, pos = 0;
		var comps = this.components;
		for(var i=0; i<comps.length; i++) {
			var comp = comps[i];
			if(isRetain(comp)) {
				inverse.retain(comp.retain);
				// newStr.push(str.slice(pos, pos + comp.retain));
				pos += comp.retain;
			} else if(isInsert(comp)) {
				inverse.delete(comp.insert.length);
				// newStr.push(comp.insert);


				// sequence.splice.bind(sequence, pos, 0).apply(sequence, comp.insert.split(''));
				spliceStringAsArray(sequence, pos, 0, comp.insert);


				pos += comp.insert.length;
			} else if(isDelete(comp)) {
				inverse.insert(sequence.slice(pos, pos + comp.delete).join(''));
				sequence.splice(pos, comp.delete);
				// pos += comp.delete;
			} else {
				console.error("Invalid operation component type.");
			}
		}
		
		// newStr = newStr.join('');
		// sequence.splice(0, sequence.length);
		// for(var i=0,ii=newStr.length;i<ii;i++) {
		// 	sequence[i] = newStr[i];
		// }
		
		return inverse;
	},





});

	



function spliceStringAsArray(array, index, howmany, str) {
	array.splice(index, howmany);
	for(var i=0,ii=str.length;i<ii;i++) {
		array.splice(index + i, 0, str[i]);
	}
}


























































































})()