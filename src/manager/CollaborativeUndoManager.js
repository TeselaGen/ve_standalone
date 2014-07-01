(function(){


VE.CollaborativeUndoManager = function(inData) {
	if(inData) {
		this.maxItems = inData.maxItems || null;
	} else {
		this.maxItems = null;
	}
	
	this.state = this.NORMAL_STATE;
	this.undoStack = [];
	this.redoStack = [];
};


VE.CollaborativeUndoManager.prototype = {

	NORMAL_STATE: 'normal',
	UNDOING_STATE: 'undoing',
	REDOING_STATE: 'redoing',
	
	constructor: function(inData) {
		if(inData) {
			this.maxItems = inData.maxItems || null;
		} else {
			this.maxItems = null;
		}
		
		this.state = this.NORMAL_STATE;
		this.undoStack = [];
		this.redoStack = [];
	},
	
	// Op should be inverse of last client edit.
	add: function(op) {
		var me = this;
		if(me.state === me.NORMAL_STATE) {
			me.undoStack.push(op);
			if(me.maxItems !== null && me.undoStack.length > me.maxItems) { me.undoStack.shift(); }
			me.redoStack = [];
		} else if(me.state === me.UNDOING_STATE) {
			me.redoStack.push(op);
		} else if(me.state === me.REDOING_STATE) {
			me.undoStack.push(op);
		} else {
			console.error("Invalid state.");
		}
	},
	
	transform: function(operation) {
		
		var transformStack = function(stack, operation) {
			var newStack = [];
			for(var i=stack.length-1;i>=0;i--) {
				var pair = Teselagen.ot.VectorEditor.SequenceOperation.transform(stack[i], operation);
				if(typeof pair[0].isNoop !== 'function' || !pair[0].isNoop()) {
					newStack.push(pair[0]);
				}
				operation = pair[1];
			}
			return newStack.reverse();
		};
		
		this.undoStack = transformStack(this.undoStack, operation);
		this.redoStack = transformStack(this.redoStack, operation);
	},
	
	// Perform an undo by calling a function with the latest operation on the undo
	// stack. The function is expected to call the `add` method with the inverse
	// of the operation, which pushes the inverse on the redo stack.
	performUndo: function (fn) {
		this.state = this.UNDOING_STATE;
		if(!this.canUndo()) { throw new Error("Undo not possible."); }
		fn(this.undoStack.pop());
		this.state = this.NORMAL_STATE;
	},
	
	// The inverse of `performUndo`.
	performRedo: function (fn) {
		this.state = this.REDOING_STATE;
		if(!this.canRedo()) { throw new Error("Redo not possible."); }
		fn(this.redoStack.pop());
		this.state = this.NORMAL_STATE;
	},
	
	// Is the undo stack not empty?
	canUndo: function() {
		return this.undoStack.length !== 0;
	},
	
	// Is the redo stack not empty?
	canRedo: function() {
		return this.redoStack.length !== 0;
	},
};










































})();