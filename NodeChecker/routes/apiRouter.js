function Router (aController) {
	var express = require('express');
	var currentRender = null;
	
	this.router = express.Router();
	this.router.use(function(req, res, next){
		currentRender = function (err, data) {
			res.send(data);
		}
		next();
	});

	this.router.route("/")
		.get(function(req, res) {
			aController.findAll(req, currentRender);
		})
		.post(function(req, res) {
			aController.save(req, currentRender);
		});

	this.router.route("/:id")
		.get(function(req, res) {
			aController.findByIdWithDetail(req, currentRender);
		})
		.put(function(req, res) {
		})
		.delete(function(req, res) {
		});
}

Router.prototype.getRoutes=function(){
	return this.router;
}

module.exports = function(aController) {
	return new Router(aController);
};