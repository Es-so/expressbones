//------------------------------------Local Strategy--------------------------------
var User = require('../../database/schemas/User');
var passport = require('passport');
var BasicStrategy = require('passport-http');


//------------------LOGIN-------------------------------------------------
passport.use('basic', new BasicStrategy(
  function(userid, password, done)
  {
    User.findOne({ username: userid }, function (err, user)
	{
      if (err)
	  	return done(err);
      if (!user)
	  	return done(null, false);
      if (!user.verifyPassword(password))
		return done(null, false);

	  return done(null, user);
    });
  }
));