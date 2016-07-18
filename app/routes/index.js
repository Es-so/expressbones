"use strict";
var userModel = require('../model/userModel');


module.exports = function(Router)
{

  Router.route('/')
  .get(function(req, res)
  {
    userModel.getLastActiveUsernames((usernames) =>
    {
      res.render('index',{users : usernames});
    });
  })

  .post(function(req, res)
  {
    res.send('you posted to /');
  });
};
