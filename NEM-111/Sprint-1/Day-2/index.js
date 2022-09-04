
//console.log("welcome")

const http = require("http")
const fs=require("fs")

//create server
const server = http.createServer((req,res)=>{
    // console.log(req)
    // res.write("some mb of data")
    // res.write("some mb of data")
    // console.log(req.mathod)
    // console.log(req.url)
    // res.end("start ")

    //res.end("xyz")

    if(req.method === "GET"){

                //METHOD GET //URL ABOUT
        const log=req.method + " " + req.url + "\n"
        fs.appendFile("./log.txt",log,(err,data)=>{
            if(err){
                console.log("cpoldn't log")
            }
        })
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
                res.write(data)
                res.end(data)
            })
            //return res.end()

        }
        
    }


    else if(req.method==="POST"){
        if(req.url==="/adddetails"){

            //get data from client
         console.log(req)
            //hear we get request comming from client
            //store it in file
           //seen in postman
            res.end("send something")

        }
    }
    
})

server.listen(8080)