import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/home"
import About from "./Components/about"
import Contact from "./Components/contactus"

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);