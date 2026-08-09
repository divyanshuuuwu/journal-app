import React from 'react'
import {ArrowRightToLine} from "lucide-react"
import { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState("")
    const inputUsername = (e)=>{
        setUsername(e.target.value)
    }

    const [password, setPassword] = useState("")
    const inputPassword = (e)=>{
        setPassword(e.target.value)
    }

    const loginHandler = (e)=>{
        e.preventDefault()
        console.log("hello")
    }









  return (
    <div>
        {/* screen */}
        <div className='flex h-screen w-full justify-center items-center '>
            {/* main container */}
         <div className='h-150 w-120 bg-blue-200 rounded-4xl     '>
                {/* top icon */}
                <div className='mt-12  rounded-2xl p-2
                 flex justify-center '>
                    <ArrowRightToLine className='w-22 h-20 bg-blue-50 rounded-3xl' size={60}/>
                </div>
                {/* Heading */}
                <div className='h-20 flex flex-col  mt-8  '>
                    <h1 className='font-bold text-3xl justify-center flex '>Login </h1>
                    <h3 className='font text-2xl justify-center flex'>Make a new journal everyday</h3>
                </div>
                {/* inputs */}
                <div className='flex justify-center items-center mt-5 '>
                    <form className=' flex flex-col gap-2 w-80 ' action="">
                    <input className='bg-amber-50 px-4 h-10 rounded-2xl' type="text" placeholder='username or email'
                    onChange={inputUsername}
                    value={username}
                    />
                    <input className='bg-amber-50 px-4 h-10 rounded-2xl' type="text" placeholder='password'
                    onChange={inputPassword}
                    value={password}
                    />
                    <button 
                    className='bg-zinc-800 text-amber-50 font-bold mt-5 h-10 rounded-2xl'
                    onClick={loginHandler}
                    
                    >
                        Login
                    </button>
                    {/* register */}
                <div className='flex flex-row-reverse ' >
                    <h4  className=''>You dont have a account?</h4>
                </div>
                    </form>
                </div>
                
            </div>   
        </div>
    </div>
  )
}

export default Login