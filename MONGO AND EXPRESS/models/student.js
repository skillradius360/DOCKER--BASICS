const mongoose= require("mongoose")

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
const empObj = mongoose.model("employees",baseSchema)


module.exports = {empObj}