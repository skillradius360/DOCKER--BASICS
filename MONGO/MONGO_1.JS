const express = require("express")
const Url = require("url")
const mon= require("mongoose")

const exp = express()
exp.use(express.json())

exp.post("/data/Collect",(req,res)=>{
    console.log(req.body)
})

exp.listen("8080",()=>{
    console.log(" Express connnected")
})