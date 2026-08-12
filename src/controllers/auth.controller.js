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
            password: hashedPassword,
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
    const {identifier , password} = req.body

const user = await userModel.findOne({
    $or: [
        { email: identifier },
        { username: identifier }
    ]
});
 
if(!user){
    return res.status(404).json({
        message:"user not found"
    })
}

const isPasswordValid = await bcrypt.compare(password , user.password)
if(!isPasswordValid){
    return res.status(401).json({
        message:"Password is incorrect"
    })
}

const token = jwt.sign({
    id:user._id,
    role:user.role
},process.env.JWT_SECRET)

res.cookie("token", token)

  res.status(200).json({
        message:"user logged in successfully",
        user:{
            username:user.username,
            email:user.email,
            role:user.role
        }
    })



} 












module.exports = {registerUser, loginUser}