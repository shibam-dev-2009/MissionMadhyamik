import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import assets from '../../assets/assets'
function Hero() {
  return (
    <div className='hero'>
        
        <Header title="Welcome to Mission Madhyamik's private library" subtitle="A curated collection of stories, knowledge and shared favorites, gathered just for you."/>
        <Link to={"/archive"}><button className='btn'>Enter the Archive</button></Link>
    </div>
  )
}

export default Hero