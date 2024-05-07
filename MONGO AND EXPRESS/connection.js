const mongoose= require("mongoose")

async function mongoDBConnect(){
    return mongoose.connect("mongodb://127.0.0.1:27017/").then(()=>{
    console.log("db Connected")
}).catch((err)=>{
    console.log("This is the error",err)
})
}


module.exports ={
    mongoDBConnect  
}