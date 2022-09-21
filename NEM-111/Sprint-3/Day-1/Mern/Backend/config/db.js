


//connect to database
const mongoose = require("mongoose");
const conneection = mongoose.connect("mongodb://127.0.0.1:27017/mern");
module.exports=conneection;
