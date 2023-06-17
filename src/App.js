import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'
import PostView from './PostView';
import NewPost from './newPost'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/post' element={<PostView/>}/>
            <Route path='/newPosts' element={<NewPost/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
