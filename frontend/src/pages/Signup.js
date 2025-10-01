import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!acceptTerms) {
      alert('Please accept the terms and conditions to continue.');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Account created successfully for ${formData.email}! Please check your email to verify your account.`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="form-container">
      <div className="form-card" style={{ maxWidth: '450px' }}>
        <h1 className="form-title">Create Account</h1>
        <p className="form-subtitle">Join Ver-iD and start verifying your identity securely</p>
        
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter a strong password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
              minLength="8"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                style={{ accentColor: '#2563eb', marginTop: '0.25rem' }}
                required
              />
              <span style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.5' }}>
                I agree to Ver-iD's{' '}
                <Link to="/terms" style={{ color: '#2563eb', fontWeight: '500' }}>
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link to="/privacy" style={{ color: '#2563eb', fontWeight: '500' }}>
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>
          
          <button 
            type="submit" 
            className="form-button"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>Already have an account?</p>
          <Link 
            to="/login" 
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
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
