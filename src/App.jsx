import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Archive from './pages/Archive/Archive';
import About from './pages/About/About';

function App() {
  return (
    <div>
       <BrowserRouter>
      <Navbar />

      <Footer/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/archive" element={<Archive/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App