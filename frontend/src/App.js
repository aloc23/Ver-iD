import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import "./App.css";

function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Don't show navigation on certain pages
  if (location.pathname === '/dashboard') {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">Ver-iD</Link>
          <div className="nav-links">
            <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>
              Dashboard
            </Link>
            <Link to="/" onClick={() => alert('Logged out successfully!')}>
              Logout
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Ver-iD</Link>
        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </Link>
          <Link to="/features" className={isActive('/features') ? 'active' : ''}>
            Features
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            About
          </Link>
          <Link to="/login" className={isActive('/login') ? 'active' : ''}>
            Login
          </Link>
          <Link 
            to="/signup" 
            className={isActive('/signup') ? 'active' : ''}
            style={{ 
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              marginLeft: '0.5rem'
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Catch all route for 404s - redirect to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}