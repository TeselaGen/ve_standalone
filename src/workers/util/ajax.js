var ajax = {};
ajax.x = function() {
	if (typeof XMLHttpRequest !== 'undefined') {
		return new XMLHttpRequest();  
	}
	var versions = [
		"MSXML2.XmlHttp.5.0",   
		"MSXML2.XmlHttp.4.0",  
		"MSXML2.XmlHttp.3.0",   
		"MSXML2.XmlHttp.2.0",  
		"Microsoft.XmlHttp"
	];

	var xhr;
	for(var i = 0; i < versions.length; i++) {  
		try {  
			xhr = new ActiveXObject(versions[i]);  
			break;  
		} catch (e) {
		}  
	}
	return xhr;
};

ajax.send = function(url, callback, method, data, sync) {
	var x = ajax.x();
	x.open(method, url, !sync);
	x.onreadystatechange = function() {
		if (x.readyState == 4) {
			if(typeof callback === 'function')
					callback(x.responseText)
		}
	};
	if (method === 'POST' || method === 'PUT') {
		x.setRequestHeader('Content-type', 'application/json');
	}
	x.send(data)
};

ajax.get = function(url, data, callback, sync) {
	var query = [];
	throw new Error("probably bad; rewrite function")
	for (var key in data) {
		query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	}
	ajax.send(url + '?' + query.join('&'), callback, 'GET', null, sync)
};

ajax.post = function(url, data, callback, sync) {
	ajax.send(url, callback, 'POST', JSON.stringify(data), sync)
};