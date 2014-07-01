(function(){


function validateAnnotation(sequenceModel) {

	var start = this.get('start');
	var end = this.get('end');
	var name = this.get('name');
	var strand = this.get('strand');
	var type = this.get('type');

	var seqlen = sequenceModel.length();

	if(typeof start !== 'number' || typeof end !== 'number' || typeof name !== 'string') {
		return false;
	}

	if(typeof type !== 'string') {
		return false;
	}

	if(isNaN(end) || isNaN(start)) {
		return false;
	}

	if(start > seqlen || end > seqlen) {
		return false;
	}

	if(start < 0 || end < 0) {
		return false;
	}

	if(strand !== -1 && strand !== 1) {
		return false;
	}

	if(name.trim().length === 0) {
		return false;
	}

	return true;
}





VE.LightAnnotation = function(params) {
	this.attributes = {};
	for(var x in params) {
		this.attributes[x] = params[x];
	}
}

VE.LightAnnotation.prototype.get = function(field) {
	return this.attributes[field];
}

VE.LightAnnotation.prototype.set = function(field, value) {
	this.attributes[field] = value;
}

VE.LightAnnotation.prototype.toJSON = function() {
	return this.attributes;
}

VE.LightAnnotation.prototype.validate = validateAnnotation.bind(VE.LightAnnotation.prototype);






VE.Annotation = Backbone.Model.extend({

	// defaults: {
	// 	name: "",
	// 	start: -1,
	// 	end: -1,
	// 	strand: 0,
	// },



});

// VE.Annotation.prototype.validate = validateAnnotation.bind(VE.Annotation.prototype);
VE.Annotation.prototype.validate = function() {
	return validateAnnotation.apply(this, arguments);
}




























































})();




