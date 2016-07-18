"use strict";
var mongoose = require('mongoose');
var User     = require('../db/userDb');

exports.getLastActiveUsernames = function(done)
{
  //thoses users are fetch from the database.
  var users =
  {
    Jean  : true,
    Tyler : true,
    Peter : true
  };

  done(users);
}

exports.loginStrategy = function(username,password,done)
{
  User.findOne({ username: username }, function(err, user)
  {
    if(err)
    {
      return done(err);
    }

    if(!user)
    {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if(!user.validPassword(password))
    {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);
  });
}

exports.registerStrategy = function(username,password,done)
{
  //this fire the cb with an error if there is a cb :)
  done ? done("hey hey, you don't have any register function") : false;
}
