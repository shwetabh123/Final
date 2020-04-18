//import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');
var cors = require('cors');
var app = express();
var port = 4112 ;
var addressRouter = require('./routes/address');
var uploadfileRouter = require('./routes/upload-file');
app.use(cors());
//app.use(cors({origin: 'http://localhost:4200'}));

app.use(bodyparser.json()); 
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
   });


//routes
app.use('/api', addressRouter);
app.use('/api', uploadfileRouter);
//testing server
app.get('/', (req, res) => {
     res.send('welcome');
});
//var con = require('./connection');
app.listen(port, function () {
     console.log('server running on port:' + port);
});