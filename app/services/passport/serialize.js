var passport  = require('passport');
var User      = require('../database/schemas/User');

//serialize userID in the session
//we only serialize userID so the sessionSystem doesnt have to handle passwords etc...

passport.serializeUser(function(user, done)
{
  done(null, user.id);
});

passport.deserializeUser(function(id, done)
{
  //here we try to retrieve the whole user from the sessionStored data.
  //since we only stored the id, we use .findById and pass the user to done.
  //the user object will be stored in req.user
  User.findById(id, function(err, user)
  {
    done(err, user);
  });
});