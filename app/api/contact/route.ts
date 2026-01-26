import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, budget, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to yourself
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Budget: ${budget}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Submission</title>
        </head>
        <body style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f5; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 3px solid #000000;">
            
            <!-- Header -->
            <div style="background-color: #000000; color: #ffffff; padding: 20px; text-align: center; border-bottom: 3px solid #000000;">
              <h1 style="font-size: 24px; font-weight: bold; letter-spacing: -1px; margin: 0;">BLÄK / NEW PROJECT</h1>
            </div>

            <!-- Content -->
            <div style="padding: 30px 20px;">
              
              <div style="margin-bottom: 25px;">
                <span style="font-size: 11px; text-transform: uppercase; color: #666666; display: block; letter-spacing: 1px; margin-bottom: 5px;">Client Name</span>
                <div style="font-size: 16px; color: #000000; font-weight: bold;">${name}</div>
              </div>
              
              <div style="margin-bottom: 25px;">
                <span style="font-size: 11px; text-transform: uppercase; color: #666666; display: block; letter-spacing: 1px; margin-bottom: 5px;">Email Address</span>
                <div style="font-size: 16px; color: #000000;">
                  <a href="mailto:${email}" style="color: #000000; text-decoration: underline;">${email}</a>
                </div>
              </div>

              <div style="display: flex; margin-bottom: 25px;">
                <div style="flex: 1; margin-right: 10px;">
                  <span style="font-size: 11px; text-transform: uppercase; color: #666666; display: block; letter-spacing: 1px; margin-bottom: 5px;">Company</span>
                  <div style="font-size: 16px; color: #000000;">${company || '-'}</div>
                </div>
                <div style="flex: 1;">
                   <span style="font-size: 11px; text-transform: uppercase; color: #666666; display: block; letter-spacing: 1px; margin-bottom: 5px;">Budget</span>
                   <div style="font-size: 14px; background: #000000; color: #ffffff; display: inline-block; padding: 4px 8px;">${budget || '-'}</div>
                </div>
              </div>

              <div style="margin-bottom: 10px;">
                <span style="font-size: 11px; text-transform: uppercase; color: #666666; display: block; letter-spacing: 1px; margin-bottom: 5px;">Project Details</span>
                <div style="background-color: #f4f4f5; border: 2px solid #000000; padding: 20px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</div>
              </div>

            </div>

            <!-- Footer -->
            <div style="border-top: 3px solid #000000; padding: 15px; text-align: center; font-size: 10px; color: #666666; text-transform: uppercase; letter-spacing: 1px;">
              Sent via bläk website contact form
            </div>
            
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send acknowledgment email to the customer
    const ackMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Sending to the customer
      subject: `Project Inquiry Received - bläk`,
      text: `
        Hello ${name},

        We have received your project inquiry. Our team will review the details and get back to you shortly.

        Here is a copy of what you sent:
        
        Company: ${company || 'N/A'}
        Budget: ${budget || 'N/A'}
        Message: ${message}

        Best regards,
        bläk Team
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Inquiry Received</title>
        </head>
        <body style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f5; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 3px solid #000000;">
            
            <!-- Header -->
            <div style="background-color: #000000; color: #ffffff; padding: 20px; text-align: center; border-bottom: 3px solid #000000;">
              <h1 style="font-size: 24px; font-weight: bold; letter-spacing: -1px; margin: 0;">BLÄK / RECEIVED</h1>
            </div>

            <!-- Content -->
            <div style="padding: 30px 20px;">
              
              <div style="margin-bottom: 25px; font-size: 16px; color: #000000; line-height: 1.6;">
                Hello <strong>${name}</strong>,<br><br>
                We have received your project inquiry. Our team will review the details you provided and get back to you shortly.
              </div>
              
              <div style="margin-bottom: 15px;">
                <span style="font-size: 11px; text-transform: uppercase; color: #666666; display: block; letter-spacing: 1px; margin-bottom: 5px;">Your Submission</span>
              </div>

              <div style="background-color: #f4f4f5; border: 2px solid #000000; padding: 20px; margin-bottom: 25px;">
                
                <div style="display: flex; margin-bottom: 15px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
                  <div style="flex: 1;">
                    <span style="font-size: 10px; text-transform: uppercase; color: #666666; display: block; margin-bottom: 3px;">Company</span>
                    <div style="font-size: 14px; font-weight: bold;">${company || '-'}</div>
                  </div>
                   <div style="flex: 1;">
                    <span style="font-size: 10px; text-transform: uppercase; color: #666666; display: block; margin-bottom: 3px;">Budget</span>
                    <div style="font-size: 14px; font-weight: bold;">${budget || '-'}</div>
                  </div>
                </div>

                <div>
                   <span style="font-size: 10px; text-transform: uppercase; color: #666666; display: block; margin-bottom: 5px;">Message</span>
                   <div style="font-size: 14px; line-height: 1.5;">${message.replace(/\n/g, '<br>')}</div>
                </div>

              </div>

              <div style="font-size: 14px; color: #000000;">
                Best regards,<br>
                <strong>bläk Team</strong>
              </div>

            </div>

            <!-- Footer -->
            <div style="border-top: 3px solid #000000; padding: 15px; text-align: center; font-size: 10px; color: #666666; text-transform: uppercase; letter-spacing: 1px;">
              © ${new Date().getFullYear()} bläk. All rights reserved.
            </div>
            
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(ackMailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
