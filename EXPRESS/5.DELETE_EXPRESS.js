let express = require("express")
let database = require("./MOCK_DATA.json")
let exp= express()
let fss= require("fs")

exp.use(express.urlencoded({extended:false}))

exp.delete("/user/delete/:param",(req,res)=>{
let param = req.params.param*1
let data = database.find((e)=>e.id===param)
let x =database.indexOf(data)
database[x]=""
fss.writeFile("./MOCK_DATA.json",(database),()=>{
    return res.send("Succeeded!")
})
})

exp.listen("9090",()=>{
    console.log("Listening")
})