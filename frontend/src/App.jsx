import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import ShowAllJournals from './pages/ShowAllJournals';
import Register from "./pages/Register"
import Update from './pages/Update';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/' element={ <Login/>} />
    <Route path='/dashboard' element={ <Dashboard/>} />
    <Route path='/showall' element={<ShowAllJournals/>} />
    <Route path='/update' element={<Update/>}/>
    

    </Routes>
    
    </BrowserRouter>
  )
}

export default App