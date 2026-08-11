import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {

 const navigate = useNavigate();



const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const inputUsername = (e)=>{
  setUsername(e.target.value)
  
}

const inputEmail = (e)=>{
  setEmail(e.target.value)
}

const inputPassword = (e)=>{
  setPassword(e.target.value)
}

const registerData = {
  username:username,
  email:email,
  password:password,

}

const registerUser = async()=>{
  try{
        const response = await axios.post("http://localhost:3000/auth/register", registerData)
        console.log(response)
        console.log(response.data.message)
        navigate("/",{replace:true})
  }catch(err){
    console.log(err)
  }
}









  return (
    // screen
    <div className='bg-zinc-500 h-screen w-screen flex justify-center items-center'>
      {/* main conatiner */}
      <div className=' h-150 w-120 rounded-4xl flex justify-center items-center
            '>
          {/* inputs */}
          <div className='bg-zinc-300 h-130 w-100 rounded-4xl flex flex-col items-center justify-center text-2xl gap-6'>
            <h1 className='font-bold text-3xl mb-5'>Create a new account</h1>
            <input className='border rounded-2xl px-4 bg-white' type="text" 
            placeholder='Username'
            onChange={inputUsername}
            value={username}
            />
            <input className='border rounded-2xl px-4 bg-white' type="text" placeholder='email'
            onChange={inputEmail}
            value={email}
            />
            <input className='border rounded-2xl px-4 bg-white mb-8' type="password" placeholder='password'
            onChange={inputPassword}
            value={password}
            />
            <button className='bg-blue-300 p-1 w-30 rounded-2xl font-semibold border'
            onClick={registerUser}
            >Create</button>
          </div>
      </div>



    </div>
  )
}

export default Register