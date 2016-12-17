var config    = require('../../config/core');
var mongoose  = require('mongoose');

//mongoose promise is going deprecated
//https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

mongoose.connect(config.dburl);
var db = mongoose.connection;
db.on('error', function(){console.error('connection error to ' + config.dburl)});
db.once('open', function(){console.log('sucessfully connected to the db ' + config.dburl)});