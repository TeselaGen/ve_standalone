

if(typeof VE != 'object') {
	VE = {};
}

if(!Array.isArray(VE.scriptQueue)) {
	VE.scriptQueue = [];
}

VE.allScriptsAddedToQueue = false;


function includeScript(url, charset, noPrefix) {

	var PREFIX = VE.PREFIX || "VectorEditor/src/";
	var script = document.createElement('script');
	script.type = 'text/javascript';
	if (charset) {
		script.charset = charset;
	}
	if(noPrefix !== true) {
		url = PREFIX + url;
	}
	script.src = url;

	script.onload = function() {
		VE.scriptQueue.shift();
		if(VE.scriptQueue.length > 0) {
			document.getElementsByTagName('head')[0].appendChild(VE.scriptQueue[0]);
		} else if(VE.allScriptsAddedToQueue) {
			// console.timeEnd('A');
			if(typeof VE.onload === 'function') {
				VE.onload();
			}
		}
	};

	script.onerror = function() {
		VE.scriptQueue.shift();
		if(VE.scriptQueue.length > 0) {
			document.getElementsByTagName('head')[0].appendChild(VE.scriptQueue[0]);
		} else if(VE.allScriptsAddedToQueue) {
			if(typeof VE.onload === 'function') {
				VE.onload();
			}
		}
	};

	VE.scriptQueue.push(script);

	if(VE.scriptQueue.length === 1) {
		document.getElementsByTagName('head')[0].appendChild(script);
	}

}

// Currently, pretty much the same as 'includeScript' but allows
// us to distinguish external dependencies from source files.
function requireDependency(url, charset) {
	return includeScript(url, charset, true);
}


if(typeof _ === 'undefined')
	requireDependency('http://rawgithub.com/jashkenas/underscore/master/underscore.js');
if(typeof Backbone === 'undefined')
	requireDependency('http://rawgithub.com/jashkenas/backbone/master/backbone.js');






// function includeScript(url, charset, noPrefix) {
// 	var PREFIX = VE.PREFIX || "VectorEditor/src/";
// 	var script = document.createElement('script');
// 	script.type = 'text/javascript';
// 	if (charset) {
// 		console.error('Setting charset not defined yet.');
// 	}
// 	if(noPrefix !== true) {
// 		url = PREFIX + url;
// 	}
// 	var text = '<script type="text/javascript" src="' + url + '"></script>';
// 	VE.scriptQueue.push(text);
// }

// function loadScripts() {
// 	var text = VE.scriptQueue.join('\n');
// 	document.getElementsByTagName('head')[0].innerHTML += text;
// 	if(typeof VE.onload === 'function') {
// 		VE.onload();
// 	}
// }



includeScript('controller/Ve.js');


includeScript('event/Events.js');
// includeScript('event/VisibilityEvent.js');
// includeScript('event/SelectionEvent.js');


includeScript('constants/Constants.js');


includeScript('models/VectorEditor.js');

includeScript('models/Sequence.js');
includeScript('models/Annotation.js');


includeScript('views/VePanel.js');
includeScript('views/MainMenuBar.js');
includeScript('views/VectorPanel.js');
includeScript('views/AnnotatePanel.js');

includeScript('views/common/FeatureInspectionWindow.js');

includeScript('views/annotate/AnnotateContainer.js');
includeScript('views/pie/PieContainer.js');
includeScript('views/rail/RailContainer.js');


includeScript('manager/RestrictionEnzymeManager.js');
includeScript('manager/WorkersManager.js');
includeScript('manager/EditingManager.js');
includeScript('manager/CollaborativeUndoManager.js');


includeScript('renderer/Util.js');

includeScript('renderer/annotate/FeatureRenderer.js');
includeScript('renderer/annotate/CutSiteRenderer.js');
includeScript('renderer/annotate/OrfRenderer.js');
includeScript('renderer/annotate/SelectionLayerRenderer.js');
includeScript('renderer/annotate/AlignmentRenderer.js');
includeScript('renderer/annotate/PreviewRenderer.js');

includeScript('renderer/pie/FeatureRenderer.js');
includeScript('renderer/pie/LabelRenderer.js');
includeScript('renderer/pie/CutSiteRenderer.js');
includeScript('renderer/pie/OrfRenderer.js');
includeScript('renderer/pie/SelectionLayerRenderer.js');
includeScript('renderer/pie/AlignmentRenderer.js');

includeScript('renderer/rail/FeatureRenderer.js');
includeScript('renderer/rail/OrfRenderer.js');
includeScript('renderer/rail/CutSiteRenderer.js');
includeScript('renderer/rail/LabelRenderer.js');

includeScript('renderer/pie3d/Pie3dRenderer.js');

includeScript('renderer/webgl/WebGlUtils.js');
includeScript('renderer/webgl/TextRenderer.js');

includeScript('renderer/webgl/annotate/PreviewRenderer.js');


includeScript('ot/util/StructOperation.js');
includeScript('ot/util/RidmOperation.js');
includeScript('ot/util/StringOperation.js');
includeScript('ot/util/IndexShiftOperation.js');

includeScript('ot/SequenceOperation.js');
includeScript('ot/SymbolListOperation.js');
includeScript('ot/features/FeatureOperation.js');
includeScript('ot/features/FeatureModification.js');


includeScript('adaptors/TeselagenAdaptor.js');



VE.allScriptsAddedToQueue = true;


window.onload = function(e){ 
	
	function getScrollbarWidth() {
		var outer = document.createElement("div");
		outer.style.visibility = "hidden";
		outer.style.width = "100px";
		outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

		document.body.appendChild(outer);

		var widthNoScroll = outer.offsetWidth;
		// force scrollbars
		outer.style.overflow = "scroll";

		// add innerdiv
		var inner = document.createElement("div");
		inner.style.width = "100%";
		outer.appendChild(inner);        

		var widthWithScroll = inner.offsetWidth;

		// remove divs
		outer.parentNode.removeChild(outer);

		return widthNoScroll - widthWithScroll;
	}

	Backbone.UI.SCROLL_BAR_WIDTH = VE.SCROLL_BAR_WIDTH = getScrollbarWidth();
}


// loadScripts();











