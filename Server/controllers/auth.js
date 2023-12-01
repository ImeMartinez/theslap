const { request, response } = require("express");
const User = require("../models/user");
const { generateJWT } = require("../helpers/jwt");



const login = (req = request, res = response) => {

    const {user, password} = req.body;

    if(!user || !password){
        res.status(400).json({msg: "Missing data"});
        return;
    }

    User.findOne({user:user, password:password}).then((result) => {
        if(result){
            generateJWT(user).then((token) => {
                res.status(200).json({
                    token: token,
                });

            }).catch((error) => {
                console.log(error);
                res.status(500).json({msg: error});
            })
            
        }
        else
        {
            res.status(401).json({
                msg: "User or password incorrect",
            });
            return;
        
        }

    }).catch((error) => {
        console.log(error);
        res.status(500).json({msg: "Error"});
    });

    
};



module.exports = {
    login,
}