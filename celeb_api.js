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

app.get( '/Woody_Harrelson' , function(req,res){
  var corReply = {"correct": "You are correct. A winner is you!"}
  res.send(corReply);

})

app.get( '/:wrong' , function(req,res){
  var answer = req.params.wrong;
  var wrongReply = {"incorrect": answer + " is the wrong answer. You are WRONG!"}
  res.send(wrongReply);

})



app.listen(3000);
