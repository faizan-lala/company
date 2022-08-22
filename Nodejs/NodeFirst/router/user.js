const express=require('express');
const controller=require('../controller/user')
const router=express.Router();

router.post('/register',controller.Register)
router.post('/login',controller.Login)

module.exports=router;