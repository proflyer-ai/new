export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'system-ui'
    }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          ProFlyer.ai
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
          Your AI Design Assistant - Coming Soon!
        </p>
        <p>🚀 Launching in 30 days</p>
      </div>
    </div>
  )
}
