// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCount, setEmailCount] = useState(42);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Animated email counter
  useEffect(() => {
    const interval = setInterval(() => {
      setEmailCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      // In production, send to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          overflow-x: hidden;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        /* Animated background */
        .bg-gradient {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: conic-gradient(from 0deg at 50% 50%, #6366f1, #8b5cf6, #ec4899, #06b6d4, #6366f1);
          animation: rotate 20s linear infinite;
          opacity: 0.1;
        }

        @keyframes rotate {
          to { transform: rotate(360deg); }
        }

        /* Floating orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: float 20s infinite ease-in-out;
        }

        .orb1 {
          width: 300px;
          height: 300px;
          background: #6366f1;
          top: -150px;
          right: -100px;
          animation-delay: 0s;
        }

        .orb2 {
          width: 400px;
          height: 400px;
          background: #8b5cf6;
          bottom: -200px;
          left: -150px;
          animation-delay: 5s;
        }

        .orb3 {
          width: 250px;
          height: 250px;
          background: #06b6d4;
          top: 50%;
          left: 50%;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        /* Content */
        .content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Logo */
        .logo {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
          animation: pulse 2s infinite;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .logo-icon {
          font-size: 50px;
        }

        /* Badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          margin-bottom: 30px;
          animation: fadeInUp 0.6s ease-out;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Headings */
        h1 {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.1;
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .subtitle {
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          opacity: 0.8;
          margin-bottom: 40px;
          max-width: 600px;
          line-height: 1.6;
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }

        /* Email form */
        .form-container {
          width: 100%;
          max-width: 500px;
          margin-bottom: 40px;
          animation: fadeInUp 0.6s ease-out 0.6s both;
        }

        .form {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }

        .input {
          flex: 1;
          padding: 16px 24px;
          font-size: 16px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          outline: none;
          transition: all 0.3s;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .input:focus {
          border-color: #6366f1;
          background: rgba(255, 255, 255, 0.1);
        }

        .button {
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        /* Success message */
        .success {
          background: rgba(16, 185, 129, 0.1);
          border: 2px solid rgba(16, 185, 129, 0.3);
          padding: 20px;
          border-radius: 12px;
          animation: fadeInUp 0.6s ease-out;
        }

        /* Social proof */
        .social-proof {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 40px;
        }

        /* Countdown */
        .countdown {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 60px;
          animation: fadeInUp 0.6s ease-out 0.8s both;
        }

        .countdown-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        .countdown-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: #6366f1;
        }

        .countdown-label {
          font-size: 0.9rem;
          opacity: 0.6;
          text-transform: uppercase;
        }

        /* Features */
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          width: 100%;
          animation: fadeInUp 0.6s ease-out 1s both;
        }

        .feature {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: all 0.3s;
        }

        .feature:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.3);
          background: rgba(99, 102, 241, 0.05);
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .feature-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .feature-desc {
          font-size: 0.95rem;
          opacity: 0.7;
          line-height: 1.5;
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .form {
            flex-direction: column;
          }
          
          .countdown {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          
          .features {
            gap: 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="bg-gradient"></div>
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>

        <div className="content">
          <div className="logo">
            <span className="logo-icon">✨</span>
          </div>

          <div className="badge">
            <div className="live-dot"></div>
            <span>{emailCount} designers already joined</span>
          </div>

          <h1>
            Design Like a Pro with
            <br />
            <span className="gradient-text">AI Superpowers</span>
          </h1>

          <p className="subtitle">
            ProFlyer.ai is your AI-powered design assistant that creates stunning 
            newsletters, infographics, and flyers in seconds. No design skills needed!
          </p>

          <div className="form-container">
            {!isSubmitted ? (
              <>
                <form className="form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="button">
                    Get Early Access
                  </button>
                </form>
                <div className="social-proof">
                  <span>🔥</span>
                  <span>Limited offer: 50% off forever for first 100 users!</span>
                </div>
              </>
            ) : (
              <div className="success">
                <h3 style={{ marginBottom: '10px' }}>🎉 You're on the list!</h3>
                <p style={{ opacity: 0.8 }}>
                  Get ready to meet Fly, your AI design companion. 
                  We'll notify you before launch!
                </p>
              </div>
            )}
          </div>

          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI-Powered Design</h3>
              <p className="feature-desc">
                Fly, your AI assistant, generates professional designs based on your ideas
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">📧</div>
              <h3 className="feature-title">Email-Optimized</h3>
              <p className="feature-desc">
                Automatic compression and cross-client compatibility for perfect emails
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-desc">
                From concept to finished design in under 60 seconds
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">20+ Templates</h3>
              <p className="feature-desc">
                Professional templates for newsletters, infographics, and flyers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
