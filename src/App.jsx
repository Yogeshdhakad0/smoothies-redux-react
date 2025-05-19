import React from 'react'
import Navber from './components/Navber'
import './app.css'


import Card from './pages/Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoPage from './pages/NoPage'
import { ToastContainer} from 'react-toastify';
import Home from './pages/Home'


function App() {
  return (

  <BrowserRouter>
  <Navber />
  
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/card" element={<Card />} />
    <Route path="*" element={<NoPage />} />
  </Routes>
  <ToastContainer />
</BrowserRouter>



    
  )
}

export default App
