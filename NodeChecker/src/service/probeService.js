var ProbeFactory = require('../factory/probeFactory');

var ProbeService = function(aDb) {
	this.myDb = aDb.probes;
	this.probeFactory = new ProbeFactory();
};

ProbeService.prototype.save = function(probeData, res) {
	var jsonData = JSON.parse(probeData);

	// Query in NeDB via NeDB Module
	this.myDb.save(jsonData, function(err, saved) {
		if (err || !saved) {
			res.end("Probe not saved");
		} else {
			res.end("Probe saved");
		}
	});
};

ProbeService.prototype.findAll = function(callback) {
	var probeFactory = this.probeFactory;

	this.myDb.find("", function(err, result) {
		if (err || !result){
			console.log("No probes found");
		}
		else {
			var myProbes = new Array();

			for(var i=0; i < result.length; i++) {
					myProbes[i] = probeFactory.createProbeFromJSON(result[i]);
			};

			callback(myProbes);
		}
	});
};

ProbeService.prototype.findById = function(probeId, callback) {
	this.myDb.find({"_id" : probeId}, callback);
};

module.exports = ProbeService;
