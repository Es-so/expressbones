"use strict";
var mongoose = require('mongoose');
var Client = require('../db/user');

exports.getSomething = function(done)
{
  var something = "this is a data get by the model :)";
  done(something);
}
