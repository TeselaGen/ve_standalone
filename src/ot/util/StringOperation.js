// StringOperation
(function(){


function extend(child, parent) {
	if(typeof parent === 'object' || typeof parent === 'function') {
		for(var x in parent) {
			child[x] = parent[x];
		}
	}
	return child;
}



if(typeof VE.ot !== 'object') {
	VE.ot = {};
}




var StringOperation = VE.ot.StringOperation = function() {
	this.components = [];
	this.baseLength = 0;
	this.targetLength = 0;
};


StringOperation.extend = function(prototype, statics) {
	var childClass = function() {
		this.components = [];
		this.baseLength = 0;
		this.targetLength = 0;
	};

	extend(childClass.prototype, this.prototype);
	extend(childClass.prototype, prototype);

	extend(childClass, this);
	extend(childClass, statics);

	return childClass;
};


var isRetain = StringOperation.isRetain = function(comp) {
	return comp!==undefined && comp.retain !== undefined;
};

var isInsert = StringOperation.isInsert  = function(comp) {
	return comp!==undefined && comp.insert !== undefined;
};

var isDelete = StringOperation.isDelete  = function(comp) {
	return comp!==undefined && comp.delete !== undefined;
};

StringOperation.prototype.isNoop = function() {
	return this.components.length===0 || (this.components.length===1 && isRetain(this.components[0]));
};

StringOperation.prototype.copy = function() {
	var slOp = new this.constructor();
	slOp.baseLength = this.baseLength;
	slOp.targetLength = this.targetLength;
	slOp.components = this.components;
	return slOp;
};

StringOperation.prototype.serialize = function() {
	var data = {
		components: this.components,
		baseLength: this.baseLength,
		targetLength: this.targetLength
	};
	return data;
};

StringOperation.deSerialize = function(data) {
	var slOp = new this.constructor();
	slOp.baseLength = data.baseLength;
	slOp.targetLength = data.targetLength;
	slOp.components = data.components;
	return slOp;
};

// Skip over a given number of characters.
StringOperation.prototype.retain = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	this.targetLength += n;
	if(isRetain(this.components[this.components.length-1])) {
		this.components[this.components.length-1].retain += n;
	} else {
		this.components.push({retain: n});
	}
	return this;
};

// Insert a string at the current position.
StringOperation.prototype.insert = function(str) {
	if(str === '') {return this;}
	this.targetLength += str.length;
	if(isInsert(this.components[this.components.length-1])) {
		this.components[this.components.length-1].insert += str;
	} else {
		this.components.push({insert: str});
	}
	return this;
};

// Delete a string at the current position.
StringOperation.prototype.delete = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	if(isDelete(this.components[this.components.length-1])) {
		this.components[this.components.length-1].delete += n;
	} else {
		this.components.push({'delete': n});
	}
	return this;
};

// The param 'sequence' should be a serialized SequenceManager.
// This functions modifies the serialized sequence that it operates on.
StringOperation.prototype.apply = function(sequence) {
	if(this.isNoop()) { return true; }
	
	var str = sequence.join('');
	
	if(this.baseLength !== str.length) {
		throw new Error("The operation's base length ("+this.baseLength+") must be equal to the sequence's length ("+str.length+").");
	}

	var inverse = new this.constructor();
	
	var newStr = [];
	var i1 = 0, pos = 0;
	var comps = this.components;
	for(var i=0; i<comps.length; i++) {
		var comp = comps[i];
		if(isRetain(comp)) {
			inverse.retain(comp.retain);
			newStr.push(str.slice(pos, pos + comp.retain));
			pos += comp.retain;
		} else if(isInsert(comp)) {
			inverse.delete(comp.insert.length);
			newStr.push(comp.insert);
		} else if(isDelete(comp)) {
			inverse.insert(str.slice(pos, pos + comp.delete));
			pos += comp.delete;
		} else {
			console.error("Invalid operation component type.");
		}
	}
	
	newStr = newStr.join('');
	sequence.splice(0, sequence.length);
	for(var i=0,ii=newStr.length;i<ii;i++) {
		sequence[i] = newStr[i];
	}
	
	return inverse;
};

StringOperation.transform = function(op1, op2) {
	if(op1 === undefined || op1 === null || op1.isNoop()) {
		var op1prime = new this();
		var op2prime = (op2 === undefined || op2 === null) ? new this() : op2.copy();
		return [op1prime, op2prime];
	}
	if(op2 === undefined || op2 === null || op2.isNoop()) {
		var op1prime = (op1 === undefined || op1 === null) ? new this() : op1.copy();
		var op2prime = new this();
		return [op1prime, op2prime];
	}
	
	if (op1.baseLength !== op2.baseLength) {
		throw new Error("Both operations have to have the same base length:\n\top1.baseLength: "+op1.baseLength+
				"\n\top2.baseLength: "+op2.baseLength);
	}
	
	var comps1 = op1.components;
	var comps2 = op2.components;
	var op1prime = new this();
	var op2prime = new this();
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
			op2prime.retain(comp1.insert.length);
			i1++;
			continue;
		}
		if(isInsert(comp2)) {
			op1prime.retain(comp2.insert.length);
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
			op1prime['delete'](minl);
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
			op2prime['delete'](minl);
		} else {
			throw new Error("The two components aren't compatible.");
		}
	}
	
	return [op1prime, op2prime];
};

/**
 * Returns op such that op(S) = op2(op1(S));
 */
StringOperation.compose = function(op1, op2) {
	if(op1 === undefined || op1 === null || op1.isNoop()) {
		return (op2 === undefined || op2 === null) ? new this()  : op2.copy();
	}
	if(op2 === undefined || op2 === null || op2.isNoop()) {
		return (op1 === undefined || op1 === null) ? new this()  : op1.copy();
	}
	
	if(op1.targetLength !== op2.baseLength) {
		throw new Error("The base length of the second operation has to be the target length of the first operation.");
	}
	
	var comps1 = op1.components;
	var comps2 = op2.components;
	var op = new this();
	var i1 = 0, i2 = 0;
	var c1 = 0, c2 = 0;
	while(true) {
		var comp1 = comps1[i1];
		var comp2 = comps2[i2];
		if(comp1===undefined && comp2===undefined) {
			break;
		}
		
		if(isDelete(comp1)) {
			op['delete'](comp1['delete']);
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
			if(typeof c1 !== 'string') {c1 = comp1.insert;}
			v1 = c1.length;
			v2 = comp2['delete'] - c2;
			if(v1 > v2) {
				c1 = c1.slice(v2);
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
			if(typeof c1 !== 'string') {c1 = comp1.insert;}
			v1 = c1.length;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				op.insert(c1.slice(0, v2));
				c1 = c1.slice(v2);
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.insert(c1);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.insert(c1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isRetain(comp1) && isDelete(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2['delete'] - c2;
			if(v1 > v2) {
				op['delete'](v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op['delete'](v2);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op['delete'](v1);
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