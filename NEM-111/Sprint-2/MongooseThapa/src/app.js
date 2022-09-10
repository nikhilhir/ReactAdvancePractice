const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/playlist")
.then(()=>{console.log("succcesful")})
.catch((err)=>{console.log("error found")})


const dataaSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    job:String,
    employId:Number,
    auther:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const Playlist = new mongoose.model("Playlist",dataaSchema)

const emplotdata = new Playlist({
  name: {
    type: "String",
    required: true,
  },
  job: "developer",
  employId: 67,
  auther: "jonson",
  active: false,

});

emplotdata.save();





// const server = "127.0.0.1:27017"; // REPLACE WITH YOUR DB SERVER
// const database = "fcc-Mail"; // REPLACE WITH YOUR DB NAME

// class Database {
//   constructor() {
//     this._connect();
//   }

//   _connect() {
//     mongoose
//       .connect(`mongodb://${server}/${database}`)
//       .then(() => {
//         console.log("Database connection successful");
//       })
//       .catch((err) => {
//         console.error("Database connection error");
//       });
//   }
// }

// module.exports = new Database();