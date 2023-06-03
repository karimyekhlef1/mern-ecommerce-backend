
const User = require('../models/UserModel');
const verifyadmin  =async (req,res,next)=>{

    const userID = req.user.id
  try{
    if(userID){
        const user = await User.findById(userID);
        
        if(user.role === "admin"){
          next();
        }
        else{
            return res.status(400).json("you are not admin ")

        }

    }else{
        return res.status(400).json("user is not exist ")
    }

  }catch(err){
    res.status(500).send(err)
  }


}
module.exports  = {verifyadmin};