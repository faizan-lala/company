const { request, response } = require('express');
const User=require('../model/user');
const { use } = require('../router/user');

exports.Register=(request,response)=>{
    let user=new User();
    user.fname=request.body.fname;
    user.lname=request.body.lname;
    user.email=request.body.email;
    user.password=request.body.password;
    user.conf_password=request.body.conf_password;

    user.save().then(result=>{
        return response.status(200).json({result:result});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({err:'Opps ! Something went wrong'});
    })
}

exports.Login=(request,response)=>{
    let user=new User();
    user.email=request.body.email;
    user.password=request.body.password;

    user.checkUser().then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json({err:'Opps ! Something went wrong'});
    })
}