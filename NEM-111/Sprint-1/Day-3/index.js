const { application } = require("express");
const express = require("express");
const App = express();

App.use(express.json())


// App.listen(8080,()=>{
//     console.log("Server started on http://localhost:8080")
// })
//acTUALLU THIS CREATE SERVER INTERNALLY 
//EXPRESS MIDDLEWARE
App.listen(5000, () => {
  console.log("Server Started on http://localhost:5000");
});

//with AXIOS WE MAKE THE REQUEST HEAR WE HANDLE THE REQUEST
// App.get("/",(req,res)=>{
//     res.end("Wellome to the home page")
// })

// App.get("/products",(req,res)=>{
//      //res.end("This is PRODUCT PAGE")
//      res.end(JSON.stringify([12,13,14,15]))
// })

// App.post("/products",(req,res)=>{
//     res.end(JSON.stringify([1,2,3,4]))
// })

App.use(express.json())

App.set('view engine','ejs')

//method + route , (callback, request and responce)
App.get("/", (req, res) => {
  //res.send("WELCome to the home page");
  //res.status(500).json({messsage:"error"})
  res.render("index")
});

App.get("/products", (req, res) => {
  res.send([1, 2, 3, 4]);
});

App.get("/newpage",(req,res)=>{
    res.send("<h1>WELCOME TO NEW PAGE</h1>")
})


App.get("/about",(req,res)=>{
  res.send("this is about page")
})

App.post("/adddetails",(req,res)=>{
  console.log(req.body)
  res.send("post request")
})


App.get("/profile",(req,res)=>{
  const {name,age}=req.query

})

App.get("/profile/:name", (req, res) => {
  console.log(req.params)
  const {name} = req.params
  res.send("welcome"+name)
});







