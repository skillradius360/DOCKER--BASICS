const { urlencoded } = require("express")
const _fs = require("fs")
const express = require("express")()
const jsonFole = require("./MOCK_DATA.json")

express.use(urlencoded({extended:false}))
express.get("/about/api",(req,res)=>{
    return res.send(require("./MOCK_DATA.json"))
})

express.post("/about/api",(req,res)=>{
    let bodyy=req.body
    jsonFole.push({...bodyy,id:jsonFole.length+1})
    _fs.writeFile("./MOCK_DATA.json",JSON.stringify(jsonFole),(data,err)=>{
        return res.send({"request":200})
    })
})
express.listen("8080",()=>{
    console.log("server started")
})