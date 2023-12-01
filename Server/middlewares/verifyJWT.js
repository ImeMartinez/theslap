const {request, response} = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validateJWT = (req = request, res = response, next) => {
    const token = req.header("Authorization");
    if(!token){
        res.status(401).json({msg: "Missing token"});
        return;
    }

    try {
        const {id} = jwt.verify(token, process.env.SECRET_KEY);
        User.findOne({user:id}).then((result) => {
            if(result)
            {
                req.userActive = result;
                next();
            }
            else
            {
                res.status(401).json({
                    msg: "User or password incorrect",
                });
                return;
            
            }
        }).catch((error) => {
            res.status(500).json({msg: "Error"});
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: "Invalid token"});
        return;
    }
};

module.exports = {
    validateJWT
};