//ProbeFactory.js
/*

	Genera los distintos tipos de probes a partir de los datos contenidos en
	los JSON.

*/

var PingProbe = require('../model/probe/pingProbe');

var HttpProbe = require('../model/probe/http/httpProbe');
var MethodFactory = require('./methodFactory');

var ProbeFactory = function() {
   this.methodFactory = new MethodFactory();
}

ProbeFactory.prototype.constructor = ProbeFactory;

ProbeFactory.prototype.createPingProbe = function(aProbeData) {
  var newProbe = new PingProbe (aProbeData._id, aProbeData.name,
                      aProbeData.status, aProbeData.enabled,
                      aProbeData.destination);

  return newProbe;
};

ProbeFactory.prototype.createHttpProbe = function(aProbeData) {
  var method = this.methodFactory.createGetMethod(aProbeData.method);
  var newProbe = new HttpProbe (aProbeData._id, aProbeData.name,
                      aProbeData.status, aProbeData.enabled,
                      aProbeData.url, method);

  return newProbe;
};

ProbeFactory.prototype.createProbeFromJSON = function(aProbeData) {
  console.log(aProbeData);

  var myProbe;
  switch(aProbeData.type) {
    case "PingProbe": {
      console.log("PingProbe");
      myProbe = this.createPingProbe(aProbeData);
    };break;

    case "HttpProbe": {
      console.log("HttpProbe");
      myProbe = this.createHttpProbe(aProbeData);
    }; break;
  }

  return myProbe;
}

module.exports = ProbeFactory;
