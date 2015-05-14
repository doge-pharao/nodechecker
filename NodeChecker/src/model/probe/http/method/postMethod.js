var Method = require('./method');

function PostMethod (headers, body) {
	Method.call(this, "POST", headers)
  this.body = body;
};

PostMethod.prototype.constructor = PostMethod;

PostMethod.prototype.doJob = function(){
	console.log("doJob. Method POST. ");
}

module.exports = PostMethod;
