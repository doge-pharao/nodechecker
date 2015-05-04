function GetMethod (url, headers, status) {
	
	Method.call(this, url, headers, status)

};

GetMethod.prototype.constructor = GetMethod;

GetMethod.prototype.doJob = function(){
	console.log("doJob. Method. ");
}

module.exports = GetMethod;