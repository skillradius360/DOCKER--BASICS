const express = require("express")
const empObj = require("../models/student")


let getReqHandler=(async (req,res)=>{
        let data = await empObj.find({})
        console.log(data)
        return res.send(data)
    })

let postReqHandler = (async (req,res)=>{
    let x = req.body
    let entry1= await empObj.create({
        name:x.name,
        id:x.id,
        role:x.role,
    })
    console.log(entry1)
    res.status(200).json({"res":"success"})
})

let patchReqHandler =(async (req,res)=>{
    await empObj.findByIdAndUpdate(req.params.param,{name:"DIPAYAN"})
    return res.send(201).json({changed})
})

let deleteReqHandler =(async (req,res)=>{
    await empObj.findByIdAndDelete(req.params.id)
    return res.send(410)
})
let putReqHandler=(async(req,res)=>{
    await empObj.findByIdAndUpdate(req.params.params,{name:"sheeesh",id:"696",role:"sheesh"})
    return res.status(201).json({"put":"done"})
})


module.exports = {
    getReqHandler,
    patchReqHandler,
    deleteReqHandler,
    putReqHandler,postReqHandler
}