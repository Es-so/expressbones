module.exports = function(Router)
{
  Router.route('/register')

  .get(function(req, res)
  {
    res.render('./pages/register');
  })

  .post(function(req, res)
  {
    res.send('you posted to /');
  });
};
