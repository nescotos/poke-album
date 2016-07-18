//Import packages
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var express = require('express');
var app = express();
//Import config file
var config = require('./config');
//Setting up morgan to log every request
app.use(morgan('dev'));
//Setting up static files
app.use(express.static(__dirname));
//Setting up body parser to grab the data from request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Connecting to database
mongoose.connect('mongodb://' + config.DATABASE.HOST + ":" + config.DATABASE.PORT + "/poke-album");
//Index endpoint
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
//Starting server
app.listen(config.PORT, function(){
  console.log('Server running on port: ' + config.PORT)
});
