"use strict";
//------------------------------------require-----------------------------------
var pkgjson         = require('../package.json');
var express         = require('express');
var morgan          = require('morgan');
var mongoose        = require('mongoose');
var configDatabase  = require('./config/db')(mongoose);
var bodyParser      = require('body-parser');
var app             = express();
var Router          = express.Router();
//-----------------------------------static-------------------------------------
app.use(express.static('public'));
//------------------------------------------------------------------------------
app.set('view engine', 'pug');
app.set('views', __dirname + '/views/templates');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', Router);
//-----------------------------------routes-------------------------------------
require('./routes/index')(Router);
//-----------------------------------start--------------------------------------
app.listen(pkgjson.port, function()
{
  var now = new Date();
  var clock = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  console.warn( `[${clock}] ` + pkgjson.name + " is running on localhost:" + pkgjson.port);
});
