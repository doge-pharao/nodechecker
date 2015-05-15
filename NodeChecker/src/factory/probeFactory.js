//ProbeFactory.js
/*

	Genera los distintos tipos de probes a partir de los datos contenidos en
	los JSON.

*/

var probes = require('../model/probe');

var ProbeFactory = function() {
   for(var probeType in probes) {
     ProbeFactory.prototype['create' + probeType] = probes[probeType].prototype['constructorFromJSON'];
   };
}

ProbeFactory.prototype.constructor = ProbeFactory;

ProbeFactory.prototype.createProbeFromJSON = function(aProbeData) {
  return this['create'+aProbeData.type](aProbeData);
  /*var myProbe;
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

  return myProbe; */
}

module.exports = ProbeFactory;
