module.exports = function(Router)
{
  Router.route('/login')

  .get(function(req, res)
  {
    res.render('./pages/login');
  })

  .post(function(req, res)
  {
    res.send('you posted to /');
  });
};
