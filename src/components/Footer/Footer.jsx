import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'
function Footer() {
  return (
    <div className='footer'>
        <div className="greet">
            <img src={assets.heart} alt="heart" />
            <p>Made with love in kolkata</p>
        </div>
        <p>Mission Uchcha Madhyamik</p>
        <p>This site is under devolopement</p>
        <p>All Books are Copyrighted don't misuse it</p>
    <div className='social'>
        <a href="https://www.youtube.com/@MissionMadhyamik100"><img src={assets.youtube} alt="Youtube" /></a>
        <a href="https://chat.whatsapp.com/Jp5xfPfnVoN0sOZUyH5t5B"><img src={assets.whatsapp} alt="Whatsapp" /></a>
        <a href="https://t.me/+6y6tcv4zvxBhYTg1"><img src={assets.telegram} alt="Telegram" /></a>
    </div>
    </div>
  )
}

export default Footer