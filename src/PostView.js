import React from 'react'
import { Link } from 'react-router-dom';
import image from './images/font.png';
import camera from './images/camera@2x.png'
import './css/posts.css'
import Postcard from './postcard';
import data from './data'

function PostView() {
  function ncard(val){
    return <Postcard 
      imageUrl={val.PostImage}
      description={val.description} 
      likes={val.likes} 
      name={val.name} 
      location={val.location}
      date={val.date}
      />
  }
  return (
    <>
    <div className="box">
    <div className="navbar">
      <img src={image} alt="not availabel"  className='logo-ka-logo'/>
      <Link to='/newPosts' className='nplopo'><img src={camera} alt="not available" className='camera'/></Link>
    </div>
    <div className="container-ka-container">
        {data.map(el=> ncard(el))}
    </div>
    </div>
    </>
  )
}

export default PostView

