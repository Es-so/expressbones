module.exports = function(Router)
{
  Router.route('/logout')
  .all(function(req, res)
  {
	  req.logout();
	  res.redirect('/');
  });
};
