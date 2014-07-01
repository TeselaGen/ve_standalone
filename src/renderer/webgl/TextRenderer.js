(function(){

if(typeof VE.webgl !== 'object') { VE.webgl = {}; }





VE.webgl.TextRenderer = {



	createFontTexture: function(params) {
		
		var gl = params.gl;
		var text = params.text;

		var fontSize = params.fontSize || 12;
		var fontFamily = params.fontFamily || "Ubuntu Mono";
		var fontColor = params.fontColor || '#000000';
		var charWidth = params.charWidth || 9;
		var charHeight = params.charHeight || fontSize;


		var texCanvas = params.canvas;
		if(!texCanvas) {
			texCanvas = document.createElement('canvas');
			texCanvas.class     = "hidden-canvas font-canvas";
			texCanvas.width  = text.length * charWidth;
			texCanvas.height = charHeight;
			texCanvas.style.display   = "none";
			var body = document.getElementsByTagName("body")[0];
			body.appendChild(texCanvas);
		}


		var ctx = texCanvas.getContext('2d');
		ctx.fillStyle = fontColor;
		ctx.font = fontSize + 'px ' + fontFamily;

		var x0 = 0;
		var y = fontSize;
		for(var i=0,ii=text.length;i<ii;i++) {
			var x = x0 + i * charWidth;
			var letter = text[i];
			ctx.fillText(letter, x, y);
		}


		// console.time('A')
		var texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, texture);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texCanvas);

		gl.bindTexture(gl.TEXTURE_2D, null);
		// console.timeEnd('A')

		return texture;
	},

	processLowerCaseFontTextureString: function(text) {
		var a = 'a'.charCodeAt(0);
		var b = [];
		for(var i=0,ii=text.length;i<ii;i++) {
			var c = text.charCodeAt(i) - a;
			b[c] = text[i];
		}
		for(var i=0,ii=b.length;i<ii;i++) {
			if(b[i] === undefined) { b[i] = ' '; }
		}
		var d = b.join('');
		return d;
	},


	processUpperCaseFontTextureString: function(text) {
		var a = 'A'.charCodeAt(0);
		var b = [];
		for(var i=0,ii=text.length;i<ii;i++) {
			var c = text.charCodeAt(i) - a;
			b[c] = text[i];
		}
		for(var i=0,ii=b.length;i<ii;i++) {
			if(b[i] === undefined) { b[i] = ' '; }
		}
		var d = b.join('');
		return d;
	},



	stringToBuffer: function(gl, str, repeats) {
		var buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

		if(!repeats) { repeats = 1; }

		var _a = 'a'.charCodeAt(0);

		// var a = new Uint8Array(repeats * str.length);
		var a = new Float32Array(repeats * str.length);
		for(var i=0,ii=str.length;i<ii;i++) {
			var cc = str.charCodeAt(i) - _a;
			for(var j=0;j<repeats;j++) {
				a[i*repeats+j] = cc;
			}
			// a[i] = str.charCodeAt(i);
		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return buffer;
	},

	upperCaseCharacterArrayToBuffer: function(gl, array, repeats) {
		var buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

		if(!repeats) { repeats = 1; }

		var _a = 'A'.charCodeAt(0);

		var a = new Float32Array(repeats * array.length);
		for(var i=0,ii=array.length;i<ii;i++) {
			var cc = array[i].charCodeAt(0) - _a;
			for(var j=0;j<repeats;j++) {
				a[i*repeats+j] = cc;
			}
		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return buffer;
	},

	createTexCoordBuffer: function(gl, length) {
		var buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

		var a = new Float32Array(12 * length);
		for(var i=0,ii=length;i<ii;i++) {
			// bottom-left
			a[12*i] = 0;
			a[12*i+1] = 0;

			// top-left
			a[12*i+2] = 0;
			a[12*i+3] = 1;

			// top-right
			a[12*i+4] = 1;
			a[12*i+5] = 1;


			// top-right
			a[12*i+6] = 1;
			a[12*i+7] = 1;

			// bottom-right
			a[12*i+8] = 1;
			a[12*i+9] = 0;

			// bottom-left
			a[12*i+10] = 0;
			a[12*i+11] = 0;
		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return buffer;
	},


	stringToVbo: function(params) {
		
		var gl = params.gl;
		var text = params.text;

		var charWidth = params.charWidth || 9;
		var charHeight = params.charHeight || 12;
		var xOffset = params.xOffset || 0;
		var yOffset = params.yOffset || 0;

		var vbo = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

		var a = new Float32Array(text.length * 12);
		for(var i=0,ii=text.length;i<ii;i++) {
			
			// bottom-left
			a[12*i] = xOffset + i * charWidth;
			a[12*i+1] = yOffset;

			// top-left
			a[12*i+2] = xOffset + i * charWidth;
			a[12*i+3] = yOffset + charHeight;

			// top-right
			a[12*i+4] = xOffset + (i+1) * charWidth;
			a[12*i+5] = yOffset + charHeight;


			// top-right
			a[12*i+6] = xOffset + (i+1) * charWidth;
			a[12*i+7] = yOffset + charHeight;

			// bottom-right
			a[12*i+8] = xOffset + (i+1) * charWidth;
			a[12*i+9] = yOffset;

			// bottom-left
			a[12*i+10] = xOffset + i * charWidth;
			a[12*i+11] = yOffset;

		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return vbo;
	},









};





















































})();




