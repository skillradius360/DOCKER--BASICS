// 100 - INFORMATION REQUESTS (not required)
// 200 - all ok for requests (201 - means something is created); 202-means Accepted
// 300 - means redirection responses
// 400 - means errors -- 400 bad request 401 unauthorized 404 page not found 403 forbidden 

const express = require("express")
let exp = express()

exp.use(express.urlencoded({extended:"true"}))
exp.post("/about",(req,res)=>{
    if(!req.body.id || !req.body.email){
        return res.status(400).json({"status":"id or email not present"})
    }
    else{
        res.status(202).json({"status":"accepted"})
    }
})
exp.listen("8080")