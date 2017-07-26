var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');

//^remember that its a function thats being returned from require
//^^ this function returns the API end point

var apiController = require('./controllers/apiController');

// ^api CRUD endpoints
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

//^ getDbConnectionString was built in index.js, which required config
// ^^ this string contains the username and password

setupController(app);
apiController(app);

app.listen(port);
