const express = require("express")
const Url = require("url")
const mongoose= require("mongoose")

const exp = express()
exp.use(express.json())
// exp.use(express.urlencoded({extended:"false"}))

// SCHEMA
const mongoSchema = new mongoose.Schema({
    
        name:{
            type:String,
            required:true,
        },
        class:{
            type:String
        },
        email:{
            type:String,
            // unique:true,
            required:true
        }
})
const StudentObj = mongoose.model("StudentObj",mongoSchema)




exp.post("/data",async (req,res)=>{
   
    // CREATE A ENTRY to insert
const entry1= await StudentObj.create({
    name:req.body.name,
    class:req.body.class,
    email:req.body.email,
    })
    console.log(entry1)
    return res.status(201).json({msg:"inserted"})
})


exp.listen("8080",()=>{
    console.log(" Express connnected")
})
// CONNECT
mongoose.connect("mongodb://127.0.0.1:27017/").then(()=>{
    console.log("DB CONNECTED")
}).catch((error)=>{
    console.log("error",error)
})