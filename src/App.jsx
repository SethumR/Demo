// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="header">
        <h1>Nazhim Kalam</h1>
        <p>Software Engineer | Instructor | Content Writer | Entrepreneur</p>
        <button className="resume-button">My Resume</button>
      </header>
    </div>
  );
}

export default App;
