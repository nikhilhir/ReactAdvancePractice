
const jwt = require("jsonwebtoken")

const authentication = (req,res,next)=>{
    if(!req.headers.authorization){
        
        return res.send("please login again")
    }
    const user_token = req.headers.authorization.split(" ")[1]
    jwt.verify(user_token, "secret", function (err, decoded) {
      if (err) {
        console.log("auth",err)
        return res.send("please login again");
      }
      console.log(decoded);
      req.body.email = decoded.email;
      req.body.userId = decoded.userId
      next();
    });
}

module.exports=authentication