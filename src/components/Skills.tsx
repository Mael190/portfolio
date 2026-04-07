import { Layers } from 'lucide-react';

interface SkillCategory {
  name: string;
  emoji: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    emoji: '🎨',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    name: 'Backend',
    emoji: '⚙️',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'DevOps & Cloud',
    emoji: '☁️',
    skills: ['Docker', 'Kubernetes', 'Helm', 'GCP', 'CI/CD', 'Kafka'],
  },
  {
    name: 'Sécurité & Qualité',
    emoji: '🔒',
    skills: ['Security by Design', 'Jest', 'Playwright', 'Audit & Pentest', 'Monitoring', 'Clean Code / ADR'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="observe-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
              <Layers size={20} className="text-primary-600" />
            </div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Compétences</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Stack <span className="gradient-text">technique</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Une expertise fullstack couplée à une solide base en cybersécurité.
          </p>
        </div>

        <div className="observe-section mt-12 grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-slate-50 rounded-2xl border border-slate-100 p-6 md:p-8 hover:shadow-lg hover:shadow-primary-100/30 hover:border-primary-200 transition-all duration-500"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2.5">
                <span className="text-xl">{category.emoji}</span>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
