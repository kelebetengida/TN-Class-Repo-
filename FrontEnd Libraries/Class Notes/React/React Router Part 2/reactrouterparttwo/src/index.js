import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.js';
import Contact from './components/Contact.js';
import './App.css';
import ReactDOM from "react-dom"
// import Navbar from './components/Navbar.js';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);