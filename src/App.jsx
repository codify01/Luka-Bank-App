import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App