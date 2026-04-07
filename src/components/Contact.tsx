import { Mail, MapPin } from "lucide-react";
import linkedinLogo from "../assets/linkedin.png";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="observe-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
              <Mail size={20} className="text-primary-600" />
            </div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Un projet en tête ? Discutons de comment je peux vous aider à le
            concrétiser.
          </p>
        </div>

        <div className="observe-section mt-12 grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-primary-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                <a
                  href="mailto:rgdmael@gmail.com"
                  className="text-primary-500 hover:text-primary-600 transition-colors font-medium"
                >
                  rgdmael@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-primary-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">
                  Localisation
                </h3>
                <p className="text-slate-600">France — Remote / Hybride</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/raingeard-mael/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-all hover:shadow-md overflow-hidden"
              >
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  className="w-6 h-6 object-contain"
                />
              </a>
            </div>

            {/* Quick info card */}
            <div className="glass rounded-2xl p-6 mt-8">
              <p className="text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-800">
                  💡 Disponible pour :{" "}
                </span>
                missions freelance, CTO technique externalisé, ou association
                long terme sur un projet ambitieux.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
