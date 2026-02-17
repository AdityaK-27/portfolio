import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    id: 'dp-900',
    title: 'Azure Data Fundamentals',
    issuer: 'Microsoft',
    icon: 'M',
    color: '#00a4ef',
  },
  {
    id: 'google-data',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    icon: 'G',
    color: '#4285f4',
  },
  {
    id: 'ibm-analyst',
    title: 'IBM Data Analyst Professional Certificate',
    issuer: 'IBM',
    icon: 'I',
    color: '#054ada',
  },
  {
    id: 'powerbi',
    title: 'Analysis and Visualization with Power BI',
    issuer: 'Microsoft',
    icon: 'P',
    color: '#f2c811',
  },
  {
    id: 'tensorflow',
    title: 'TensorFlow Developer Professional Certificate',
    issuer: 'DeepLearning.AI',
    icon: 'T',
    color: '#ff6f00',
  },
  {
    id: 'ibm-aiml',
    title: 'AI & Machine Learning Program',
    issuer: 'IBM SkillsBuild',
    icon: 'AI',
    color: '#054ada',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Industry-recognized certifications validating my expertise in data analytics, 
            cloud technologies, and machine learning.
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group p-6 rounded-2xl bg-dark-card border border-dark-border transition-all duration-300 hover:border-accent hover:-translate-y-3 hover:shadow-card-hover scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold"
                  style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
                >
                  {cert.icon}
                </div>
                <CheckCircle2 className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-heading font-medium text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Award className="w-4 h-4" />
                <span>{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
