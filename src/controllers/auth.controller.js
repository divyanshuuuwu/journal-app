const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")



const registerUser = async (req, res) => {
    const {username , email , password , role="user"}= req.body
    
const isUserAlreadyExists = await userModel.findOne({
    $or:[
        {username},
        {email}
    ]
})
    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User Already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10)

        const user = await userModel.create({
            username,
            email,
            passowrd:hashedPassword,
            role
        })

        res.status(201).json({
        message:"user registered sucessfully",
        user:{
            username:user.username,
            email:user.email,
            role:user.role                  
        }
    })


}


const loginUser = async(req, res)=>{
    const {username , email , passowrd} = req.body

    const user = await User.findOne({
    $or: [
        { email: email },
        { username: username }
    ]
});

if(!user){
    return res.status(404).json({
        message:"user not found"
    })
}


} 












module.exports = {registerUser}