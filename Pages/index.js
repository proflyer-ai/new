import React, { useState, useEffect } from 'react';
import { Sparkles, Mail, Zap, Clock, ArrowRight, Sun, Moon, Check, Star, Rocket } from 'lucide-react';

export default function ProFlyerComingSoon() {
  const [isDark, setIsDark] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    setEmailError('');
    
    if (!email) {
      setEmailError('Please enter your email');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }
    
    setIsSubmitted(true);
    // In production, this would send to your email service
    console.log('Email submitted:', email);
    
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const features = [
    "AI-powered design generation",
    "20+ professional templates",
    "Email-optimized exports",
    "No design skills needed"
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/20'}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-400/20'}`} style={{animationDelay: '1s'}}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/10'}`} style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Theme toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition z-10"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and announcement */}
          <div className="mb-8 space-y-4">
            <div className="inline-flex items-center justify-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
                <Sparkles className="w-9 h-9 text-white" />
              </div>
            </div>
            
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Rocket className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium">Something amazing is coming!</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Meet Your New<br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              AI Design Assistant
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            ProFlyer.ai helps you create stunning newsletters, infographics, and flyers in seconds. 
            <span className="block mt-2 text-lg">Say hello to <span className="font-semibold text-purple-500">Fly</span> - your friendly AI companion! 👋</span>
          </p>

          {/* Countdown timer */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Launching in</p>
            <div className="flex justify-center space-x-4 md:space-x-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className={`text-4xl md:text-6xl font-bold ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-4 md:p-6 shadow-lg min-w-[80px] md:min-w-[100px]`}>
                    {value.toString().padStart(2, '0')}
                  </div>
                  <p className="text-sm mt-2 text-gray-500 dark:text-gray-400 capitalize">{unit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Email form */}
          <div className="mb-12">
            {!isSubmitted ? (
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError('');
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit();
                      }
                    }}
                    placeholder="Enter your email for early access"
                    className={`flex-1 px-6 py-4 rounded-xl text-lg ${
                      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    } border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                      emailError ? 'border-red-500' : ''
                    }`}
                  />
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
                  >
                    <span>Get Early Access</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">{emailError}</p>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  🎉 First 100 users get 50% off forever!
                </p>
              </div>
            ) : (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
                  <Check className="w-6 h-6" />
                  <span className="text-lg font-medium">You're on the list!</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Fly can't wait to meet you! We'll send you exclusive updates.
                </p>
              </div>
            )}
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm hover:shadow-lg transition transform hover:scale-105`}
              >
                <Check className="w-5 h-5 text-green-500 mb-2 mx-auto" />
                <p className="text-sm">{feature}</p>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-purple-500" />
              <span>Launch day perks</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-indigo-500" />
              <span>Weekly updates only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
