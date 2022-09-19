
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

const UserModel = require("./Model/User.model")
const connection = require("./Config/db")
const notesRouter = require("./Routes/notes.routers")
const authentication = require("./middleware/authentication")

require("dotenv").config()

app.post("/signup",async(req,res)=>{
    const {email,password}=req.body;
    await bcrypt.hash(password,8,function(err,hash){
        if(err){
            return res.send("signup fail")
        }
        const user = new UserModel({email,password:hash})
        user.save()
        return res.send("signup sussesfully")
    })
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user = await UserModel.findOne({email})
    if(!user){
        return res.send("invalid credential")
    }
    const hash_pass = user.password

    await bcrypt.compare(password,hash_pass,function(err,result){
        if(err){
            return res.send("please try again")
        }
        if(result == true){
            const token = jwt.sign(
              { email: user.email, _id: user._id },
              process.env.jwt_key
            );
            return res.send({"message":"login successfull",token:token,userId:user._id})
        }else{
            return res.send("Invalid Credential")
        }
    })
})
// **********************************************************
// const authentication = (req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.send("please login again");
//   }
//   const user_token = req.headers.authorization.split(" ")[1];
//   jwt.verify(user_token, process.env.jwt_key, function (err, decoded) {
//     console.log("authpage", process.env.jwt_key);
//     if (err) {
//       console.log("auth", err);
//       return res.send("please login again");
//     }
//     console.log(decoded);
//     // req.body.email = decoded.email;
//     // req.body.userId = decoded.userId;
//     next();
//   });
// };
// *****************************************************************
app.use(authentication)
app.use("/notes",notesRouter)


app.listen(5000,async()=>{
    try {
        await connection
        console.log("connected to db successful")
    } catch (error) {
        console.log("connecting to db failed")
        console.log(error)
    }
    console.log("server run on port http://localhost:5000")
})

