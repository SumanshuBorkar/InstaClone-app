import React from 'react';
import { Link } from 'react-router-dom';
import image from './images/font.png'
import './css/landing.css'
function LandingPage() {
  return (
    <>
    <div className='landingcard'>
      <img src={image} alt="image not available"  className='this-is-the-landing'/>
      <Link to='/Post'><button className='button-50'>Enter</button></Link>
    </div>
    </>
  )
}

export default LandingPage