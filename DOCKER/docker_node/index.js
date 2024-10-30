import Router from 'express'
export const n = Router()

n.route("/l").get((req,res)=>{
return res.json({
    "hey":"hello world"
})
})



