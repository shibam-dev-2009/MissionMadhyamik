import React from 'react'
import './Header.css'
function Header(props) {
  return (
    <div className='h'>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
    </div>
  )
}

export default Header