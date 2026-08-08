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

const showJournal = async(req,res)=>{
   try{ const alljournal = await journalModel.find(
        {user: req.user.id}
    )
    res.json({
        alljournal
    })}catch(err){
        console.log(err)
        res.json({
            message:"cant get the journals"
        })

    }
}




module.exports = {createJournal,showJournal}