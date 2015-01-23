var express = require('express');
var fs = require('fs');
var levelup = require('level');
var app = express();
var db = levelup('./db');
// var menagerie = [];
// var petThrow = JSON.stringify(menagerie);

fs.readFile("petBox.txt" , function(err,data){
  if(err){
    console.log("There has been an error reading PetBox");
    console.log(err)
  }else if(data){
    console.log(data.toString.length);
    console.log(data);
    console.log("there is data")
    menagerie = JSON.parse(data);
    console.log(menagerie)
   }
   else{
     menagerie = []
   }
})

app.get("/create/:petName/:petType" , function(req,res){
  fs.readFile("petBox.txt" , function(err,data){
    if(err){
      console.log("There has been an error reading PetBox");
      console.log(err)
    }else{
      menagerie = JSON.parse(data);
    }
  })
  console.log("Pet Create Request");
  newPet = {};
  newPet["name"] = req.params.petName;
  newPet["type"] = req.params.petType;
  menagerie.push(newPet);
  res.send({"status":"Success!"})
  var petThrow = JSON.stringify(menagerie);
  fs.writeFile("petBox.txt" , petThrow , function(err,data){
    if(err){
      console.log("There has been an error reading PetBox");
      console.log(err)
    }else{
      console.log("filewrite success")
    }
  })
})

app.get("/read/:petName" , function(req,res){
  console.log("Read request");
  fs.readFile("petBox.txt" , function(err,data){
    if(err){
      console.log("There has been an error reading PetBox");
      console.log(err)
    }else{
      menagerie = JSON.parse(data);
    }
  })
  petToFind = req.params.petName;
  animalToReturn = {"failed":"no such pet exists"};

  menagerie.forEach(function(animal){
    if (animal["name"] == petToFind){
      animalToReturn = animal;s
      }
  })
  res.send(animalToReturn);
})

app.get("/update/:petName/:newPetName" , function(req,res){
  console.log("Pet Name Update Request");
  fs.readFile("petBox.txt" , function(err,data){
    if(err){
      console.log("There has been an error reading PetBox");
      console.log(err)
    }else{
      menagerie = JSON.parse(data);
    }
  })
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
    fs.writeFile("petBox.txt" , petThrow , function(err,data){
      if(err){
        console.log("There has been an error reading PetBox");
        console.log(err)
      }else{
        console.log("filewrite success")
      }
    })
})

app.get("/destroy/:petName" , function(req,res){
  console.log("Pet Kill Request");
  fs.readFile("petBox.txt" , function(err,data){
    if(err){
      console.log("There has been an error reading PetBox");
      console.log(err)
    }else{
      menagerie = JSON.parse(data);
    }
  })

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
  fs.writeFile("petBox.txt" , petThrow , function(err,data){
    if(err){
      console.log("There has been an error reading PetBox");
      console.log(err)
    }else{
      console.log("filewrite success")
    }
  })

})

app.get("/all_pets" , function(req , res){
  console.log("All pets request");
  fs.readFile("petBox.txt" , function(err,data){
    if(err){
      console.log("There has been an error reading PetBox");
      console.log(err)
    }else{
      menagerie = JSON.parse(data);
    }
  })
  console.log(menagerie);
  res.send(menagerie);

})




app.listen(3000);
