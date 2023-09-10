import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './components/Mainpage'

function App() {
  return (
    <BrowserRouter>
      <div className='bg'>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
