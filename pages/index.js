// Update your pages/index.js handleSubmit function with this:

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!email || !email.includes('@')) {
    // You can add error handling here
    return;
  }

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setIsSubmitted(true);
      setEmail('');
      console.log('Successfully subscribed:', email);
    } else {
      console.error('Subscription failed:', data.error);
      // You can show an error message to the user here
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('Network error. Please try again.');
  }
};

// ============================================
// ENVIRONMENT VARIABLES SETUP
// Create a .env.local file in your root directory:

/*
# For Resend (Recommended)
RESEND_API_KEY=re_your_api_key_here

# For SendGrid
SENDGRID_API_KEY=SG.your_api_key_here

# For Nodemailer (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# For Zapier
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/your-webhook-id
*/

// ============================================
// QUICK SETUP GUIDE

/*
RECOMMENDED: Resend Setup (5 minutes)
1. Go to https://resend.com
2. Sign up for free account (10,000 emails/month free)
3. Add and verify your domain (proflyer.ai)
4. Get your API key
5. Add to .env.local: RESEND_API_KEY=your_key_here
6. Deploy to Vercel

ALTERNATIVE 1: Zapier Setup (3 minutes)
1. Create free Zapier account
2. Create new Zap: Webhook → Email
3. Get webhook URL
4. Add to code and deploy

ALTERNATIVE 2: SendGrid Setup
1. Sign up at sendgrid.com (100 emails/day free)
2. Verify your email
3. Get API key
4. Add to .env.local

ALTERNATIVE 3: Gmail SMTP (Quick but limited)
1. Enable 2FA on your Gmail
2. Generate app-specific password
3. Use with Nodemailer option
*/

// ============================================
// VERCEL DEPLOYMENT

/*
After choosing your email service:

1. Add environment variables in Vercel:
   - Go to your project settings
   - Click "Environment Variables"
   - Add your chosen API key

2. The emails will be sent to contact@proflyer.ai:
   - When someone signs up
   - With their email address
   - With timestamp
   - Optional: Send them a welcome email too

3. Test it:
   - Submit a test email
   - Check contact@proflyer.ai inbox
*/
