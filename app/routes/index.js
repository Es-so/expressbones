module.exports = function(Router)
{

  Router.route('/')

  .get(function(req, res)
  {
    res.render('./pages/loginRegister');
  })

  .post(function(req, res)
  {
    res.send('you posted to /');
  });
};
