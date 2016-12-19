module.exports = function(Router)
{

  Router.route('/')

  .get(function(req, res)
  {
    if(req.isAuthenticated())
      res.render('./pages/home-user.pug',{email: req.user.email});
    else
      res.render('./pages/home-guest.pug')
  })

  .post(function(req, res)
  {
    res.send('you posted to /');
  });
};
