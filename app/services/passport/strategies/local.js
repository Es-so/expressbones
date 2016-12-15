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
  UserModel.loginStrategy,
  ));