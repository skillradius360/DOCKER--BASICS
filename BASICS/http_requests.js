const serverMod = require("http")
const fsMod = require("fs")
const parserMod = require("url")

let d1= serverMod.createServer((req,res)=>{
   console.log( parserMod.parse(req.url,true))
    switch(parserMod.parse(req.url,true).pathname){
        case "/":
            res.end("You are in the parent")
            break
        case "/about":
            res.end("HEllo"+parserMod.parse(req.url,true).query.name)
            
            break
        case "/new":
            res.end("You are in the new")
            break
        default:
            res.end("404")
        }
})

d1.listen(8080,()=>{
console.log("This is inside the server")
})