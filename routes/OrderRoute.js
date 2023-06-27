
const express = require('express')
const {verifyToken} = require('../controllers/verifytoken')
const {verifyadmin} = require('../controllers/verifyadmin')

const router =express.Router()

const {CreatOrder , GetOrders ,DeletOrder} = require('../controllers/OrdersController')
   

router.post('/creat',CreatOrder )
router.get('/get' , verifyToken, verifyadmin,GetOrders )
router.delete('/delet', verifyToken, verifyadmin,DeletOrder)

 

module.exports = router