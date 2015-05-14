var Datastore = require('nedb'), db = {};
db.probes = new Datastore({ filename: './db/probes.db', autoload: true });
db.groups = new Datastore({ filename: './db/groups.db', autoload: true });
db.currentJobs = new Datastore({ filename: './db/currentJobs.db', autoload: true });

var GroupController = require('./src/controller/groupController');
var groupController = new GroupController(db);

var ProbeExecutionHandler = require('./src/handler/probeExecutionHandler');
var probeExecutionHandler = new ProbeExecutionHandler(db);

var bodyParser = require('body-parser');
var express = require('express');
var http = require('http');
var path = require('path');

var app = require('express')();



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var groupRouter = require('./routes/apiRouter')(groupController);
app.use('/api/groups', groupRouter.getRoutes());

var docRouter = require('./routes/docRouter')();
app.use("/", docRouter.getRoutes());

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
