//------------------------------------Local Strategy--------------------------------
var User = require('../../database/schemas/User');
var passport = require('passport');
var LocalStrategy = require('passport-local')


var localLogin = function(req,username,password,done)
{
  User.findOne({ 'auth.local.email': username } , function(err, user)
  {
    if(err)
      return done(err);
    if(!user)
      return done(null, false);
    if(!user.verifyPassword(password))
      return done(null, false);

    return done(null, user);
  });
}

var localRegister = function(req, email, password, done)
{
  // asynchronous
  // User.findOne wont fire unless data is sent back
  process.nextTick(function()
  {
    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    User.findOne({ 'auth.local.email' :  email }, function(err, user)
    {
      // if there are any errors, return the error
      if(err)
        return done(err);

      // check to see if theres already a user with that email
      if(user)
        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
      else
      {
        // if there is no user with that email
        // create the user
        var newUser                   = new User();
        
        // set the user's local credentials
        newUser.auth.local.email      = email;
        newUser.auth.local.password   = newUser.generateHash(password);

        // save the user
        newUser.save(function(err)
        {
          if(err)
            throw err;
          return done(null, newUser);
        });
      }
    });    
  });
}

passport.use('local-register', new LocalStrategy(
{
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
},
localLogin
));

passport.use('local-login', new LocalStrategy(
{
      usernameField : 'username',
      passwordField : 'password',
      passReqToCallback : true
},
localRegister
));