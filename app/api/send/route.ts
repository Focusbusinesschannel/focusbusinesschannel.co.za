import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const resend = new Resend(process.env.RESEND_API_KEY);
const prisma = new PrismaClient();

// Schema Definition
const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
    _gotcha: z.string().optional() // Honeypot
});

// Simple In-Memory Rate Limit (Caution: Resets on server restart/redeploy)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP

export async function POST(request: Request) {
    try {
        // 1. Rate Limiting
        const ip = request.headers.get('x-forwarded-for') || 'unknown';
        const now = Date.now();
        const lastRequestTime = rateLimitMap.get(ip) || 0;

        if (now - lastRequestTime < RATE_LIMIT_WINDOW) {
            // Basic check: if less than window since last req, might be spam. 
            // Ideally we count requests, but for simple flood protection this works.
            // Let's implement a counter for better UX
        }

        // Better Rate Limiting Logic
        const requestLog = rateLimitMap.get(ip) || 0;
        if (requestLog > now) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }
        // Set expiry for 1 minute from now
        rateLimitMap.set(ip, now + RATE_LIMIT_WINDOW);


        const body = await request.json();

        // 2. Input Validation
        const result = contactFormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation Failed', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, subject, message, _gotcha } = result.data;

        // 3. Honeypot Check
        if (_gotcha && _gotcha.length > 0) {
            // Silently reject bots
            console.log(`Bot submission detected from ${ip}`);
            return NextResponse.json({ data: { id: 'mock-success' } });
        }

        // 4. Data Persistence (Prisma)
        try {
            await prisma.contactSubmission.create({
                data: {
                    name,
                    email,
                    subject,
                    message
                }
            });
        } catch (dbError) {
            console.error('Failed to save to database:', dbError);
            // Non-blocking: continue to send email even if DB fails
        }

        const { data, error } = await resend.emails.send({
            from: 'Focus Contact Form <info@focusbusinesschannel.co.za>',
            to: [process.env.CONTACT_EMAIL || 'info@focusbusinesschannel.co.za'],
            replyTo: email,
            subject: `New Contact Form Submission: ${subject}`,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        console.error('Internal API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
