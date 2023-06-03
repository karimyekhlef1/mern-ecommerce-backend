// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2IxNzEwZTBlMTc1OTc4YjVmYzZiZiIsImlhdCI6MTY4NTc4ODU1M30.I6jEj5YYX-Geo1tS31zu4Wc7NrEomG1JqfJ1qcRx4zQ

const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWTSEC = "QASCXBGFS";

const verifyToken  =(req,res,next)=>{

    const authHedear = req.headers.token
    if(authHedear){
        const token = authHedear;
        const test = jwt.verify(token , JWTSEC , (err , user)=>{
                if(err) return res.status(400).json("Some error occured");
                req.user = user;
                next();
        
        })

}else{
    return res.status(400).json("Access token is not valid")
}

}
module.exports  = {verifyToken};