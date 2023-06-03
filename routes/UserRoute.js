const express = require('express')

const {SingIn,logIn}=require('../controllers/UserControllers')

const router = express.Router()


router.post('/singin', SingIn)
router.post('/login', logIn)


module.exports=router