var Probe = require('./probe');

function PingProbe (id, name, status, enabled, destination) {
		Probe.call(this, id, name, status, enabled);
		this.destination = destination;
};

PingProbe.prototype = Object.create(Probe.prototype);

PingProbe.prototype.constructor = PingProbe;

PingProbe.prototype.doJob = function(){
	console.log("doJob. PingProbe name:" + this.name + "; id:" + this._id);
}


module.exports = PingProbe;
