"use strict";
var config = require('./core');

module.exports = function(mongoose)
{
  mongoose.connect(config.dburl);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error : '));
  db.once('open', function(){console.log('sucessfully connected to the db');});

};
