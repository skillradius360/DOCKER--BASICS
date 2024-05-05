const express = require("express")
const Url = require("url")
const mongoose= require("mongoose")

const exp = express()
exp.use(express.json())
const baseSchema = mongoose.Schema({
    name:{type:String,
        required:true
    },
    id:{
        type:Number,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true
    }
})
empObj = mongoose.model("employees",baseSchema)
//<--------------------GET------------------->
exp.get("/api",async (req,res)=>{
    let data = await empObj.find({})
    console.log(data)
    return res.send(data)
})
//<--------------------POST------------------->
exp.post("/api/",async (req,res)=>{
    let x = req.body
    let entry1= await empObj.create({
        name:x.name,
        id:x.id,
        role:x.role,
    })
    console.log(entry1)
    res.status(200).json({"res":"success"})
})
//<--------------------PATCH------------------->
exp.patch("/api/k/:param",async (req,res)=>{
    await empObj.findByIdAndUpdate(req.params.param,{name:"DIPAYAN"})
    return res.send(201).json({changed})
})
exp.listen("8080",()=>{
    console.log("express Conn..")
})
//<--------------------DELETE-------------------->
exp.delete("/api/d/:id",async (req,res)=>{
    await empObj.findByIdAndDelete(req.params.id)
    return res.send(410)

})
mongoose.connect("mongodb://127.0.0.1:27017/").then(()=>{
    console.log("db Connected")
}).catch((err)=>{
    console.log("This is the error",err)
})

