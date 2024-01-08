import React from 'react';
import './app.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"

import Projects from './sections/projects/Projects';
import Hero from './sections/hero/Hero';
import Skill from './sections/skills/Skill';

function App() {
  return (
    <BrowserRouter basename='portfolio'>
      <div className="app">
        <Hero />
        <Projects />

        <Skill />

      </div>
    </BrowserRouter>
  );
}


{
  /*
  <Navbar />
  <Outlet />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<div>about</div>} />

  </Routes> */
}

export default App;
