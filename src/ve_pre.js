(function(){
	VE = {
		PREFIX: '',
	};
	Bio = {};





	var head = document.getElementsByTagName('head')[0];

	var fonts = [
		'https://fonts.googleapis.com/css?family=Maven+Pro:500,700',
		'https://fonts.googleapis.com/css?family=Ubuntu+Mono',
	];
	for(var i=0,ii=fonts.length;i<ii;i++) {
		var font = fonts[i];
		var link = document.createElement('link');
		link.type = 'text/css';
		link.rel = 'stylesheet';
		link.href = font;
		head.appendChild(link);
	}







})();