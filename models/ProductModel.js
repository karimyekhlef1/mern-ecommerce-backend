const mongoose = require('mongoose')
const Schema = mongoose.Schema
const product = new Schema({
    titel:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    userId: {
        // Reference the User model
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
      },
      image: {
        type: String,
        required: false
      }

},{timestamps:true})
module.exports = mongoose.model('Product',product)

