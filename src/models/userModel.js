const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require: true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        require:true
        
    },
    role:{
        type:String,
        enum:["user","admin"],
        default: "user"
    }

})

const userModel = mongoose.model("user",userSchema)
module.exports= userModel