'use strict';

var express    = require('express');       //basic beginnings 
var app        = express();              //basic beginnings  
var routes = require('./index.js');    //connecting the files
var port = process.env.PORT || 8080;    //basic beginnings         
routes(app);  //passing express() into index.js

app.listen(port, function() {
    console.log('listening on port ' + port);
});