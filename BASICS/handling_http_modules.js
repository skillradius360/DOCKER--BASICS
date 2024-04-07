const httpMod = require("http")
const fsMod = require("fs")
// const Mod = require("http")

let server = httpMod.createServer((request,response)=>{
    console.log(request.url)
    response.end("hello there!")
})

server.listen(8080,()=>{
    console.log("listening")
})