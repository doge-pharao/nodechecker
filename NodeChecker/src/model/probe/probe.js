var Probe = function  (name, status, enabled, url, method) {
	this.name = name;
	this.status = status;
	this.enabled = enabled;
};

Probe.prototype.doJob = function(){
	console.log("doJob " + this.name + this._id);
};

Probe.prototype.stopJob = function(){
	console.log("stopJob " + this.name + this._id);
};


module.exports = Probe;