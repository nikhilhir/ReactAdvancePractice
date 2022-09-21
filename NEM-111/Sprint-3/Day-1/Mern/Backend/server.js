
const express = require("express");

const app = express()
app.use(express.json())

const conneection = require("./config/db");

const userControler = require("./routers/user.routers")
const notesControler = require("./routers/notes.routers");
const authentication = require("./middleware/authentication")


app.get("/",(req,res)=>{
    res.send("welcome to home page")
})



app.use(authentication)

app.use("/user", userControler);
app.use("/note",notesControler)


app.listen(9000,async()=>{
    try {
        await conneection
        console.log("db connected succesfully")
    } catch (error) {
        console.log("err connected to db")
        console.log(error)
    }
    console.log("server run on port http://localhost:9000")
})