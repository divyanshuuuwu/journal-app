const journalModel = require("../models/journalModel")


const createJournal = async(req , res)=>{
    const {date, gratitude, goals, whatIDidWrong, whatILearnt } = req.body

    try{
        const newJournal = await journalModel.create({
            date,
            gratitude,
            goals,
            whatIDidWrong,
            whatILearnt,
            user: req.user.id
            
        })
        res.status(200).json({
            message:"Journal created sucessfully",
            journal: newJournal
        })

    }catch(err){
         console.log(err);
        res.status(400).json({
            message:"Date is required"
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

const showById = async(req,res)=>{
    const id = req.params.id
    try{
        const show = await journalModel.findOne({
            _id:id,
            user: req.user.id
        })    
        
        if(!show){

            return res.status(404).json({
                message:"Journal not found"
            })
        }
        res.status(200).json({
            show
        })
        

    }catch(err){
        console.log(err),
        res.json({
            message:"cant fetch"
        })

    }
}

const updateJournal = async(req,res)=>{
    const id = req.params.id
   try{const userUpdated = await journalModel.findOneAndUpdate(
        {_id:id, user:req.user.id}, req.body,{new:true}) 


        if(!userUpdated){
            return res.status(404).json({
                message:"journal not found"
            })
        }

        return res.status(200).json({
            message:"updated sucessfully",
            userUpdated

        })

    }catch(err){
        console.log(err)
        return res.status(404).json({
            message:"cant update"
        })

    }
}

const deleteJournal = async(req, res)=>{
    
    const id = req.params.id
     try{const userDeleted = await journalModel.findOneAndDelete(
        {_id:id, user:req.user.id}) 


        if(!userDeleted){
            return res.status(404).json({
                message:"journal not found"
            })
        }

        return res.status(200).json({
            message:"deleted sucessfully",
            userDeleted

        })

    }catch(err){
        console.log(err)
        return res.status(404).json({
            message:"cant delete"
        })

    }


}



module.exports = {createJournal, showJournal, showById, updateJournal, deleteJournal}