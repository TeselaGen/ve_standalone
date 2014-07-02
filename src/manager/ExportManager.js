(function(){




var StringUtil = {
	/** Trims white space at beginning and end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	trim: function(line) {
		return line.replace(/^\s+|\s+$/g,"");
	},

	/** Trims white space at beginning string
	 * @param {String} line
	 * @returns {String} line
	 */
	ltrim: function(line) {
		return line.replace(/^\s+/,"");
	},

	/** Trims white space at end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	rtrim: function(line) {
		return line.replace(/\s+$/,"");
	},

	/** Pads white space at beginning of string
	 * @param {String} line
	 * @returns {String} line
	 */
	lpad: function(line, padString, length) {
		var str = line;
		while (str.length < length)
			str = padString + str;
		return str;
	},

	/** Pads white space at end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	rpad: function(line, padString, length) {
		var str = line;
		while (str.length < length)
			str = str + padString;
		return str;
	}

};





VE.ExportManager = {
	

	saveStringToFile: function(str, fileName) {
		fileName = fileName || "";
		var blob = new Blob([str]);
		saveAs(blob, fileName);
	},



	sequenceModelToGenbank: function(sequence) {		

		function getCurrentDateString() {
			var date = new Date();
			date = date.toString().split(' ');
			var day = date[2];
			var month = date[1].toUpperCase();
			var year = date[3];
			return day+'-'+month+'-'+year;
		}

		function createGenbankLocus(sequence) {
			var tmp;

			var naType = 'DNA'; // change if we support other types of sequences
			var date = getCurrentDateString();

			var line = StringUtil.rpad("LOCUS"," ", 12);
			line += StringUtil.rpad(sequence.get('name')," ", 16);
			line += " "; // T.H line 2778 of GenbankFormat.as col 29 space
			line += StringUtil.lpad(String(sequence.length())," ", 11);
			line += " bp "; // col 41
			// if (this.strandType !== "") {
			// 	tmp =  this.strandType + "-";
			// } else {
				tmp = "";
			// }
			line += StringUtil.lpad(tmp, " ", 3);
			line += StringUtil.rpad(naType," ",6);
			line += "  ";

			if (sequence.get('circular') === false) {
				line += "linear  ";
				//line += "        ";
			} else {
				line += "circular";
			}

			line += " "; //col 64
			// if (this.divisionCode !== undefined) {
			// 	line += StringUtil.rpad(this.divisionCode," ", 3);
			// } else {
				StringUtil.rpad(line, " ", 3);
			// }
			line += " "; // col 68
			// DOES NOT PARSE DATE USEFULLY ORIGINALLY!
			line += date;
			//line += "\n";

			return line;
		}


		function featureNoteInDataToGenbankString(noteInData) {
			if(noteInData.quoted) {
				return StringUtil.lpad("/", " ", 22) + noteInData.name + "=\"" + noteInData.value + "\"";
			} else {
				return StringUtil.lpad("/"," ", 22) + noteInData.name + "=" + noteInData.value ;
			}
		}

		function featureToGenbankString(feat) {
			var lines = [];

			var line = "     " + StringUtil.rpad(feat.get('type'), " ", 16);
			var locStr = [];

			// for(var i=0;i<feat.inData.locations.length;i++) {
			// 	var loc = feat.inData.locations[i];
			// 	locStr.push(loc.start + '..' + loc.end);
			// }
			locStr.push(feat.get('start') + '..' + feat.get('end'));
			locStr = locStr.join(',');

			if(feat.get('strand') === -1) {
				locStr = "complement(" + locStr + ")";
			}

			lines.push(line + locStr);

			lines.push(featureNoteInDataToGenbankString({
				name: 'label',
				value: feat.get('name'),
				quoted: true
			}));

			// for(var i=0;i<feat.notes.length;i++) {
			// 	var noteInData = feat.notes[i].inData;
			// 	lines.push(featureNoteInDataToGenbankString(noteInData));
			// }

			return lines.join('\r\n');
		}


		var lines = [];
		lines.push(createGenbankLocus(sequence));
		
		var features = sequence.get('features');
		if(features.length > 0) {
			lines.push("FEATURES             Location/Qualifiers");

			for(var i=0;i<features.length;i++) {
				var feat = features[i];
				lines.push(featureToGenbankString(feat));
			}

		}


		var seq = sequence.get('sequence');
		lines.push("ORIGIN      ");
		for (var i=0, ii = seq.length; i<ii; i=i+60) {
			var line = [];
			var ind = StringUtil.lpad( (""+(i+1))," ", 9);
			line.push(ind);

			for (var j=i; j < i+60; j=j+10) {
				line.push(seq.slice(j,j+10).join(''));
			}
			lines.push(line.join(' '));
		}

		lines.push('//');

		return lines.join('\r\n');
	
	},




};














































})();