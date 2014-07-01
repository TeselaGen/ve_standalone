(function(){

if(typeof VE.webgl !== 'object') { VE.webgl = {}; }
if(typeof VE.webgl.annotate !== 'object') { VE.webgl.annotate = {}; }





VE.webgl.annotate.PreviewRenderer = {



	// Just a test
	_drawText_TEST: function(gl, canvas, annotateContainer, params) {
		var WebGlUtils = VE.webgl.WebGlUtils;
		var TextRenderer = VE.webgl.TextRenderer;

		var sequenceModel = annotateContainer.model;
		var sequence = sequenceModel.get('sequence');
		var rows = annotateContainer.rows;
		
		// sequence = sequence.join('').toLowerCase().split('');
		sequence = sequence.join('').toUpperCase().split('');


		var fontTexture = params.fontTexture;
		var fontText = params.fontText;
		var xOffset = params.xOffset || 0;
		var yOffset = params.yOffset || 0;


		var params2 = _.clone(params);
		params2.gl = gl;
		params2.text = sequence;
		params2.rows = rows;
		params2.annotateContainer = annotateContainer;

		var vbo = this.sequenceToVbo(params2);
		var textBuffer = TextRenderer.upperCaseCharacterArrayToBuffer(gl, sequence, 6);
		var textTextureCoordBuffer = TextRenderer.createTexCoordBuffer(gl, sequence.length);



		// var fontText = 'agctmrwsykvhdbn';
		// fontText = TextRenderer.processLowerCaseFontTextureString(fontText);

		// var params3 = _.clone(params);
		// params3.gl = gl;
		// params3.text = fontText;
		// var fontTexture = TextRenderer.createFontTexture(params3);



		var textProgram = WebGlUtils.initializeProgram(gl, 'Text_Test.vert', 'Text_Test.frag');


		// console.time('b');

		// gl.drawingBufferHeight = canvas.height();
		// gl.drawingBufferWidth = canvas.width();

		var program = textProgram;

		// gl.viewport(0, 0, canvas.width(), canvas.height());

		gl.useProgram(program);

		// console.time('A')
		var vertexPositionAttribute = gl.getAttribLocation(program, "aVertexPosition");
		// console.timeEnd('A')

		// console.time('B')
		gl.enableVertexAttribArray(vertexPositionAttribute);
		// console.timeEnd('B')

		// console.time('C')
		// console.timeEnd('C')

		var charAttribute = gl.getAttribLocation(program, "aChar");
		gl.enableVertexAttribArray(charAttribute);

		var textureCoordAttribute = gl.getAttribLocation(program, "aTextureCoord");
		gl.enableVertexAttribArray(textureCoordAttribute);


		// gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		// console.time('D')
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
		// console.timeEnd('D')

		// console.time('E')
		gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);
		// console.timeEnd('E')

		gl.bindBuffer(gl.ARRAY_BUFFER, textBuffer);
		gl.vertexAttribPointer(charAttribute, 1, gl.FLOAT, false, 0, 0);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, textTextureCoordBuffer);
		gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);

		gl.uniform2f(gl.getUniformLocation(program, "uSize"), canvas.width(), canvas.height());

		// console.time('G')
		gl.uniform1f(gl.getUniformLocation(program, "uNumChars"), fontText.length);
		// console.timeEnd('G')

		gl.uniform2f(gl.getUniformLocation(program, "uOffset"), xOffset, yOffset);
		
		// console.time('H')
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, fontTexture);
		gl.uniform1i(gl.getUniformLocation(program, "uSampler"), 0);
		// console.timeEnd('H')



		var len = sequence.length * (12 + 6) / 3;

		
		// console.time('b');
		gl.drawArrays(gl.TRIANGLES, 0, len);
		// console.timeEnd('b');
		// console.timeEnd('b');



	},


	sequenceToVbo2: function(params) {
		
		var gl = params.gl;
		var text = params.text;
		var annotateContainer = params.annotateContainer;
		var rows = params.rows || annotateContainer.rows;

		var charWidth = params.charWidth || 9;
		var charHeight = params.charHeight || 12;
		var xOffset = params.xOffset || 0;
		var yOffset = params.yOffset || 0;

		var rowHeight = params.rowHeight || 20;
		var bpPerRow = params.bpPerRow || 40;
		var showSpaceEvery10Bp = (params.showSpaceEvery10Bp !== undefined) ? params.showSpaceEvery10Bp : true;

		var vbo = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

		var a = new Float32Array(text.length * 12);
		var _xOffset = 0;
		var _yOffset = -rowHeight + yOffset;
		var rowIndex = -1;
		for(var i=0,ii=text.length;i<ii;i++) {
			
			var col = i % bpPerRow;
			if(!col) {
				_xOffset = xOffset;
				_yOffset += rowHeight;
				rowIndex++;
			} else if(showSpaceEvery10Bp && !(i % 10)) {
				_xOffset += charWidth;
			}





			var row = rows[rowIndex];

			_yOffset = yOffset + (row.y + annotateContainer.getBpTextOffset(row));




			// bottom-left
			a[12*i] = _xOffset + col * charWidth;
			a[12*i+1] = _yOffset;

			// top-left
			a[12*i+2] = _xOffset + col * charWidth;
			a[12*i+3] = _yOffset + charHeight;

			// top-right
			a[12*i+4] = _xOffset + (col+1) * charWidth;
			a[12*i+5] = _yOffset + charHeight;


			// top-right
			a[12*i+6] = _xOffset + (col+1) * charWidth;
			a[12*i+7] = _yOffset + charHeight;

			// bottom-right
			a[12*i+8] = _xOffset + (col+1) * charWidth;
			a[12*i+9] = _yOffset;

			// bottom-left
			a[12*i+10] = _xOffset + col * charWidth;
			a[12*i+11] = _yOffset;

		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return vbo;
	},

	sequenceToVbo: function(params) {
		
		var gl = params.gl;
		var text = params.text;

		var charWidth = params.charWidth || 9;
		var charHeight = params.charHeight || 12;
		var xOffset = params.xOffset || 0;
		var yOffset = params.yOffset || 0;

		var rowHeight = params.rowHeight || 20;
		var bpPerRow = params.bpPerRow || 40;
		var showSpaceEvery10Bp = (params.showSpaceEvery10Bp !== undefined) ? params.showSpaceEvery10Bp : true;

		var vbo = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

		var a = new Float32Array(text.length * 12);
		var _xOffset = 0;
		var _yOffset = -rowHeight + yOffset;
		for(var i=0,ii=text.length;i<ii;i++) {
			
			var col = i % bpPerRow;
			if(!col) {
				_xOffset = xOffset;
				_yOffset += rowHeight;
			} else if(showSpaceEvery10Bp && !(i % 10)) {
				_xOffset += charWidth;
			}

			// bottom-left
			a[12*i] = _xOffset + col * charWidth;
			a[12*i+1] = _yOffset;

			// top-left
			a[12*i+2] = _xOffset + col * charWidth;
			a[12*i+3] = _yOffset + charHeight;

			// top-right
			a[12*i+4] = _xOffset + (col+1) * charWidth;
			a[12*i+5] = _yOffset + charHeight;


			// top-right
			a[12*i+6] = _xOffset + (col+1) * charWidth;
			a[12*i+7] = _yOffset + charHeight;

			// bottom-right
			a[12*i+8] = _xOffset + (col+1) * charWidth;
			a[12*i+9] = _yOffset;

			// bottom-left
			a[12*i+10] = _xOffset + col * charWidth;
			a[12*i+11] = _yOffset;

		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return vbo;
	},







};




var FeatureRenderer = VE.webgl.annotate.FeatureRenderer = {

	// Just a test
	_drawFeatures_TEST: function(gl, canvas, annotateContainer, params) {



	},


	createFeatureVbo: function(params) {
		var gl = params.gl;
		var text = params.text;
		var annotateContainer = params.annotateContainer;
		var rows = params.rows || annotateContainer.rows;











	},



};




















































})();