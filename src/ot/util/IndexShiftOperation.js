// IndexShiftOperation
(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}


var IndexShiftOperation = VE.ot.IndexShiftOperation = function() {
	this.components = [];
	this.baseLength = 0;
	this.targetLength = 0;
};

var isRetain = IndexShiftOperation.isRetain = IndexShiftOperation.prototype.isRetain = function(comp) {
	return comp!==undefined && comp.retain !== undefined;
};

var isInsert = IndexShiftOperation.isInsert = IndexShiftOperation.prototype.isInsert = function(comp) {
	return comp!==undefined && comp.insert !== undefined;
};

var isDelete = IndexShiftOperation.isDelete = IndexShiftOperation.prototype.isDelete = function(comp) {
	return comp!==undefined && comp.delete !== undefined;
};

IndexShiftOperation.prototype.copy = function() {
	var shiftOp = new IndexShiftOperation();
	shiftOp.baseLength = this.baseLength;
	shiftOp.targetLength = this.targetLength;
	shiftOp.components = [];
	for(var i=0;i<this.components.length;i++) {
		shiftOp.components[i] = this.components[i];
	}
	return shiftOp;
};

IndexShiftOperation.prototype.serialize = function() {
	var data = {
		components: this.components,
		baseLength: this.baseLength,
		targetLength: this.targetLength
	};
	return data;
};

IndexShiftOperation.prototype.retain = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	this.targetLength += n;
	if(this.isRetain(this.components[this.components.length-1])) {
		this.components[this.components.length-1].retain += n;
	} else {
		this.components.push({retain: n});
	}
	return this;
};

IndexShiftOperation.prototype.insert = function(n) {
	if(n === 0) {return this;}
	this.targetLength += n;
	if(this.isInsert(this.components[this.components.length-1])) {
		this.components[this.components.length-1].insert += n;
	} else {
		this.components.push({insert: n});
	}
	return this;
};

IndexShiftOperation.prototype.delete = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	if(this.isDelete(this.components[this.components.length-1])) {
		this.components[this.components.length-1].delete += n;
	} else {
		this.components.push({'delete': n});
	}
	return this;
};

/**
 * Returns the value that the IndexShiftOperation represents.
 * @returns {Integer}
 */
IndexShiftOperation.prototype.toInteger = function() {
	return this.targetLength;
};

/**
 * This apply function actually doesn't alter the parameter 'index' as
 * parameters can't be passed by reference in JavaScript.
 * @param {Integer} index
 * @returns {Integer} newIndex
 */
IndexShiftOperation.prototype.apply = function(index) {
	if(index !== this.baseLength) {
		throw new Error("The operation's base length ("+this.baseLength+") must be equal to the index ("+index+").");
	}
	return this.targetLength;
};

/**
 * @returns {IndexShiftOperation} inverse
 */
IndexShiftOperation.prototype.inverse = function() {
	var inverse = new IndexShiftOperation();
	
	var comps = this.components;
	for(var i=0; i<comps.length; i++) {
		var comp = comps[i];
		if(isRetain(comp)) {
			inverse.retain(comp.retain);
		} else if(isInsert(comp)) {
			inverse.delete(comp.insert);
		} else if(isDelete(comp)) {
			inverse.insert(comp.delete);
		} else {
			console.error("Invalid operation component type.");
		}
	}
	
	return inverse;
};

/**
 * This function doesn't alter the object that called it.
 * @param {SymbolListOperation} symbolListOperation
 * @returns {IndexShiftOperation} symbolListOperationPrime (I think)
 */
IndexShiftOperation.prototype.transformAgainstSymbolListOperation = function(symbolListOperation) {
	if(symbolListOperation === undefined || symbolListOperation === null || symbolListOperation.isNoop()) {
		return this.copy();
	}
	
	var shiftComps = this.components;
	var slComps = symbolListOperation.components;
	var symbolListOperationPrime = new IndexShiftOperation();
	var shiftI = 0, slI = 0;
	var shiftC = 0, slC = 0;
	while(true) {
		var shiftComp = shiftComps[shiftI];
		var slComp = slComps[slI];
		
		if(shiftComp===undefined && slComp===undefined) {
			break;
		}
		
		if(isInsert(shiftComp)) {
			symbolListOperationPrime.retain(shiftComp.insert);
			shiftI++;
			continue;
		}
		if(isInsert(slComp)) {
			symbolListOperationPrime.insert(slComp.insert.length);
			slI++;
			continue;
		}
		
		if(shiftComp === undefined) {
			break;
		}
		
		if(slComp===undefined) {
			throw new Error("Cannot compose operations: IndexShiftOperation is too long.");
		}
		
		var minl, shiftV, slV;
		if(isRetain(shiftComp) && isRetain(slComp)) {
			shiftV = shiftComp.retain - shiftC;
			slV = slComp.retain - slC;
			if(shiftV > slV) {
				minl = slV;
				shiftC += slV;
				slC = 0;
				slI++;
			} else if(shiftV === slV) {
				minl = shiftV;
				shiftC = slC = 0;
				shiftI++;
				slI++;
			} else {
				minl = shiftV;
				slC += shiftV;
				shiftC = 0;
				shiftI++;
			}
			symbolListOperationPrime.retain(minl);
		} else if(isDelete(shiftComp) && isDelete(slComp)) {
			shiftV = shiftComp.delete - shiftC;
			slV = slComp.delete - slC;
			if(shiftV > slV) {
				shiftC += slV;
				slC = 0;
				slI++;
			} else if(shiftV === slV) {
				shiftC = slC = 0;
				shiftI++;
				slI++;
			} else {
				slC += shiftV;
				shiftC = 0;
				shiftI++;
			}
		} else if(isDelete(shiftComp) && isRetain(slComp)) {
			shiftV = shiftComp.delete - shiftC;
			slV = slComp.retain - slC;
			if(shiftV > slV) {
				minl = slV;
				shiftC += slV;
				slC = 0;
				slI++;
			} else if(shiftV === slV) {
				minl = shiftV;
				shiftC = slC = 0;
				shiftI++;
				slI++;
			} else {
				minl = shiftV;
				slC += shiftV;
				shiftC = 0;
				shiftI++;
			}
		} else if(isRetain(shiftComp) && isDelete(slComp)) {
			shiftV = shiftComp.retain - shiftC;
			slV = slComp.delete - slC;
			if(shiftV > slV) {
				minl = slV;
				shiftC += slV;
				slC = 0;
				slI++;
			} else if(shiftV === slV) {
				minl = shiftV;
				shiftC = slC = 0;
				shiftI++;
				slI++;
			} else {
				minl = shiftV;
				slC += shiftV;
				shiftC = 0;
				shiftI++;
			}
			symbolListOperationPrime.delete(minl);
		} else {
			throw new Error("The two components aren't compatible.");
		}
	}
	
	return symbolListOperationPrime;
};

IndexShiftOperation.deSerialize = function(data) {
	var shiftOp = new IndexShiftOperation();
	shiftOp.baseLength = data.baseLength;
	shiftOp.targetLength = data.targetLength;
	shiftOp.components = data.components;
	return shiftOp;
};

/**
 * Wrap an integer index as an IndexShiftOperation.
 * @param {Integer} index
 * @returns {IndexShiftOperation} wrap
 */
IndexShiftOperation.wrap = function(index) {
	var wrap = new IndexShiftOperation();
	wrap.retain(index);
	return wrap;
};

IndexShiftOperation.transform = function(op1, op2) {
	if(op1 === undefined || op1 === null) {
		var op1prime = new IndexShiftOperation();
		var op2prime = (op2 === undefined || op2 === null) ? new IndexShiftOperation() : op2.copy();
		return [op1prime, op2prime];
	}
	if(op2 === undefined || op2 === null) {
		var op1prime = (op1 === undefined || op1 === null) ? new IndexShiftOperation() : op1.copy();
		var op2prime = new IndexShiftOperation();
		return [op1prime, op2prime];
	}
	
	if (op1.baseLength !== op2.baseLength) {
		console.error("op1.baseLength: "+ op1.baseLength);
		console.error("op2.baseLength: "+ op2.baseLength);
		throw new Error("Both operations have to have the same base length.");
	}
	
	var comps1 = op1.components;
	var comps2 = op2.components;
	var op1prime = new IndexShiftOperation();
	var op2prime = new IndexShiftOperation();
	var i1 = 0, i2 = 0;
	var c1 = 0, c2 = 0;
	while(true) {
		var comp1 = comps1[i1];
		var comp2 = comps2[i2];
		
		if(comp1===undefined && comp2===undefined) {
			break;
		}
		
		if(isInsert(comp1)) {
			op1prime.insert(comp1.insert);
			op2prime.retain(comp1.insert);
			i1++;
			continue;
		}
		if(isInsert(comp2)) {
			op1prime.retain(comp2.insert);
			op2prime.insert(comp2.insert);
			i2++;
			continue;
		}
		
		if(comp1===undefined) {
			throw new Error("Cannot compose operations: first operation is too short.");
		}
		if(comp2===undefined) {
			throw new Error("Cannot compose operations: first operation is too long.");
		}
		
		var minl, v1, v2;
		if(isRetain(comp1) && isRetain(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op1prime.retain(minl);
			op2prime.retain(minl);
		} else if(isDelete(comp1) && isDelete(comp2)) {
			v1 = comp1.delete - c1;
			v2 = comp2.delete - c2;
			if(v1 > v2) {
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isDelete(comp1) && isRetain(comp2)) {
			v1 = comp1.delete - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op1prime.delete(minl);
		} else if(isRetain(comp1) && isDelete(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.delete - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op2prime.delete(minl);
		} else {
			throw new Error("The two components aren't compatible.");
		}
	}
	
	return [op1prime, op2prime];
};

/**
 * Returns op such that op(S) = op2(op1(S));
 */
IndexShiftOperation.compose = function(op1, op2) {
	if(op1 === undefined || op1 === null) {
		return (op2 === undefined || op2 === null) ? new IndexShiftOperation() : op2.copy();
	}
	if(op2 === undefined || op2 === null) {
		return (op1 === undefined || op1 === null) ? new IndexShiftOperation() : op1.copy();
	}
	
	if(op1.targetLength !== op2.baseLength) {
		throw new Error("The base length of the second operation ("+op2.baseLength+") has to be the target length of the first operation ("+op1.targetLength+").");
	}
	
	var comps1 = op1.components;
	var comps2 = op2.components;
	var op = new IndexShiftOperation();
	var i1 = 0, i2 = 0;
	var c1 = 0, c2 = 0;
	while(true) {
		var comp1 = comps1[i1];
		var comp2 = comps2[i2];
		if(comp1===undefined && comp2===undefined) {
			break;
		}
		
		if(isDelete(comp1)) {
			op.delete(comp1.delete);
			i1++;
			continue;
		}
		if(isInsert(comp2)) {
			op.insert(comp2.insert);
			i2++;
			continue;
		}

		if(comp1===undefined) {
			throw new Error("Cannot compose operations: first operation is too short.");
		}
		if(comp2===undefined) {
			throw new Error("Cannot compose operations: first operation is too long.");
		}
		
		var v1, v2;
		if(isRetain(comp1) && isRetain(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				op.retain(v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.retain(v1);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.retain(v1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isInsert(comp1) && isDelete(comp2)) {
			v1 = comp1.insert - c1;
			v2 = comp2.delete - c2;
			if(v1 > v2) {
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isInsert(comp1) && isRetain(comp2)) {
			v1 = comp1.insert - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				op.insert(v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.insert(v1);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.insert(v1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isRetain(comp1) && isDelete(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.delete - c2;
			if(v1 > v2) {
				op.delete(v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.delete(v2);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.delete(v1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else {
			throw new Error("Something went wrong.");
		}
	}
	
	return op;
};

	



























































































})()