// pages/api/subscribe.js
// This API endpoint will handle email submissions and forward them

// OPTION 1: Using Resend (Recommended - Free tier available)
// First: npm install resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    // Send notification to contact@proflyer.ai
    await resend.emails.send({
      from: 'ProFlyer.ai <noreply@proflyer.ai>',
      to: 'contact@proflyer.ai',
      subject: 'New Early Access Signup! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #6366f1;">New ProFlyer.ai Signup!</h2>
          <p style="font-size: 16px;">You have a new early access signup:</p>
          <p style="font-size: 18px; font-weight: bold; color: #333;">${email}</p>
          <p style="color: #666;">Time: ${new Date().toLocaleString()}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #999; font-size: 14px;">This is an automated notification from your ProFlyer.ai coming soon page.</p>
        </div>
      `
    });

    // Optional: Send welcome email to the subscriber
    await resend.emails.send({
      from: 'ProFlyer.ai <contact@proflyer.ai>',
      to: email,
      subject: 'Welcome to ProFlyer.ai! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #6366f1; font-size: 36px; margin-bottom: 10px;">ProFlyer.ai</h1>
            <p style="color: #666; font-size: 18px;">Your AI Design Assistant</p>
          </div>
          
          <h2 style="color: #333;">You're on the list! 🎉</h2>
          <p style="color: #555; line-height: 1.6;">
            Thank you for joining ProFlyer.ai's early access list! You're among the first to experience the future of AI-powered design.
          </p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #6366f1; margin-top: 0;">What's Next?</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>We're launching in <strong>30 days</strong></li>
              <li>You'll get <strong>50% off forever</strong> as an early supporter</li>
              <li>Exclusive beta access before public launch</li>
              <li>Direct input on features and development</li>
            </ul>
          </div>
          
          <p style="color: #555; line-height: 1.6;">
            Stay tuned for updates! We can't wait to show you what Fly, your AI design assistant, can do.
          </p>
          
          <hr style="border: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 14px; text-align: center;">
            ProFlyer.ai - Create stunning newsletters, infographics, and flyers in seconds.<br>
            <a href="https://proflyer.ai" style="color: #6366f1;">proflyer.ai</a>
          </p>
        </div>
      `
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to process signup' });
  }
}

// ============================================
// OPTION 2: Using SendGrid (More features)
// First: npm install @sendgrid/mail
/*
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  try {
    // Notification to you
    await sgMail.send({
      to: 'contact@proflyer.ai',
      from: 'noreply@proflyer.ai',
      subject: 'New ProFlyer.ai Signup!',
      text: `New signup: ${email}`,
      html: `<p>New signup: <strong>${email}</strong></p>`,
    });

    // Welcome email to subscriber
    await sgMail.send({
      to: email,
      from: 'contact@proflyer.ai',
      subject: 'Welcome to ProFlyer.ai!',
      templateId: 'YOUR_TEMPLATE_ID', // Optional: use SendGrid templates
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
*/

// ============================================
// OPTION 3: Using Nodemailer (Works with any email provider)
// First: npm install nodemailer
/*
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com', // or your email provider
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  try {
    // Send notification
    await transporter.sendMail({
      from: '"ProFlyer.ai" <noreply@proflyer.ai>',
      to: 'contact@proflyer.ai',
      subject: 'New Early Access Signup!',
      html: `<p>New signup: <strong>${email}</strong></p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
*/

// ============================================
// OPTION 4: Simple Webhook (Zapier/Make.com)
// No packages needed!
/*
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  try {
    // Send to Zapier webhook
    await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
        source: 'coming_soon_page'
      }),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to process signup' });
  }
}
*/
