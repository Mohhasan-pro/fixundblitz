import Script from "next/script";
import { Metadata } from "next";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata: Metadata = {
    title: "Bewertungen | FIX & BLITZ",
    description: "Das sagen unsere Kunden über uns. Echte Bewertungen zu Gartenpflege, Reinigung und mehr.",
};

export default function Bewertungen() {
    return (
        <>
            {/* Hero */}
            <section className="py-20 bg-brand-black">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-white text-center mb-4">
                        Was unsere Kunden <span className="text-brand-gold">sagen</span>
                    </h1>
                    <p className="text-brand-white/70 text-center max-w-2xl mx-auto">
                        Ihre Zufriedenheit ist unser Maßstab. Hier finden Sie echtes Feedback unserer Kunden direkt von Google.
                    </p>
                </div>
            </section>

            {/* Elfsight Google Reviews Widget */}
            <section className="py-20 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4">
                    <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
                    <div className="elfsight-app-335f5da4-f875-467a-96cb-31dd1e7fd290" data-elfsight-app-lazy></div>
                </div>
            </section>

            {/* Feedback-Formular Bereich */}
            <section id="feedback-form" className="py-20 bg-brand-black border-t border-brand-gold/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-brand-white mb-4">
                        Waren Sie auch zufrieden?
                    </h2>
                    <p className="text-brand-white/80 text-lg mb-12">
                        Wir freuen uns über jedes Feedback! Bewerten Sie uns direkt hier.
                    </p>

                    <FeedbackForm />
                </div>
            </section>
        </>
    );
}
