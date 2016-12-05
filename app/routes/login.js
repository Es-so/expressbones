module.exports = function(Router)
{
  Router.route('/')

  .get(function(req, res)
  {

    res.send('you GET /');
  })

  .post(function(req, res)
  {
    res.send('you posted to /');
  });
};
