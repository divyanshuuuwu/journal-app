import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import ShowAllJournals from './pages/ShowAllJournals';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Login/>} />
    <Route path='/dashboard' element={ <Dashboard/>} />
    <Route path='/showall' element={<ShowAllJournals/>} />



    </Routes>
    
    </BrowserRouter>
  )
}

export default App