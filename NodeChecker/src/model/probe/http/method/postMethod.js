function PostMethod (url, headers, status) {
	
	Method.call(this, url, headers, status)

};

PostMethod.prototype.constructor = PostMethod;

PostMethod.prototype.doJob = function(){
	console.log("doJob. Method. ");
}

module.exports = PostMethod;