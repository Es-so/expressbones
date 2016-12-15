//------------------------------------require-----------------------------------
var config          = require('./config/core');
var express         = require('express');
var bodyParser      = require('body-parser');
var app             = express();
var Router          = express.Router();

//-----------------------------------static-------------------------------------
app.use(express.static('public'));
//-----------------------------------dev logs-----------------------------------
(config.node_env == 'developpement') && app.use(require('morgan')('dev'));
//------------------------------------------------------------------------------
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', Router);

//-----------------------------------enable routes------------------------------
require('./routes/index')(Router);
require('./routes/login')(Router);
require('./routes/register')(Router);
require('./routes/notfound')(Router);
//-----------------------------------start--------------------------------------
app.listen(config.port, function()
{
  var now = new Date();
  var clock = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  console.warn( `[${clock}] ` + config.title + " is running on localhost:" + config.port);
});
