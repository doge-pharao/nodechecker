var GroupService = function(aDb) {
	this.myDb = aDb.groups;
};

GroupService.prototype.save = function(groupData, callback) {
	this.myDb.insert(groupData, callback);
};

GroupService.prototype.findAll = function(callback) {
	this.myDb.find("", function(err, result) {
		if (err || !result){
			console.log("No Groups found");
		}
		else {
			callback(null, result);
		}
	});
};

GroupService.prototype.findById = function(groupId, callback) {
	this.myDb.find({"_id" : groupId}, callback);
};

module.exports = GroupService;