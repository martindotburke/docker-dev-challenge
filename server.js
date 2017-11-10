'use strict';
const bodyParser = require('body-parser')
const express = require('express');
const Loader = require('node-file-loader');
const csvParser = require('csv-parse');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


// Homepage
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendfile('./public/index.html');
});


// APIs

// set url(s) to input files
app.post('/api/input', function(req, res) {

  Loader.load("./public/sample_input_file_10")
  .then(function (file) {
    // handle plain-text file var

    csvParser(file, function(err, data){
      console.log ("success! l = " + data.length);
    });
    res.send ("success");
  }).catch(function (err) {
    // handle error 
    console.log ("Bollix!" + err);
    res.send ("error");
  });  
});

app.post('/api/date', function(req, res) {
  res.send (req.body);
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);