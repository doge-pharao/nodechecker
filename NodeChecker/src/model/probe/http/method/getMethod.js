var Method = require('./method');

function GetMethod (headers) {
	Method.call(this, "GET", headers)
};

GetMethod.prototype.constructor = GetMethod;

GetMethod.prototype.doJob = function(){
	console.log("doJob. Method GET. ");
}

module.exports = GetMethod;
