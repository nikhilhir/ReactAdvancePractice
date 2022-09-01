
//console.log("welcome")

const http = require("http")
const fs=require("fs")


const server = http.createServer((req,res)=>{
    // console.log(req)
    // res.write("some mb of data")
    // res.write("some mb of data")
    // console.log(req.mathod)
    // console.log(req.url)
    // res.end("start ")

    //res.end("xyz")

    if(req.method==="GET"){
        if(req.url==="/"){
           return res.end("this is home page")
        }
        else if(req.url==="/contact"){
            return res.end("welcome to contact page")
        }
        else if(req.url==="/about"){
            return res.end("welcome to about page")
        }
        else if(req.url=="/details"){
            fs.readFile("./data.txt",{encoding:"utf-8"},(err,data)=>{
                console.log(data)
                res.end(data)
            })
        }
        
    }
    
})

server.listen(8080)