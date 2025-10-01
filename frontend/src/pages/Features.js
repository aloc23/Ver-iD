import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Features() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Powerful Features</h1>
        <p className="page-description">
          Discover all the capabilities that make Ver-iD the most trusted identity verification platform
        </p>
      </div>

      <div className="content-section">
        <h2 className="section-title">Core Verification Features</h2>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🆔</div>
            <h3>Document Verification</h3>
            <p>
              Advanced AI-powered analysis of government-issued IDs, passports, and driver's licenses 
              with real-time fraud detection and authenticity verification.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">📸</div>
            <h3>Biometric Authentication</h3>
            <p>
              Facial recognition technology that compares live selfies with ID photos using 
              advanced liveness detection to prevent spoofing attacks.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">📍</div>
            <h3>Address Verification</h3>
            <p>
              Verify residential addresses using utility bills, bank statements, and other 
              official documents with automatic data extraction and validation.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h3>Phone Verification</h3>
            <p>
              SMS and voice-based phone number verification with carrier validation and 
              risk assessment to ensure legitimate contact information.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 className="section-title">Security & Compliance</h2>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🔐</div>
            <h3>Bank-Grade Encryption</h3>
            <p>
              All data is protected with AES-256 encryption in transit and at rest, meeting 
              the highest security standards used by financial institutions worldwide.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>GDPR Compliant</h3>
            <p>
              Full compliance with GDPR, CCPA, and other privacy regulations with automated 
              data retention policies and user consent management.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">🏛️</div>
            <h3>KYC/AML Ready</h3>
            <p>
              Built-in KYC (Know Your Customer) and AML (Anti-Money Laundering) compliance 
              features for financial services and regulated industries.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>Audit Trail</h3>
            <p>
              Comprehensive logging and audit trails for all verification activities with 
              tamper-proof records for compliance and regulatory reporting.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 className="section-title">Integration & APIs</h2>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🔌</div>
            <h3>RESTful APIs</h3>
            <p>
              Easy-to-integrate REST APIs with comprehensive documentation, SDKs for popular 
              programming languages, and webhook support for real-time updates.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Real-Time Processing</h3>
            <p>
              Lightning-fast verification results with most documents processed in under 30 seconds 
              and instant API responses for seamless user experiences.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">📈</div>
            <h3>Analytics Dashboard</h3>
            <p>
              Comprehensive analytics and reporting dashboard with verification statistics, 
              fraud detection metrics, and customizable business intelligence reports.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌐</div>
            <h3>Global Coverage</h3>
            <p>
              Support for documents from 150+ countries with localized validation rules, 
              multi-language support, and region-specific compliance requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 className="section-title">Advanced Capabilities</h2>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🤖</div>
            <h3>Machine Learning</h3>
            <p>
              Continuously improving AI models that learn from millions of verification attempts 
              to enhance accuracy and detect new fraud patterns automatically.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔍</div>
            <h3>Risk Assessment</h3>
            <p>
              Advanced risk scoring algorithms that evaluate multiple factors to provide 
              comprehensive risk assessments for each verification attempt.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌍</div>
            <h3>Multi-Language Support</h3>
            <p>
              Native support for 25+ languages with automatic document language detection 
              and localized user interfaces for global accessibility.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">📋</div>
            <h3>Custom Workflows</h3>
            <p>
              Flexible verification workflows that can be customized to match your specific 
              business requirements and compliance needs.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section" style={{ textAlign: 'center', padding: '3rem 2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '20px', color: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Get Started?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
          Join thousands of businesses that trust Ver-iD for their identity verification needs
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/signup" 
            style={{ 
              padding: '1rem 2rem', 
              backgroundColor: 'white', 
              color: '#2563eb',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '1.1rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Start Free Trial
          </Link>
          <Link 
            to="/contact" 
            style={{ 
              padding: '1rem 2rem', 
              border: '2px solid white',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '1.1rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
