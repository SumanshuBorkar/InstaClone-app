import React, { useState} from 'react';
import { useNavigate} from "react-router-dom"
import data from './data';
import './css/form.css'
const NewPostForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPost = {
      name: name,
      location: location,
      likes: 0,
      description: description,
      PostImage: URL.createObjectURL(image),
      date: new Date().toLocaleDateString(),
    }
    
    data.push(newPost);
      
    // clear form inputs
    setName('');
    setLocation('');
    setDescription('');
    setImage('');
    navigate("/Post")
  }

  return (
    <div className='contain-the-form'>
      <form onSubmit={handleSubmit} id='Form-to-submit'>
      <div className="name">
      <label htmlFor="name">Name:</label>
      <div><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
      </div>
      
     <div className="location">
     <label htmlFor="location">Location:</label>
     <div><input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} /></div>
     </div>
      
      <div className="description">
      <label htmlFor="description">Description:</label>
      <div><textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} /></div>
      </div>
      
      <div className="img-submit">
      <label htmlFor="image">Image:</label>
      <div><input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} /></div>
      </div>
    
      <button type="submit" className='button-50'>Submit</button>
    </form>
    </div>    
  );
}

export default NewPostForm;



