
VE.RendererUtil = {
	

	// may need something with circular features
	// buildAlignmentMap: function(annotations, seqLen) {
	// 	this.seqLen = seqLen;

	// 	for(var i=0,ii=annotations.length;i<ii;i++) {
	// 		annotations[i].__index = i;
	// 	}

	// 	annotations = annotations.slice(0).sort(this.sortByStart);
				
	// 	var rows = [];
	// 	// map from annotation index to row index
	// 	var alignmentMap = {};

	// 	loopA: for(var i=0;i<annotations.length;i++) {
	// 		var annot = annotations[i];
	// 		var index = annot.__index;

	// 		var start = annot.get('start');
	// 		var end = annot.get('end');

	// 		for(var j=0;j<rows.length;j++) {
	// 			var row = rows[j];
	// 			if(start >= row) {
	// 				alignmentMap[index] = j;
	// 				rows[j] = end;
	// 				continue loopA;
	// 			}
	// 		}

	// 		rows.push(end);
	// 		alignmentMap[index] = rows.length - 1;
	// 	}

	// 	return alignmentMap;
	// },


	buildAlignmentMap: function(annotations, seqLen) {
		var max = Math.max;
		this.seqLen = seqLen;

		for(var i=0,ii=annotations.length;i<ii;i++) {
			var annot = annotations[i];
			annot.__index = i;

			var start = annot.get('start');
			var end = annot.get('end');

			if(start <= end) {
				annot.__start = start;
				annot.__end = end;
				annot.__circ = false;
			} else {
				annot.__start = 0;
				annot.__end = end;
				annot.__circ = true;
			}

		}

		annotations = annotations.slice(0).sort(this.sortByStart);
		
		var rows = [];
		var rowEnds = [];
		// map from annotation index to row index
		var alignmentMap = {};

		loopA: for(var i=0;i<annotations.length;i++) {
			var annot = annotations[i];
			var index = annot.__index;

			var start = annot.__start;
			var end = annot.__end;
			var __circ = annot.__circ;

			for(var j=0;j<rows.length;j++) {
				var row = rows[j];
				if(start >= row) {
					alignmentMap[index] = j;
					rows[j] = end;


					// if(__circ) {
					// 	var st = annot.get('start');
					// 	var oldEnd;
					// 	rowEnds[j] = ((oldEnd = rowEnds[j]) === undefined) ? st : max(st, oldEnd);
					// }



					continue loopA;
				}
			}

			rows.push(end);
			alignmentMap[index] = rows.length - 1;



			// if(__circ) {
			// 	var st = annot.get('start');
			// 	var oldEnd;
			// 	var j = rows.length - 1;
			// 	rowEnds[j] = ((oldEnd = rowEnds[j]) === undefined) ? st : max(st, oldEnd);
			// }



		}

		return alignmentMap;
	},




	sortByStart: function(a1, a2) {
		// if (a1 === undefined || a2 === undefined) {
		//     console.log("There was an undefined sorting value!!");
		//     return 0;
		// }
		var a1Start = a1.get('start');
		var a2Start = a2.get('start');

		if(a1Start > a2Start) {
			return 1;
		} else if(a1Start < a2Start) {
			return -1;
		} else {
			return 0;
		}
	},

	sortByLength: function(a1, a2) {
		if(a1.get('start') > a1.get('end')) {
			return a1.get('end') + this.seqLen -
					a1.get('start') + 1;
		} else {
			return a1.get('end') - a1.get('start') + 1;
		}

		if(a2.get('start') > a2.get('end')) {
			return a2.get('end') + this.seqLen -
					a2.get('start') + 1;
		} else {
			return a2.get('end') - a2.get('start') + 1;
		}

		if(a1Length < a2Length) {
			return 1;
		} else if(a1Length > a2Length) {
			return -1;
		} else {
			return 0;
		}
	},


	complement: function(str) {
		var complement = [];
		for(var i=0;i<str.length;i++) {
			complement.push(this.complementSymbol(str[i]))
		}
		return complement.join('');

		// var complement = [];
		// str = str.toLowerCase();
		// for(var i=0;i<str.length;i++) {
		// 	complement.push(this.complementLowerCaseSymbol(str[i]))
		// }
		// return complement.join('');

	},

	complementSymbol: function(pSymbol){
		pSymbol = pSymbol.toLowerCase();
		switch(pSymbol) {
			case 'a':
				return 't';
			case 't':
				return 'a';
			case 'g':
				return 'c';
			case 'c':
				return 'g';
			case 'y':
				return 'r';
			case 'r':
				return 'y';
			case 's':
				return 's';
			case 'w':
				return 'w';
			case 'k':
				return 'm';
			case 'm':
				return 'k';
			case 'b':
				return 'v';
			case 'v':
				return 'b';
			case 'd':
				return 'h';
			case 'h':
				return 'd';
			case 'n':
				return 'n';
			case '-':
				return '-';
			default:
				return pSymbol;
		}
	},

	complementLowerCaseSymbol: function(pSymbol){
		// pSymbol = pSymbol.toLowerCase();
		var map = {
			'a': 't',
			't': 'a',
			'g': 'c',
			'c': 'g',
			'y': 'r',
			'r': 'y',
			's': 's',
			'w': 'w',
			'k': 'm',
			'm': 'k',
			'b': 'v',
			'v': 'b',
			'd': 'h',
			'h': 'd',
			'n': 'n',
			'-': '-',
		};

		return map[pSymbol] || pSymbol;
	},



	calculateAngles: function(annot, seqLen) {
		var angle1 = annot.get('start') * 2 * Math.PI / seqLen;
		var angle2 = annot.get('end') * 2 * Math.PI / seqLen;
		if(angle1 > angle2) {
			return [angle1, angle2 + 2 * Math.PI];
		} else {
			return [angle1, angle2];
		}
	},
	
	calculateAngle: function(bpIndex, seqLen) {
		return bpIndex * 2 * Math.PI / seqLen;
	},



	assignAlignmentRenderInfoToRows: function(annotateContainer, rows) {
		var seqLen = annotateContainer.model.get('sequence').length;
		var bpPerRow = annotateContainer.bpPerRow;
		var charPerRow = annotateContainer.getCharPerRow();
		var showSpaceEvery10Bp = annotateContainer.showSpaceEvery10Bp;

		function alignmentToSubjectString(alignment) {
			var str = '';
			for(var i=0,ii=alignment.length;i<ii;i++) {
				var align = alignment[i];
				var type = align.type;
				var queryStart = align.queryStart;
				while(str.length < queryStart) {
					str += ' ';
				}
				if(type !== 'queryGap') {
					str += align.subjectSequence;
				}
			}
			while(str.length < seqLen) {
				str += ' ';
			}
			return str;
		}

		function alignmentToTypeString(alignment) {
			var str = '';
			for(var i=0,ii=alignment.length;i<ii;i++) {
				var align = alignment[i];
				var type = align.type;
				var queryStart = align.queryStart;
				var len = align.subjectSequence.length;
				while(str.length < queryStart) {
					str += '0';
				}
				if(type === 'match') {
					for(var j=0;j<len;j++) {
						str += '1';
					}
				} else if(type === 'mismatch') {
					for(var j=0;j<len;j++) {
						str += '2';
					}
				}
			}
			while(str.length < seqLen) {
				str += '0';
			}
			return str;
		}

		function getRowStr(str, rowIndex) {
			var rowArray = str.slice(rowIndex*bpPerRow, rowIndex*bpPerRow + bpPerRow);
			if(showSpaceEvery10Bp) {
				var a = [];
				for(var i=0;i<rowArray.length;i+=10) {
					a.push(rowArray.slice(i,i+10));
				}
				return a.join(' ').toUpperCase();
			} else {
				return rowArray.toUpperCase();
			}
		}

		function getDashedArrayFromRowTypeString(str, char) {
			var a = [0];
			var num = 0;
			var solid = true;
			// if(str[0] !== char) { a.push(0); }
			for(var i=0;i<str.length;i++) {
				var c = str[i];
				if(c === char) {
					if(solid) {
						num++;
					} else {
						a.push((num/str.length));
						num = 1;
					}
					solid = true;

				} else {
					if(!solid) {
						num++;
					} else {
						a.push((num/str.length));
						num = 1;
					}
					solid = false;

				}
			}
			a.push((num/str.length));

			return a;
		}

		var alignments = annotateContainer.model.get('alignments');
		for(var i=0;i<alignments.length;i++) {
			var aligns = alignments[i];
			// for(var j=0;j<rows.length;j++) {
			// 	rows[j].alignments[i] = [];
			// }

			// console.time('A')
			var subjStr = alignmentToSubjectString(aligns);
			// console.log(subjStr);
			var typeStr = alignmentToTypeString(aligns);
			// console.log(typeStr);
			// console.timeEnd('A')

			for(var j=0;j<rows.length;j++) {
				var rowSubjStr = getRowStr(subjStr, j);
				var rowTypeStr = getRowStr(typeStr, j);

				var matchDashArray = getDashedArrayFromRowTypeString(rowTypeStr, '1');
				var mismatchDashArray = getDashedArrayFromRowTypeString(rowTypeStr, '2'); 

				var renderInfo = {
					text: rowSubjStr,
					matchDashArray: matchDashArray,
					mismatchDashArray: mismatchDashArray,
				};
				rows[j].alignments[i] = renderInfo;
			}

			// for(var j=0;j<aligns.length;j++) {
			// 	var align = aligns[j];

			// 	var start = align.queryStart;
			// 	var end = (align.type === 'queryGap') ? start : start + align.subjectSequence.length;
			// 	if(end < start) throw new Error("TODO");

			// 	var annotStartRow = annotateContainer.bpToRowIndex(start);
			// 	var annotEndRow = annotateContainer.bpToRowIndex(end-1);

			// 	for(var k=annotStartRow;k<=annotEndRow;k++) {
			// 		rows[k].alignments[i].push(j);
			// 	}
			// }
		}
	},

	
}

































































