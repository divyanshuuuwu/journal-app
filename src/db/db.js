const mongoose = require("mongoose")

const ConnectDB = async () => {
    try{ await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB is connected")

    }catch(err){
        console.error(err)
        
    }
    
}

module.exports = ConnectDB