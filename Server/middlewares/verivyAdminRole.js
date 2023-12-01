const { response, request } = require("express");
const veryfyAdminRole = (req = request, res = response, next) => {
    
    if(!req.userActive){
        return res.status(500).json({
            msg: "Permission denied"
        });
    }

    if(req.userActive.role !== "admin"){
        return res.status(500).json({
            msg: "Permission denied"
        });
    }

    next();
}

module.exports = {
    veryfyAdminRole
}