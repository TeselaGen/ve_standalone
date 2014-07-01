



var Throttler = function(params) {
	this.maxOutstandingItems = params.maxOutstandingItems || 50;
	this.inputArray = params.inputArray || [];
	this.forEachFn = params.forEachFn;
	this.doneFn = params.doneFn;

	this.currentIndex = 0;
	this.outstandingItems = 0;
};


Throttler.prototype.run = function() {
	var me = this;
	
	
	function next() {
		// console.log(me.outstandingItems);
		me.outstandingItems--;
		if(me.currentIndex >= me.inputArray.length) {
			return me.doneFn();
			// me.doneFn();
		} else if(me.outstandingItems < me.maxOutstandingItems) {
			return fn();
			// fn();
		}
	}

	function fn() {
		// console.log(me.outstandingItems);
		var item = me.inputArray[me.currentIndex];
		var index = me.currentIndex;
		me.currentIndex++;
		me.outstandingItems++;
		return me.forEachFn(item, index, next);
	}

	next();


	return this;
};


























































