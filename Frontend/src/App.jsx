import { useState } from 'react'
import './scss/layout.scss'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/homePage/Home.jsx'
import { Outlet } from 'react-router-dom'
function App() {
 

  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
