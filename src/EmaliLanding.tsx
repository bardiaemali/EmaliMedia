import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Mail, GitBranch } from "lucide-react";

export default function Home() {
  const portfolio = [
    {
      id: 1,
      title: "Marken-Redesign für Luma Tech",
      desc: "Neues visuelles System, UI-Kit und Mini-Webshop (React).",
      tags: ["Branding", "UI/UX", "E-Commerce"],
    },
    {
      id: 2,
      title: "Landingpage für GreenMove",
      desc: "Conversion-optimierte Landingpage mit A/B Tests und Analytics.",
      tags: ["Landingpage", "Conversion", "Analytics"],
    },
    {
      id: 3,
      title: "SaaS Dashboard — NovaAnalytics",
      desc: "Dashboard Design + Frontend-Komponentenbibliothek.",
      tags: ["Product", "Design System", "React"],
    },
  ];

  const references = [
    {
      id: 1,
      name: "Jona K. — E-Commerce Unternehmer",
      quote:
        "Durch Emali Media konnten wir unsere Reichweite auf ein ganz neues Level bringen. In wenigen Tagen waren schon die ersten Ergebnisse sichtbar. Ich bin unfassbar zufrieden.",
      image: "/IMG_0904.png",
    },
    {
      id: 2,
      quote:
        "Für einen Content Creator konnten wir diese Ergebnisse in den ersten 7 tagen erzielen. Zielgruppe festgelegt, Content erstellt und mit der Zielgruppe Interagiert... ",
      image: "/Im1.png",
    },
  ];

  const faq = [
    {
      q: "Wie schnell könnt ihr Projekte umsetzen?",
      a: "Je nach Umfang können wir meist innerhalb einer Woche starten. Kleine Landingpages stellen wir oft schon in wenigen Tagen fertig.",
    },
    {
      q: "Wie geht ihr vor?",
      a: "Wir analysieren deinen Online-Auftritt genau und wenden anhand deiner Probleme gezielte Strategien und Lösungen an.",
    },
    {
      q: "Was hebt euch von anderen ab?",
      a: "Wir arbeiten mit moderner Cloud-Infrastruktur, viel Erfahrung und besonderer Kreativität.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100 antialiased">
      {/* Header */}
      <header className="w-full bg-gray-950 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo + Titel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                Emali Media
              </h1>
              <p className="text-sm text-gray-400 -mt-0.5">
                "Wir machen dein Unternehmen so fit wie noch nie"
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 items-center text-sm text-gray-300">
            {[
              { to: "about", label: "Über uns" },
              { to: "workflow", label: "Prozess" },
              { to: "refs", label: "unsere Arbeit" },
              { to: "faq", label: "FAQ" },
              { to: "contact", label: "Zusammenarbeiten" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={700}
                offset={-80}
                className="cursor-pointer relative group"
              >
                <span className="group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Call to Action */}
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            href="mailto:emali.media@web.de"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md hover:opacity-90"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">emali.media@web.de</span>
          </motion.a>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 pt-32">
        {/* Hero */}
        <section className="pb-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Wir machen Klicks zu Kunden...
            </h2>
            <p className="mt-6 text-gray-300 max-w-xl">
              Mehr Sichtbarkeit, mehr Kunden, mehr Umsatz - wir bringen dein
              Business online auf Erfolgskurs. Damit dein Unternehmen fitter
              denn je wird.
            </p>
            <div className="mt-8 flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white font-medium shadow-lg"
              >
                Jetzt anfragen
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#portfolio"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10"
              >
                Portfolio ansehen
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                src="/CH2.png"
                alt="Hero Showcase"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-16 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-semibold">Über uns</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Wir machen dich zum Online Helden. Egal ob Websites, die
                verkaufen, Social Media, das knallt, bei uns ist Schluss mit
                langweiligem Marketing. Wir bringen deine Marke dahin, wo Kunden
                nicht wegklicken können. Dein Erfolg? Unser Job.
                <br />
                <br />
                Starte noch heute und buche dir ein kostenloses Erstgespräch in
                dem wir deine Online Präsenz analysieren und dir wertvolle Tipps
                mitgeben.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="/CH3.png"
                alt="About"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Workflow */}
        <section
          id="workflow"
          className="py-16 bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl"
        >
          <h3 className="text-3xl font-semibold text-center">Unser Prozess</h3>
          <p className="mt-2 text-gray-400 text-center">
            So arbeiten wir mit dir Schritt für Schritt zusammen.
          </p>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1. Kostenloses Erstgespräch",
                desc: "Welche Probleme bestehen gerade? Welches Marketing passt zu dir und deinem Unternehmen? Wie können wir dir spezifisch helfen?",
              },
              {
                step: "2. Start der Zusammenarbeit",
                desc: "Wir starten mit einer kostenlosen Testphase von 7 Tagen, um dich und dein Unternehmen näher kennenzulernen.",
              },
              {
                step: "3. Monatliche Zusammenarbeit",
                desc: "Durch geregelte Prozesse bekommst du nun jeden Tag qualitativen Content und Interessenten bleiben an deiner Website hängen.",
              },
              {
                step: "4. Prozess Optimierung",
                desc: "Stetiges Prozess Optimieren unserer Arbeit trifft deine Zielgruppe immer präziser und genauer. Wir halten deinen Online Auftritt immer auf dem neusten Stand der Dinge.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg hover:translate-y-[-6px] transition-transform"
              >
                <h4 className="font-semibold text-lg mb-2">{s.step}</h4>
                <p className="text-gray-300 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* References */}
        <section id="refs" className="py-16">
          <h3 className="text-3xl font-semibold text-center">Unsere Arbeit</h3>
          <p className="mt-2 text-gray-400 text-center">
            Das sagen unsere Kunden über uns.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {references.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={r.image}
                  alt={r.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-100 italic">“{r.quote}”</p>
                  <footer className="mt-4 text-sm text-gray-300">
                    {r.name}
                  </footer>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 border-t border-white/5">
          <h3 className="text-3xl font-semibold text-center">FAQ</h3>
          <p className="mt-2 text-gray-400 text-center">
            Antworten auf häufige Fragen.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {faq.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg"
              >
                <h4 className="font-semibold mb-2">{f.q}</h4>
                <p className="text-gray-300 text-sm">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-10 bg-gradient-to-r from-indigo-700 to-cyan-600 shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Bereit für dein kostenloses Erstgespräch?
                </h3>
                <p className="mt-2 text-indigo-100">
                  Melde dich bei uns und wir zeigen dir wie du mehr aus deinem
                  Online Auftritt rausholst.
                </p>
                <div className="mt-4 flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href="mailto:hello@emali.media?subject=Anfrage%20Emali%20Media"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 text-white"
                  >
                    E-Mail senden
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href="#"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white text-indigo-700 font-semibold"
                  >
                    Call buchen
                  </motion.a>
                </div>
              </div>

              <form className="w-full md:w-1/2 bg-white rounded-lg p-6 shadow-md">
                <label className="text-xs text-gray-600">Name</label>
                <input
                  className="w-full mt-1 p-3 rounded-md bg-gray-100 border border-gray-300"
                  placeholder="Dein Name"
                />
                <label className="text-xs text-gray-600 mt-3">E-Mail</label>
                <input
                  className="w-full mt-1 p-3 rounded-md bg-gray-100 border border-gray-300"
                  placeholder="name@beispiel.de"
                />
                <label className="text-xs text-gray-600 mt-3">
                  Projektbeschreibung
                </label>
                <textarea
                  className="w-full mt-1 p-3 rounded-md bg-gray-100 border border-gray-300"
                  rows={3}
                  placeholder="In welchen Bereichen hakt es bei dir?"
                />
                <div className="mt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow"
                  >
                    Absenden
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-white/5 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p>© 2025 Emali Media. Alle Rechte vorbehalten.</p>
            <nav className="flex gap-6" aria-label="Footer navigation">
              <a href="/datenschutz" className="hover:text-white">
                Datenschutz
              </a>
              <a href="/impressum" className="hover:text-white">
                Impressum
              </a>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
}
