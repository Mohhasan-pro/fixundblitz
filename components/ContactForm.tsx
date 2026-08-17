"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("Allgemeine Anfrage");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, subject, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus("error");
                setErrorMsg(data.error || "Es ist ein Fehler aufgetreten.");
                return;
            }

            setStatus("success");
            setName("");
            setEmail("");
            setSubject("Allgemeine Anfrage");
            setMessage("");
        } catch {
            setStatus("error");
            setErrorMsg("Verbindung fehlgeschlagen. Bitte versuchen Sie es später erneut.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-brand-white/70 mb-2 text-sm">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Ihr Name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-brand-white/70 mb-2 text-sm">E-Mail</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="ihre@email.de"
                />
            </div>

            <div>
                <label htmlFor="subject" className="block text-brand-white/70 mb-2 text-sm">Betreff</label>
                <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                >
                    <option>Allgemeine Anfrage</option>
                    <option>Gartenpflege</option>
                    <option>Reinigung</option>
                    <option>Transport</option>
                    <option>Entrümpelung</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-brand-white/70 mb-2 text-sm">Nachricht</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand-gold text-brand-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
            </button>

            {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                    Danke für Ihre Nachricht! Wir melden uns so schnell wie möglich bei Ihnen.
                </p>
            )}

            {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                    {errorMsg}
                </p>
            )}
        </form>
    );
}
