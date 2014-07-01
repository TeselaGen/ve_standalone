(function(){



VE.EditingManager = {

	/**
	 * Start is inclusive. End is exclusive.
	 * @param {VE.Sequence} sequence
	 * @param {String} insertedString
	 * @param {Integer} start
	 * @param {Integer} end
	 * @return {VE.ot.SequenceOperation}
	 */
	generateInsertSequenceOp: function(sequence, insertedString, start, end) {
		var SymbolListOperation = VE.ot.SymbolListOperation;
		var SequenceOperation = VE.ot.SequenceOperation;

		if(end === undefined) { end = start; }
		var slOp = new SymbolListOperation();
		if(start <= end) { // Not sure about equality.
			slOp.retain(start)
				.delete(end - start)
				.insert(insertedString)
				.retain(sequence.length() - end);
		} else if(start > end) {
			// Appends inserted text to the end of the sequence after
			// deleting selection.
			slOp.delete(end)
				.retain(start - end)
				.delete(sequence.length() - start)
				.insert(insertedString);
		}

		var fOp = slOp.generateShiftedFeatureIndicesOp(sequence.get('features'));

		var sOp = new SequenceOperation({
			symbolListOperation: slOp,
			featureOperation: fOp,
		});

		// console.log(sOp);

		return sOp;
	},


	/**
	 * Start is inclusive. End is exclusive.
	 * @param {VE.Sequence} sequence
	 * @param {Integer} start
	 * @param {Integer} end
	 * @return {VE.ot.SequenceOperation}
	 */
	generateDeleteSequenceOp: function(sequence, start, end) {
		var SymbolListOperation = VE.ot.SymbolListOperation;
		var SequenceOperation = VE.ot.SequenceOperation;

		var slOp = new SymbolListOperation();
		if(start <= end) { // Not sure about equality.
			slOp.retain(start)
				.delete(end - start)
				.retain(sequence.length()-end);
		} else if(start > end) {
			slOp.delete(end)
				.retain(start - end)
				.delete(sequence.length()-start);
		}

		// var fOp = slOp.generateShiftedFeatureIndicesOp(this);

		/*var slOp = Ext.create("Teselagen.ot.VectorEditor.SymbolListOperation");
		slOp.retain(start)
			.delete(end - start)
			.retain(this.getSequenceLength()-end);*/

		var fOp = slOp.generateShiftedFeatureIndicesOp(sequence.get('features'));

		var sOp = new SequenceOperation({
			symbolListOperation: slOp,
			featureOperation: fOp,
		});

		// console.log(sOp);

		return sOp;
	},

	/**
	 * @param {VE.Sequence} sequence
	 * @param {VE.Annotation or Integer} feature
	 * @return {VE.ot.SequenceOperation}
	 */
	generateDeleteFeatureOp: function(sequence, feature) {
		var FeatureOperation = VE.ot.FeatureOperation;
		var SequenceOperation = VE.ot.SequenceOperation;

		var index;
		var features = sequence.get('features');
		if(typeof feature === 'number') { index = feature; }
		else { index = features.indexOf(feature); }

		if(index < 0) {
			console.error('Invalid feature index '+index+'.');
			throw new Error('Invalid feature index '+index+'.');
		}

		var fOp = new FeatureOperation();
		fOp.retain(index)
			.delete(1)
			.retain(features.length - index - 1);

		var seqOp = new SequenceOperation({
			featureOperation: fOp
		});
		return seqOp;
	},

	/**
	 * @param {VE.Sequence} sequence
	 * @param {VE.Annotation} feature
	 * @return {VE.ot.SequenceOperation}
	 */
	generateAddFeatureOp: function(sequence, feature) {
		var FeatureOperation = VE.ot.FeatureOperation;
		var SequenceOperation = VE.ot.SequenceOperation;

		var fOp = new FeatureOperation();
		fOp.retain(sequence.get('features').length)
			.insert(feature);

		var seqOp = new SequenceOperation({
			featureOperation: fOp
		});
		return seqOp;
	},

	/**
	 * @param {VE.Sequence} sequence
	 * @param {VE.Annotation} oldFeature
	 * @param {VE.Annotation} newFeature
	 * @return {VE.ot.SequenceOperation}
	 */
	generateEditFeatureOp: function(sequence, oldFeature, newFeature) {
		var FeatureOperation = VE.ot.FeatureOperation;
		var SequenceOperation = VE.ot.SequenceOperation;
		var IndexShiftOperation = VE.ot.IndexShiftOperation;
		var FeatureModification = VE.ot.FeatureModification;

		var features = sequence.get('features');

		var index = features.indexOf(oldFeature);
		if(index < 0) {
			console.error('Invalid feature index '+index+'.');
			throw new Error('Invalid feature index '+index+'.');
		}

		var fidOpParams = {};

		if(oldFeature.get('name') !== newFeature.get('name')) {
			fidOpParams.changeName = newFeature.get('name');
		}
		if(oldFeature.get('type') !== newFeature.get('type')) {
			fidOpParams.changeType = newFeature.get('type');
		}
		if(oldFeature.get('strand') !== newFeature.get('strand')) {
			fidOpParams.changeStrand = newFeature.get('strand');
		}
		
		if(oldFeature.get('start') !== newFeature.get('start')) {
			var shiftStart = new IndexShiftOperation();
			var ns = newFeature.get('start');
			var os = oldFeature.get('start');
			var diff = Math.abs(os-ns);
			if(ns > os) {
				shiftStart.retain(os).insert(diff);
			} else {
				shiftStart.retain(os-diff).delete(diff);
			}
			fidOpParams.shiftStart = shiftStart;
		}
		if(oldFeature.get('end') !== newFeature.get('end')) {
			var shiftEnd = new IndexShiftOperation();
			// var ne = newFeature.get('end');
			// var oe = oldFeature.get('end');
			var ne = newFeature.get('end') - 1;
			var oe = oldFeature.get('end') - 1;
			var diff = Math.abs(oe-ne);
			
			if(ne > oe) {
				shiftEnd.retain(oe).insert(diff);
			} else {
				shiftEnd.retain(oe-diff).delete(diff);
			}
			fidOpParams.shiftEnd = shiftEnd;
		}

		var featMod = new FeatureModification(fidOpParams);
		

		var fOp = new FeatureOperation();
		fOp.retain(index)
			.modify(featMod)
			.retain(features.length - index);

		var seqOp = new SequenceOperation({
			featureOperation: fOp
		});
		// console.log(seqOp);
		return seqOp;
	},






};




















































})();