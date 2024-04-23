const express = require("express")
const exp = express()
const database = require("./MOCK_DATA.json")
const fss = require("fs")

exp.use(express.urlencoded({extended:false}))
exp.get("/about",(req,res)=>{
return res.send(database)
})


exp.patch("/about/patch/:id",(req,res)=>{
    let id =req.params.id*1
        let x = database.find((e)=>e.id===id)
        let indexValue=database.indexOf(x)
        console.log(req.body)
        Object.assign(x,req.body)
        console.log(x)
        database[indexValue]=x

    fss.writeFile("./MOCK_DATA.json",JSON.stringify(database),(err)=>{
        return res.send(x)
    })
        })
   

exp.listen("8080",()=>{
    console.log("listening..")
})