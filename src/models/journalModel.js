const mongoose = require("mongoose")

const journalSchema = new mongoose.Schema({
    date:{
        type : String,
        required : true
    },
    gratitude:{
        type:String
    },
    goals:{
        type:String
    },
    whatIDidWrong:{
        type:String
    },
    whatILearnt:{
        type:String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    
})

const journalModel = mongoose.model("journal", journalSchema)
module.exports = journalModel