const db=require('../util/database');
module.exports= class User{
    constructor(fname,lname,email,password,conf_password){
        this.fname=fname;
        this.lname=lname;
        this.email=email;
        this.password=password;
        this.conf_password=conf_password;
    }
    save(){
        return new Promise((resolve,reject)=>{
            db.getConnection((err,con)=>{
                if(!err){
                    let sql="insert into register(fname,lname,email,password,conf_password) values(?,?,?,?,?)";
                    con.query(sql,[this.fname,this.lname,this.email,this.password,this.conf_password],(err,queryResult)=>{
                        con.release();
                        err?reject(err):resolve(queryResult);
                    })
                }
                else
                reject(err);
            });
        });
    }
    checkUser(){
        return new Promise((resolve,reject)=>{
            db.getConnection((err,con)=>{
                if(!err){
                    let sql="select * from register where email=? and password=?";
                    con.query(sql,[this.email,this.password],(err,queryResult)=>{
                        con.release();
                        err?reject(err):resolve(queryResult);
                    })
                }
                else{
                    reject(err);
                }
            });
        });
    }
}