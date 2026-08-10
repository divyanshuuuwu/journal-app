import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const ShowAllJournals = () => {

    const [journalData, setJournalData] = useState([])

const AllJournalsApi = async()=>{
    try{
        const response = await axios.get("http://localhost:3000/journals/showall",{withCredentials:true})
    setJournalData(response.data.alljournal)
    console.log(response.data.alljournal)

    }catch(err){
        console.log(err.data.message)
    }
}

useEffect(()=>{
    AllJournalsApi()
},[])

let printJournal = <h1 className='font-bold text-6xl mt-10'>No Journal yet</h1>
if(journalData.length>0){
    printJournal = journalData.map((elem,index)=>{

        return <div className='bg-amber-900 w-220 h-100 gap-2 rounded-4xl mt-5 p-8 mb-5 flex flex-col
            text-2xl overflow-auto
            justify-around font-semibold' key={index}>
                <h1 className='bg-amber-100 rounded-2xl px-4 p-5'>Date: <br /> {elem.date}</h1>
                <h1 className='bg-amber-100 rounded-2xl px-4 p-5'>Gratitude:<br />  {elem.gratitude}</h1>
                <h1 className='bg-amber-100 rounded-2xl px-4 p-5'>Goals:<br /> {elem.goals}</h1>
                <h1 className='bg-amber-100 rounded-2xl px-4 p-5'>whatILearnt:<br />  {elem.whatILearnt}</h1>
                <h1 className='bg-amber-100 rounded-2xl px-4 p-5'>whatIDidWrong:<br />  {elem.whatIDidWrong}</h1>
                <div className='flex justify-around mt-2 h-10 font-bold'>
                    <button className='bg-amber-50 w-25 rounded-2xl'>Delete</button>
                    <button className='bg-amber-50 w-25 rounded-2xl'>Edit</button>
                </div>

            </div>

    })
}














  return (
    // screen
    <div className='bg-amber-100 h-screen w-full flex justify-center items-center '>
        {/* main conatiner */}
        <div className='bg-amber-50 w-300 h-220 rounded-4xl flex justify-center flex-wrap overflow-auto'>
            {/* journal */}
            {printJournal}

            

        </div>
    </div>
  )
}

export default ShowAllJournals