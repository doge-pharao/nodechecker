var Probe = require('./probe');

function HttpProbe (name, status, enabled, url) {
	
	Probe.call(this, name, status, enabled);
	
	this.url = url;
};



console.log(Probe.prototype);
PingProbe.prototype = Object.create(Probe.prototype);

PingProbe.prototype.constructor = PingProbe;

PingProbe.prototype.doJob = function(){
	console.log("doJob. PingProbe " + this.name + this._id);
}


module.exports = Probe;