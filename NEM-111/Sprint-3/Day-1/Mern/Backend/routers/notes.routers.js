const express = require("express");




const NotesModel = require("../models/Notes.modules");
const notesControler = express.Router();

notesControler.post("/create", async(req, res) => {

   const { title, note,label,userId } = req.body;
   const notee =new NotesModel({
        title,
        note,
        label,
        userId
   })
   await notee.send()
   res.send({"message":"notes created"})
//   bcrypt.hash(password, 6, async function (err, hash) {
//     if (err) {
//       res.send("please try again");
//     }
//     const user = new UserModel({
//       email,
//       password: hash,
//     });
//     await user.save();
//     res.send("in signup successfull");
//   });
});

notesControler.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.send("Invilid credential");
  }
  const hash = user.password;
  const userId = user._id;
  bcrypt.compare(password, hash, function (err, result) {
    // result == true
    if (result) {
      var token = jwt.sign({ email, userId }, "secret");
      return res.send({ message: "login successfull", token: token });
    } else {
      return res.send("Invilid crendential");
    }
  });
});

module.exports = notesControler;
