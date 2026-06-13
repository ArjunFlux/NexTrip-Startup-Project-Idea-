import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import StartPage from './Pages/StartPage'
import SignUpPage from './Pages/SignUpPage'
import AboutUsPage from './Pages/AboutUsPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
