var testMethodGET = {
                          "type":"GET",
                          "headers":[
                              {"name":"bandar-version","value":"v2.0"},
                              {"name":"bandar-platform","value":"Android"},
                              {"name":"latitude","value":"0"},
                              {"name":"longitude","value":"0"}
                            ],
                          "expected":""
                    };

var testMethodPOST = {
                          "type":"POST",
                          "headers":[
                              {"name":"bandar-version","value":"v2.0"},
                              {"name":"bandar-platform","value":"Android"},
                              {"name":"latitude","value":"0"},
                              {"name":"longitude","value":"0"}
                            ],
                          "body": "{\"aParameter\":\"aValue\"}",
                          "expected":""
                    };


var MethodFactory = require('../src/factory/methodFactory');
var assert = require("assert");

describe("MethodFactory",function(){
  var methodFactory = new MethodFactory();

  describe("create method from JSON",function(){

    it('create a GET method',function(){
      var myMethod = methodFactory.createMethodFromJSON(testMethodGET);

      assert.equal("GET", myMethod.name);

    });

    it('create a POST method',function(){
      var myMethod = methodFactory.createMethodFromJSON(testMethodPOST);

      assert.equal("POST", myMethod.name);
      assert.equal("{\"aParameter\":\"aValue\"}", myMethod.body);
    });

  });

});
