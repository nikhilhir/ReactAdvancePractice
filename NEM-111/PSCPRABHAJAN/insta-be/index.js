
const express = require("express");
 const authRouter = require("./Routes/auth");

 const app=express()

 app.use(express.urlencoded({extended:true}));
 app.use=(express.json());




 



app.get("/",(req,res)=>{
res.send("hello world start node")
 })

//app.use("/auth",authRouter)


 app.listen(5000,()=>{
    console.log('server runningg on port http://localhost:5000')
 })
