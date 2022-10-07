const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {type:String ,min:3},
  username:{type:String},
  email:String,
  password:String,
  mobile:{type:String},
  country:String,
  gender:{type:String,enum:["MAle","Female"]},

})

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   password: { type: String, required: true },
// });

// const UserModel = mongoose.model("user", userSchema);

// module.exports = UserModel;
