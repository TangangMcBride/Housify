import { useState } from 'react'
import './scss/layout.scss'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home.jsx'
function App() {
 

  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>
        <Home/>
      </div>
    </div>
  )
}

export default App
