"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  firstname : { type: String , required: true},
  lastname  : { type: String , required: true},
  mail      : { type: String , required: true, index: true},
  type      : { type: String , required: true},
  sector    : { type: String , required: true},
});

module.exports = mongoose.model('User', User);
