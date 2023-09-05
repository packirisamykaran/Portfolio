import React from 'react';
import './components/style/App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter basename='portfolio'>
      <div className="app">
        <Navbar />
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<div>about</div>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
