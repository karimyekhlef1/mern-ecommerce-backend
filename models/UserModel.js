const mongoose = require('mongoose')
const user = new  mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:[true,'name require']
    },

    email:{
        type:String,
        require:[true,'email require'],
        unique:true,
        lowecase:true 
    },
    phone:String,
    image:String,
    password:{
        type:String,
        require:[true,'password require'],
        minlength:[1,"too short password"]
    },
    role:{
        type: String,
        enum:['user','admin'],
        default: 'user'        
    }


},{timestamps:true})
module.exports = mongoose.model('User',user)


