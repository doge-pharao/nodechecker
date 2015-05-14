var Probe = function  (_id, name, status, enabled, url) {
	this.name = name;
	this.status = status;
	this.enabled = enabled;
	this._id = _id;
};

Probe.prototype.doJob = function(){
	throw ("You need implement doJob() method in a child object.");
};

Probe.prototype.stopJob = function(){
	throw ("You need implement doJob() method in a child object.");
};

Probe.prototype.toString = function() {
	return JSON.stringify(this);
}

module.exports = Probe;
