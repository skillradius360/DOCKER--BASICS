let express = require("express")
let ural= require("url")
let exp= express()
let numBer = 22222222
// Middlewares are the intermediate functions that helps to check different conditional 
// statememnts such that they check certain conditions to go to the next code to be executed

exp.use((req,res,next)=>{
 if(ural.parse(req.url,true).query.id=="kid" && ural.parse(req.url,true).query.pass=="password"){
     next()
 }
 else{
    res.send("please Try again")
 }
})
exp.use((req,res,next)=>{
console.log("log in success")
next()
})


exp.get("/users/api",(req,res)=>{
return res.send({"response":200})
})
exp.listen("8080")