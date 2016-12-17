var passport = require('passport');

module.exports = function(Router)
{
  Router.route('/login')

  .get(function(req, res)
  {
    res.render('./pages/login');
  })

  .post(function(req, res, next)
  {
    passport.authenticate('local-login',function(err,user,infos,wtf)
    {
      console.log(err,user,infos,wtf);
      
      if(err)
        return res.send(err);
      if(!user)
        return res.send('login fail');

      req.logIn(user, function(err)
      {
        if(err)
          return res.send(err);

        //What would you like to do on success
        return res.json({status: 'OK', message : 'successfully loggedIn', redirect : '/u/' + user.email});
      });
    })(req,res);
  });
};
