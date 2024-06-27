import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Success from './pages/Success'
import Home from './pages/Home'

function App() {
 

  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/success" element={<Success/>} />
   
   </Routes>
   </BrowserRouter>
  )
}

export default App
