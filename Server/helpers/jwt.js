const jwt = require('jsonwebtoken');

const generateJWT = (id = "") => {
    return new Promise((resolve, reject) => {
        const payload = {id};

        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "4h",
        }, (error, token) => {
            if(error){
                console.log(error);
                reject("Token could not be generated");
            }
            else
            {
                resolve(token);
            }
        });
    });

};

module.exports = {
    generateJWT,
}