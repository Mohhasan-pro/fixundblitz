import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const services = [
    {
      title: "Gartenpflege",
      desc: "Ihr Garten verdient Aufmerksamkeit! Wir kümmern uns um Rasenmähen, Heckenschnitt, Unkrautentfernung, Beetpflege und vieles mehr.",
      features: [
        "Rasen mähen & pflegen",
        "Hecken- & Strauchschnitt",
        "Unkrautentfernung",
        "Beetpflege & Bepflanzung",
      ],
      image: "/images/services/gartenpflege.webp",
      link: "/leistungen/gartenpflege",
    },
    {
      title: "Reinigung",
      desc: "Sauberkeit ist unser Handwerk. Ob Grundreinigung, Fensterputzen, Treppenhausreinigung oder Büroreinigung – wir bringen alles zum Glänzen.",
      features: [
        "Grundreinigung",
        "Fensterreinigung",
        "Treppenhausreinigung",
        "Büro- & Praxisreinigung",
      ],
      link: "/leistungen/reinigung",
      image: "/images/services/Reinigung.webp",
    },
    {
      title: "Transport & Umzüge",
      desc: "Umzug geplant oder schwere Möbel zu transportieren? Wir helfen beim Tragen, Fahren und Aufbauen – stressfrei und sicher.",
      features: [
        "Möbeltransporte",
        "Umzugshilfe",
        "Kurierfahrten",
        "Möbelmontage",
      ],
      link: "/leistungen/transport",
      image: "/images/services/Transport.webp",
    },
    {
      title: "Entrümpelung",
      desc: "Keller voll? Dachboden überquellend? Wir räumen auf, entsorgen fachgerecht und hinterlassen Ordnung – schnell und diskret.",
      features: [
        "Haushaltsauflösungen",
        "Keller- & Dachbodenräumung",
        "Sperrmüllentsorgung",
        "Messie-Wohnungen",
      ],
      link: "/leistungen/entruempelung",
      image: "/images/services/Entruempelung.webp",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-2 flex items-center justify-center bg-brand-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Gartenpflege und Reinigung in Osnabrück"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/50 to-brand-black"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
              Das Ende des <span className="text-brand-gold">Chaos</span>
            </h1>
            <p className="text-xl text-brand-white/80 mb-8">
              Ihr zuverlässiger Partner für Gartenpflege, Reinigung, Transport und Entrümpelung in Osnabrück und Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">

              <a href="tel:+4915781513109"
                className="bg-brand-gold text-brand-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 text-center" >
                Jetzt anrufen
              </a>
              <Link
                href="/kontakt"
                className="border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-gold hover:text-brand-black text-center"
              >
                Kostenloses Angebot
              </Link>
            </div>
          </div>

          {/* Maskottchen */}
          <div className="flex justify-center">
            <Image
              src="/images/maskottchen-full.png"
              alt="FIX & BLITZ Maskottchen"
              width={400}
              height={500}
              className="w-auto h-auto max-h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="py-10 bg-brand-black border-t border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-gold uppercase tracking-wider">
            Unsere Leistungen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group relative bg-brand-black rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-brand-gold/10 hover:border-brand-gold/40">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-brand-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 relative">
                  <p className="text-brand-white/70 mb-6 min-h-[50px]">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-brand-white/60">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-10 bg-brand-black border-t border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Bild */}
          <div className="flex justify-center">
            <Image
              src="/images/maskottchen-half.png"
              alt="FIX & BLITZ Maskottchen"
              width={350}
              height={400}
              className="w-auto h-auto"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-brand-white mb-6">
              Unsere <span className="text-brand-gold">Geschichte</span>
            </h2>
            <p className="text-brand-white/80 mb-4">
              FIX & BLITZ wurde mit einer einfachen Mission gegründet: Menschen in Osnabrück und Umgebung bei den Aufgaben zu helfen, für die im Alltag oft die Zeit fehlt.
            </p>
            <p className="text-brand-white/80 mb-4">
              Ob ein verwilderter Garten, ein vollgestellter Keller oder ein anstehender Umzug – wir packen dort an, wo Sie Unterstützung brauchen. Schnell, zuverlässig und zu fairen Preisen.
            </p>
            <p className="text-brand-white/80">
              Unser Motto <span className="text-brand-gold font-bold">&quot;Das Ende des Chaos&quot;</span> ist dabei Programm: Wir bringen Ordnung in Ihr Zuhause und Ihren Alltag.
            </p>
          </div>
        </div>
      </section>

      {/* Werte Section */}
      <section className="py-10 bg-brand-black border-t border-brand-gold/20">

        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-white text-center mb-12">
            Unsere <span className="text-brand-gold">Werte</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-brand-black rounded-xl p-8 text-center group transition-colors duration-300">
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">💪</div>
              <h3 className="text-xl font-bold text-brand-white mb-2">Zuverlässigkeit</h3>
              <p className="text-brand-white/70">
                Wir halten, was wir versprechen. Termine werden eingehalten, Arbeit wird erledigt.
              </p>
            </div>

            <div className="bg-brand-black rounded-xl p-8 text-center group transition-colors duration-300">
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">🤝</div>
              <h3 className="text-xl font-bold text-brand-white mb-2">Ehrlichkeit</h3>
              <p className="text-brand-white/70">
                Transparente Preise, ehrliche Beratung – keine versteckten Kosten.
              </p>
            </div>

            <div className="bg-brand-black rounded-xl p-8 text-center group transition-colors duration-300">
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">⭐</div>
              <h3 className="text-xl font-bold text-brand-white mb-2">Qualität</h3>
              <p className="text-brand-white/70">
                Wir arbeiten gründlich und hinterlassen nur zufriedene Kunden.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Warum wir Section */}
      <section className="py-10 bg-brand-black border-t border-brand-gold/20 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-gold">
              Die Geschichte von FIX & BLITZ
            </h2>
            <h3 className="text-xl text-brand-white/90 font-semibold mb-6">
              &quot;Qualität ist kein Zufall, sondern das Ergebnis von harter Arbeit.&quot;
            </h3>
            <p className="text-brand-white/70 mb-6 leading-relaxed">
              Gegründet mit der Vision, Dienstleistungen nicht nur anzubieten, sondern zu perfektionieren. Was als kleines Ein-Mann-Unternehmen begann, ist heute ein vertrauenswürdiger Partner für hunderte Kunden in Osnabrück.
            </p>
            <p className="text-brand-white/70 mb-8 leading-relaxed">
              Wir glauben daran, dass jeder Garten, jedes Haus und jedes Projekt die volle Aufmerksamkeit verdient. Deshalb setzen wir auf modernstes Equipment und geschultes Personal.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-brand-black border-t border-brand-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-white mb-6">
            Bereit für ein <span className="text-brand-gold">glänzendes</span> Ergebnis?
          </h2>
          <p className="text-xl text-brand-white/70 mb-10">
            Lassen Sie uns gemeinsam Ihr Projekt verwirklichen. Kontaktieren Sie uns für ein unverbindliches Angebot.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/kontakt"
              className="px-8 py-4 bg-brand-gold text-brand-black text-lg font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_20px_-5px_var(--color-brand-gold)]"
            >
              Kostenloses Angebot anfordern
            </Link>
            <a
              href="tel:+4915123456789"
              className="px-8 py-4 border border-brand-white/30 text-brand-white text-lg font-bold rounded-lg hover:bg-brand-white/10 transition-colors"
            >
              Direkt anrufen
            </a>
          </div>
        </div>
      </section>

    </>
  );
}