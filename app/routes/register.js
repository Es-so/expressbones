var passport = require('passport');

module.exports = function(Router)
{
  Router.route('/register')

  .get(function(req, res)
  {
    res.render('./pages/register');
  })

  .post(function(req, res)
  {
    if(!req.body.username || !req.body.password || !req.body.repassword)
      return res.json({status : 'NOK', message : 'missing fields'});
    else if(req.body.password !== req.body.repassword)
      return res.json({status : 'OK', message : 'your passwords does not match'});

    passport.authenticate('local-register',function(err,user,infos,wtf)
    {
      if(err)
        return res.json({status : 'NOK', message : err});
      if(!user)
        return res.json({status : 'NOK', message : 'user already registered'});

      //now the user is created, we just have to login.
      req.logIn(user, function(err)
      {
        if(err)
          return res.send(err);

        //What would you like to do on success
        return res.json({status : 'OK', message : 'successfully registered', redirect : '/u/' + user.email });
      });
    })(req,res);
  });
};
