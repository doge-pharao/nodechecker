var GetMethod = require('../model/probe/http/method/getMethod');
var PostMethod = require('../model/probe/http/method/postMethod');

var MethodFactory = function() {

}

MethodFactory.prototype.constructor = MethodFactory;

MethodFactory.prototype.createGetMethod = function(aMethodData) {
  var newMethod = new GetMethod(aMethodData.headers);

  return newMethod;
};

MethodFactory.prototype.createPostMethod = function(aMethodData) {
  var newMethod = new PostMethod(aMethodData.headers, aMethodData.body);

  return newMethod;
};

MethodFactory.prototype.createMethodFromJSON = function(methodData) {
  console.log(methodData);

  var myMethod;
  switch(methodData.type) {
    case "GET": {
      console.log("GET Method");
      myMethod = this.createGetMethod(methodData);
    };break;

    case "POST": {
      console.log("POST Method");
      myMethod = this.createPostMethod(methodData);
    }; break;
  }

  return myMethod;
}

module.exports = MethodFactory;
