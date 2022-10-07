

//const express = require("express");
//const app=express()

const express = require("express");


const authRouter = express.Router();

const UserModel = require("../Models/UserModels")

authRouter.post("/signup", (req,res)=>{
 //const { email, password } = req.body;
  const user = new UserModel({
     name,
     username,
     email,
     password,
     mobile,
     country,
     gender
  });

   user.save((err, success) => {
    if (err) {
      return res.status(500).send({ msg: "somethong went wrong" });
    }
    return res.status(200).send({ msg: " signup sussessfull" , user:success["_doc"]});
  });

  //user:success["_doc"]
})

authRouter.post("/login",async (req,res)=>{

    const {username,password}=req.body

    const validuser = await UserModel.find({username,password})

    if(!validuser){
        return res.status(500).send({msg:"invalid"})
    }

    
    return res.status(200).send(validuser)

})

module.exports = authRouter;




// {
 
//  "name": "nikhil",
//   "username":"nikhil1234",
//   "email":"nikhil@gmail.com",
//   "password":"nikhilhir",
//   "mobile":"4567891235",
//   "country":"India",
//   "gender":"Male"
 
 
// }




// onst express = require("express");
// const userControler = express.Router();
// const bcrypt = require("bcrypt");
// var jwt = require("jsonwebtoken");


// const UserModel = require("../models/User.modules");





// userControler.post("/register", (req,res)=>{
//     const {email,password}= req.body;
//     bcrypt.hash(password, 6,  async function(err, hash) {
//         if(err){
//             console.log("user.routes",err)
//             res.send("please try again")
//         }
//       const user = new UserModel({
//              email,
//              password:hash
//         })
//          await user.save();
//        res.send("in signup successfull")
      
//     });


// })

// userControler.post("/login",async (req, res) => {
//   const { email, password } = req.body;
//   const user = await UserModel.findOne({email})
//   if(!user){
//     return res.send("Invilid credential")
//   }
//   const hash = user.password;
//   const userId=user._id
//   bcrypt.compare(password, hash, function (err, result) {
//     // result == true
//     if(result){
//         var token = jwt.sign({ email,userId}, "secret");
//        return res.send({"message":"login successfull","token":token})
//     }else{
//        return res.send("Invilid crendential")
//     }
//   });

// });


// module.exports= userControle