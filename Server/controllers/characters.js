const { request, response } = require('express');
const Character = require('../models/character');

const getAllCharacters = (req = request, res = response) => {
  
  const {  order, searchTerm } = req.query;

  Character.find({title: RegExp(searchTerm)}).then((result) => {


    if (order == "asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (order == "desc") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    if(order==""){
      result.sort((a, b)=> a.id - b.id);
    }
    
    res.status(200).json({
      charactersList: result,
    });

  }).catch((error) => {
    console.log(error);
    res.status(500).json({msg: "Error"});

  });

  

};


const getCharacterById = (req = request, res = response) => {
  const id = req.params.id;
  Character.findOne({id:id}).then((result) => {
    res.status(200).json({character: result});

  }).catch((error) => {
    console.log(error);
    res.status(500).json({msg: "Error"});
  });
};

const createCharacter = (req = request, res = response) => {

  const { title, year, episodes, img, id } = req.body;
  
  console.log("Datos"+req.body)
  if(!title || !year || !episodes || !img || !id){

    
    res.status(400).json({msg: "Missing data"});
    return;
  }

  newCharacter = new Character({
    title: title,
    year: year,
    episodes: episodes,
    img: img,
    id: id,
  });

  newCharacter.save().then((result) => {
    res.status(200).json({msg: "Character created successfully"});

  }).catch((error) => {
    console.log(error);
    res.status(500).json({msg: "Error"});
  });

};

const updateCharacter = (req = request, res = response) => {

  const idToUpdate = req.params.id;
  const { title, year, episodes, img, id } = req.body;

  if(!idToUpdate ){

    res.status(404).json({msg: "id not found"});
    return;
  }
  
  if(!title || !year || !episodes || !img || !id){
    
    res.status(400).json({msg: "Missing data"});
    return;
  }

  const newCharacter = {
    title: title, 
    year: year, 
    episodes: episodes, 
    img: img, 
    id: id
  };

  Character.updateOne({id:idToUpdate}, newCharacter).then((result) => {
    res.status(200).json({
      msg: `Character ${idToUpdate} updated successfully`
    });
  }).catch((error) => {
    console.log(error);
    res.status(500).json({msg: "Error"});
  });

  


};

const deleteCharacter = (req = request, res = response) => {

  const id = req.params.id;
  if(!id ){

    res.status(404).json({msg: "id not found"});
    return;
  }
  
  Character.deleteOne({id:id}).then((result) => {
    res.status(200).json({
      msg: `Character ${id} deleted successfully`
    });

  }).catch((error) => {
    console.log(error);
    res.status(500).json({msg: "Error"});
  });

};

module.exports = {
    getAllCharacters,
    getCharacterById,
    createCharacter,
    deleteCharacter,
    updateCharacter
}