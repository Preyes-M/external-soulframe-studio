import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}
const resend = new Resend(apiKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, shootType, date, message } = body;

    if (!name || !phone || !email || !shootType || !date) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const safeMessage = escapeHtml(message || '');
    await resend.emails.send({
      from: 'SoulFrame Studio <noreply@soulframestudio.in>',
      to: ['soulframestudiobyrd@gmail.com'],
      subject: `New Photography Inquiry - ${shootType}`,
      html: `
        <h2>New Inquiry from Website</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Shoot Type:</strong> ${shootType}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>

        <p><strong>Message:</strong></p>
        <p>${safeMessage || 'No message provided'}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (tag) => {
    const chars: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return chars[tag] || tag;
  });
}
