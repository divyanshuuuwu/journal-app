import React from 'react'

const Update = () => {








  return (
    // screen
    <div className='bg-zinc-600 h-screen w-full flex justify-center items-center '>
        {/* main container */}
        <div className='bg-zinc-300 h-170 w-200 rounded-4xl flex items-center justify-center  '>
        {/* form */}
        
            <form className='flex gap-5 flex-col'>
                <div className='flex gap-5'>
                <label >Date:</label>
                <input className='border' type="text" />
                </div>

               <div className='flex gap-5 items-center' >
                <label >Gratitide:</label>
                <textarea className='border w-100 h-30 scrollbar-none'> </textarea>
                </div>

                <div className='flex gap-5 items-center' >
                <label >Goals:</label>
                <textarea className='border w-100 h-30 scrollbar-none'> </textarea>
                </div>

                <div className='flex gap-5 items-center' >
                <label >whatILearnt:</label>
                <textarea  className='border w-100 h-30 scrollbar-none'></textarea>
                </div>

                <div className='flex gap-5 items-center' >
                <label >whatIDidWrong:</label>
                <textarea className='border w-100 h-30 scrollbar-none'> </textarea>
                </div>
                


        </form>

        </div>

    </div>
  )
}

export default Update