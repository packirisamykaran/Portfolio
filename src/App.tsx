import React from 'react';
import './app.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Home from './components/home/Home';
import Projects from './sections/projects/Projects';

function App() {
  return (
    <BrowserRouter basename='portfolio'>
      <div className="app">
        <Home></Home>
        <Projects />
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
