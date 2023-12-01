const { request, response } = require("express");
const User = require("../models/user");

const usersGet = (req = request, res = response) => {
    const { searchTerm } = req.query;

    User.find({name:RegExp(searchTerm)} ).then((result) => {
        res.status(200).json({
            usersList: result
        });
    
    }).catch((error) => {
        console.log(error);
        res.status(500).json({msg: "Error"});
    });
    

};


const userPost= (req = request, res = response) => {

    const {name, lastName, email, password} = req.body;


    if(!name || !lastName || !email || !password){
        res.status(400).json({msg: "Missing data"});
        return;
    }

    newUser = new User({
        name: name,
        lastName:lastName,
        email:email,
        password:password
    });

    newUser.save().then((result) => {
        res.status(201).json({
            msg: "Usuario creado",
            user: result
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).json({msg: "Error"});
    });

};

const userDelete = (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: "Api DELETE users - controller",
        result: `El usuario ${id} ha sido eliminado`
    });
};

const userPut = (req = request, res = response) => {
    const id = req.body.id;
    const id2 = req.params.id;
    const id3 = req.query.id;
    res.status(200).json({
        msg: "Api PUT users - controller",
        id,
        id2,
        id3
    });
};

const userPatch =(req, res = response) => {
    res.status(405).json({
        msg: "Api PATCH users - controller"
    });
};

module.exports = {
    usersGet,
    userPost,
    userDelete,
    userPut,
    userPatch
}