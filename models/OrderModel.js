const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Order = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true

    },
    address:{

    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
},{timestamps:true})
module.exports = mongoose.model('Order',Order)
