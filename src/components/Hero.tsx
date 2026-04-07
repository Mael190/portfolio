import avatar from "../assets/avatar.png";
import { ArrowDown, Code2, Rocket, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/20 to-accent-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text content */}
          <div>
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                Disponible pour de nouveaux projets
              </div>
            </div>

            <h1 className="animate-fade-up stagger-1 text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Développeur
              <br />
              <span className="gradient-text">Fullstack</span>
            </h1>

            <p className="animate-fade-up stagger-2 mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              Associé technique freelance, je ne suis pas juste un exécutant. Je
              m'implique sur la vision produit et je m'investis à 100% sur le
              long terme.
            </p>

            <div className="animate-fade-up stagger-3 flex flex-wrap gap-3 mt-8">
              {[
                { icon: Code2, label: "Next.js / React" },
                { icon: Rocket, label: "SaaS Builder" },
                { icon: Shield, label: "Security by Design" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm hover:shadow-md hover:border-primary-300 transition-all"
                >
                  <tag.icon size={16} className="text-primary-500" />
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="animate-fade-up stagger-4 flex flex-wrap gap-4 mt-10">
              <a
                href="#experience"
                className="px-7 py-3.5 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-200 active:scale-95"
              >
                Voir mon parcours
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:border-primary-300 hover:text-primary-600 transition-all hover:shadow-lg active:scale-95"
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Right - Photo container */}
          <div className="animate-fade-up stagger-3 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-accent-teal p-1 -m-3 animate-pulse"
                style={{ animationDuration: "4s" }}
              >
                <div className="w-full h-full rounded-full bg-slate-50" />
              </div>
              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-primary-200/40">
                <img
                  src={avatar}
                  alt="Maël — Développeur Fullstack"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    target.parentElement!.classList.add(
                      "bg-gradient-to-br",
                      "from-primary-100",
                      "to-primary-200",
                      "flex",
                      "items-center",
                      "justify-center",
                    );
                    const span = document.createElement("span");
                    span.className = "text-6xl font-bold text-primary-400";
                    span.textContent = "M";
                    target.parentElement!.appendChild(span);
                  }}
                />
              </div>
              {/* Floating badges */}
              <div
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-sm font-semibold text-slate-700">
                  5+ ans d'XP
                </span>
              </div>
              <div
                className="absolute -top-2 -right-4 glass rounded-2xl px-4 py-3 shadow-lg animate-float"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-sm font-semibold text-slate-700">
                  Bac+5 Cyber
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-slate-400 hover:text-primary-500 transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
