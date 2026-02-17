import { Github, ExternalLink, Calendar } from 'lucide-react';

const projects = [
  {
    id: 'nlp-email',
    title: 'NLP-Based Email SaaS Agent',
    description: 'Developed an intelligent management system using LangChain and LLMs to automate administrative workflows, achieving a 40–60% reduction in manual email management effort.',
    techStack: ['Python', 'LangChain', 'APIs', 'Google OAuth 2.0', 'Gmail API'],
    date: 'Oct 2025',
    image: '/images/project-nlp.jpg',
    featured: true,
    highlights: [
      'Engineered secure data pipeline with Google OAuth 2.0 and Gmail API',
      'Context-aware Information Extraction and Sentiment Analysis with 87% accuracy',
      'Integrated Google Calendar API for one-click event creation',
    ],
  },
  {
    id: 'sign2speech',
    title: 'Sign2Speech Translator',
    description: 'Designed and trained an LSTM-based neural network to recognize temporal patterns in dynamic Indian Sign Language gestures, achieving 90% accuracy.',
    techStack: ['TensorFlow', 'OpenCV', 'MediaPipe', 'LSTM'],
    date: 'Nov 2025',
    image: '/images/project-sign.jpg',
    highlights: [
      'Real-time computer vision pipeline with 10–12 FPS performance',
      'Modular system architecture for real-time inference',
      'Offline TTS engine for instant audio feedback',
    ],
  },
  {
    id: 'churn-prediction',
    title: 'Churn Prediction Model',
    description: 'Designed a 5-page Power BI dashboard analyzing 7,043 customers to support churn analysis and strategic business decision-making.',
    techStack: ['Power BI', 'DAX', 'SQL', 'Power Query', 'Excel'],
    date: 'May 2025',
    image: '/images/project-churn.jpg',
    highlights: [
      'Full ETL in Power Query with DAX KPIs',
      'Identified high-risk segments with 80% month-to-month churn',
      'Drill-through analysis for targeted retention strategies',
    ],
  },
  {
    id: 'netflix-analysis',
    title: 'Netflix Dataset Analysis',
    description: 'Analyzed 6,000+ Netflix titles to compare content trends across 100+ countries, release years, and ratings.',
    techStack: ['SQL', 'PostgreSQL'],
    date: 'June 2025',
    image: '/images/project-netflix.jpg',
    highlights: [
      'Normalized 15,000+ genre, cast, and country records',
      'Advanced SQL parsing for duration extraction and date fixing',
      '10+ insights for content performance analysis',
    ],
  },
  {
    id: 'road-segmentation',
    title: 'Road Segmentation Web App',
    description: 'Trained 3 segmentation models (U-Net, Custom CNN, Self-Attention U-Net) on 6,208 satellite images from DeepGlobe dataset.',
    techStack: ['TensorFlow', 'Python', 'Deep Learning', 'U-Net'],
    date: 'July 2025',
    image: '/images/project-road.jpg',
    links: {
      github: '#',
      demo: '#',
    },
    highlights: [
      'Improved IoU by ~15% using attention-enhanced U-Net',
      'Gradio web app on Hugging Face for real-time comparison',
      'Optimized training with 25–50 epochs',
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-white mb-4">
            Featured Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my data engineering and analytics projects showcasing 
            my expertise in BI, ML, and AI applications.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border transition-all duration-400 hover:border-accent hover:-translate-y-3 hover:shadow-card-hover scroll-reveal ${
                project.featured ? 'md:col-span-2' : ''
              } ${index % 2 === 1 ? 'md:translate-y-10' : ''}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${project.featured ? 'h-64 lg:h-80' : 'h-48'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent opacity-60" />
                
                {/* Date badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark/80 backdrop-blur-sm border border-dark-border">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span className="text-xs text-gray-300">{project.date}</span>
                </div>

                {/* Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark/80 backdrop-blur-sm border border-dark-border text-white hover:text-accent hover:border-accent transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark/80 backdrop-blur-sm border border-dark-border text-white hover:text-accent hover:border-accent transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-medium text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-dark-secondary border border-dark-border text-gray-400 group-hover:border-accent/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
