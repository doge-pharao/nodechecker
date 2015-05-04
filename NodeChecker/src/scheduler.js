var CronJob = require('cron').CronJob;

var scheduler = {
	currentJobs : {},
	jobRunning : {},

	initialize : function(environments) {
		console.log("asdasd");
		console.log(environments);
		for ( var env_id in environments) {
			console.log(env_id);
			if (environments.hasOwnProperty(env_id)) {

				for (var index = 0; index < environments[env_id].probes.length; index++) {
					var probe = environments[env_id].probes[index];
					console.log(probe);
					this.currentJobs[env_id + "_" + probe.id] = new CronJob(
							'*/3 * * * * *', function() {
								// Runs every weekday (Monday through Friday)
								// at 11:30:00 AM. It does not run on Saturday
								// or Sunday.
								console.log(env_id + "_" + probe.id);
							}, function() {
								// This function is executed when the job stops
								console.log("stop");
							}, probe.enabled /* Start the job right now */,
							"America/Los_Angeles" /* Time zone of this job. */
					);
					this.jobRunning[env_id + "_" + probe.id] = probe.enabled;

				}
			}
		}
	}
};

module.exports = scheduler;