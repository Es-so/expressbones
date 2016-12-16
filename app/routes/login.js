var passport = require('passport');



module.exports = function(Router)
{
  Router.route('/login')

  .get(function(req, res)
  {
    res.render('./pages/login');
  })

  .post(passport.authenticate('local-login',function(err,account)
  {
    console.log(err);
    console.log('\n');
    console.log(account);
  }),
  function(req, res)
  {
    res.send('you posted to /');
  });
};
