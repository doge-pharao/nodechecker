var testPingProbe = {"_id":"AIgVhS3JV55PBto1",
                     "type":"PingProbe",
                     "name":"Conexion Desa",
                     "status":"OK",
                     "enabled":"true",
                     "destination":"172.17.201.137"};

var testHttpProbe = {"_id":"AIgVhS3JV55PBto2",
                     "type":"HttpProbe",
                     "name":"Content Resolver",
                     "status":"OK",
                     "enabled":"false",
                     "url":"http://172.17.201.137:9090/fnxContentResolver",
                     "method": {
                          "name":"GET",
                          "headers":[
                              {"name":"bandar-version","value":"v2.0"},
                              {"name":"bandar-platform","value":"Android"},
                              {"name":"latitude","value":"0"},
                              {"name":"longitude","value":"0"}
                            ],
                          "expected":""
                      }
                  };


var ProbeFactory = require('../src/factory/probeFactory');


var assert = require("assert");

describe("ProbeFactory",function(){
  var probeFactory = new ProbeFactory();

  describe("getProbe",function(){

    it('obtengo un pingProbe',function(){
      var myPingProbe = probeFactory.createProbeFromJSON(testPingProbe);

      assert.equal("Conexion Desa", myPingProbe.name);
      assert.equal("172.17.201.137", myPingProbe.destination);
    });

    it('obtengo un httpProbe',function(){
      var myHttpProbe = probeFactory.createProbeFromJSON(testHttpProbe);

      assert.equal("Content Resolver", myHttpProbe.name);
    });

  });

});
