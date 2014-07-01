(function(){

if(typeof VE.webgl !== 'object') { VE.webgl = {}; }



var PREFIX = VE.PREFIX || "VectorEditor/src/";



VE.webgl.WebGlUtils = {

	// PATH_TO_SHADERS: '../src/renderer/webgl/shaders/',
	PATH_TO_SHADERS: PREFIX + 'renderer/webgl/shaders/',
	
	shaderCache: {},


	initializeWebGL: function(canvas) {
		var me = this;
		
		canvas = $(canvas);

		var gl;
		try {
			gl = canvas[0].getContext("webgl") || canvas[0].getContext("experimental-webgl");
		} catch(e) { }

		if (!gl) {
			console.error("Unable to initialize WebGL.");
			return false;
		}

		return gl;
	},


	// Should be refactored so as not to use synchronous ajax.
	getShaderContent: function(shaderName) {
		var url = this.PATH_TO_SHADERS + shaderName;
		var shaderContent;

		if(shaderContent = this.shaderCache[url]) { return shaderContent; }

		var x = new XMLHttpRequest();
		x.open('GET', url, false);
		x.send(null);

		return shaderContent = this.shaderCache[url] = x.responseText;
	},


	initializeProgram: function(gl, vertexShaderName, fragmentShaderName) {
		var ok = true;
		var program = gl.createProgram();
		
		var vs = gl.createShader(gl.VERTEX_SHADER);
		var vsSource = this.getShaderContent(vertexShaderName);
		
		 // compile
		gl.shaderSource(vs, vsSource);
		gl.compileShader(vs);
		
		// check
		if(!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
			console.error("Vertex shader compilation failed:\n" + gl.getShaderInfoLog(vs));
			ok = false;
		}
		
		
		var fs = gl.createShader(gl.FRAGMENT_SHADER);
		var fsSource =  this.getShaderContent(fragmentShaderName);
		
		 // compile
		gl.shaderSource(fs, fsSource);
		gl.compileShader(fs);
		
		// check
		if(!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
			console.error("Fragment shader compilation failed:\n" + gl.getShaderInfoLog(fs));
			ok = false;
		}

		if(!ok) { return false; }

		gl.attachShader(program, vs);
		gl.attachShader(program, fs);
		gl.linkProgram(program);
		
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.error("Shader init failed");
			gl.deleteShader(program);
			return false;
		}

		return program;
	},
	






};





















































})();