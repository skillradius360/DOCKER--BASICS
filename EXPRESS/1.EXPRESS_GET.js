const express = require("express")
const url_ =  require("url")
const dataSet = require("./MOCK_DATA.json")
const _PORT = 8080


let app= express()

app.get("/api/about",(req,res)=>{
    return res.json(dataSet)
})
app.get("/about",(req,res)=>{
    return res.send(
        `<ul>
       ${dataSet.map((e)=>`<li>${e.first_name}</li>`).join("")}</ul>`)
})

app.get("/about/:random",(req,res)=>{
    // req.params.random determines the dynamic path as there can be countless versions of users .params contain the data if there is a dynamic path that starts with :x .
let data= req.params.random 
console.log(typeof(data))
let ids= dataSet.find((e)=>{
  
    if(data==e.id){
        return e
    }
})
res.send(ids)
})

app.listen(_PORT,()=>{
    console.log("Server has started Listening!")
})