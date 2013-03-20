/**
 * Module dependencies.
 */

var launchpad = require('cosmonaut-launchpad');
var lifesupport = require('cosmonaut-lifesupport');
var payload = launchpad.package(__dirname + '/lib/engine.js');

var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(payload);
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

app.get('/lifesupport.js', function(req, res) {
  console.log(lifesupport);
  res.sendfile(lifesupport);
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});