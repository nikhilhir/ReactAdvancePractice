
const express = require("express");
 const authRouter = require("./Routes/auth");
const connection = require("./config/db")
 const app=express()

 app.use(express.urlencoded({extended:true}));
// app.use=(express.json());




 




app.use("/auth",authRouter)


 app.listen(5000, async()=>{

   try {
      await connection
      console.log("connected to db")
   } catch (error) {
      console.log(error)
   }
    console.log('server running on port http://localhost:5000')
 })
