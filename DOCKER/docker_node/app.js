import express from "express"

const app = express()
try {
    app.listen(8000,()=>{
    app.on("error",(e)=>console.log("some error occured while in express"))
    console.log("connected to express ")
    })
} catch (error) {
    console.log("some error occured in express")
    throw new Error(error)
}

import { n } from "./index.js"

app.use("/a",n)
export  {app}

