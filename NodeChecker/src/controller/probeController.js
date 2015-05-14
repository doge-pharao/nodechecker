var ProbeController = function(aDb) {
	this.myDb = aDb;
}

ProbeController.prototype.save = function(req, res) {
	console.log("POST: ");
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	// The above 2 lines are required for Cross Domain
	// Communication(Allowing the methods that come as Cross
	// Domain Request
	console.log(req.body);
	console.log(req.body.probeData);
	var jsonData = JSON.parse(req.body.probeData);

	this.myDb.save(jsonData, function(err, saved) { // Query in NeDB via NeDB Module
		if (err || !saved) {
			res.end("Probe not saved");
		} else {
			res.end("Probe saved");
		}
	});
};

ProbeController.prototype.find = function(req, res) {
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	// The above 2 lines are required for Cross Domain Communication(Allowing the methods that come as Cross           // Domain Request

	this.myDb.find("", function(err, probes) { // Query in NeDB via NeDB Module
		if (err || !probes)
			console.log("No probes found");
		else {
			res.writeHead(200, {
				'Content-Type' : 'application/json'
			}); // Sending data via json
			str = '[';
			probes.forEach(function(probe) {
				str = str + JSON.stringify(probe) + '\n';
			});
			str = str.trim();
			if (str.length > 1) {
				str = str.substring(0, str.length - 1);
			}
			str = str + ']';
			res.end(str);
			// Prepared the jSon Array here
		};
	}
	);
};

module.exports = ProbeController;
