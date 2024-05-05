const express = require("express")
const router = express.Router()

router.get("/",async (req,res)=>{
    let data = await empObj.find({})
    console.log(data)
    return res.send(data)
})
//<--------------------POST------------------->
router.post("/",async (req,res)=>{
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
router.route("/:id")
.patch(async (req,res)=>{
    await empObj.findByIdAndUpdate(req.params.param,{name:"DIPAYAN"})
    return res.send(201).json({changed})
})

//<--------------------DELETE-------------------->
.delete(async (req,res)=>{
    await empObj.findByIdAndDelete(req.params.id)
    return res.send(410)

})

.put(async(req,res)=>{
    await empObj.findByIdAndUpdate(req.params.params,{name:"sheeesh",id:"696",role:"sheesh"})
    return res.status(201).json({"put":"done"})
})

module.exports={
    router
}