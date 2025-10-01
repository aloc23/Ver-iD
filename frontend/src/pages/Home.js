import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {
  return (
    <div className="app-container">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Ver-iD</h1>
          <p>The most trusted digital identity verification platform. Secure, fast, and reliable verification for the modern world.</p>
          <Link to="/login" className="cta-btn">
            Get Started →
          </Link>
        </div>
      </header>

      <main className="main-content">
        <section className="content-section">
          <h2 className="section-title">Why Choose Ver-iD?</h2>
          <p className="section-subtitle">
            Experience the future of digital identity verification with our cutting-edge technology and user-friendly interface.
          </p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Complete verification in under 30 seconds with our advanced AI-powered system that processes documents instantly.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Bank-Level Security</h3>
              <p>Your data is protected with military-grade encryption and stored in secure, compliant data centers worldwide.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Simple & Intuitive</h3>
              <p>Our user-friendly interface makes verification effortless, even for first-time users. No technical knowledge required.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Trusted by Millions</h2>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">2M+</span>
              <span className="stat-label">Users Verified</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Countries Supported</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get verified in three simple steps
          </p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>1. Upload Documents</h3>
              <p>Securely upload your government-issued ID or passport using our encrypted platform.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🤖</div>
              <h3>2. AI Verification</h3>
              <p>Our advanced AI instantly analyzes and verifies your documents for authenticity.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✅</div>
              <h3>3. Get Verified</h3>
              <p>Receive your verification status immediately and access all platform features.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Ver-iD</h4>
            <p>The most trusted digital identity verification platform worldwide.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Ver-iD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}