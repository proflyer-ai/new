// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';

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
      console.log('Email submitted:', email);
    }
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ProFlyer.ai",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web",
    "description": "AI-powered design tool for creating professional newsletters, infographics, and flyers in seconds",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "42"
    }
  };

  return (
    <>
      <Head>
        <title>ProFlyer.ai - AI-Powered Newsletter, Infographic & Flyer Design Tool | Coming Soon</title>
        <meta name="title" content="ProFlyer.ai - AI-Powered Newsletter, Infographic & Flyer Design Tool | Coming Soon" />
        <meta name="description" content="Create stunning newsletters, infographics, and flyers in seconds with ProFlyer.ai's AI design assistant. No design skills needed. Join 40+ early adopters and get 50% off forever!" />
        <meta name="keywords" content="AI design tool, newsletter creator, infographic maker, flyer designer, artificial intelligence, email marketing, graphic design, ProFlyer, AI assistant, design automation" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="ProFlyer.ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://proflyer.ai/" />
        <meta property="og:title" content="ProFlyer.ai - AI-Powered Design Tool Coming Soon" />
        <meta property="og:description" content="Create professional newsletters, infographics, and flyers in seconds with AI. Get 50% off as an early adopter!" />
        <meta property="og:image" content="https://proflyer.ai/og-image.png" />
        <meta property="og:site_name" content="ProFlyer.ai" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://proflyer.ai/" />
        <meta property="twitter:title" content="ProFlyer.ai - AI-Powered Design Tool Coming Soon" />
        <meta property="twitter:description" content="Create professional newsletters, infographics, and flyers in seconds with AI. Get 50% off as an early adopter!" />
        <meta property="twitter:image" content="https://proflyer.ai/twitter-card.png" />
        
        <link rel="canonical" href="https://proflyer.ai/" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="icon" href="/favicon.ico" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          overflow-x: hidden;
          background: #0f0c29;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          color: white;
          position: relative;
        }

        /* Animated particles */
        .particles {
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          opacity: 0;
          animation: float-up 10s infinite linear;
        }

        @keyframes float-up {
          0% {
            opacity: 0;
            transform: translateY(100vh) scale(0);
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) scale(1.5);
          }
        }

        .particle:nth-child(1) { left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { left: 20%; animation-delay: 1s; }
        .particle:nth-child(3) { left: 30%; animation-delay: 2s; }
        .particle:nth-child(4) { left: 40%; animation-delay: 3s; }
        .particle:nth-child(5) { left: 50%; animation-delay: 4s; }
        .particle:nth-child(6) { left: 60%; animation-delay: 5s; }
        .particle:nth-child(7) { left: 70%; animation-delay: 6s; }
        .particle:nth-child(8) { left: 80%; animation-delay: 7s; }
        .particle:nth-child(9) { left: 90%; animation-delay: 8s; }
        .particle:nth-child(10) { left: 15%; animation-delay: 9s; }

        /* Content wrapper */
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
          animation: logo-float 3s ease-in-out infinite;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
          position: relative;
          overflow: hidden;
        }

        .logo::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }

        @keyframes logo-float {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-10px);
          }
        }

        @keyframes shine {
          0% { transform: translateX(-200%) translateY(-200%) rotate(45deg); }
          100% { transform: translateX(200%) translateY(200%) rotate(45deg); }
        }

        .logo svg {
          width: 60px;
          height: 60px;
          z-index: 1;
          position: relative;
        }

        /* Badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99, 102, 241, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.5);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          margin-bottom: 30px;
          color: #e0e7ff;
          backdrop-filter: blur(10px);
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
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.1;
          color: #ffffff;
        }

        .gradient-text {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: #cbd5e1;
          margin-bottom: 40px;
          max-width: 600px;
          line-height: 1.6;
        }

        /* Form container */
        .form-container {
          width: 100%;
          max-width: 500px;
          margin-bottom: 40px;
        }

        .form {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .input {
          flex: 1;
          min-width: 250px;
          padding: 16px 24px;
          font-size: 16px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          outline: none;
          transition: all 0.3s;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .input:focus {
          border-color: #6366f1;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
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
          position: relative;
          overflow: hidden;
        }

        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.5);
        }

        /* Success message */
        .success {
          background: rgba(16, 185, 129, 0.2);
          border: 2px solid rgba(16, 185, 129, 0.5);
          padding: 20px;
          border-radius: 12px;
          color: #a7f3d0;
        }

        .success h3 {
          color: #34d399;
          margin-bottom: 10px;
        }

        /* Social proof */
        .social-proof {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          color: #fbbf24;
          font-weight: 500;
        }

        /* Countdown */
        .countdown {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 60px;
          width: 100%;
          max-width: 500px;
        }

        .countdown-item {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 20px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        .countdown-value {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .countdown-label {
          font-size: 0.9rem;
          color: #94a3b8;
          text-transform: uppercase;
        }

        /* Features */
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          width: 100%;
        }

        .feature {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: all 0.3s;
        }

        .feature:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .feature-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #e2e8f0;
        }

        .feature-desc {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        /* Responsive */
        @media (max-width: 768px) {
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
        <div className="particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>

        <main className="content">
          <div className="logo">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40 L50 25 L80 40 L50 55 Z" fill="white" opacity="0.9"/>
              <path d="M20 40 L50 55 L50 75 L20 40 Z" fill="white" opacity="0.7"/>
              <path d="M80 40 L50 55 L50 75 L80 40 Z" fill="white" opacity="0.8"/>
              
              <circle cx="25" cy="30" r="2" fill="white" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="75" cy="30" r="2" fill="white" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="50" cy="40" r="3" fill="white">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>

          <div className="badge">
            <div className="live-dot"></div>
            <span>{emailCount} designers already joined the waitlist</span>
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
                    placeholder="Enter your email for early access"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address"
                  />
                  <button type="submit" className="button" aria-label="Get early access">
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
                <h3>🎉 You're on the list!</h3>
                <p>
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

          <section className="features">
            <article className="feature">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI-Powered Design</h3>
              <p className="feature-desc">
                Fly, your AI assistant, generates professional designs based on your ideas
              </p>
            </article>
            <article className="feature">
              <div className="feature-icon">📧</div>
              <h3 className="feature-title">Email-Optimized</h3>
              <p className="feature-desc">
                Automatic compression and cross-client compatibility for perfect emails
              </p>
            </article>
            <article className="feature">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-desc">
                From concept to finished design in under 60 seconds
              </p>
            </article>
            <article className="feature">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">20+ Templates</h3>
              <p className="feature-desc">
                Professional templates for newsletters, infographics, and flyers
              </p>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}
