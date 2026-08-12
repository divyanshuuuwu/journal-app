import React from 'react'
import {ArrowRightToLine} from "lucide-react"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState(false);

    const [loginFail, setLoginFail] = useState(false);

    const registerPage = ()=>{
        navigate("/register",{replace:true})
    }

    
    const [identifier, setIdentifier] = useState("")

    const inputIdentifier = (e) => {
    setIdentifier(e.target.value)
}

    const [password, setPassword] = useState("")
    const inputPassword = (e)=>{
        setPassword(e.target.value)
    }

    const userData = {identifier: identifier,
        password:password
    }


    const loginHandler = async(e)=>{
        e.preventDefault()
        try{const response = await axios.post("http://localhost:3000/auth/login",userData,
            {
                withCredentials: true           // config
            }
        )
            console.log(response.data)
            if(response.data.message === "user logged in successfully"){
                setLoginSuccess(true);
                

                // Hide after 1 second
                 await setTimeout(() => {
                 setLoginSuccess(false),
                 navigate("/dashboard",{replace:true});
                 }, 2000);
            }
            
        }
        catch(err){
            console.log(err)
            setLoginFail(true)
            await setTimeout(() => {
                 setLoginFail(false)
                 
                 }, 2000);
        }

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
                    <input className='bg-amber-50 px-4 h-10 rounded-2xl border' type="text" placeholder='username or email'
                    onChange={inputIdentifier}
                    value={identifier}
                    />
                    <input className='bg-amber-50 px-4 h-10 rounded-2xl border ' type="password" placeholder='password'
                    onChange={inputPassword}
                    value={password}
                    />
                    <button 
                    className='bg-zinc-800 text-amber-50 font-bold mt-5 h-10 rounded-2xl border'
                    onClick={loginHandler}
                    
                    >
                        Login
                    </button>
                    
                    {/* register */}
                <div className='flex flex-row-reverse ' >
                    <h4  className=''
                    onClick={registerPage}
                    >You dont have a account?</h4>
                </div>
                    </form>
                </div>
                
            </div>   
        </div>
                        {loginSuccess && (
                        <div className="fixed top-5 right-5 rounded-lg bg-green-500 px-5 py-3 text-white shadow-lg">
                        Login Successful
                        </div>
                            )}

                             {loginFail && (
                        <div className="fixed top-5 right-5 rounded-lg bg-red-500 px-5 py-3 text-white shadow-lg">
                        Login Failed
                        </div>
                            )}
        
    </div>
  )
}

export default Login