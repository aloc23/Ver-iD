import React from 'react';
import '../App.css';

export default function About() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">About Ver-iD</h1>
        <p className="page-description">
          Leading the revolution in digital identity verification with innovative technology and unwavering commitment to security.
        </p>
      </div>

      <div className="content-section">
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🚀</div>
            <h3>Our Mission</h3>
            <p>
              To make digital identity verification accessible, secure, and instantaneous for everyone, 
              bridging the gap between physical and digital identity in our connected world.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">👥</div>
            <h3>Our Team</h3>
            <p>
              A diverse group of cybersecurity experts, AI engineers, and user experience designers 
              working together to create the most trusted verification platform.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌍</div>
            <h3>Global Reach</h3>
            <p>
              Serving users in over 150 countries with localized support and compliance with 
              international security standards and privacy regulations.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 className="section-title">Our Story</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Founded in 2023, Ver-iD emerged from the recognition that traditional identity verification 
            methods were too slow, cumbersome, and insecure for our digital age. Our founders, 
            with decades of combined experience in cybersecurity and fintech, set out to create 
            a solution that would revolutionize how we verify identity online.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Today, Ver-iD is trusted by millions of users worldwide and has processed over 10 million 
            verification requests. We continue to innovate, recently introducing AI-powered document 
            analysis and biometric verification to stay ahead of emerging security threats.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Our commitment to privacy, security, and user experience remains unwavering as we 
            build the future of digital identity verification.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🔐</div>
            <h3>End-to-End Encryption</h3>
            <p>All data is encrypted in transit and at rest using AES-256 encryption standards.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered Analysis</h3>
            <p>Advanced machine learning algorithms detect fraudulent documents with 99.9% accuracy.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>Real-Time Reporting</h3>
            <p>Instant verification results with detailed reports and audit trails for compliance.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌐</div>
            <h3>API Integration</h3>
            <p>Easy-to-use APIs for seamless integration with existing systems and workflows.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h3>Mobile Optimized</h3>
            <p>Fully responsive design works perfectly on all devices and screen sizes.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>Compliance Ready</h3>
            <p>GDPR, KYC, and AML compliant with certifications from leading security organizations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}