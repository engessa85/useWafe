import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { storeName, personName, whatsapp, orders } = await request.json();

        if (!storeName || !personName || !whatsapp) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'WAFE Bookings <notifications@usewafe.com>',
            to: ['support@usewafe.com'],
            subject: `New Demo Request from ${storeName}`,
            html: `
        <h1>New Demo Request</h1>
        <p><strong>Store Name:</strong> ${storeName}</p>
        <p><strong>Contact Person:</strong> ${personName}</p>
        <p><strong>WhatsApp Number:</strong> ${whatsapp}</p>
        <p><strong>Monthly Orders:</strong> ${orders || 'Not specified'}</p>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
