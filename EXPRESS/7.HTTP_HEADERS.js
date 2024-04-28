const exp = require("express")

let expresS = exp()

expresS.get("/api",(req,res)=>{
console.log(req,"This is the request\n")
res.setHeader("X-gay","you")
console.log(res.getHeader("X-gay"))
res.send(res.headers)

})

expresS.listen("8080",()=>{
console.log("listenung")
})