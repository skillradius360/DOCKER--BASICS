const httpMod = require("http");
const expMod = require("express");

const app= expMod()

app.get("/",(req,res)=>{
return res.send("This is in parent")
})
app.get("/about",(req,res)=>{
    console.log(req.query.name)
    return res.send("This is in about"+req.query.name)
})


// No need for even the https module
// let serverbase=httpMod.createServer(initExp)
// serverbase.listen(8080,()=>{
//     console.log("listening")
// })

// Express acquires the http module internally
app.listen(8080,()=>{
    console.log("Listening...")
})