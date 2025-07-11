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
      // In production, send to your backend
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
        {/* Primary Meta Tags */}
        <title>ProFlyer.ai - AI-Powered Newsletter, Infographic & Flyer Design Tool | Coming Soon</title>
        <meta name="title" content="ProFlyer.ai - AI-Powered Newsletter, Infographic & Flyer Design Tool | Coming Soon" />
        <meta name="description" content="Create stunning newsletters, infographics, and flyers in seconds with ProFlyer.ai's AI design assistant. No design skills needed. Join 40+ early adopters and get 50% off forever!" />
        <meta name="keywords" content="AI design tool, newsletter creator, infographic maker, flyer designer, artificial intelligence, email marketing, graphic design, ProFlyer, AI assistant, design automation" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="ProFlyer.ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://proflyer.ai/" />
        <meta property="og:title" content="ProFlyer.ai - AI-Powered Design Tool Coming Soon" />
        <meta property="og:description" content="Create professional newsletters, infographics, and flyers in seconds with AI. Get 50% off as an early adopter!" />
        <meta property="og:image" content="https://proflyer.ai/og-image.png" />
        <meta property="og:site_name" content="ProFlyer.ai" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://proflyer.ai/" />
        <meta property="twitter:title" content="ProFlyer.ai - AI-Powered Design Tool Coming Soon" />
        <meta property="twitter:description" content="Create professional newsletters, infographics, and flyers in seconds with AI. Get 50% off as an early adopter!" />
        <meta property="twitter:image" content="https://proflyer.ai/twitter-card.png" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://proflyer.ai/" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data */}
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
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        /* Animated gradient mesh */
        .bg-gradient {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: conic-gradient(from 0deg at 50% 50%, #6366f1, #8b5cf6, #ec4899, #06b6d4, #6366f1);
          animation: rotate 20s linear infinite;
          opacity: 0.05;
        }

        @keyframes rotate {
          to { transform: rotate(360deg); }
        }

        /* Animated particles */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: particle-float 10s infinite linear;
        }

        @keyframes particle-float {
          0% {
            opacity: 0;
            transform: translateY(100vh) scale(0);
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) scale(1);
          }
        }

        .particle:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 8s; }
        .particle:nth-child(2) { left: 20%; animation-delay: 1s; animation-duration: 10s; }
        .particle:nth-child(3) { left: 30%; animation-delay: 2s; animation-duration: 9s; }
        .particle:nth-child(4) { left: 40%; animation-delay: 0.5s; animation-duration: 11s; }
        .particle:nth-child(5) { left: 50%; animation-delay: 3s; animation-duration: 8s; }
        .particle:nth-child(6) { left: 60%; animation-delay: 1.5s; animation-duration: 10s; }
        .particle:nth-child(7) { left: 70%; animation-delay: 2.5s; animation-duration: 9s; }
        .particle:nth-child(8) { left: 80%; animation-delay: 0.8s; animation-duration: 11s; }
        .particle:nth-child(9) { left: 90%; animation-delay: 3.5s; animation-duration: 8s; }
        .particle:nth-child(10) { left: 15%; animation-delay: 4s; animation-duration: 10s; }

        /* Animated grid */
        .grid-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 10s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* Floating orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: float 20s infinite ease-in-out;
          opacity: 0.3;
        }

        .orb1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #6366f1 0%, transparent 70%);
          top: -150px;
          right: -100px;
          animation-delay: 0s;
        }

        .orb2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
          bottom: -200px;
          left: -150px;
          animation-delay: 5s;
        }

        .orb3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #06b6d4 0%, transparent 70%);
          top: 50%;
          left: 50%;
          animation-delay: 10s;
        }

        /* Wave animation */
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%236366f1' opacity='0.1'/%3E%3C/svg%3E");
          background-size: 1200px 100px;
          animation: wave-move 10s linear infinite;
        }

        @keyframes wave-move {
          0% { background-position-x: 0; }
          100% { background-position-x: 1200px; }
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
          animation: logo-shine 3s infinite;
        }

        @keyframes logo-float {
          0%, 100% { 
            transform: translateY(0) scale(1);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
          }
          50% { 
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 30px 60px rgba(99, 102, 241, 0.6);
          }
        }

        @keyframes logo-shine {
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
          animation: fadeInUp 0.6s ease-out;
          color: #e0e7ff;
          backdrop-filter: blur(10px);
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: blink 2s infinite;
          box-shadow: 0 0 10px #10b981;
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
          color: #ffffff;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
        }

        .gradient-text {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
          filter: brightness(1.2);
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .subtitle {
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          color: #cbd5e1;
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
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          outline: none;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
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
          white-space: nowrap;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
          position: relative;
          overflow: hidden;
        }

        .button::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: rotate(45deg) translateX(-100%);
          transition: transform 0.6s;
        }

        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.5);
          filter: brightness(1.1);
        }

        .button:hover::before {
          transform: rotate(45deg) translateX(100%);
        }

        /* Success message */
        .success {
          background: rgba(16, 185, 129, 0.2);
          border: 2px solid rgba(16, 185, 129, 0.5);
          padding: 20px;
          border-radius: 12px;
          animation: fadeInUp 0.6s ease-out;
          color: #a7f3d0;
          backdrop-filter: blur(10px);
        }

        .success h3 {
          color: #34d399;
        }

        /* Social proof */
        .social-proof {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          color: #fbbf24;
          margin-bottom: 40px;
          font-weight: 500;
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
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 20px;
          border-radius: 16px;
          backdrop-filter: blur(20px);
          transition: all 0.3s;
        }

        .countdown-item:hover {
          transform: translateY(-3px);
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
          background: rgba(99, 102, 241, 0.15);
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
          letter-spacing: 1px;
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
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          transition: all 0.3s;
        }

        .feature:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.5);
          background: rgba(99, 102, 241, 0.1);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
          display: inline-block;
          filter: brightness(1.2);
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
          
          .countdown-value {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="bg-gradient"></div>
        <div className="grid-bg"></div>
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
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
        <div className="wave"></div>

        <main className="content">
          <div className="logo">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Paper plane icon with sparkles */}
              <path d="M20 40 L50 25 L80 40 L50 55 Z" fill="white" opacity="0.9"/>
              <path d="M20 40 L50 55 L50 75 L20 40 Z" fill="white" opacity="0.7"/>
              <path d="M80 40 L50 55 L50 75 L80 40 Z" fill="white" opacity="0.8"/>
              
              {/* Sparkles around the plane */}
              <circle cx="25" cy="30" r="2" fill="white" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="75" cy="30" r="2" fill="white" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="35" cy="65" r="1.5" fill="white" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite"/>
              </circle>
              <circle cx="65" cy="65" r="1.5" fill="white" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" repeatCount="indefinite"/>
              </circle>
              
              {/* AI dots */}
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
                <h3 style={{ marginBottom: '10px' }}>🎉 You're on the list!</h3>
                <p style={{ opacity: 0.9 }}>
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
