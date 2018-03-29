// npm install cookie parser --save
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req,res){
  res.cookie('myfirstCookie', 'looks good');
  res.end('wow');
})

app.get('/removecookie', function(req,res){
  res.clearcookie('myfirstCookie');
  res.end('wow');
})

app.listen(1337, function(){
  console.log('Yeah?');
})
