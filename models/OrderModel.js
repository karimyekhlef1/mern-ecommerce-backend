const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Order = new Schema({
    nameUser:{
        type:String,
        required:true
    },
    phoneUser:{
        type:String,
        required:true

    },
    addressUser:{
        type:String,

    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
    active :{
        type:Boolean,
        default:false
    }
},{timestamps:true})
module.exports = mongoose.model('Order',Order)
