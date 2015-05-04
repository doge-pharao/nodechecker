function Method (url, headers, status) {
	this.url = url;
	this.headers = headers;
	this.status = status;
};

Method.prototype.constructor = Method;

Method.prototype.doJob = function(){
	console.log("doJob. Method. ");
}

module.exports = Method;