//------------------------------------require-----------------------------------
var config          = require('./config/core');
var express         = require('express');
var session         = require('express-session')
var bodyParser      = require('body-parser');
var passport        = require('passport');
var app             = express();
var Router          = express.Router();

//-----------------------------------static-------------------------------------
app.use(express.static('public'));
//-----------------------------------dev logs-----------------------------------
(config.node_env == 'developpement') && app.use(require('morgan')('dev'));
//-----------------------------------vars and middlewares-----------------------
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(bodyParser.json())
app.use(session(config.session))
app.use(passport.initialize());
app.use(passport.session());
app.use('/', Router);
//-----------------------------------services init------------------------------
require('./services/passport/init');
require('./services/database/init');
//-----------------------------------choice 1 : enable routes explicitly--------
require('./routes/index')(Router);
require('./routes/login')(Router);
require('./routes/logout')(Router);
require('./routes/register')(Router);
require('./routes/u/profil')(Router);
require('./routes/notfound')(Router);
//-----------------------------------choice 2 : enable all routes---------------
//TODO pass the router to all routes and subroutes.
//-----------------------------------start--------------------------------------
app.listen(config.port, function()
{
  var now = new Date();
  var clock = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2) + ':' + ('0' + now.getSeconds()).slice(-2);
  console.warn( `[ ${clock} ] ${config.title} is running on localhost:${config.port}`);
});
