import React from 'react'
import bgimg from '../assets/book bg.png'
import { useState } from 'react'

const Dashboard = () => {

















  return (
    // main screen
    <div className='bg-[#F3EBDD] h-screen w-full text-[#292B25]'>
        {/* navbar */}
        <div className='flex justify-between p-5 bg-[#C8B79C]'>
            <h1 className='text-4xl font-bold'>My journal</h1>
            {/* navbar 2 */}
            <div className='flex space-x-60 font-bold mr-9'>
                <h1 className='text-2xl'>Search</h1>
                <h1 className='text-2xl'>Profile</h1>
            </div>
        </div>
        {/* main container */}
        <div className='bg-[#F5F0E8] h-8/9 w-full flex flex-wrap gap-20'>
            {/* left component */}
        <div className='bg-[#E2D5C3] w-50 h-162.3 '>
            <div className=' p-4 flex flex-col gap-25 mt-30 items-center font-bold text-2xl'>
            <h1 className='bg-[#D6C5AA] border p-2 rounded-2xl'>Journals</h1>
            <h1 className='bg-[#D6C5AA] border p-2 rounded-2xl'>settings</h1>
            <h1 className='bg-[#D6C5AA] border p-2 rounded-2xl'>logout</h1>
            </div>
        </div>
        {/* right */}
        <div className='h-162.3 w-300 flex justify-center items-center'>
            {/* image container */}
            <div className='h-160 w-250 bg-contain bg-no-repeat bg-center flex justify-center items-center'
             style={{ backgroundImage: `url(${bgimg})` }}> 

             {/* text area */}
            <div className=' mt-10 h-150 w-150 flex flex-wrap justify-between'>
                {/* section 1 */}
                <div className=' h-40 w-70  mt-25'>
                    <textarea className='h-40 w-70'></textarea>
                </div>
                {/* section 2 */}
                <div className=' h-40 w-70 mt-25'>
                    <textarea className='h-40 w-70'></textarea>
                </div>
                {/* section 3 */}
                <div className=' h-50 w-70 mt-2'>
                    <textarea className='h-40 w-70'></textarea>
                </div>
                {/* section 4 */}
                <div className=' h-40 w-70 mt-12'>
                    <textarea className='h-40 w-70'></textarea>
                </div>

            </div>
                
            </div>
            <button className='bg-blue-300 p-2 border rounded-3xl'>Create journal</button>
        </div>
        </div>

    </div>
  )
}

export default Dashboard