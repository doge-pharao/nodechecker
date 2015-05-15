var Probe = require('../probe');

function SoapProbe (name, status, enabled, url) {

	Probe.call(this, name, status, enabled);

	this.url = url;
};

SoapProbe.prototype = Object.create(Probe.prototype);

SoapProbe.prototype.constructor = SoapProbe;

SoapProbe.prototype.constructorFromJSON = function(){};

SoapProbe.prototype.doJob = function(){
	console.log("doJob. SoapProbe " + this.name + this._id);
}


module.exports = SoapProbe;
