// App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Skills from "./pages/Skills";
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <div className="header-left">
          <h2 className="initials">VD</h2>

          <div className="header-info">
            <h3 className="header-name">Vishwam Desai</h3>
            <p className="header-role">React • Developer</p>
          </div>
        </div>

        <nav className="header-nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/skills" className="nav-item">Skills</Link>
          <Link to="/about" className="nav-item">About Me</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
          <Link to="/form" className="nav-item">Form</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<SimpleForm />} />
      </Routes>
    </div>
  );
}

export default App;
