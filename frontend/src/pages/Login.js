import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Welcome back! Logging in with: ${email}`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">Welcome Back</h1>
        <p className="form-subtitle">Sign in to your Ver-iD account</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: '#2563eb' }}
              />
              <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>Remember me</span>
            </label>
            <Link 
              to="/forgot-password" 
              style={{ fontSize: '0.9rem', color: '#2563eb', fontWeight: '500' }}
            >
              Forgot password?
            </Link>
          </div>
          
          <button 
            type="submit" 
            className="form-button"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>Don't have an account?</p>
          <Link 
            to="/signup" 
            style={{ 
              color: '#2563eb', 
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              border: '2px solid #2563eb',
              borderRadius: '12px',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#2563eb';
            }}
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}