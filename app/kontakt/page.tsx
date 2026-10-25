import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Kontakt | FIX & BLITZ",
    description: "Kontaktieren Sie uns für ein kostenloses Angebot in Osnabrück. Telefonisch, per WhatsApp oder über unser Kontaktformular.",
};

export default function Kontakt() {
    return (
        <>
            {/* Hero Header */}
            <section className="py-20 bg-brand-black">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-4">
                        Kontaktieren Sie <span className="text-brand-gold">uns</span>
                    </h1>
                    <p className="text-brand-white/70 max-w-2xl mx-auto text-lg">
                        Schnell, unkompliziert und auf Augenhöhe. Wählen Sie einfach den Weg, der Ihnen am besten passt.
                    </p>
                </div>
            </section>

            {/* Content: 3-Wege-Strategie */}
            <section className="py-16 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LINKS: Schnelle Wege (WhatsApp, Telefon, Infos) */}
                    <div className="space-y-6">

                        {/* WEG 1: WhatsApp */}
                        <div className="bg-brand-black p-6 rounded-xl border border-[#25D366]/30 hover:border-[#25D366] transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-3xl">💬</span>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-white">Schnellanfrage per WhatsApp</h3>
                                    <p className="text-xs text-[#25D366] font-semibold">Am beliebtesten & schnellsten</p>
                                </div>
                            </div>
                            <p className="text-brand-white/70 text-sm mb-4">
                                Schicken Sie uns einfach kurz 2–3 Fotos Ihres Auftrags (z. B. Garten, Möbel, Keller) per WhatsApp für eine schnelle Ersteinschätzung.
                            </p>
                            <a
                                href="https://wa.me/4915781513109?text=Hallo%20FIX%20%26%20BLITZ,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20Angebot."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#20ba59] transition-colors"
                            >
                                WhatsApp Chat starten
                            </a>
                        </div>

                        {/* WEG 2: Direktanruf */}
                        <div className="bg-brand-black p-6 rounded-xl border border-brand-gold/20 hover:border-brand-gold transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-3xl">📞</span>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-white">Telefonischer Direktkontakt</h3>
                                    <p className="text-xs text-brand-gold font-semibold">Mo. – Sa.: 08:00 – 18:00 Uhr</p>
                                </div>
                            </div>
                            <p className="text-brand-white/70 text-sm mb-4">
                                Sie möchten Ihr Anliegen sofort persönlich besprechen? Rufen Sie uns jederzeit gerne an.
                            </p>
                            <a
                                href="tel:+4915781513109"
                                className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_15px_-5px_var(--color-brand-gold)]"
                            >
                                01578 1513109 anrufen
                            </a>
                        </div>

                        {/* Standort & Einsatzgebiet Info */}
                        <div className="bg-brand-black/50 p-6 rounded-xl border border-brand-white/10 text-brand-white/70 text-sm space-y-2">
                            <p><strong className="text-brand-white">Standort:</strong> Ruwestr. 2, 49084 Osnabrück</p>
                            <p><strong className="text-brand-white">Einsatzgebiet:</strong> Osnabrück und Umgebung (bis zu 50 km Umkreis)</p>
                            <p><strong className="text-brand-white">E-Mail:</strong> info@fixundblitz.de</p>
                        </div>

                    </div>

                    {/* RECHTS: WEG 3 (Schriftliches Formular) */}
                    <div className="bg-brand-black p-8 rounded-xl border border-brand-gold/20">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-brand-white mb-2">
                                Schriftliche Anfrage
                            </h2>
                            <p className="text-brand-white/70 text-sm">
                                Füllen Sie kurz dieses Formular aus. Wir melden uns werktags meist innerhalb von 24 Stunden bei Ihnen.
                            </p>
                        </div>

                        <ContactForm />
                    </div>

                </div>
            </section>
        </>
    );
}
