module.exports = function(Router)
{
  Router.route('/u/:userTag')

  .get(function(req, res)
  {
    // console.log(req.isAuthenticated())
    // console.log(req.session)
    if(req.isAuthenticated())
    {
      console.log(req.user.email)
      res.send(req.user.email + ' is your profile');
    }
    else
      res.send(req.params.userTag + "'s profile");
    // res.render('./pages/profil');
  })

  .post(function(req, res)
  {
    res.send('you posted to /u/:profil');
  });
};
