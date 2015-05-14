function Method (name, headers) {
	this.name = name;
	this.headers = headers;
};

Method.prototype.constructor = Method;

Method.prototype.doJob = function(){
	throw ("You need implement doJob() method in a child object.");
}

Method.prototype.toString = function() {
	return JSON.stringify(this);
}

module.exports = Method;
