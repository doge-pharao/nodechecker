var PingProbe = require ('./model/pingProbe'), pingProbe = new PingProbe("Desarrollo", "OK", true, "www.google.com");
var Group = require('./model/group'), group = new Group("Desarrollo", "OK");

var Datastore = require('nedb')
, db ={};
db.probes = new Datastore({ filename: '../db/probes.db', autoload: true });
db.groups = new Datastore({ filename: '../db/groups.db', autoload: true });

db.probes.insert(pingProbe);
db.groups.insert(group);
