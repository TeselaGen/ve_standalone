/*
 *	Basically a centralized object to provide enable sharing of data amongst parts 
 *	of VectorEditor and provide a centralized event framework.
 */


VE.Ve = function() {
	_.extend(this, Backbone.Events);

	this.eventedObjects = [];

	this.options = {
		showSpaceEvery10Bp: true,
		showComplementarySequence: true,
		showFeatures: true,
		showCutSites: false,
		showOrfs: false,
		showAlignments: false,
		showAminoAcids: false,
		showAminoAcidsRevCom: false,
		showFeatureLabels: true,
		showCutSiteLabels: true,
		showAlignmentLabels: true,
		showMapCaret: true,

		aminoAcidFrames: [],
		aminoAcidRevComFrames: [],
		orfFrames: [],
		orfRevComFrames: [],
		
		viewMode: 'pie', // 'pie', 'rail'

		// aminoAcidFrames: [],

		orfMinimumLength: 300,
	};

	this.on("all", function() {
		// var args = [];
		// for(var i=1;i<arguments.length;i++) {
		// 	args.push(arguments[i]);
		// }
		for(var i=0;i<this.eventedObjects.length;i++) {
			this.eventedObjects[i].trigger.apply(this.eventedObjects[i], arguments);
		}
	});
	
	this.selectionStartBp = null;
	this.selectionEndBp = null;
	this.caretBpIndex = 0;

	this.addListeners();

	this.addObjectToEvents(VE.WorkersManager);


	
};

// // copy
// // cut
// // paste
// // beforecopy
// // beforecut
// // beforepaste







VE.Ve.prototype.addListeners = function() {
	this.on(VE.SelectionEvent.CHANGE_CARET_POSITION, this.onChangeCaretPosition, this);
	this.on(VE.SelectionEvent.SELECT, this.onSelect, this);
	this.on(VE.SelectionEvent.DESELECT, this.onDeselect, this);

	this.on(VE.Event.NEW_SEQUENCE_OPENED, this.onNewSequenceOpened, this);

	this.on(VE.EditingEvent.CLIENT_OPERATION, this.onClientOperation, this);
	this.on(VE.EditingEvent.PASTE, this.onPaste, this);

	this.on(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, this.onShowCutSitesChanged, this);
	this.on(VE.VisibilityEvent.SHOW_ORFS_CHANGED, this.onShowOrfsChanged, this);


	// Temporary way of setting event.
	// $('body').on('keydown', this.onKeyDown.bind(this));

	// $('body').delegate('keydown', '.ve-panel-background', this.onKeyDown.bind(this));

	// $('body').delegate('keydown', '.ve-annotate-panel', this.onKeyDown.bind(this));
	// $(document).on('keydown', '.ve-annotate-panel', this.onKeyDown.bind(this));
	// $(document).delegate('keydown', '.ve-annotate-panel', this.onKeyDown.bind(this));
	// $('body').delegate('keydown', '.ve-panel-background', this.onKeyDown.bind(this));

	// $(document).keydown('.ve-annotate-panel', this.onKeyDown.bind(this));

};






VE.Ve.prototype.onClientOperation = function(sequenceOperation) {
	this.model.needsRecalc__sequence_4na = true;
	this.model.needsRecalc__orfs = true;
	this.model.needsRecalc__cutSites = true;

	this.annotateContainer.calculateLogLength();

	if(this.options.showOrfs) {
		this.model.calculateOrfs(this.options.orfMinimumLength);
		this.model.needsRecalc__orfs = false;
	}
	if(this.options.showCutSites) {
		this.model.recalculateCutSites();
		this.model.needsRecalc__cutSites = false;
	}

};


VE.Ve.prototype.onShowOrfsChanged = function(showOrfs, orfFrames, orfRevComFrames) {
	if(showOrfs && this.model.needsRecalc__orfs) {
		this.model.calculateOrfs(this.options.orfMinimumLength);
		this.model.needsRecalc__orfs = false;
	}
};

VE.Ve.prototype.onShowCutSitesChanged = function(showCutSites) {
	if(showCutSites && this.model.needsRecalc__cutSites) {
		this.model.recalculateCutSites();
		this.model.needsRecalc__cutSites = false;
	}
};


VE.Ve.prototype.onNewSequenceOpened = function(sequenceModel) {
	this.model = sequenceModel;
	this.model.needsRecalc__orfs = true;
	this.model.needsRecalc__cutSites = true;

	if(this.options.showOrfs) {
		this.model.calculateOrfs(this.options.orfMinimumLength);
		this.model.needsRecalc__orfs = false;
	}
	if(this.options.showCutSites) {
		this.model.recalculateCutSites();
		this.model.needsRecalc__cutSites = false;
	}

};


VE.Ve.prototype.onChangeCaretPosition = function(bpIndex) {
	this.caretBpIndex = bpIndex;
};

VE.Ve.prototype.onSelect = function(startBp, endBp) {
	this.selectionStartBp = startBp;
	this.selectionEndBp = endBp;
};

VE.Ve.prototype.onDeselect = function() {
	this.selectionStartBp = null;
	this.selectionEndBp = null;
};

VE.Ve.prototype.onKeyDown = function(evt) {
	var EditingManager = VE.EditingManager;

	var character = String.fromCharCode(evt.keyCode).toLowerCase();

	if(!evt.ctrlKey && !evt.metaKey) {
		evt.preventDefault();

		if(Bio.DnaAlphabet.symbols[character]) {
			var start, end;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				start = this.selectionStartBp;
				end = this.selectionEndBp;
			} else if(this.caretBpIndex !== null) {
				start = end = this.caretBpIndex;
			} else {
				return;
			}

			var op = EditingManager.generateInsertSequenceOp(this.model, character, start, end);
			this.model.applyClientOperation(op);

			this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			if(start > end) { // If selection is circular, move cursor to end of sequence.
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			} else {
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start + character.length);
			}

			this.trigger(VE.SelectionEvent.DESELECT);


		} else if(evt.keyCode === 46) { // DELETE
			var start, end;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				start = this.selectionStartBp;
				end = this.selectionEndBp;
			} else if(this.caretBpIndex !== null && this.caretBpIndex < this.model.length()) {
				start = this.caretBpIndex;
				end = this.caretBpIndex + 1;
			} else {
				return;
			}

			var op = EditingManager.generateDeleteSequenceOp(this.model, start, end);
			this.model.applyClientOperation(op);

			this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			if(start > end) { // If selection is circular, move cursor to end of sequence.
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			} else {
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
			}

			this.trigger(VE.SelectionEvent.DESELECT);


		} else if(evt.keyCode === 8) { // BACKSPACE
			var start, end;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				start = this.selectionStartBp;
				end = this.selectionEndBp;
			} else if(this.caretBpIndex !== null && this.caretBpIndex !== 0) {
				start = this.caretBpIndex - 1;
				end = this.caretBpIndex;
			} else {
				return;
			}

			var op = EditingManager.generateDeleteSequenceOp(this.model, start, end);
			this.model.applyClientOperation(op);

			this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			if(start > end) { // If selection is circular, move cursor to end of sequence.
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			} else {
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
			}

			this.trigger(VE.SelectionEvent.DESELECT);


		} else if(evt.keyCode === 37) { // LEFT ARROW
			var bpIndex;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				bpIndex = this.selectionStartBp;
			} else if(this.caretBpIndex !== null) {
				bpIndex = this.caretBpIndex - 1;
			} else {
				return;
			}
			if(bpIndex < 0) { return; }

			this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, bpIndex);
			this.trigger(VE.SelectionEvent.DESELECT);


		} else if(evt.keyCode === 38) { // UP ARROW
			var bpPerRow = this.annotateContainer.bpPerRow;
			var bpIndex;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				bpIndex = this.selectionStartBp;
			} else if(this.caretBpIndex !== null) {
				bpIndex = this.caretBpIndex - bpPerRow;
			} else {
				return;
			}
			if(bpIndex < 0) { return; }

			this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, bpIndex);
			this.trigger(VE.SelectionEvent.DESELECT);


			
		} else if(evt.keyCode === 39) { // RIGHT ARROW
			var bpIndex;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				bpIndex = this.selectionEndBp;
			} else if(this.caretBpIndex !== null) {
				bpIndex = this.caretBpIndex + 1;
			} else {
				return;
			}
			if(bpIndex > this.model.length()) { return; }

			this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, bpIndex);
			this.trigger(VE.SelectionEvent.DESELECT);
			

		} else if(evt.keyCode === 40) { // DOWN ARROW
			var bpPerRow = this.annotateContainer.bpPerRow;
			var bpIndex;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				bpIndex = this.selectionStartBp;
			} else if(this.caretBpIndex !== null) {
				bpIndex = this.caretBpIndex + bpPerRow;
			} else {
				return;
			}
			if(bpIndex > this.model.length()) { return; }

			this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, bpIndex);
			this.trigger(VE.SelectionEvent.DESELECT);
			

		}
		

	} else {
		
		if(character === 'c') {
			this.copySelectionToClipboard();

		} else if(character === 'v') {
			this.pasteFromClipboard();

		} else if(character === 'x') {
			this.cutSelectionToClipboard();
			// this.copySelectionToClipboard();
			// var start, end;
			// if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
			// 	start = this.selectionStartBp;
			// 	end = this.selectionEndBp;
			// } else {
			// 	return;
			// }

			// var op = EditingManager.generateDeleteSequenceOp(this.model, start, end);
			// this.model.applyClientOperation(op);

			// this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			// if(start > end) { // If selection is circular, move cursor to end of sequence.
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			// } else {
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
			// }

			// this.trigger(VE.SelectionEvent.DESELECT);

		} else if(character === 'z' && !evt.shiftKey) {

			this.undo();

		} else if(character === 'z' && evt.shiftKey || character === 'y') {

			this.redo();

		}


	}



};





VE.Ve.prototype.redo = function() {
	var me = this;
	var undoManager = this.model.undoManager;
	if(undoManager.canRedo()) {
		undoManager.performRedo((function(op) {
			
			this.model.applyClientOperation(op);
			this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			// if(start > end) { // If selection is circular, move cursor to end of sequence.
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			// } else {
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
			// }

			this.trigger(VE.SelectionEvent.DESELECT);

		}).bind(this));
	}
};

VE.Ve.prototype.undo = function() {
	var me = this;
	var undoManager = this.model.undoManager;
	if(undoManager.canUndo()) {
		undoManager.performUndo((function(op) {
			
			this.model.applyClientOperation(op);
			this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			// if(start > end) { // If selection is circular, move cursor to end of sequence.
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			// } else {
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
			// }

			this.trigger(VE.SelectionEvent.DESELECT);

		}).bind(this));
	}
};




VE.Ve.prototype.pasteFromClipboard = function() {
	var me = this;
	var textarea;
	if((textarea = $('textarea.clipboard-proxy-paste')).length === 0) {
		textarea = $(document.createElement('textarea'))
			.addClass('clipboard-proxy-paste')
			// .attr('contenteditable', true)
			.appendTo('body')
			.on('paste', function(evt) {
				if(evt.originalEvent) {
					var clipboardData = evt.originalEvent.clipboardData;
					var pastedString = clipboardData.getData('text/plain');
					if(!pastedString) { return; }

					if(me.selectionStartBp !== null && me.selectionEndBp !== null) {
						me.trigger(VE.EditingEvent.PASTE, pastedString, me.selectionStartBp, me.selectionEndBp);

					} else if(me.caretBpIndex) {
						me.trigger(VE.EditingEvent.PASTE, pastedString, me.caretBpIndex);
						
					}
					evt.preventDefault();
				}
			});
	}

	var oldFocus = $(document.activeElement);

	textarea.focus();
	textarea.text('');
	textarea.trigger('paste');

	setTimeout(function() {
		if(document.activeElement === textarea[0]) {
			oldFocus.focus();
		}
	}, 0);
};



VE.Ve.prototype.onPaste = function(pastedString, startBpIndex, endBpIndex) {
	pastedString = pastedString.toLowerCase();
	var isValid = Bio.DnaAlphabet.validateString(pastedString);
	if(!isValid) { return; }

	var start = startBpIndex, end = endBpIndex;
	if(!end) { end = start; }

	var op = VE.EditingManager.generateInsertSequenceOp(this.model, pastedString, start, end);
	this.model.applyClientOperation(op);

	this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

	if(start > end) {
		this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, pastedString.length);
		// this.trigger(VE.SelectionEvent.SELECT, 0, pastedString.length);
		this.trigger(VE.SelectionEvent.DESELECT);
	} else {
		this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start + pastedString.length);
		// this.trigger(VE.SelectionEvent.SELECT, start, start + pastedString.length);
		this.trigger(VE.SelectionEvent.DESELECT);
		
	}

	

};



VE.Ve.prototype.copySelectionToClipboard = function() {
	var textarea;
	if((textarea = $('textarea.clipboard-proxy-copy')).length === 0) {
		textarea = textarea = $(document.createElement('textarea'))
			.addClass('clipboard-proxy-copy')
			.attr('contenteditable', true)
			.appendTo('body');
	}
	
	if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
		var start = this.selectionStartBp;
		var end = this.selectionEndBp;

		var clipboardText;
		if(start > end) {
			clipboardText = this.model.getSubstring(0, end) + this.model.getSubstring(start, this.model.length());
		} else {
			clipboardText = this.model.getSubstring(start, end);
		}

		var oldFocus = $(document.activeElement);

		textarea.focus();
		textarea.text(clipboardText);
		textarea.select();
		textarea.trigger('copy');

		setTimeout(function() {
			if(document.activeElement === textarea[0]) {
				oldFocus.focus();
			}
		}, 0);
	}

};

VE.Ve.prototype.cutSelectionToClipboard = function() {
	this.copySelectionToClipboard();
	var start, end;
	if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
		start = this.selectionStartBp;
		end = this.selectionEndBp;
	} else {
		return;
	}

	var op = VE.EditingManager.generateDeleteSequenceOp(this.model, start, end);
	this.model.applyClientOperation(op);

	this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

	if(start > end) { // If selection is circular, move cursor to end of sequence.
		this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
	} else {
		this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
	}

	this.trigger(VE.SelectionEvent.DESELECT);
};


// Doesn't guard against adding multiple of the same object.
// Additionally, all objects added must implement a 'trigger' method.
VE.Ve.prototype.addObjectToEvents = function(obj) {
	this.eventedObjects.push(obj);
};
































































