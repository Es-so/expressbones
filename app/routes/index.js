module.exports = function(Router)
{

  Router.route('/')

  .get(function(req, res)
  {
    res.render('./pages/home');
  })

  .post(function(req, res)
  {
    res.send('you posted to /');
  });
};
