import Link from "next/link";

export default function Datenschutz() {
    return (
        <div className="min-h-screen bg-brand-black py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-brand-gold mb-8">Datenschutzerklärung</h1>

                <div className="space-y-8 text-brand-white/80">

                    <section>
                        <h2 className="text-2xl font-bold text-brand-white mb-4">1. Datenschutz auf einen Blick</h2>

                        <h3 className="text-xl font-semibold text-brand-gold mb-3">Allgemeine Hinweise</h3>
                        <p className="mb-4">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                            Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                            denen Sie persönlich identifiziert werden können.
                        </p>

                        <h3 className="text-xl font-semibold text-brand-gold mb-3">Datenerfassung auf dieser Website</h3>
                        <p className="mb-2"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                        <p className="mb-4">
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                            können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle&quot; in dieser Datenschutzerklärung entnehmen.
                        </p>

                        <p className="mb-2"><strong>Wie erfassen wir Ihre Daten?</strong></p>
                        <p className="mb-4">
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
                            z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p className="mb-4">
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                            IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
                            Uhrzeit des Seitenaufrufs).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-white mb-4">2. Hosting</h2>
                        <p className="mb-4">
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                        </p>
                        <p className="text-brand-gold mb-2"><strong>[HOSTING-ANBIETER EINTRAGEN, z.B. Vercel, Netlify, etc.]</strong></p>
                        <p className="mb-4">
                            Wenn Sie unsere Website besuchen, erfasst der Hoster automatisch verschiedene Logfiles inklusive
                            Ihrer IP-Adressen. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

                        <h3 className="text-xl font-semibold text-brand-gold mb-3">Datenschutz</h3>
                        <p className="mb-4">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                            Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                            sowie dieser Datenschutzerklärung.
                        </p>

                        <h3 className="text-xl font-semibold text-brand-gold mb-3">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                        <div className="bg-brand-black border border-brand-gold/20 rounded-lg p-4 my-4">
                            <p className="text-brand-gold">Fix & Blitz</p>
                            <p>Mohammad Hasan</p>
                            <p>Ruwestr. 2</p>
                            <p>49084 Osnabrück</p>
                            <p className="mt-2">Telefon: 015781513109</p>
                            <p>E-Mail: info@fixundblitz.de</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-white mb-4">4. Datenerfassung auf dieser Website</h2>

                        <h3 className="text-xl font-semibold text-brand-gold mb-3">Server-Log-Dateien</h3>
                        <p className="mb-4">
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            <li>Browsertyp und Browserversion</li>
                            <li>verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                            <li>IP-Adresse</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-brand-gold mb-3">Kontaktformular</h3>
                        <p className="mb-4">
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-white mb-4">5. Plugins und Tools</h2>

                        <h3 className="text-xl font-semibold text-brand-gold mb-3">Google Fonts</h3>
                        <p className="mb-4">
                            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts,
                            die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten
                            Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                        </p>

                        <h3 className="text-xl font-semibold text-brand-gold mb-3">CHECK24 Profis Widget</h3>
                        <p className="mb-4">
                            Auf dieser Website ist das CHECK24 Profis Widget eingebunden. Beim Laden des Widgets werden
                            Daten an CHECK24 übermittelt. Weitere Informationen finden Sie in der{" "}
                            <a
                                href="https://www.check24.de/unternehmen/datenschutz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-gold hover:underline"
                            >
                                Datenschutzerklärung von CHECK24
                            </a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-white mb-4">6. Ihre Rechte</h2>
                        <p className="mb-4">Sie haben folgende Rechte:</p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                            <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über Ihre gespeicherten Daten verlangen</li>
                            <li><strong>Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen</li>
                            <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
                            <li><strong>Einschränkung der Verarbeitung:</strong> Sie können die Einschränkung verlangen</li>
                            <li><strong>Datenübertragbarkeit:</strong> Sie können Ihre Daten in einem strukturierten Format erhalten</li>
                            <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung widersprechen</li>
                            <li><strong>Beschwerderecht:</strong> Sie können sich bei einer Aufsichtsbehörde beschweren</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-white mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
                        <p className="mb-4">
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
                            eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                            Adresszeile des Browsers von „http://&quot; auf „https://&quot; wechselt.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
