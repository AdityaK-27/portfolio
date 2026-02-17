import { MapPin, Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 'reliance',
    role: 'Data Analytics Vocational Trainee',
    company: 'Reliance Industries Ltd.',
    location: 'Jamnagar',
    duration: 'Sept 2022 – Dec 2025',
    type: 'On-site',
    achievements: [
      'Developed Power BI dashboard to support business reporting needs, replicating an internal Angular app and improving report speed by 30% using DirectQuery with SQL Server.',
      'Converted 15+ stored procedures into SQL views and built 20+ DAX measures to track and automate business KPIs, improving data accuracy for reporting.',
    ],
    techStack: ['Power BI', 'SQL Server', 'SSMS', 'DAX'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-white">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
          </div>

          {/* Experience items */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Timeline node - hidden on mobile */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-accent animate-timeline-pulse" />
                </div>

                {/* Card */}
                <div
                  className={`${
                    index % 2 === 0 
                      ? 'lg:col-start-1 lg:pr-12' 
                      : 'lg:col-start-2 lg:pl-12'
                  } scroll-reveal`}
                >
                  <div className="p-6 lg:p-8 rounded-2xl bg-dark-card border border-dark-border transition-all duration-300 hover:border-accent hover:shadow-card-hover group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-heading font-medium text-white mb-1 group-hover:text-accent transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:bg-white transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack?.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-dark-secondary border border-dark-border text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 ? (
                  <div className="hidden lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
