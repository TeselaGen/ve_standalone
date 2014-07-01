(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}




var RidmOperation = VE.ot.RidmOperation = function(ExtendingClass) {
	this.ExtendingClass = ExtendingClass;
	
	this.config = ExtendingClass.config;
	
	this.components = [];
	this.baseLength = 0;
	this.targetLength = 0;
};



RidmOperation.setUpStatics = function(ExtendingClass) {
	ExtendingClass.isRetain = this.isRetain;
	ExtendingClass.isInsert = this.isInsert;
	ExtendingClass.isDelete = this.isDelete;
	ExtendingClass.isModify = this.isModify;
	
	ExtendingClass.deSerialize = this.deSerialize;
	ExtendingClass.transform = this.transform;
	ExtendingClass.compose = this.compose;
};

/* This is what the config should look like. Keep this
 * code commented out. 

RidmOperation.config = {
	getModificationClass: function() {
		
	},
	
	getInsertClassArrayFromApplyClassObj: function(applyClassObject) {
		 
	},
	setInsertClassArrayOfApplyClassObj: function(applyClassObject, insertClassArray) {
		
	},
	
	cloneInsertClassObject: function(insertClassObject) {
		
	},
	serializeInsertClassObject: function(insertClassObject) {
		
	},
	deSerializeInsertClassObject: function(serializedInsertClassObject) {
		
	}
	
};*/


var isRetain = RidmOperation.isRetain = RidmOperation.prototype.isRetain = function(comp) {
	return comp!==undefined && comp.retain !== undefined;
};

var isInsert = RidmOperation.isInsert = RidmOperation.prototype.isInsert = function(comp) {
	return comp!==undefined && comp.insert !== undefined;
};

var isDelete = RidmOperation.isDelete = RidmOperation.prototype.isDelete = function(comp) {
	return comp!==undefined && comp.delete !== undefined;
};

var isModify = RidmOperation.isModify = RidmOperation.prototype.isModify = function(comp) {
	return comp!==undefined && comp.modify !== undefined;
};


RidmOperation.prototype.isNoop = function() {
	return this.components.length===0 || (this.components.length===1 && this.isRetain(this.components[0]));
};

RidmOperation.prototype.copy = function() {
	var copy = new this.ExtendingClass();
	copy.baseLength = this.baseLength;
	copy.targetLength = this.targetLength;
	
	var isRetain = this.isRetain;
	var isInsert = this.isInsert;
	var isDelete = this.isDelete;
	var isModify = this.isModify;
	
	var comps = this.components;
	var copyComps = [];
	for(var i=0;i<comps.length;i++) {
		var c = comps[i];
		if(isModify(c)) {
			copyComps.push({modify: c.modify.copy()});
		} else if(isInsert(c)) {
			copyComps.push({insert: this.config.cloneInsertClassObject(c.insert)});
		} else if(isRetain(c)) {
			copyComps.push({retain: c.retain});
		} else if(isDelete(c)) {
			copyComps.push({delete: c.delete});
		} else {
			console.error("Invalid operation component type:", comp);
		}
	}
	
	copy.components = copyComps;
	return copy;
};

RidmOperation.prototype.serialize = function() {
	var isInsert = this.isInsert;
	var isModify = this.isModify;
	var comps = this.components;
	var serComps = [];
	for(var i=0;i<comps.length;i++) {
		var c = comps[i];
		if(isModify(c)) {
			serComps.push({modify: c.modify.serialize()});
		} else if(isInsert(c)) {
			serComps.push({insert: this.config.serializeInsertClassObject(c.insert)});
		} else {
			serComps.push(c);
		}
	}
	var data = {
		components: serComps,
		baseLength: this.baseLength,
		targetLength: this.targetLength
	};
	return data;
};

RidmOperation.prototype.getLastComp = function() {
	return this.components[this.components.length-1];
};

// Skip over a given number of items.
RidmOperation.prototype.retain = function(n) {
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

/**
 * Insert an insertClassObject at the current position.
 * @param {InsertClass} insertClassObject
 */
RidmOperation.prototype.insert = function(insertClassObject) {
	this.targetLength += 1;
	if(this.isModify(this.components[this.components.length-1])) {
		this.components[this.components.length-1].modify.apply(insertClassObject);
		this.components.pop();
	}
	this.components.push({insert: insertClassObject});
	return this;
};

// Delete n items at the current position.
RidmOperation.prototype.delete = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	if(this.isDelete(this.components[this.components.length-1])) {
		this.components[this.components.length-1].delete += n;
	} else if(this.isModify(this.getLastComp())) {
		// Modifications operating on a deleted item will be removed.
		this.components.pop();
		this.components.push({'delete': n});
	} else {
		this.components.push({'delete': n});
	}
	return this;
};

/**
 * @param {ModificationClass} modificationClassObject
 */
RidmOperation.prototype.modify = function(modificationClassObject) {
	if(this.isModify(this.getLastComp())) {
		// Compose modifications on the same item.
		var compMod = this.config.getModificationClass().compose(this.getLastComp().modify, modificationClassObject);
		this.components.pop();
		this.components.push({modify: compMod});
	} else {
		this.components.push({modify: modificationClassObject});
	}
	return this;
};

/**
 * This function will alter the applyClassObject to which it is applied to.
 * @param {ApplyClass} applyClassObject
 */
RidmOperation.prototype.apply = function(applyClassObject) {		
	var inverse = new this.ExtendingClass();

	if(this.isNoop()) { return inverse; }
	
	var insertClassArray = this.config.getInsertClassArrayFromApplyClassObj(applyClassObject);
	
	if(this.baseLength !== insertClassArray.length) {
		throw new Error("The operation's base length ("+this.baseLength+") must be equal to the length of the insertClassArray ("+insertClassArray.length+").");
	}
	
	var isRetain = this.isRetain;
	var isInsert = this.isInsert;
	var isDelete = this.isDelete;
	var isModify = this.isModify;
	
	
	var newInsertClassArray = [];
	var pos = 0;
	var comps = this.components;
	var modBuf = undefined;
	for(var i=0; i<comps.length; i++) {
		var comp = comps[i];
		if(isModify(comp)) {
			modBuf = comp.modify;
		} else if(isRetain(comp)) {
			if(modBuf === undefined) {
				for(var j=0;j<comp.retain;j++) {
					newInsertClassArray.push(insertClassArray[pos+j]);
				}
			} else {
				inverse.modify(modBuf.apply(insertClassArray[pos]));
				// modBuf.apply(insertClassArray[pos]);
				newInsertClassArray.push(insertClassArray[pos]);
				for(var j=1;j<comp.retain;j++) {
					newInsertClassArray.push(insertClassArray[pos+j]);
				}
			}
			inverse.retain(comp.retain);
			pos += comp.retain;
			modBuf = undefined;
		} else if(isInsert(comp)) {
			modBuf = undefined;
			inverse.delete(1);
			newInsertClassArray.push(comp.insert);
		} else if(isDelete(comp)) {
			modBuf = undefined;
			for(var j=pos;j<pos+comp.delete;j++) {
				inverse.insert(insertClassArray[j].clone());
			}
			pos += comp.delete;
		} else {
			console.error("Invalid operation component type:", comp);
		}
	}
	
	this.config.setInsertClassArrayOfApplyClassObj(applyClassObject, newInsertClassArray);
	return inverse;
};

RidmOperation.deSerialize = function(data) {
	var deSer = new this();
	deSer.baseLength = data.baseLength;
	deSer.targetLength = data.targetLength;
	
	var comps = data.components;
	var deSerComps = [];
	for(var i=0;i<comps.length;i++) {
		var c = comps[i];
		if(this.isModify(c)) {
			deSerComps.push({modify: this.config.getModificationClass().deSerialize(c.modify)});
		} else if(this.isInsert(c)) {
			deSerComps.push({insert: this.config.deSerializeInsertClassObject(c.insert)});
		} else {
			deSerComps.push(c);
		}
	}
	
	deSer.components = deSerComps;
	return deSer;
};

RidmOperation.transform = function(op1, op2) {
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
		throw new Error("Both operations have to have the same base length");
	}
	
	var isRetain = this.isRetain;
	var isInsert = this.isInsert;
	var isDelete = this.isDelete;
	var isModify = this.isModify;
	
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
		
		if(isModify(comp1) && isDelete(comp2)) {
			i1++;
			continue;
		}
		if(isModify(comp2) && isDelete(comp1)) {
			i2++;
			continue;
		}
		
		
		if(isModify(comp1) && isModify(comp2)) {
			var pair = this.config.getModificationClass().transform(comp1.modify, comp2.modify);
			op1prime.modify(pair[0]);
			op2prime.modify(pair[1]);
			i1++;
			i2++;
			continue;
		}
		
		
		if(isModify(comp1)) {
			op1prime.modify(comp1.modify);
			i1++;
			continue;
		}
		
		if(isInsert(comp1)) {
			op1prime.insert(comp1.insert);
			op2prime.retain(1);
			i1++;
			continue;
		}
		
		
		if(isModify(comp2)) {
			op2prime.modify(comp2.modify);
			i2++;
			continue;
		}
		
		if(isInsert(comp2)) {
			op1prime.retain(1);
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
			v1 = comp1["delete"] - c1;
			v2 = comp2["delete"] - c2;
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
			v1 = comp1["delete"] - c1;
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
			v2 = comp2["delete"] - c2;
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
RidmOperation.compose = function(op1, op2) {
	if(op1 === undefined || op1 === null || op1.isNoop()) {
		return (op2 === undefined || op2 === null) ? new this() : op2.copy();
	}
	if(op2 === undefined || op2 === null || op2.isNoop()) {
		return (op1 === undefined || op1 === null) ? new this() : op1.copy();
	}
	
	if(op1.targetLength !== op2.baseLength) {
		throw new Error("The base length of the second operation ("+op2.baseLength+") has to be the target length of the first operation ("+op1.targetLength+").");
	}
	
	var isRetain = this.isRetain;
	var isInsert = this.isInsert;
	var isDelete = this.isDelete;
	var isModify = this.isModify;
	
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
		
		if(isModify(comp1)) {
			op.modify(comp1.modify);
			i1++;
			continue;
		}
		if(isDelete(comp1)) {
			op['delete'](comp1['delete']);
			i1++;
			continue;
		}
		
		if(isModify(comp2)) {
			op.modify(comp2.modify);
			i2++;
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
			v1 = 1;
			v2 = comp2['delete'] - c2;
			if(v1 > v2) { // Currently, this can only happen v2===0
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
			v1 = 1;
			v2 = comp2.retain - c2;
			if(v1 > v2) { // Currently, this can only happen v2===0
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.insert(comp1.insert);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.insert(comp1.insert);
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