var async = require("async");
var ProbeService = require('../service/probeService');
var GroupService = require('../service/groupService');
var Group = require('../model/group');

var probeService = null;
var groupService = null;

var GroupController = function(aDb) {
	probeService = new ProbeService(aDb);
	groupService = new GroupService(aDb);
};

GroupController.prototype.save = function(req, callback) {
	console.log(req);

	var groupData = req.body;
	var newGroup = new Group(groupData.name, groupData.status);
		
	groupService.save(newGroup, callback);
};

GroupController.prototype.findAll = function(req, callback) {
	groupService.findAll(function(err, groups) {
		callback(err, groups);
	});
};

GroupController.prototype.findByIdWithDetail = function(req, renderCallback) {
	var group = null;
	var probeDetailArr = [];
	async.series([ 
	  function(callback) {
		groupService.findById(req.params.id, function(err, groups) {
			group = groups[0];

			callback();
		});
	  }, 
	  function(callback) {
		async.each(group.probes, function(aProbe, eachCallback) {
			probeService.findById(aProbe._id, function(err, probeDetail) {
				probeDetailArr.push(probeDetail[0]);
				eachCallback();
			});
		}, callback);
	  },
	  function(callback) {
		group.probes = probeDetailArr;
		callback();
	}], 
	
	function (err) {
		renderCallback(err, group);
	});
};

module.exports = GroupController;