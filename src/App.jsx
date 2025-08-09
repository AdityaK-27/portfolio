import React, { useState } from 'react'
import { Mail, Github, Linkedin, FileText, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

const personal = {
  name: 'Aditya Kankarwal',
  role: 'Data Analyst & ML Enthusiast',
  location: 'Chennai, India',
  email: 'aditya27kankarwal@gmail.com',
  phone: '+91 7016636155',
  linkedin: 'https://www.linkedin.com/in/aditya-kankarwal-68b626300/',
  github: 'https://github.com/AdityaK-27',
  resumePdf: '/AdityaKankarwal_DS-5.pdf'
}

const summary = `I am a curious and driven Computer Science student with a passion for working with data to solve real-world problems. I enjoy turning raw information into clear and meaningful insights through analysis, visualization, and data engineering. Skilled in SQL, Python, and Power BI, with a strong interest in building clean, efficient, and impactful data solutions.`

const experience = [
  {
    title: 'Data Analytics Intern',
    company: 'Reliance Industries Ltd.',
    date: 'June 2025',
    location: 'On-site',
    bullets: [
      'Built a live Power BI dashboard replicating an Angular web app using DirectQuery, SQL views, and DAX for real-time insights and navigation.'
    ]
  },
  {
    title: 'AI-ML Intern',
    company: 'Edunet Foundation (AICTE)',
    date: 'July 2025',
    location: 'Remote',
    bullets: [
      'Working on a Salary Prediction project; implemented preprocessing, model training, and evaluation using Python (pandas, scikit-learn).'
    ]
  }
]

const projects = [
  {
    title: 'Churn Prediction Model (Power BI)',
    tech: 'Power BI, DAX, SQL, Power Query, Excel',
    date: 'May 2025',
    desc: 'Interactive dashboard to identify churn patterns, full ETL in Power Query, DAX KPIs and drill-through pages.',
    github: 'https://github.com/AdityaK-27/Telco-Customer-Churn-Analysis-PowerBI',
    live: ''
  },
  {
    title: 'Exploratory Content Insights (Netflix)',
    tech: 'SQL, PostgreSQL',
    date: 'June 2025',
    desc: 'Analyzed Netflix dataset to compare movies and TV shows across countries and release years; cleaned multi-value columns for genre & cast analysis.',
    github: 'https://github.com/AdityaK-27/Netflix_Data_Analysis_SQL',
    live: ''
  },
  {
    title: 'Road Segmentation Web App (Deep Learning)',
    tech: 'TensorFlow, Python, Gradio',
    date: 'July 2025',
    desc: 'Web app comparing U-Net, Custom CNN and Self-Attention U-Net; deployed to Huggingface Spaces.',
    github: 'https://github.com/AdityaK-27/Road-Extraction-DL',
    live: 'https://huggingface.co/spaces/AdityaK-27/road-segmentation-app'
  }
]

const skills = [
  'MySQL', 'PostgreSQL', 'Python', 'TensorFlow', 'Power BI', 'Git', 'Tableau', 'IBM Cognos', 'ETL', 'Data Cleaning', 'Data Modeling'
]

const certs = [
  'Google Data Analytics Professional Certificate',
  'Analysis and Visualization with Power BI (Microsoft)',
  'BI Dashboards with IBM Cognos Analytics and Google Looker (IBM)',
  'TensorFlow Developer Professional Certificate (DeepLearning.AI)',
  'Data Analysis Using SQL (Fractal Analytics)'
]

function IconLink({ href, children, label }) {
  return (
    <a className="inline-flex items-center gap-2 hover:underline" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  )
}

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <header className="flex items-center justify-between">
            <div className="space-y-0">
              <a href="#hero" className="text-lg font-semibold">{personal.name}</a>
              <div className="text-sm text-gray-500 dark:text-gray-400">{personal.role} — {personal.location}</div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <nav className="hidden md:flex gap-4 text-sm">
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#experience" className="hover:underline">Experience</a>
                <a href="#contact" className="hover:underline">Contact</a>
                <a className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md" href={personal.resumePdf} target="_blank" rel="noreferrer">
                  <FileText size={14}/> Resume
                </a>
              </nav>
            </div>
          </header>

          <section id="hero" className="mt-12 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl md:text-4xl font-bold leading-tight">
                Hi — I’m {personal.name}. I build data-driven products and visualizations.
              </motion.h1>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{summary}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md" href={personal.resumePdf} target="_blank" rel="noreferrer">Download Resume</a>
                <a className="inline-flex items-center gap-2 px-4 py-2 border rounded-md" href={personal.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
                <a className="inline-flex items-center gap-2 px-4 py-2 border rounded-md" href={personal.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">📍 {personal.location}</div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">✉️ <a href={`mailto:${personal.email}`}>{personal.email}</a></div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">📞 {personal.phone}</div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">🎓 VIT Chennai — B.Tech ECE (2022–2025)</div>
              </div>
            </div>

            <aside className="p-4 rounded-lg border dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
              <h3 className="font-semibold">Top skills</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {skills.slice(0,6).map(s => <li key={s} className="inline-flex items-center gap-2">• {s}</li>)}
              </ul>

              <h3 className="font-semibold mt-4">Certifications</h3>
              <ul className="mt-2 text-sm space-y-1">
                {certs.slice(0,3).map(c => <li key={c}>• {c}</li>)}
              </ul>
            </aside>
          </section>

          <section id="projects" className="mt-16">
            <h2 className="text-2xl font-bold">Selected projects</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Projects that show my end-to-end work — ETL, modeling, visualization, and deployment.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {projects.map(p => (
                <article key={p.title} className="p-4 rounded-lg border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                  <h3 className="font-semibold">{p.title}</h3>
                  <div className="text-xs text-gray-500 mt-1">{p.tech} • {p.date}</div>
                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                  <div className="mt-4 flex gap-3">
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2"> <Github size={14}/> Code</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2"> Live Demo</a>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="mt-16">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="mt-4 space-y-4">
              {experience.map((exp, i) => (
                <div key={i} className="p-4 rounded-lg border dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{exp.title} — {exp.company}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{exp.location} • {exp.date}</div>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-sm">
                    {exp.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold">Skills</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map(s => <span key={s} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">{s}</span>)}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Certifications</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {certs.map(c => <li key={c}>• {c}</li>)}
              </ul>
            </div>
          </section>

          <section id="contact" className="mt-16">
            <h2 className="text-2xl font-bold">Contact</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg border dark:border-gray-800 bg-white dark:bg-gray-900">
                <h3 className="font-semibold">Get in touch</h3>
                <p className="text-sm text-gray-500 mt-2">I’m open to internships, collaborations, and full-time roles. Use the form to drop a message — it will open your email client.</p>
                <form className="mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); const subject = encodeURIComponent('Website contact from portfolio'); const body = encodeURIComponent('Hi Aditya,%0D%0A%0D%0AI saw your portfolio and...'); window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}` }}>
                  <input required className="w-full p-2 rounded border dark:border-gray-800 bg-gray-50 dark:bg-gray-800" placeholder="Your name" />
                  <input required type="email" className="w-full p-2 rounded border dark:border-gray-800 bg-gray-50 dark:bg-gray-800" placeholder="Your email" />
                  <textarea required className="w-full p-2 rounded border dark:border-gray-800 bg-gray-50 dark:bg-gray-800" placeholder="Write a short message" rows={4}></textarea>
                  <div className="flex gap-2">
                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
                    <a className="inline-flex items-center gap-2 px-4 py-2 border rounded" href={`mailto:${personal.email}`}><Mail size={14}/> Email directly</a>
                  </div>
                </form>

                <div className="mt-6 flex gap-3">
                  <IconLink href={personal.github} label="GitHub">
                    <Github size={16}/> GitHub
                  </IconLink>
                  <IconLink href={personal.linkedin} label="LinkedIn">
                    <Linkedin size={16}/> LinkedIn
                  </IconLink>
                </div>
              </div>

              <aside className="p-4 rounded-lg border dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold">Contact details</h3>
                <p className="text-sm mt-2">Email: <a href={`mailto:${personal.email}`}>{personal.email}</a></p>
                <p className="text-sm">Phone: {personal.phone}</p>
                <p className="text-sm">Location: {personal.location}</p>
                <p className="text-sm mt-2">Resume: <a href={personal.resumePdf} target="_blank" rel="noreferrer">Download PDF</a></p>
              </aside>
            </div>
          </section>

          <footer className="mt-16 text-center text-sm text-gray-500">
            Built with ❤️ • {new Date().getFullYear()} • {personal.name}
          </footer>
        </div>
      </main>
    </div>
  )
}
