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

app.get( '/:ans' , function(req,res){

  var answer = req.params.ans;
  if (answer = "Woody_Harrelson"){
    res.send("You are correct.");}
  else
    {res.send("You are wrong! WRONG!")}

})



app.listen(3000);
