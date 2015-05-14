var Probe = require('../probe');

function HttpProbe (id, name, status, enabled, url, method) {

	Probe.call(this, id, name, status, enabled);

	this.url = url;
	this.method = method;
};

HttpProbe.prototype = Object.create(Probe.prototype);

HttpProbe.prototype.constructor = HttpProbe;

HttpProbe.prototype.doJob = function(){
	console.log("doJob. HttpProbe " + this.name + "; id:" + this._id);
	this.method.doJob();
}


module.exports = HttpProbe;
