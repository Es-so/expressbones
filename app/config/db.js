"use strict";
var coreconfig = require('./core');

module.exports = function(mongoose)
{
  mongoose.connect('mongodb://localhost:27017/' + coreconfig.dbname);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(){console.log('sucessfully connected to the db');});

};
