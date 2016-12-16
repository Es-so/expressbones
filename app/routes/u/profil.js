module.exports = function(Router)
{
  Router.route('/u/:userTag')

  .get(function(req, res)
  {
    res.render('./pages/profil');
  })

  .post(function(req, res)
  {
    res.send('you posted to /u/:profil');
  });
};
