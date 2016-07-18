var LocalStrategy   = require('passport-local').Strategy;
var UserModel       = require('../model/user');

module.exports = function(passport)
{
  passport.serializeUser(function(user, done)
  {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done)
  {
    User.findById(id, function(err, user)
    {
      done(err, user);
    });
  });
//------------------------------------Strategies--------------------------------
  passport.use('local-register', new LocalStrategy(
  {
      usernameField : 'username',
      passwordField : 'password',
      passReqToCallback : true
  },
  UserModel.registerStrategy
  ));

  passport.use('local-login', new LocalStrategy(
  {
       usernameField : 'username',
       passwordField : 'password',
       passReqToCallback : true
  },
  UserModel.loginStrategy
  ));
};
