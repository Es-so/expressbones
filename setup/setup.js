var mongoose = require('mongoose');
//------------------------------------------------------------------------------------------
mongoose.connect(config.dburl);
var db = mongoose.connection;
//------------------------------------------------------------------------------------------
db.on('error', function(){console.error('connection error to ' + config.dburl)});
db.once('open', function(){console.log('sucessfully connected to the db ' + config.dburl)});

