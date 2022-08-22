const express =require('express');
const bodyParser =require('body-parser');
const userRouter=require('./router/user');
// const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(cors());

const port = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/user',userRouter);


app.listen(port,()=>{
    console.log("Server is running or port : " + port);
});