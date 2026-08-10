import React from 'react'

const ShowAllJournals = () => {
  return (
    // screen
    <div className='bg-amber-200 h-screen w-full flex justify-center items-center '>
        {/* main conatiner */}
        <div className='bg-amber-50 w-250 h-220 rounded-4xl flex justify-center  '>
            {/* journals */}
            <div className='bg-amber-800 w-220 h-80 m rounded-4xl mt-5 p-8  flex flex-col
            text-2xl
            justify-around'>
                <h1 className='bg-amber-100'>Date</h1>
                <h1 className='bg-amber-100'>Date</h1>
                <h1 className='bg-amber-100'>Date</h1>
                <h1 className='bg-amber-100'>Date</h1>
                <h1 className='bg-amber-100'>Date</h1>

            </div>

        </div>
    </div>
  )
}

export default ShowAllJournals