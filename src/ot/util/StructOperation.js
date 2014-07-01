(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}





var StructOperation = VE.ot.StructOperation = function(inData, ExtendingClass) {
	this.ExtendingClass = ExtendingClass;
	
	this.config = ExtendingClass.config;
	this.orderArray = ExtendingClass.orderArray;
	
	if(inData) {
		for(var x in this.config) {
			this[x] = inData[x] === undefined ? null : inData[x];
		}
	} else {
		for(var x in this.config) {
			this[x] = null;
		}
	}
};


StructOperation.extend = function(params) {
	var config = params.config;
	var orderArray = params.orderArray;

	var childClass = function(inData) {
		if(inData) {
			for(var x in this.config) {
				this[x] = inData[x] === undefined ? null : inData[x];
			}
		} else {
			for(var x in this.config) {
				this[x] = null;
			}
		}
	}

	childClass.config = childClass.prototype.config = params.config;
	childClass.orderArray = childClass.prototype.orderArray = params.orderArray;

	childClass.deSerialize = this.deSerialize.bind(childClass);
	childClass.transform = this.transform.bind(childClass);
	childClass.compose = this.compose.bind(childClass);

	for(var x in this.prototype) {
		childClass.prototype[x] = this.prototype[x];
	}

	return childClass;
};




StructOperation.setUpStatics = function(ExtendingClass) {
	ExtendingClass.deSerialize = this.deSerialize;
	ExtendingClass.transform = this.transform;
	ExtendingClass.compose = this.compose;
};

StructOperation.prototype.isNoop = function() {
	for(var x in this.config) {
		if(this[x] !== null) { return false; }
	}
	return true;
};

StructOperation.prototype.copy = function() {
	var params = {};
	for(var x in this.config) {
		if(this[x] !== null) { params[x] = this.config[x].copy(this[x]); }
	}
	var copy = new this.ExtendingClass(params);
	return copy;
};

StructOperation.prototype.serialize = function() {
	var data = {};
	for(var x in this.config) {
		if(this[x] !== null) { data[x] = this.config[x].serialize(this[x]); }
		else { data[x] = null; }
	}
	return data;
};

StructOperation.prototype.apply = function(applyClassObject) {
	var inverseParams = {};
	for(var i=0;i<this.orderArray.length;i++) {
		var x = this.orderArray[i];
		if(this[x] !== null) {
			inverseParams[x] = this.config[x].apply(applyClassObject, this[x]);
		}
	}
	var inverse = new this.constructor(inverseParams);
	return inverse;
};

StructOperation.deSerialize = function(data) {
	if(data === undefined || data === null) { return new this(); }
	var params = {};
	for(var x in this.config) {
		if(data[x] === null || data[x] === undefined) { params[x] = null; }
		else { params[x] = this.config[x].deSerialize(data[x]); }
	}
	var deSer = new this(params);
	return deSer;
};

StructOperation.transform = function(op1, op2) {
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
	
	var op1primeParams = {};
	var op2primeParams = {};
	for(var i=0;i<this.orderArray.length;i++) {
		var x = this.orderArray[i];
		var xformed = this.config[x].transform(op1[x], op2[x]);
		op1primeParams[x] = xformed[0];
		op2primeParams[x] = xformed[1];
	}
	
	var op1prime = new this(op1primeParams);
	var op2prime = new this(op2primeParams);
	return [op1prime, op2prime];
};

/**
 * Returns op such that op(S) = op2(op1(S));
 */
StructOperation.compose = function(op1, op2) {
	if(op1 === undefined || op1 === null || op1.isNoop()) {
		return (op2 === undefined || op2 === null) ? new this() : op2.copy();
	}
	if(op2 === undefined || op2 === null || op2.isNoop()) {
		return (op1 === undefined || op1 === null) ? new this() : op1.copy();
	}
	
	var params = {};
	for(var i=0;i<this.orderArray.length;i++) {
		var x = this.orderArray[i];
		params[x] = this.config[x].compose(op1[x], op2[x]);
	}
	var op = new this(params);
	return op;
};



























































































})()