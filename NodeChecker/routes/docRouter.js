function DocRouter (aController) {
	var express = require('express');
	this.router = express.Router();
	
	this.router.use(function(req, res, next){
		next();
	});

	this.router.route("/")
		.get(function(req, res) {
			res.render("index");
		});
	
	this.router.route("/groupDetail")
	.get(function(req, res) {
		res.render("groupDetail", { id : req.params.id });
	});
	
	this.router.route("/groupList")
	.get(function(req, res) {
		res.render("groupList");
	});
	
	this.router.route("/partials/:name")
	.get(function(req, res) {
		res.render("partials/" + req.params.name);
	});
	
	this.router.route("/partials/:type/:name")
	.get(function(req, res) {
		res.render("partials/" + req.params.type + "/" + req.params.name);
	});
}

DocRouter.prototype.getRoutes=function(){
	return this.router;
}

module.exports = function() {
	return new DocRouter();
};