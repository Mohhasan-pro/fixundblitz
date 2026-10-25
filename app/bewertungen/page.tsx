import Script from "next/script";
import { Metadata } from "next";

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

            {/* Direkter Google-Bewertungsaufruf statt E-Mail-Formular */}
            <section className="py-20 bg-brand-black border-t border-brand-gold/20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
                        Waren Sie auch <span className="text-brand-gold">zufrieden?</span>
                    </h2>
                    <p className="text-brand-white/80 text-lg mb-8">
                        Unterstützen Sie uns mit einer kurzen Bewertung auf Google. Ihr Feedback hilft uns und anderen Kunden!
                    </p>

                    <a
                        href="https://g.page/r/CVjopo4Tcp-0EAE/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-bold text-lg px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_20px_-5px_var(--color-brand-gold)]"
                    >
                        <span>⭐</span> Jetzt auf Google bewerten
                    </a>
                </div>
            </section>
        </>
    );
}
