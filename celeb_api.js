var express = require('express')
var app = express();

var celeb = {"results":{
  "profession":"Actor",
  "known_for":["80's sitcom" , "film career" , "TV crime drama" , "political activism"],
  "gender": "male",
  "first letter of last name" : "h"

}}

app.get( '/' , function(req,res){

  res.send(celeb);

})

app.get( '/:wrong' , function(req,res){
  var answer = req.params.wrong;
  var reply = answer + " is the wrong answer. You are WRONG!"
  res.send(reply);

})

app.get( '/Woody_Harrelson' , function(req,res){

    res.send("You are correct. A winner is you!");}

})

app.listen(3000);
