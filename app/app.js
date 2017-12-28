const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('assets'));

const hostname = "localhost";
const port = 8080;


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(){
  console.log('Server started on port ' +port)
});
