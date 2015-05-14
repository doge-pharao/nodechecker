var CronJob = require('cron').CronJob;
var async = require("async");
var ProbeService = require('../service/probeService');

function ProbeExecutionHandler (aDb) {
	probeService = new ProbeService(aDb);
	this.currentJobs = {};

	var currentJobs = this.currentJobs;

	probeService.findAll(function(results){
		results.forEach(function(aProbe){
			currentJobs[aProbe.id] = new CronJob(
					'*/3 * * * * *', function() {
						// Runs every weekday (Monday through Friday)
						// at 11:30:00 AM. It does not run on Saturday
						// or Sunday.
						aProbe.doJob();
					}, function() {
						// This function is executed when the job stops
						console.log("stop");
						aProbe.stopJob();
					}, aProbe.enabled /* Start the job right now */,
					"America/Los_Angeles" /* Time zone of this job. */
			);
		});
	});
};

ProbeExecutionHandler.prototype.constructor = ProbeExecutionHandler;

ProbeExecutionHandler.prototype.addProbe = function (aProbe) {
	this.currentJobs.push(aProbe);
}

ProbeExecutionHandler.prototype.removeProbe = function (aProbe) {
	this.currentJobs.push(aProbe);
}

ProbeExecutionHandler.prototype.enableProbe = function (aProbe) {
	this.currentJobs.push(aProbe);
}

ProbeExecutionHandler.prototype.disableProbe = function (aProbe) {
	this.currentJobs.push(aProbe);
}

module.exports = ProbeExecutionHandler;
