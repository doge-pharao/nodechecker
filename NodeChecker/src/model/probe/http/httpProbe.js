var Probe = require('../probe');
var MethodFactory = require('./method/methodFactory');

function HttpProbe (id, name, status, enabled, url, method) {

	Probe.call(this, id, name, status, enabled);

	this.url = url;
	this.method = method;
};

HttpProbe.prototype = Object.create(Probe.prototype);

HttpProbe.prototype.constructor = HttpProbe;

HttpProbe.prototype.constructorFromJSON = function(aProbeData) {
	var methodFactory = new MethodFactory();
  var method = methodFactory.createMethodFromJSON(aProbeData.method);
  var newProbe = new HttpProbe (aProbeData._id, aProbeData.name,
                      aProbeData.status, aProbeData.enabled,
                      aProbeData.url, method);

  return newProbe;
};

HttpProbe.prototype.doJob = function(){
	console.log("doJob. HttpProbe " + this.name + "; id:" + this._id);
	this.method.doJob();
}


module.exports = HttpProbe;
