import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Cart' element={<cart/>} />
          <Route path='/Order' element={<PlaceOrder/>} />
          
        </Routes>
      </div>
      <Footer />
    </>
    
  )
}

export default App
