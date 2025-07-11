// pages/test-email.js
// A simple test page to verify email forwarding is working
// DELETE THIS FILE AFTER TESTING!

import { useState } from 'react';

export default function TestEmail() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const testEmail = async () => {
    setLoading(true);
    setStatus('Sending test email...');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'test@example.com'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('✅ Success! Check contact@proflyer.ai inbox');
      } else {
        setStatus(`❌ Error: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      setStatus(`❌ Network error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui',
      padding: '20px',
      background: '#f5f5f5'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          Email Forwarding Test
        </h1>
        
        <p style={{ color: '#666', marginBottom: '30px' }}>
          Click the button below to send a test email to contact@proflyer.ai
        </p>

        <button
          onClick={testEmail}
          disabled={loading}
          style={{
            background: loading ? '#ccc' : '#6366f1',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '16px',
            borderRadius: '8px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginBottom: '20px'
          }}
        >
          {loading ? 'Sending...' : 'Send Test Email'}
        </button>

        {status && (
          <div style={{
            padding: '15px',
            borderRadius: '8px',
            background: status.includes('✅') ? '#d4edda' : '#f8d7da',
            color: status.includes('✅') ? '#155724' : '#721c24',
            marginTop: '20px'
          }}>
            {status}
          </div>
        )}

        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#666',
          textAlign: 'left'
        }}>
          <h3 style={{ marginTop: 0 }}>Setup Checklist:</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Created /pages/api/subscribe.js ✓</li>
            <li>Added environment variables to .env.local ✓</li>
            <li>Added environment variables to Vercel ✓</li>
            <li>Verified domain in email service ✓</li>
            <li>Updated frontend handleSubmit function ✓</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
