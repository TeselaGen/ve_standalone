/**
 Copyright 2011 Abdulla Abdurakhmanov
 Original sources are available at https://code.google.com/p/x2js/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */

var XmlToJson = {
	VERSION: "1.0.6",

	DOMNodeTypes: {
		ELEMENT_NODE       : 1,
		TEXT_NODE          : 3,
		CDATA_SECTION_NODE : 4,
		DOCUMENT_NODE      : 9
	},
	
	getNodeLocalName: function( node ) {
		var nodeLocalName = node.localName;
		if(nodeLocalName == null) // Yeah, this is IE!!
			nodeLocalName = node.baseName;
		if(nodeLocalName == null || nodeLocalName=="") // =="" is IE too
			nodeLocalName = node.nodeName;
		return nodeLocalName;
	},
	
	getNodePrefix: function(node) {
		return node.prefix;
	},

	parseDOMChildren: function( node ) {
		if(node.nodeType == this.DOMNodeTypes.DOCUMENT_NODE) {
			var result = new Object;
			var child = node.firstChild; 
			var childName = this.getNodeLocalName(child);
			result[childName] = this.parseDOMChildren(child);
			return result;
		}
		else
		if(node.nodeType == this.DOMNodeTypes.ELEMENT_NODE) {
			var result = new Object;
			result.__cnt=0;
			
			var nodeChildren = node.childNodes;
			
			// Children nodes
			for(var cidx=0; cidx <nodeChildren.length; cidx++) {
				var child = nodeChildren[cidx]; // nodeChildren[cidx];
				var childName = this.getNodeLocalName(child);
				
				result.__cnt++;
				if(result[childName] == null) {
					result[childName] = this.parseDOMChildren(child);
					result[childName+"_asArray"] = new Array(1);
					result[childName+"_asArray"][0] = result[childName];
				}
				else {
					if(result[childName] != null) {
						if( !(result[childName] instanceof Array)) {
							var tmpObj = result[childName];
							result[childName] = new Array();
							result[childName][0] = tmpObj;
							
							result[childName+"_asArray"] = result[childName];
						}
					}
					var aridx = 0;
					while(result[childName][aridx]!=null) aridx++;
					(result[childName])[aridx] = this.parseDOMChildren(child);
				}           
			}
			
			// Attributes
			for(var aidx=0; aidx <node.attributes.length; aidx++) {
				var attr = node.attributes[aidx]; // [aidx];
				result.__cnt++;
				result["_"+attr.name]=attr.value;
			}
			
			// Node namespace prefix
			var nodePrefix = this.getNodePrefix(node);
			if(nodePrefix!=null && nodePrefix!="") {
				result.__cnt++;
				result.__prefix=nodePrefix;
			}
			
			if( result.__cnt == 1 && result["#text"]!=null  ) {
				result = result["#text"];
			} 
			
			if(result["#text"]!=null) {
				result.__text = result["#text"];
				delete result["#text"];
				delete result["#text_asArray"];
			}
			if(result["#cdata-section"]!=null) {
				result.__cdata = result["#cdata-section"];
				delete result["#cdata-section"];
				delete result["#cdata-section_asArray"];
			}
			
			if(result.__text!=null || result.__cdata!=null) {
				result.toString = function() {
					return (this.__text!=null? this.__text:'')+( this.__cdata!=null ? this.__cdata:'');
				}
			}
			return result;
		}
		else
		if(node.nodeType == this.DOMNodeTypes.TEXT_NODE || node.nodeType == this.DOMNodeTypes.CDATA_SECTION_NODE) {
			return node.nodeValue;
		}   
	},
	
	startTag: function(jsonObj, element, attrList, closed) {
		var resultStr = "<"+ (jsonObj.__prefix!=null? (jsonObj.__prefix+":"):"") + element;
		if(attrList!=null) {
			for(var aidx = 0; aidx < attrList.length; aidx++) {
				var attrName = attrList[aidx];
				var attrVal = jsonObj[attrName];
				resultStr+=" "+attrName.substr(1)+"='"+attrVal+"'";
			}
		}
		if(!closed)
			resultStr+=">";
		else
			resultStr+="/>";
		return resultStr;
	},
	
	endTag: function(jsonObj,elementName) {
		return "</"+ (jsonObj.__prefix!=null? (jsonObj.__prefix+":"):"")+elementName+">";
	},
	
	endsWith: function(str, suffix) {
		return str.indexOf(suffix, str.length - suffix.length) !== -1;
	},
	
	parseJSONTextObject: function( jsonTxtObj ) {
		var result ="";
		if(jsonTxtObj.__text!=null) {
			result+=jsonTxtObj.__text;
		}
		else {
			result+=jsonTxtObj;
		}
		return result;
	},
	
	parseJSONObject: function( jsonObj ) {
		var result = "";    

		var elementsCnt = 0;
		for( var it in jsonObj  ) {         
			if(this.endsWith(it.toString(),("_asArray")) || it.toString().indexOf("_")==0 || (jsonObj[it] instanceof Function) )
				continue;           
			elementsCnt++;
		}
		
		
		for( var it in jsonObj ) {

			if(this.endsWith(it.toString(),("_asArray")) || it.toString().indexOf("_")==0 || (jsonObj[it] instanceof Function))
				continue;           
			
			var subObj = jsonObj[it];                       
			
			var attrList = [];
			for( var ait in subObj  ) {
				if(ait.toString().indexOf("__")== -1 && ait.toString().indexOf("_")==0) {
					attrList.push(ait);
				}
			}
			
			if(subObj!=null && subObj instanceof Object && elementsCnt>0) {
				
				if(subObj instanceof Array) {
					var arrayOfObjects = true;
					if(subObj.length > 0) {
						arrayOfObjects = subObj[0] instanceof Object;
					}
					else {
						result+=this.startTag(subObj, it, attrList, true);
					}
						
					for(var arIdx = 0; arIdx < subObj.length; arIdx++) {                        
						if(arrayOfObjects)
							result+=this.parseJSONObject(subObj[arIdx]);
						else {
							result+=this.startTag(subObj, it, attrList, false);
							result+=this.parseJSONTextObject(subObj[arIdx]);
							result+=this.endTag(subObj,it);
						}
					}
				}
				else {
					result+=this.startTag(subObj, it, attrList, false);
					result+=this.parseJSONObject(subObj);
					if(subObj.__cdata!=null) {                                      
						result+="<![CDATA["+subObj.__cdata+"]]>";                   
					}               
					if(subObj.__text!=null) {
						result+=subObj.__text;
					}
					result+=this.endTag(subObj,it);
				}
			}
			else {
				result+=this.startTag(subObj, it, attrList, false);
				if(subObj.__cdata!=null) {                                      
					result+="<![CDATA["+subObj.__cdata+"]]>";                   
				}               
				if(subObj.__text!=null || !(subObj instanceof Object)) {
					result+=this.parseJSONTextObject(subObj);
				}
				result+=this.endTag(subObj,it);
			}
		}
		
		return result;
	},

	xml2json: function (xmlDoc) {
		return this.parseDOMChildren ( xmlDoc );
	},

};

