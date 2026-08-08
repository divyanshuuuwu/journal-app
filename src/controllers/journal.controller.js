const journalModel = require("../models/journalModel")


const createJournal = async(req , res)=>{
    const {date, gratitude, goals, whatIDidWrong, whatILearnt } = req.body

    try{
        const newJournal = await journalModel.create({
            date,
            gratitude,
            whatIDidWrong,
            whatILearnt,
            user: req.user.id
            
        })
        res.status(200).json({
            message:"Journal created sucessfully",
            journal: newJournal
        })

    }catch(err){
        throw console.error(err);
        res.status(401).json({
            message:"Journal is not created"
        })
        
    }


}




module.exports = {createJournal}