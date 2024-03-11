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
        <Route path='/'>
          <Route path='/portfoliyo' element={<Home />} />
        </Route>
        {/* <Route path='#experince' element={<Experince />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routing