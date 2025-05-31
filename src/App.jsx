import React from "react";
import { Routes, Route } from "react-router-dom";

import Z_imagebackground from '../scripts/Z_imagebackground';

import Home from "../pages/home/Home";
// import About from "../pages/about/About";

import "./App.css";

const App = () => {
  return (
    <div className="app-container" style={{ minHeight: '100%', width: '100%', overflowX: 'clip'}}>
      <Z_imagebackground />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />}/> */}
      </Routes>
    </div>
  );
};

export default App;
