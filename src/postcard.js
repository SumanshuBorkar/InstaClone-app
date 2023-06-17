import React from 'react';
import './css/postcard.css'
import heart from './images/heart.png'
import send from './images/share.png';
import info from './images/icons8-hamburger.svg'
const Postcard = ({ imageUrl, description, likes, name, location, date}) => {
  return (
    <div className='post-card'>
      <div className="card-header">
        <div className="left-header">
          <div className="name-acc">{name}</div>
          <div className="location-acc">{location}</div>
        </div>
        <div className='right-header'>
          <img src={info} alt="this is a logo" />
        </div>
      </div>
      <div className='img-container'><img src={imageUrl} alt={description} className='post-image' /></div>
      <div className='post-info'>
        <div className="like-send-comment">
          <span><img src={heart} className='heart-like' alt="heart is not heart" />
          <div className='likes-lis'>{likes} Likes</div></span>
          <span><img src={send} alt="" className='send-item' /></span>
        </div>
        <div className='date-of-post'>{date}</div>
        <div className='comment-likkes'>{description}</div>
      </div>
    </div>
  );
};

export default Postcard;
