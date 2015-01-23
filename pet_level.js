var express = require('express');
var fs = require('fs');
var levelup = require('level');
var app = express();
var db = levelup('./db');
// var menagerie = [];
// var petThrow = JSON.stringify(menagerie);



app.get("/create/:petName/:petType" , function(req,res){

  db.get("zoo" , function(err , value){
    if(err){
      console.log("LEVE DB FUCKED UP  ---  " + err);
    }else{
      console.log("Level DB SUCCESS");
      console.log(value);
      menagerie = JSON.parse(value);
    }



    console.log("Pet Create Request");
    newPet = {};
    newPet["name"] = req.params.petName;
    newPet["type"] = req.params.petType;
    menagerie.push(newPet);
    res.send({"status":"Success!"})
    var petThrow = JSON.stringify(menagerie);

    db.put("zoo" , petThrow , function(err){
      if(err){
        console.log("LEVEL DB FUCKED UP  ---  " + err);
      }else{
        console.log("Level DB SUCCESS");
      }

    })
  })
})

app.get("/read/:petName" , function(req,res){
  console.log("Read request");
  petToFind = req.params.petName;
  animalToReturn = {"failed":"no such pet exists"};

  db.get("zoo" , function(err , value){
    if(err){
      console.log("LEVEL DB FUCKED UP  ---  " + err);
    }else{
      console.log("Level DB SUCCESS");
      console.log(value);
      menagerie = JSON.parse(value);;
    }

  })

  menagerie.forEach(function(animal){
    if (animal["name"] == petToFind){
      animalToReturn = animal;s
      }
  })
  res.send(animalToReturn);
})

app.get("/update/:petName/:newPetName" , function(req,res){
  console.log("Pet Name Update Request");

  db.get("zoo" , function(err , value){
    if(err){
      console.log("LEVEL DB FUCKED UP  ---  " + err);
    }else{
      console.log("Level DB SUCCESS");
      console.log(value);
      menagerie = JSON.parse(value);;
    }
    petToFind = req.params.petName;
    newName = req.params.newPetName;
    animalToReturn = {"failed":"no such pet exists"}
    menagerie.forEach(function(animal){

      if (animal.name == petToFind){
        animal.name = newName;
        animalToReturn = {"status":"Success!"};
      }

    })

    res.send(animalToReturn);
    var petThrow = JSON.stringify(menagerie);


    db.put("zoo" , petThrow , function(err){
      if(err){
        console.log("LEVEL DB FUCKED UP  ---  " + err);
      }else{
        console.log("Level DB SUCCESS");
      }

    })


  })


})

app.get("/destroy/:petName" , function(req,res){
  console.log("Pet Kill Request");

  db.get("zoo" , function(err , value){

    if(err){
      console.log("LEVEL DB FUCKED UP  ---  " + err);
    }else{
      console.log("Level DB SUCCESS");
      console.log(value);
      menagerie = JSON.parse(value);;
    }

    console.log(menagerie);
    petToFind = req.params.petName;
    animalToReturn = {"failed" : "no such pet exists"};
    menagerie.forEach(function(animal){
      if(animal["name"] == petToFind){
          indexToKill = menagerie.indexOf(animal);
          menagerie.splice(indexToKill , 1);
          animalToReturn = {"status":"Success! The animal is dead now."}
      }

    })
    res.send(animalToReturn);
    console.log(menagerie);
    var petThrow = JSON.stringify(menagerie);

    db.put("zoo" , petThrow , function(err){
      if(err){
        console.log("LEVEL DB FUCKED UP  ---  " + err);
      }else{
        console.log("Level DB SUCCESS");
      }

    })

  })
})

app.get("/all_pets" , function(req , res){
  console.log("All pets request");
  db.get("zoo" , function(err , value){
    if(err){
      console.log("LEVEL DB FUCKED UP  ---  " + err);
    }else{
      console.log("Level DB SUCCESS");
      console.log(value);
      menagerie = JSON.parse(value);;
    }
    console.log(menagerie);
    res.send(menagerie);
  })



})




app.listen(3000);
