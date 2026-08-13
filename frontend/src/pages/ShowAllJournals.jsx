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

const deleteJournal = async(id)=>{
    
    try{
        await axios.delete(`http://localhost:3000/journals/delete/${id}`,{withCredentials:true})

        setJournalData(prev =>
            prev.filter(journal => journal._id !== id)
        )

    }catch(err){
        console.log(err)
    }
    
}












useEffect(()=>{
    AllJournalsApi()
},[])

let printJournal = <h1 className='font-bold text-6xl mt-10'>No Journal yet</h1>
if(journalData.length>0){
    printJournal = journalData.map((elem,index)=>{

        return <div className='bg-zinc-500 w-220 h-100 gap-2 rounded-4xl  p-8 mb-5 mt-10 flex flex-col
            text-2xl overflow-y-auto scrollbar-none
            justify-around font-semibold' key={elem._id}>
                <h1 className='bg-amber-100 rounded-2xl px-4 p-5'>Date: <br /> {elem.date}</h1>
                <h1 className='bg-amber-100 rounded-2xl px-4 p-5'>Gratitude:<br />  {elem.gratitude}</h1>
                <h1 className='bg-amber-100 rounded-2xl px-4 p-5'>Goals:<br /> {elem.goals}</h1>
                <h1 className='bg-amber-100 rounded-2xl px-4 p-5'>whatILearnt:<br />  {elem.whatILearnt}</h1>
                <h1 className='bg-amber-100 rounded-2xl px-4 p-5'>whatIDidWrong:<br />  {elem.whatIDidWrong}</h1>
                <div className='flex justify-around mt-2 h-10 font-bold'>
                    <button className='bg-amber-50 w-25 rounded-2xl'
                    onClick={() => deleteJournal(elem._id)}
                    >Delete</button>
                    <button className='bg-amber-50 w-25 rounded-2xl'>Upadte</button>
                </div>

            </div>

    })
}














  return (
    // screen
    <div className='bg-amber-100 h-full w-full flex justify-center items-center scrollbar-none mt-20'>
        {/* main conatiner */}
        <div className='bg-amber-50 w-300 h-220 rounded-4xl flex justify-center flex-wrap overflow-auto items-center'>
            {/* journal */}
            {printJournal}

            

        </div>
    </div>
  )
}

export default ShowAllJournals