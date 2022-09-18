
const express = require("express");
const userControler = express.Router();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");


const UserModel = require("../models/User.modules");





userControler.post("/register", (req,res)=>{
    const {email,password}= req.body;
    bcrypt.hash(password, 6,  async function(err, hash) {
        if(err){
            console.log("user.routes",err)
            res.send("please try again")
        }
      const user = new UserModel({
             email,
             password:hash
        })
         await user.save();
       res.send("in signup successfull")
      
    });


})

userControler.post("/login",async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({email})
  if(!user){
    return res.send("Invilid credential")
  }
  const hash = user.password;
  const userId=user._id
  bcrypt.compare(password, hash, function (err, result) {
    // result == true
    if(result){
        var token = jwt.sign({ email,userId}, "secret");
       return res.send({"message":"login successfull","token":token})
    }else{
       return res.send("Invilid crendential")
    }
  });

});


module.exports= userControler