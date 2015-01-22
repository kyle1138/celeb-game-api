var express = require('express')
var app = express();
var counter = 0

var celeb = {"results":{
  "profession":"Actor",
  "known_for":["classic sitcom bartender" , "film career" , "TV detective" , "political activism"],
  "gender": "male",
  "first letter of last name" : "h"

}}


app.get( '/' , function(req,res){
  counter ++
  console.log(counter)
  res.send(celeb);

})

app.get( '/Woody_Harrelson' , function(req,res){
  counter ++
  console.log(counter)
  var corReply = {"correct": "You are correct. A winner is you!"}
  res.send(corReply);

})

app.get( '/:wrong' , function(req,res){
  counter ++
  console.log(counter)
  var answer = req.params.wrong;
  console.log(answer)
  var wrongReply = {"incorrect": answer + " is the wrong answer. You are WRONG!"}
  res.send(wrongReply);

})



app.listen(3000);
