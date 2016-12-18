module.exports = function(Router)
{
  Router.route('/u/:userTag')

  .get(function(req, res)
  {
    if(req.isAuthenticated())
      res.send("your profile")
    else
      res.send(req.params.userTag + "'s profile");
    // res.render('./pages/profil');
  })

  .post(function(req, res)
  {
    res.send('you posted to /u/:profil');
  });
};
