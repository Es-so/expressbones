"use strict";
var indexmodel = require('../model/index');
var coreconfig = require('../config/core');


module.exports = function(Router)
{

  Router.route('/')
  .get(function(req, res)
  {
    var Websitetitle = coreconfig.title;

    res.render('index');
  })

  .post(function(req, res)
  {
    res.send('you posted to /');
  });
};
