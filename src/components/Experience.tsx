import orishaLogo from '../assets/orisha.png';
import medilibLogo from '../assets/medilib.png';
import docubeLogo from '../assets/docube.png';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'fulltime' | 'cofondateur';
  description: string;
  highlights: string[];
  techStack: string[];
  image?: string;
}

const experiences: Experience[] = [
  {
    id: 'orisha',
    role: 'Développeur Fullstack',
    company: 'Orisha',
    period: 'Sept. 2022 — Sept. 2025',
    type: 'fulltime',
    description:
      'Développement et maintien en production de dizaines d\'applications SaaS pour le commerce.',
    highlights: [
      'Frontend Next.js / React — intégration maquettes, développement de features, corrections de bugs',
      'Pipeline CI/CD avec security by design',
      'Tests unitaires et E2E (Jest, Playwright)',
      'Monitoring et observabilité des applications en production',
      'Formation et utilisation de l\'IA pour coder',
      'Gestion de bases de données : PostgreSQL, MongoDB, Redis',
      'Architecture big data : Kafka, datalake, agrégations et reporting',
      'Force de proposition : clean code, revues de code, ADR',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Jest', 'Playwright', 'CI/CD'],
    image: orishaLogo,
  },
  {
    id: 'medilib',
    role: 'Cofondateur & Lead Dev',
    company: 'Medilib',
    period: 'Sept. 2025 — Févr. 2026',
    type: 'cofondateur',
    description:
      'Conception et développement complet d\'une application SaaS B2B/B2C à fort enjeu produit.',
    highlights: [
      'Stack complète : Next.js, React, Node.js, PostgreSQL',
      'Delivery continue avec CI/CD, tests unitaires et E2E',
      'Security by design intégré dès la conception',
      'Infra cloud-native : GCP, Kubernetes, Helm, Docker',
      'Parcours utilisateur multi-canal (web + bot WhatsApp)',
      'Gestion de documents et partage sécurisé de données sensibles',
      'Gestion d\'agenda et messagerie intégrée',
      'Stabilité et performance en production',
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'GCP', 'Kubernetes', 'Docker', 'Helm', 'WhatsApp API'],
    image: medilibLogo,
  },
  {
    id: 'docube',
    role: 'Cofondateur & Lead Dev',
    company: 'Docube',
    period: 'Août 2021 — Août 2022',
    type: 'cofondateur',
    description:
      'Application de gestion de versions de fichiers, connectée aux principaux Drives, destinée aux entreprises.',
    highlights: [
      'Développement complet de l\'application de A à Z',
      'Connexion aux principaux services de stockage cloud (Google Drive, etc.)',
      'Infrastructure et déploiement sur GCP',
      'Frontend : Next.js, Tailwind, Docker',
      'Backend : Express.js, PostgreSQL, Docker',
    ],
    techStack: ['Next.js', 'Tailwind', 'Express.js', 'PostgreSQL', 'Docker', 'GCP'],
    image: docubeLogo,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="observe-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
              <Briefcase size={20} className="text-primary-600" />
            </div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Expérience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Mon parcours <span className="gradient-text">professionnel</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Du premier SaaS rentable aux applications d'entreprise à grande échelle.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-300 via-primary-200 to-slate-200" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`observe-section relative mb-16 last:mb-0 md:flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow-lg shadow-primary-200 z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="group bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:shadow-xl hover:shadow-primary-100/40 hover:border-primary-200 transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                            exp.type === 'cofondateur'
                              ? 'bg-amber-50 text-amber-700'
                              : 'bg-primary-50 text-primary-700'
                          }`}
                        >
                          {exp.type === 'cofondateur' ? 'Cofondateur' : 'CDI'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-primary-500">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-slate-400 whitespace-nowrap">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-5 leading-relaxed">{exp.description}</p>

                  {/* Image placeholder */}
                  <div className="mb-5 rounded-xl overflow-hidden border border-slate-100 bg-white p-8 flex items-center justify-center">
                    <img
                      src={exp.image}
                      alt={`${exp.company} — ${exp.role}`}
                      className="max-w-full h-32 object-contain"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const placeholder = target.parentElement!;
                        placeholder.classList.add('flex', 'items-center', 'justify-center', 'h-48');
                        const inner = document.createElement('div');
                        inner.className = 'text-center';
                        inner.innerHTML = `
                          <div class="text-slate-300 mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg></div>
                          <p class="text-sm text-slate-400">Image à ajouter</p>
                        `;
                        placeholder.appendChild(inner);
                      }}
                    />
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <ChevronRight size={14} className="text-primary-400 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
