
const express = require("express");

 const app=express()

 



 app.get("/",(req,res)=>{

    res.send("hello world")
 })


 app.listen(5000,()=>{
    console.log('server runningg on port http://localhost:5000')
 })
