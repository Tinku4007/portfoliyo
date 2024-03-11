import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Header from '../components/Header'
import Experince from '../page/Experince'

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='#experince' element={<Experince />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routing