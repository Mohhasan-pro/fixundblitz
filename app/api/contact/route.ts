import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message } = await req.json();

        // Basic server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Bitte füllen Sie alle Pflichtfelder aus." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            // Must be an address on a domain verified in Resend
            from: "FIX & BLITZ Kontaktformular <info@fixundblitz.de>",
            to: ["info@fixundblitz.de"],
            replyTo: email,
            subject: `Neue Anfrage: ${subject || "Allgemeine Anfrage"}`,
            text: `Neue Kontaktanfrage über die Website\n\nName: ${name}\nE-Mail: ${email}\nBetreff: ${subject || "Allgemeine Anfrage"}\n\nNachricht:\n${message}`,
            html: `
                <h2>Neue Kontaktanfrage über die Website</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
                <p><strong>Betreff:</strong> ${escapeHtml(subject || "Allgemeine Anfrage")}</p>
                <p><strong>Nachricht:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact form error:", err);
        return NextResponse.json(
            { error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." },
            { status: 500 }
        );
    }
}

function escapeHtml(str: string) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
