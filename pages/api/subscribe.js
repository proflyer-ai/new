export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  try {
    // Web3Forms - works instantly!
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY', // Get from web3forms.com
        to_email: 'contact@proflyer.ai',
        subject: 'New ProFlyer.ai Signup!',
        from_name: 'ProFlyer.ai',
        message: `New early access signup: ${email}`
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to process signup' });
  }
}
