import { 
  Code2, 
  Brain, 
  Database, 
  BarChart3, 
  Cloud, 
  Server 
} from 'lucide-react';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'SQL (advanced joins, subqueries, window functions)'],
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    icon: Brain,
    skills: ['TensorFlow', 'LSTM', 'OpenCV', 'MediaPipe', 'LangChain', 'Prompt Engineering'],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'ETL pipelines'],
  },
  {
    id: 'bi-analytics',
    title: 'BI & Analytics',
    icon: BarChart3,
    skills: ['Power BI (DAX)', 'Tableau', 'IBM Cognos', 'Business Reporting'],
  },
  {
    id: 'big-data',
    title: 'Big Data & Cloud',
    icon: Cloud,
    skills: ['Hadoop', 'Apache Spark', 'Azure Blob Storage', 'AWS S3'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Server,
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'SSMS'],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 scroll-reveal">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-white max-w-3xl">
            Passionate about turning data into <span className="text-accent">impact</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - About text */}
          <div className="space-y-6 scroll-reveal">
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a Data Engineer and Analyst with experience at Reliance Industries Ltd., 
              where I developed Power BI dashboards that improved reporting speed by 30% 
              and built 20+ DAX measures for business KPIs.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My expertise spans the full data stack—from SQL and ETL pipelines to 
              machine learning and AI applications. I enjoy solving complex problems 
              and creating solutions that drive business value.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              With a strong foundation in both engineering and analytics, I bridge the 
              gap between raw data and meaningful insights that help organizations make 
              better decisions.
            </p>
          </div>

          {/* Right column - Skills */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="group p-5 rounded-xl bg-dark-card border border-dark-border transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-card-hover scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-white font-medium">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-dark-secondary border border-dark-border text-gray-400 group-hover:border-accent/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
