// pages/api/subscribe.js
// Option 1: Using Web3Forms for BOTH emails (recommended - simplest!)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    // 1. Send notification to you
    const notificationResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '11477007-878c-460e-acba-106261803f80', // Your existing key
        to_email: 'contact@proflyer.ai',
        subject: 'New ProFlyer.ai Signup! 🎉',
        from_name: 'ProFlyer.ai',
        message: `New early access signup: ${email}\nTime: ${new Date().toLocaleString()}`
      }),
    });

    // 2. Send welcome email to user
    const welcomeEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: white; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 10px 10px 0 0;">
                    <div style="width: 80px; height: 80px; background: white; border-radius: 20px; margin: 0 auto 20px; display: inline-block; padding: 20px;">
                      <div style="font-size: 40px;">✨</div>
                    </div>
                    <h1 style="color: white; font-size: 36px; margin: 0; font-weight: 800;">ProFlyer.ai</h1>
                    <p style="color: rgba(255,255,255,0.9); font-size: 18px; margin: 10px 0 0;">Your AI Design Assistant</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <h2 style="color: #1a1a1a; font-size: 28px; margin: 0 0 20px; text-align: center;">Welcome to the Future of Design! 🎉</h2>
                    
                    <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
                      Thank you for joining ProFlyer.ai's exclusive early access list! You're now part of a select group of innovators who will be the first to experience AI-powered design.
                    </p>
                    
                    <div style="background: #f8f9fa; border-left: 4px solid #6366f1; padding: 20px; margin: 30px 0; border-radius: 5px;">
                      <h3 style="color: #6366f1; margin: 0 0 15px; font-size: 20px;">🎁 Your Early Bird Benefits:</h3>
                      <ul style="color: #555; margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li><strong>50% OFF Forever</strong> - Locked in for life!</li>
                        <li><strong>Priority Beta Access</strong> - Be first to try new features</li>
                        <li><strong>Direct Feature Input</strong> - Help shape ProFlyer.ai</li>
                        <li><strong>Exclusive Updates</strong> - Behind-the-scenes progress</li>
                      </ul>
                    </div>
                    
                    <div style="text-align: center; margin: 40px 0;">
                      <div style="display: inline-block; background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px 30px; border-radius: 50px;">
                        <p style="margin: 0; color: #856404; font-size: 18px; font-weight: 600;">
                          🚀 Launching in 30 Days!
                        </p>
                      </div>
                    </div>
                    
                    <h3 style="color: #1a1a1a; font-size: 22px; margin: 30px 0 15px;">What's Next?</h3>
                    <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 0 0 15px;">
                      Sit back and relax! We're working hard to bring you the best AI design experience. Here's what to expect:
                    </p>
                    
                    <ol style="color: #555; line-height: 1.8; padding-left: 20px;">
                      <li>Weekly progress updates</li>
                      <li>Sneak peeks of features</li>
                      <li>Early beta access invitation</li>
                      <li>Launch day celebration with special surprises!</li>
                    </ol>
                    
                    <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 30px; border-radius: 10px; text-align: center; margin: 40px 0;">
                      <p style="color: white; font-size: 18px; margin: 0 0 10px;">Meet Fly, Your AI Design Assistant</p>
                      <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 0; font-style: italic;">
                        "I can't wait to help you create stunning newsletters, infographics, and flyers in seconds!"
                      </p>
                    </div>
                    
                    <p style="color: #555; font-size: 16px; line-height: 1.6; text-align: center;">
                      Have questions? Just reply to this email - we'd love to hear from you!
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 40px; background: #f8f9fa; border-radius: 0 0 10px 10px; text-align: center;">
                    <p style="color: #999; font-size: 14px; margin: 0 0 10px;">
                      Follow our journey:
                    </p>
                    <div style="margin: 0 0 20px;">
                      <a href="https://twitter.com/proflyerai" style="color: #6366f1; text-decoration: none; margin: 0 10px;">Twitter</a>
                      <a href="https://instagram.com/proflyer.ai" style="color: #6366f1; text-decoration: none; margin: 0 10px;">Instagram</a>
                      <a href="https://proflyer.ai" style="color: #6366f1; text-decoration: none; margin: 0 10px;">Website</a>
                    </div>
                    <p style="color: #999; font-size: 12px; margin: 0;">
                      © 2024 ProFlyer.ai - Create stunning designs with AI<br>
                      You're receiving this because you signed up for early access at proflyer.ai
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const welcomeResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '11477007-878c-460e-acba-106261803f80', // Same key works!
        to_email: email, // Send to the user
        subject: 'Welcome to ProFlyer.ai! 🚀 Your Early Access is Confirmed',
        from_name: 'ProFlyer.ai Team',
        // Web3Forms accepts HTML in the message field
        message: welcomeEmailHtml,
        // This tells Web3Forms to parse HTML
        isHtml: "true"
      }),
    });

    if (notificationResponse.ok && welcomeResponse.ok) {
      return res.status(200).json({ success: true });
    } else {
      throw new Error('Failed to send emails');
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to process signup' });
  }
}

// ================================================
// Option 2: Using EmailJS for welcome email (if Web3Forms HTML doesn't work)
// ================================================
/*
// First: Sign up at emailjs.com and get your keys

export default async function handler(req, res) {
  const { email } = req.body;

  try {
    // 1. Your notification (keep existing Web3Forms)
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY',
        to_email: 'contact@proflyer.ai',
        subject: 'New Signup!',
        from_name: 'ProFlyer.ai',
        message: `New signup: ${email}`
      }),
    });

    // 2. Welcome email via EmailJS
    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: 'YOUR_SERVICE_ID',
        template_id: 'YOUR_TEMPLATE_ID',
        user_id: 'YOUR_PUBLIC_KEY',
        template_params: {
          to_email: email,
          to_name: email.split('@')[0], // First part of email as name
          reply_to: 'contact@proflyer.ai'
        }
      }),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed' });
  }
}
*/
