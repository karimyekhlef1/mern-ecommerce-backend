
const express = require('express')
const {verifyToken} = require('../controllers/verifytoken')
const {verifyadmin} = require('../controllers/verifyadmin')

const router =express.Router()

const {CreatOrder , GetOrders} = require('../controllers/OrdersController')
   


router.post('/creat',CreatOrder )
router.get('/get' , verifyToken, verifyadmin,GetOrders )

 

module.exports = router