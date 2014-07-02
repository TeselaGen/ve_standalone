
function fn() {


	

	sequence = VE.Sequence.fromJSON(pJC9A_pLA);
	// sequence = VE.Sequence.fromJSON(ALIGNED_PYTHON_DNA);

	// sequence.calculateOrfs();

	// var querySeq = 'gcgcgtgcgcggaaggagccaaggtgaagttgtagcagtgtgtcagaagaggtgcgtggcaccatgctgtcccccgaggcggagcgggtgctgcggtacctggtcgaagtagaggagttg';
	// var subjectSeq = 'gacttgtggaacctacttcctgaaaataaccttctgtcctccgagctctccgcacccgtggatgacctgctcccgtacacagatgttgccacctggctggatgaatgtccgaatgaagcg';
	// sequence.set('sequence', querySeq.split(''));
	// sequence.set('alignments', []);
	// sequence.calculateAlignment(subjectSeq);

	// sequence.set('alignments', [Bio.SequenceAligner.alignedSequenceStringsToAlignmentArray({
	// 	alignedQuery: PYTHON_ALIGNED_QUERY,
	// 	alignedSubject: PYTHON_ALIGNED_SUBJECT,
	// })]);


	vectorEditor = new VE.VectorEditor({
		renderTo: d3.select('body'),
		sequence: sequence,
		options: {

			// showAminoAcidsRevCom: true,
			// aminoAcidRevComFrames: [0, 1],

		},
	});

	// sequence.needsRecalc__orfs = true;
	// sequence.needsRecalc__cutSites = true;
	
	// _ve = new VE.Ve();


	// var showOrfs = false;
	// var showCutSites = false;
	// var viewMode = 'pie';

	// // 
	// // _ve.options.showAlignments = true; //
	// _ve.options.viewMode = viewMode; //
	// _ve.options.showOrfs = showOrfs; //
	// _ve.options.showCutSites = showCutSites; //
	// // _ve.options.showAminoAcids = true; //
	// _ve.options.aminoAcidFrames = []; //
	// // _ve.options.showAminoAcidsRevCom = true; //
	// _ve.options.aminoAcidRevComFrames = []; //
	// // 

	// // showAminoAcids
	// // aminoAcidFrames
	// // showAminoAcidsRevCom
	// // aminoAcidRevComFrames



	// testVePanel = new VE.VePanel({
	// 	parentEl: d3.select('body'),
	// 	ve: _ve,
	// }).render();


	// annotateContainer = new VE.AnnotateContainer({
	// 	// el: testVePanel.annotatePanel.bodyEl.node(),
	// 	// el: testVePanel.annotatePanel.phonyScrollContainer.el,
	// 	phonyScrollContainer: testVePanel.annotatePanel.phonyScrollContainer,
	// 	model: sequence,
	// 	// vectorEditor: this,
	// 	ve: _ve,
	// 	// showAlignments: true,
	// 	showOrfs: showOrfs,
	// 	showCutSites: showCutSites,
	// 	// showAminoAcids: true,
	// 	aminoAcidFrames: [],
	// 	// showAminoAcidsRevCom: true,
	// 	aminoAcidRevComFrames: [],
	// });

	// annotateContainer.render();




	// pieContainer = new VE.PieContainer({
	// 	el: testVePanel.vectorPanel.bodyEl.node(),
	// 	model: sequence,
	// 	// vectorEditor: this,
	// 	ve: _ve,
	// 	// showAlignments: true,
	// 	showOrfs: showOrfs,
	// 	showCutSites: showCutSites,
	// 	// showAminoAcids: true,
	// 	aminoAcidFrames: [],
	// 	// showAminoAcidsRevCom: true,
	// 	aminoAcidRevComFrames: [],
	// });

	// pieContainer.render();




	// railContainer = new VE.RailContainer({
	// 	el: testVePanel.vectorPanel.bodyEl.node(),
	// 	model: sequence,
	// 	// vectorEditor: this,
	// 	ve: _ve,
	// 	// showAlignments: true,
	// 	showOrfs: showOrfs,
	// 	showCutSites: showCutSites,
	// 	// showAminoAcids: true,
	// 	aminoAcidFrames: [],
	// 	// showAminoAcidsRevCom: true,
	// 	aminoAcidRevComFrames: [],
	// });

	// // pieContainer.pieSVG.attr('display', 'none');

	// railContainer.render();





	// var enzymeGroupName = 'common';
	// // var enzymeGroupName = 'rebase';
	// VE.RestrictionEnzymeManager.loadEnzymes(enzymeGroupName, function() {
		
	// 	VE.RestrictionEnzymeManager.currentUserEnzymeGroupName = enzymeGroupName;
	// });



	function getSequenceFromFile(sequenceFileName, cb) {
		$.ajax({
			type: "GET",
			url: '/GET_SEQUENCE_FILE/' + sequenceFileName,
			success: function(data) {
				// console.log(data);
				window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
				var errorHandler = null;

				requestFileSystem(TEMPORARY, 1024*1024, function(fs) {
					var fileName = 'dsjfjlsdaflasdlk.gb';
					fs.root.getFile(fileName, {create: true}, function(fileEntry) {
						
						// Create a FileWriter object for our FileEntry (log.txt).
						fileEntry.createWriter(function(fileWriter) {

							fileWriter.onwriteend = function(e) {
								// console.log('Write completed.');

								fileEntry.file(function(file) {
									// console.log('data');
									vectorEditor.ve.trigger(VE.IoEvent.PARSE_SEQUENCE_FROM_FILE, file, function(sequence) {
										return cb(sequence);
									});
								});
							};

							fileWriter.onerror = function(e) {
								console.log('Write failed: ' + e.toString());
							};

							// Create a new Blob and write it to log.txt.
							// var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});
							var blob = new Blob([data]);
							fileWriter.write(blob);

						}, errorHandler);

					}, errorHandler);

				}, errorHandler);

			}
		});
	}

	function openSequenceFromFile(sequenceFileName, cb) {
		getSequenceFromFile(sequenceFileName, function(openSequence) {
			window.sequence = openSequence;
			vectorEditor.ve.trigger(VE.Event.NEW_SEQUENCE_OPENED, openSequence);
			if(typeof cb === 'function') {
				cb(openSequence);
			}
		});
	}

	// var sequenceFileName = 'NT_187300.gb';
	// var sequenceFileName = 'hs_ref_GRCh38_chr21_39.gb';

	// var sequenceFileName = 'hs_ref_GRCh38_chr21/hs_ref_GRCh38_chr21_34.gb';

	// openSequenceFromFile('hs_ref_GRCh38_chr21/hs_ref_GRCh38_chr21_39.gb')


	// getSequenceFromFile(sequenceFileName, function(openSequence) {
	// 	// console.log(openSequence)
	// 	window.sequence = openSequence;
	// 	// sequence.calculateOrfs(300);
	// 	vectorEditor.ve.trigger(VE.Event.NEW_SEQUENCE_OPENED, openSequence);
	// });









	// // preview_canvas = $(document.createElement('canvas'))
	// // 	.addClass('annotate-preview')
	// // 	.appendTo($('.phony-scroll-preview'));
	// // 	// .before($('.phony-scroll-preview'));

	// // // preview_canvas.attr({
	// // // 	width: $('.phony-scroll-preview').width(),
	// // // 	height: $('.phony-scroll-preview').height(),
	// // // });

	// // // preview_canvas.css({
	// // // 	overflow: 'scroll',
	// // // });

	// // preview_context = preview_canvas[0].getContext("2d");




	// VE.pie3d.Pie3dRenderer.__test = function() {
	// 	var Pie3dRenderer = VE.pie3d.Pie3dRenderer;

	// 	pie3dRenderer = new Pie3dRenderer(pieContainer);

	// 	// pie3dRenderer.phi = 1.1;
	// 	pie3dRenderer.phi = -0.25;
	// 	pie3dRenderer.g.attr('transform', 'translate(250, 250)' + 'scale(1.5, 1.5)');
		

	// 	pie3dRenderer.clear();
	// 	pie3dRenderer.render();




	// }
	// // VE.pie3d.Pie3dRenderer.__test();

















	// __webGlTest = function() {
	// 	var WebGlUtils = VE.webgl.WebGlUtils;
	// 	var TextRenderer = VE.webgl.TextRenderer;
	// 	var PreviewRenderer = VE.webgl.annotate.PreviewRenderer;

	// 	var scrollPreview = annotateContainer.phonyScrollContainer.scrollPreview;

	// 	webGlCanvas = $(document.createElement('canvas'))
	// 		.addClass('phony-scroll-preview')
	// 		.attr({
	// 			id: '_____',
	// 			width: 850,
	// 			height: 550,
	// 		})
	// 		.appendTo('body');


	// 	$('body *:not(#_____)').css('display', 'none');

	// 	// var gl = WebGlUtils.initializeWebGL(webGlCanvas);
	// 	// __gl = gl;


	// 	// // var charWidth = 14;
	// 	// // var charHeight = 20;
	// 	// var _f = 1/2;
	// 	// var fontSize = 12 * _f;
	// 	// var charWidth = 14 * _f;
	// 	// var charHeight = 20 * _f;

	// 	// var bpPerRow = 40;
	// 	// var rowHeight = 15 * _f;


	// 	// var fontText = 'agctmrwsykvhdbn';
	// 	// fontText = TextRenderer.processLowerCaseFontTextureString(fontText);
	// 	// // console.log(fontText);

	// 	// testFontTexture = TextRenderer.createFontTexture({
	// 	// 	gl: gl,
	// 	// 	text: fontText,
	// 	// 	charWidth: charWidth,
	// 	// 	charHeight: charHeight,
	// 	// 	fontSize: fontSize,
	// 	// });


	// 	// var testStr = 'gtagcttadssgyykkhhgtacsdwwwwnngcttagc';
	// 	// // var testStr = 'gac';

	// 	// testTextBuffer = TextRenderer.stringToBuffer(gl, testStr, 6);

	// 	// testVbo = TextRenderer.stringToVbo({
	// 	// 	gl: gl,
	// 	// 	text: testStr,
	// 	// 	charWidth: charWidth,
	// 	// 	charHeight: charHeight,
	// 	// 	// charHeight: fontSize,
	// 	// });

	// 	// textTextureCoordBuffer = TextRenderer.createTexCoordBuffer(gl, testStr.length);


	// 	// testTextProgram = WebGlUtils.initializeProgram(gl, 'Text_Test.vert', 'Text_Test.frag');

	// 	// annotateContainer.model.set('sequence', annotateContainer.model.get('sequence').slice(5500));


	// 	var _f = 1;
	// 	var fontSize = 12 * _f;
	// 	// var charWidth = 14 * _f;
	// 	// var charWidth = 9 * _f;
	// 	var charWidth = 12 * _f;
	// 	var charHeight = 12 * _f;

	// 	var bpPerRow = 40;
	// 	var rowHeight = 15 * _f;
	// 	var xOffset = 15;
	// 	var yOffset = 15;

	// 	var params = {
	// 		charWidth: charWidth,
	// 		charHeight: charHeight,
	// 		fontSize: fontSize,
	// 		bpPerRow: bpPerRow,
	// 		rowHeight: rowHeight,
	// 		xOffset: xOffset,
	// 		yOffset: yOffset,
	// 	};

	// 	webGlCanvas.attr({
	// 		width: ((bpPerRow + bpPerRow / 7) * charWidth) + 2 * xOffset,
	// 		height: ((annotateContainer.model.length() / bpPerRow + 3) * rowHeight) + 2 * yOffset,
	// 	});
		
	// 	var gl = WebGlUtils.initializeWebGL(webGlCanvas);
	// 	__gl = gl;


	// 	// var fontText = 'agctmrwsykvhdbn';
	// 	// fontText = TextRenderer.processLowerCaseFontTextureString(fontText);
	// 	var fontText = 'agctmrwsykvhdbn'.toUpperCase();
	// 	fontText = TextRenderer.processUpperCaseFontTextureString(fontText);

	// 	var params3 = _.clone(params);
	// 	params3.gl = gl;
	// 	params3.text = fontText;
	// 	var fontTexture = TextRenderer.createFontTexture(params3);
	// 	params.fontTexture = fontTexture;
	// 	params.fontText = fontText;
		

	// 	// console.profile('a')
	// 	// console.time('a')
	// 	PreviewRenderer._drawText_TEST(gl, webGlCanvas, annotateContainer, params);
	// 	// console.timeEnd('a')
	// 	// console.profileEnd('a')




	// 	testTextRender = function(offsetX, offsetY) {

	// 		var program = testTextProgram;

	// 		// gl.viewport(0, 0, this.canvas[0][0].width, this.canvas[0][0].height);

	// 		gl.useProgram(program);


	// 		var vertexPositionAttribute = gl.getAttribLocation(program, "aVertexPosition");
	// 		gl.enableVertexAttribArray(vertexPositionAttribute);

	// 		var charAttribute = gl.getAttribLocation(program, "aChar");
	// 		gl.enableVertexAttribArray(charAttribute);

	// 		var textureCoordAttribute = gl.getAttribLocation(program, "aTextureCoord");
	// 		gl.enableVertexAttribArray(textureCoordAttribute);


	// 		// gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


	// 		gl.bindBuffer(gl.ARRAY_BUFFER, testVbo);
	// 		gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);

	// 		gl.bindBuffer(gl.ARRAY_BUFFER, testTextBuffer);
	// 		gl.vertexAttribPointer(charAttribute, 1, gl.FLOAT, false, 0, 0);
			
	// 		gl.bindBuffer(gl.ARRAY_BUFFER, textTextureCoordBuffer);
	// 		gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);


	// 		gl.uniform2f(gl.getUniformLocation(program, "uSize"), webGlCanvas.width(), webGlCanvas.height());
	// 		gl.uniform1f(gl.getUniformLocation(program, "uNumChars"), fontText.length);
	// 		gl.uniform2f(gl.getUniformLocation(program, "uOffset"), offsetX, offsetY);
			
	// 		gl.activeTexture(gl.TEXTURE0);
	// 		gl.bindTexture(gl.TEXTURE_2D, testFontTexture);
	// 		gl.uniform1i(gl.getUniformLocation(program, "uSampler"), 0);



	// 		var len = testStr.length * (12 + 6);

	// 		gl.drawArrays(gl.TRIANGLES, 0, len/3);
	// 	}


		



		



	// 	// var program = testTextProgram;
			
	// 	// // gl.viewport(0, 0, this.canvas[0][0].width, this.canvas[0][0].height);

	// 	// gl.useProgram(program);


	// 	// var vertexPositionAttribute = gl.getAttribLocation(program, "aVertexPosition");
	// 	// gl.enableVertexAttribArray(vertexPositionAttribute);

	// 	// var charAttribute = gl.getAttribLocation(program, "aChar");
	// 	// gl.enableVertexAttribArray(charAttribute);

	// 	// var textureCoordAttribute = gl.getAttribLocation(program, "aTextureCoord");
	// 	// gl.enableVertexAttribArray(textureCoordAttribute);


	// 	// // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


	// 	// gl.bindBuffer(gl.ARRAY_BUFFER, testVbo);
	// 	// gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);

	// 	// gl.bindBuffer(gl.ARRAY_BUFFER, testTextBuffer);
	// 	// gl.vertexAttribPointer(charAttribute, 1, gl.FLOAT, false, 0, 0);
		
	// 	// gl.bindBuffer(gl.ARRAY_BUFFER, textTextureCoordBuffer);
	// 	// gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);


	// 	// gl.uniform2f(gl.getUniformLocation(program, "uSize"), webGlCanvas.width(), webGlCanvas.height());
	// 	// gl.uniform1f(gl.getUniformLocation(program, "uNumChars"), fontText.length);
	// 	// // gl.uniform2f(gl.getUniformLocation(program, "uOffset"), offsetX, offsetY);
		
	// 	// gl.activeTexture(gl.TEXTURE0);
	// 	// gl.bindTexture(gl.TEXTURE_2D, testFontTexture);
	// 	// gl.uniform1i(gl.getUniformLocation(program, "uSampler"), 0);



	// 	// var len = testStr.length * (12 + 6);

	// 	// // gl.drawArrays(gl.TRIANGLES, 0, len/3);


	// 	// testTextRender2 = function(offsetX, offsetY) {
	// 	// 	gl.uniform2f(gl.getUniformLocation(program, "uOffset"), offsetX, offsetY);
	// 	// 	gl.drawArrays(gl.TRIANGLES, 0, len/3);
	// 	// }

	// 	// // gl.uniform2f(gl.getUniformLocation(program, "uOffset"), 0, 0);

	// 	// // console.time('a')
	// 	// var n = 500; // 500000
	// 	// for(var i=0;i<n;i++) {
	// 	// 	var y = i * charHeight;
	// 	// 	testTextRender2(0, y);
	// 	// 	// gl.drawArrays(gl.TRIANGLES, 0, len/3);
	// 	// }
	// 	// // console.timeEnd('a')


	// }

	// // __webGlTest();











	// // q = new VE.FeatureInspectionWindow();


	// // var body = q.$('.ui-window-body');

	// // cb = new Backbone.UI.Combobox({
	// // 	renderTo: body,
	// // 	// label: 'Positive',
	// // 	defaultValue: 'asdfasdf',
	// // 	items: [
	// // 		{
	// // 			label: 'asdfasdf',
	// // 		},
	// // 		{
	// // 			label: 'sadgasg',
	// // 		},
	// // 		{
	// // 			label: '35cwtdt',
	// // 		},
	// // 		{
	// // 			label: 'kojkdsjgk',
	// // 		},
	// // 		{
	// // 			label: '*&**#553o',
	// // 		},
	// // 		{
	// // 			label: 'asdfasdf',
	// // 		},
	// // 		{
	// // 			label: 'sadgasg',
	// // 		},
	// // 		{
	// // 			label: '35cwtdt',
	// // 		},
	// // 		{
	// // 			label: 'kojkdsjgk',
	// // 		},
	// // 		{
	// // 			label: '*&**#553o',
	// // 		},
	// // 		{
	// // 			label: 'asdfasdf',
	// // 		},
	// // 		{
	// // 			label: 'sadgasg',
	// // 		},
	// // 		{
	// // 			label: '35cwtdt',
	// // 		},
	// // 		{
	// // 			label: 'kojkdsjgk',
	// // 		},
	// // 		{
	// // 			label: '*&**#553o',
	// // 		},
	// // 	],

	// // });

	// // cb.$el.css({
	// // 	'min-width': '50%',
	// // });

	// // cb.itemsList.show();


	// // rb = new Backbone.UI.RadioButton({
	// // 	renderTo: body,
	// // 	label: 'Positive',
	// // });

	// // rb = new Backbone.UI.RadioGroup({
	// // 	renderTo: body,
	// // 	items: [
	// // 		{
	// // 			label: 'Positive',
	// // 		},
	// // 		{
	// // 			label: 'Negative',
	// // 		},
	// // 	],
	// // });



	// // // var sequenceFileName = 'pJH2-79.gb';
	// // var sequenceFileName = 'NT_187300.gb';

	// // getSequenceFromFile(sequenceFileName, function(openSequence) {
	// // 	window.sequence = openSequence;
	// // 	// sequence.calculateOrfs(300);
	// // 	_ve.trigger(VE.Event.NEW_SEQUENCE_OPENED, openSequence);
	// // });



	// // ALIGNED_PYTHON_DNA

	// // PYTHON_ALIGNED_QUERY
	// // PYTHON_ALIGNED_SUBJECT

	// // var openSequenceFileName = '176946_ref_Python_molurus_bivittatus-5.0.2_chrMT.fa';
	// // var sequenceToAlignWithFileName = 'ppn_ref_panpan1_chrMT.fa';

	// // getSequenceFromFile(openSequenceFileName, function(openSequence) {
		
	// // 	var FACTOR = 1;
	// // 	openSequence.set('sequence', openSequence.get('sequence').slice(0, openSequence.get('sequence').length/FACTOR));
	// // 	_ve.trigger(VE.Event.NEW_SEQUENCE_OPENED, openSequence);

	// // 	getSequenceFromFile(sequenceToAlignWithFileName, function(otherSequence) {
			
	// // 		console.log('started')
	// // 		console.time('A')
	// // 		openSequence.calculateAlignment(otherSequence);
	// // 		console.timeEnd('A')
			



	// // 	});

	// // });


	// // var sequenceFileName = 'NT_187300.gb';
	// // $.ajax({
	// // 	type: "GET",
	// // 	url: '/GET_SEQUENCE_FILE/' + sequenceFileName,
	// // 	success: function(data) {
	// // 		// console.log(data);
	// // 		window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
	// // 		var errorHandler = null;

	// // 		requestFileSystem(TEMPORARY, 1024*1024, function(fs) {
				
	// // 			fs.root.getFile(sequenceFileName, {create: true}, function(fileEntry) {

	// // 				// Create a FileWriter object for our FileEntry (log.txt).
	// // 				fileEntry.createWriter(function(fileWriter) {

	// // 					fileWriter.onwriteend = function(e) {
	// // 						// console.log('Write completed.');

	// // 						fileEntry.file(function(file) {
	// // 							_ve.trigger(VE.IoEvent.PARSE_SEQUENCE_FROM_FILE, file, function(sequence) {
	// // 								window.sequence = sequence;
	// // 								sequence.calculateOrfs(300);
	// // 								_ve.trigger(VE.Event.NEW_SEQUENCE_OPENED, sequence);
	// // 								fn();
	// // 							});
	// // 						});
	// // 					};

	// // 					fileWriter.onerror = function(e) {
	// // 						console.log('Write failed: ' + e.toString());
	// // 					};

	// // 					// Create a new Blob and write it to log.txt.
	// // 					// var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});
	// // 					var blob = new Blob([data]);
	// // 					fileWriter.write(blob);

	// // 				}, errorHandler);

	// // 			}, errorHandler);

	// // 		}, errorHandler);

	// // 	}
	// // });









	// // function fn() {
	// // 	var enzymeGroupName = 'common';
	// // 	// var enzymeGroupName = 'rebase';
	// // 	VE.RestrictionEnzymeManager.loadEnzymes(enzymeGroupName, function() {
			
	// // 		VE.RestrictionEnzymeManager.currentUserEnzymeGroupName = enzymeGroupName;

	// // 		// console.time('A');
	// // 		sequence.recalculateCutSites();
	// // 		// console.timeEnd('A');

	// // 		// // var commonEnzymes = VE.RestrictionEnzymeManager.getEnzymeGroup(enzymeGroupName);
	// // 		// var commonEnzymes = VE.RestrictionEnzymeManager.getCurrentUserEnzymeGroup();

	// // 		// console.time('A');
	// // 		// var cuts = Bio.CutSiteFinder.cutSequence(commonEnzymes, sequence.get('sequence'));
	// // 		// console.timeEnd('A');

	// // 		// // console.log(cuts);

	// // 		// // var oldCuts = sequence.get('cutSites');
	// // 		// // console.log(oldCuts);



	// // 	});
	// // }
















	// window.___ = function() {
	// 	var features = sequence.get('features');
	// 	var m = {};
	// 	for(var i=0;i<features.length;i++) {
	// 		var feat = features[i];
	// 		var type = feat.get('type');
	// 		var start = feat.get('start');
	// 		var end = feat.get('end');

	// 		// m[type] = true;
	// 		// 51557
	// 		// 118354
	// 		// if(start === 51557 && end === 118354) {
	// 		// 	console.log(feat);
	// 		// }

	// 		if(Math.abs(start-51557) < 10 && Math.abs(end -118354) < 10) {
	// 			console.log(feat);
	// 		}

	// 		if(type === 'CDS') {
	// 			// console.log(feat);
	// 			// if(start === 51557) {
	// 			// 	console.log(feat);
	// 			// }
	// 			// if(end === 118354) {
	// 			// 	console.log(feat);
	// 			// }
	// 		}
	// 	}
	// 	// console.log(m);
	// }




	// // A: 3694.634ms SequenceAligner.js:142
	// // query: 704 (bp) SequenceAligner.js:143
	// // subject: 16563 (bp)

	// // Inlined `ScoreSet.prototype.getScore`
	// // A: 3114.478ms SequenceAligner.js:142
	// // query: 704 (bp) SequenceAligner.js:143
	// // subject: 16563 (bp) 

	// // Replace `this.scoreSet` in `AlignPairLinear.prototype.pathB` with `scoreSet`
	// // A: 2940.607ms SequenceAligner.js:145
	// // query: 704 (bp) SequenceAligner.js:146
	// // subject: 16563 (bp)





	// // mainMenuBar = new Backbone.UI.menu.MenuBar({
	// // 	parentEl: d3.select('body'),
	// // 	items: [
	// // 		{
	// // 			label: 'File',
	// // 			items: [
	// // 				{
	// // 					label: 'New Sequence',
	// // 				},
	// // 				{
	// // 					label: 'Open a Sequence File',
	// // 					type: 'filefield',
	// // 				},
	// // 			],
	// // 		},
	// // 		{
	// // 			label: 'Edit',
	// // 		},
	// // 		{
	// // 			label: 'View',
	// // 		},
	// // 		{
	// // 			label: 'Tools',
	// // 		},
	// // 	],
	// // }).render();
	








































}


if(VE.allScriptsAddedToQueue && VE.scriptQueue.length === 0) {
	
	fn();

} else {
	VE.onload = fn;
}




