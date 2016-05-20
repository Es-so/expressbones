"use strict";

module.exports = function(Router)
{

  Router.route('*')
  .get(function(req, res)
  {
    res.send('404');
  });
};
