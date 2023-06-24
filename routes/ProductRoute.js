
const express = require('express')
const {verifyToken} = require('../controllers/verifytoken')
const {verifyadmin} = require('../controllers/verifyadmin')

const router =express.Router()

const {
    CreatProduct,
    GetProducts , 
    GetProductById,
    UpdateProduct,
    DeleteProduct ,
    GetProductByUser }= require('../controllers/ProductControllers')


  router.post('/creat',verifyToken,verifyadmin,CreatProduct )
  router.get('/all', GetProducts)
  router.get('/:id',GetProductById)
  router.put('/update/:id',verifyToken,verifyadmin, UpdateProduct)
  router.delete('/delete/:id',verifyToken,verifyadmin,DeleteProduct) 
  router.get('/user/:id',GetProductByUser)

module.exports = router