import React, { useState } from 'react';
import '../App.css';

export default function Dashboard() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    verificationStatus: 'pending',
    joinDate: '2025-01-15'
  });

  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return '#10b981';
      case 'pending': return '#f59e0b';
      case 'rejected': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'verified': return 'Verified ✓';
      case 'pending': return 'Pending Review';
      case 'rejected': return 'Verification Failed';
      default: return 'Not Started';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'verification', label: 'Verification', icon: '🔍' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-description">Welcome back, {user.name}</p>
      </div>

      {/* User Info Card */}
      <div className="content-section">
        <div className="feature" style={{ maxWidth: '600px', margin: '0 auto 3rem', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>{user.name}</h3>
              <p style={{ color: '#6b7280', margin: 0 }}>{user.email}</p>
            </div>
            <div style={{ 
              padding: '0.5rem 1rem', 
              borderRadius: '20px', 
              backgroundColor: getStatusColor(user.verificationStatus) + '20',
              color: getStatusColor(user.verificationStatus),
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>
              {getStatusText(user.verificationStatus)}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            <div>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>Member Since</p>
              <p style={{ fontWeight: '600', margin: 0 }}>Jan 15, 2025</p>
            </div>
            <div>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>Verification Level</p>
              <p style={{ fontWeight: '600', margin: 0 }}>Basic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="content-section">
        <div style={{ 
          display: 'flex', 
          borderBottom: '2px solid #e5e7eb', 
          marginBottom: '2rem',
          gap: '1rem',
          overflowX: 'auto'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '1rem 1.5rem',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                borderBottom: activeTab === tab.id ? '2px solid #2563eb' : '2px solid transparent',
                color: activeTab === tab.id ? '#2563eb' : '#6b7280',
                fontWeight: activeTab === tab.id ? '600' : '500',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ marginRight: '0.5rem' }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="features">
            <div className="feature">
              <div className="feature-icon">📈</div>
              <h3>Quick Stats</h3>
              <div style={{ textAlign: 'left' }}>
                <p style={{ marginBottom: '0.5rem' }}>Documents Uploaded: <strong>2</strong></p>
                <p style={{ marginBottom: '0.5rem' }}>Verification Attempts: <strong>1</strong></p>
                <p>Last Activity: <strong>Today</strong></p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Next Steps</h3>
              <div style={{ textAlign: 'left' }}>
                <p style={{ marginBottom: '1rem' }}>Complete your verification to unlock all features:</p>
                <button 
                  className="form-button" 
                  onClick={() => setActiveTab('verification')}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                >
                  Continue Verification
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'verification' && (
          <div className="features">
            <div className="feature">
              <div className="feature-icon">📷</div>
              <h3>Photo Verification</h3>
              <p style={{ marginBottom: '1.5rem' }}>Take a selfie to verify your identity</p>
              <button 
                className="form-button"
                style={{ padding: '0.75rem 1rem', fontSize: '0.9rem' }}
              >
                Start Photo Verification
              </button>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>Phone Verification</h3>
              <p style={{ marginBottom: '1.5rem' }}>Verify your phone number via SMS</p>
              <button 
                className="form-button"
                style={{ padding: '0.75rem 1rem', fontSize: '0.9rem' }}
              >
                Verify Phone Number
              </button>
            </div>
            <div className="feature">
              <div className="feature-icon">🏠</div>
              <h3>Address Verification</h3>
              <p style={{ marginBottom: '1.5rem' }}>Upload a utility bill or bank statement</p>
              <button 
                className="form-button"
                style={{ padding: '0.75rem 1rem', fontSize: '0.9rem' }}
              >
                Upload Document
              </button>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div>
            <div style={{ 
              border: '2px dashed #d1d5db', 
              borderRadius: '12px', 
              padding: '3rem 2rem', 
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📁</div>
              <h3 style={{ marginBottom: '1rem', color: '#374151' }}>No Documents Uploaded</h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                Upload your government-issued ID to get started with verification
              </p>
              <button className="form-button" style={{ maxWidth: '200px' }}>
                Upload Document
              </button>
            </div>
            
            <div className="features">
              <div className="feature">
                <h4>Accepted Documents</h4>
                <ul style={{ textAlign: 'left', color: '#6b7280' }}>
                  <li>Driver's License</li>
                  <li>Passport</li>
                  <li>National ID Card</li>
                  <li>State ID</li>
                </ul>
              </div>
              <div className="feature">
                <h4>Requirements</h4>
                <ul style={{ textAlign: 'left', color: '#6b7280' }}>
                  <li>High resolution image</li>
                  <li>All corners visible</li>
                  <li>No glare or shadows</li>
                  <li>Text clearly readable</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="features">
            <div className="feature">
              <div className="feature-icon">👤</div>
              <h3>Profile Settings</h3>
              <p style={{ marginBottom: '1.5rem' }}>Update your personal information</p>
              <button className="form-button" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Edit Profile
              </button>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Security</h3>
              <p style={{ marginBottom: '1.5rem' }}>Manage your password and security settings</p>
              <button className="form-button" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Security Settings
              </button>
            </div>
            <div className="feature">
              <div className="feature-icon">🔔</div>
              <h3>Notifications</h3>
              <p style={{ marginBottom: '1.5rem' }}>Control how you receive updates</p>
              <button className="form-button" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Notification Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
