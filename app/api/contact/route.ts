import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Lazy init — only instantiated at request time, not build time

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'CTO1 Contact <noreply@cto1.com>',
      to: ['edwin@cto1.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00D4FF;">New message from CTO1 website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #666;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #666;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #666; vertical-align: top;">Message:</td>
              <td style="padding: 8px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Sent from <a href="https://cto1.com">cto1.com</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
