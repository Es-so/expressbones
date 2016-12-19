//------------------------------------Local Strategy--------------------------------
var User = require('../../database/schemas/User');
var passport = require('passport');
var LocalStrategy = require('passport-local');



//------------------LOGIN-------------------------------------------------
passport.use('local-login', new LocalStrategy(
{
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
},
function(req,email,password,done)
{
  User.findOne({ 'auth.local.email': email } , function(err, user)
  {
    if(err)
      return done(err);
    if(!user)
      return done(null, false);
    if(!user.verifyPassword(password))
      return done(null, false);

    return done(null, user);
  });
}));

//------------------REGISTER-----------------------------------------------
passport.use('local-register', new LocalStrategy(
{
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
},
function(req, email, password, done)
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
        return done(null, false);
      else
      {
        User.count({}, function(err, nb) 
        {
          // if there is no user with that email
          // create the user
          var newUser                   = new User();
          
          // set the user's local credentials
          newUser.email                 = email;
          newUser.uid                   = nb;
          newUser.auth.local.email      = email;
          newUser.auth.local.password   = newUser.generateHash(password);

          // save the user
          newUser.save(function(err)
          {
            if(err)
              return err;
            return done(null, newUser);
          });
        })
      }
    });    
  });
}));