var passport = require('passport');

module.exports = function(Router)
{
  Router.route('/login')

  .get(function(req, res)
  {
    res.render('./pages/login');
  })

  .post(function(req, res)
  {
    passport.authenticate('local-login',function(err,user,infos)
    {
      if(err)
        return res.send({status: 'NOK', message : err});
      if(!user)
        return res.json({status: 'NOK', message : 'login failed'});

      req.logIn(user, function(err)
      {
        if(err)
          return res.send({status: 'NOK', message : err});

        //What would you like to do on success
        return res.json({status: 'OK', message : 'successfully loggedIn', redirect : '/u/' + user.uid});
      });
    })(req,res);
  });
};
