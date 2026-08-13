import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = () => {

const navigate = useNavigate()

const {id} = useParams()



const handleChange = (e) => {
  setJournal({
    ...journal,
    [e.target.name]: e.target.value
  });
};



const [journal, setJournal] = useState({
  date:"",
  gratitude: "",
  goals: "",
  whatIDidWrong: "",
  whatILearnt: ""
});




useEffect(()=>{ 

    const fetchJournal = async()=>{
        try{
        const response =  await axios.get(`http://localhost:3000/journals/showbyid/${id}`,
            { withCredentials: true })
        console.log(response.data.show.date)
        setJournal(response.data.show);
            


    }catch(err){
        console.log(err)
    }
    }
    fetchJournal()

},[id])



const updateJournal = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.put(
      `http://localhost:3000/journals/update/${id}`,
      journal,
      {
        withCredentials: true
      }
    );

    console.log("PUT RESPONSE:", response.data);

  } catch (err) {
    console.log("UPDATE ERROR:", err.response?.data || err);
  }

 navigate("/showall")


};














  return ( 
    // screen
    <div className='bg-zinc-600 h-screen w-full flex justify-center items-center '>
        {/* main container */}
        <div className='bg-zinc-300 h-170 w-200 rounded-4xl flex items-center justify-center  '>
        {/* form */}
        
            <form className='flex gap-5 flex-col'
             onSubmit={updateJournal}>
                <div className='flex gap-5'>
                <label >Date:</label>
                <input className='border' type="text"
                name='date'
                value={journal.date}
                onChange={handleChange}
                />
                </div>

               <div className='flex gap-5 items-center' >
                <label >Gratitide:</label>
                <textarea className='border w-100 h-30 scrollbar-none'
                name='gratitude'
                value={journal.gratitude}
                onChange={handleChange}
                
                > </textarea>
                </div>

                <div className='flex gap-5 items-center' >
                <label >Goals:</label>
                <textarea className='border w-100 h-30 scrollbar-none'
                name='goals'
                value={journal.goals}
                onChange={handleChange}
                
                > </textarea>
                </div>

                <div className='flex gap-5 items-center' >
                <label >whatILearnt:</label>
                <textarea  className='border w-100 h-30 scrollbar-none'
                name='whatILearnt'
                value={journal.whatILearnt}
                onChange={handleChange}

                ></textarea>
                </div>

                <div className='flex gap-5 items-center' >
                <label >whatIDidWrong:</label>
                <textarea className='border w-100 h-30 scrollbar-none'
                name='whatIDidWrong'
                value={journal.whatIDidWrong}
                onChange={handleChange}
                
                
                > </textarea>
                </div>
                

                <button className='border-2 w-20 rounded-2xl bg-zinc-100'
               
                
                >Update</button>
        </form>

        </div>

    </div>
  )
}

export default Update