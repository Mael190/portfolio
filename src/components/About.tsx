import { User, Cpu, BrainCircuit, Handshake } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="observe-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
              <User size={20} className="text-primary-600" />
            </div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              À propos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Plus qu'un développeur,
            <br />
            <span className="gradient-text">un associé technique</span>
          </h2>
        </div>

        <div className="observe-section grid md:grid-cols-2 gap-12 mt-10">
          <div className="space-y-5">
            <p className="text-lg text-slate-600 leading-relaxed">
              Développeur passionné{" "}
              <span className="font-semibold text-slate-800">
                fullstack Next.js / TypeScript
              </span>{" "}
              en freelance, j'ai conçu et lancé mon premier SaaS rentable de A à
              Z il y a 5 ans. Cette expérience m'a appris à penser produit, pas
              juste code.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Je ne suis pas un simple exécutant : je m'implique sur la{" "}
              <span className="font-semibold text-slate-800">
                vision produit
              </span>
              , je challenge les choix techniques et je m'investis sur le long
              terme. Mon objectif : construire des produits solides, scalables
              et sécurisés.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Titulaire d'un{" "}
              <span className="font-semibold text-slate-800">
                Bac+3 en développement
              </span>{" "}
              et d'un{" "}
              <span className="font-semibold text-slate-800">
                Bac+5 en cybersécurité
              </span>{" "}
              (audit, pentest, conformité, security by design, monitoring),
              j'intègre la sécurité à chaque étape du développement.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              J'utilise l'
              <span className="font-semibold text-slate-800">
                IA (Claude Code)
              </span>{" "}
              pour accélérer mes développements et rester à la pointe des
              pratiques modernes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Handshake,
                title: "Associé technique",
                desc: "Je m'implique sur la vision produit et les décisions stratégiques, pas seulement le code.",
                color: "primary",
              },
              {
                icon: Cpu,
                title: "Fullstack moderne",
                desc: "Next.js, React, Node.js, PostgreSQL.",
                color: "teal",
              },
              {
                icon: BrainCircuit,
                title: "IA Augmented",
                desc: "J'utilise l'IA comme multiplicateur de productivité tout en gardant le contrôle.",
                color: "orange",
              },
              {
                icon: Shield,
                title: "Security by Design",
                desc: "Bac+5 cybersécurité : la sécurité est intégrée dès la conception.",
                color: "pink",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    card.color === "primary"
                      ? "bg-primary-100 text-primary-600"
                      : card.color === "teal"
                        ? "bg-emerald-100 text-emerald-600"
                        : card.color === "orange"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-pink-100 text-pink-600"
                  }`}
                >
                  <card.icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Need this import for the Shield icon used in the cards
import { Shield } from "lucide-react";
