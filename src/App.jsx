import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, Checkout, Products, Shop} from './pages/page'
import MyContext from './Context/MyContext'
import Footer from './components/Footer'
import { Website_Name } from './pages/data'
import Error from './components/Error'


function App() {

  return (
    <div className='App'>
      <MyContext>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/products/:id' element={<Products/>} />
          <Route path='/shop' element={<Shop/>}/>
          <Route path='*' element={<Error/>} />
        </Routes>
        <Footer/>
        <p className="footer-text">© 2023 {Website_Name}</p>
      </Router>
      </MyContext>
    </div>
  )
}

export default App
