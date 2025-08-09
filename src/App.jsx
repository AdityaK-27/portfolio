import React, { useState } from "react";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const personal = {
  name: "Aditya Kankarwal",
  role: "Data Analyst & ML Enthusiast",
  location: "Chennai, India",
  email: "aditya27kankarwal@gmail.com",
  phone: "+91 7016636155",
  linkedin: "https://www.linkedin.com/in/aditya-kankarwal-68b626300/",
  github: "https://github.com/AdityaK-27",
  resumePdf: "/AdityaKankarwal_DS-5.pdf",
};

const aboutText = `I’m a curious Computer Science student who transforms data into actionable insights.
I build dashboards, data pipelines, and models — and present results clearly using SQL, Python, Power BI, and visualization best practices.
When I’m not analyzing data, I’m learning new technologies to stay ahead in the field.`;

const projects = [
  {
    title: "Churn Prediction Model (Power BI)",
    tech: "Power BI, DAX, SQL, Power Query",
    date: "May 2025",
    desc: "Interactive dashboard to identify churn patterns, full ETL in Power Query, DAX KPIs and drill-through pages.",
    github: "https://github.com/AdityaK-27/Telco-Customer-Churn-Analysis-PowerBI",
    live: "",
  },
  {
    title: "Netflix Content Insights (SQL)",
    tech: "SQL, PostgreSQL",
    date: "June 2025",
    desc: "Analyzed Netflix dataset to compare movies and TV shows across countries and release years; cleaned multi-value columns for genre & cast analysis.",
    github: "https://github.com/AdityaK-27/Netflix_Data_Analysis_SQL",
    live: "",
  },
  {
    title: "Road Segmentation App (DL)",
    tech: "TensorFlow, Gradio, Python",
    date: "July 2025",
    desc: "Web app comparing segmentation architectures; deployed to Hugging Face Spaces.",
    github: "https://github.com/AdityaK-27/Road-Extraction-DL",
    live: "https://huggingface.co/spaces/AdityaK-27/road-segmentation-app",
  },
];

const skills = [
  "MySQL", "PostgreSQL", "Python", "TensorFlow", "Power BI",
  "Git", "Tableau", "ETL", "Data Cleaning", "Data Modeling",
];

const certs = [
  "Google Data Analytics Professional Certificate",
  "Analysis and Visualization with Power BI (Microsoft)",
  "TensorFlow Developer Certification (DeepLearning.AI)",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setMenuOpen(false)}
      className="block md:inline-block px-3 py-2 rounded hover:text-sky-400 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-gray-900/80 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Small profile image */}
          <a href="#hero" className="flex items-center">
            <img
              src="/images/aditya.jpg"
              alt="Aditya"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-500 p-0.5 hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-4 items-center">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href={personal.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 rounded-md text-sm font-medium"
            >
              <FileText size={14} /> Resume
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded hover:bg-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-2">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section id="hero" className="py-24 text-center">
          <motion.h1
            className="mt-6 text-4xl md:text-5xl font-bold"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Hi, I’m {personal.name}
          </motion.h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">{personal.role}</p>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 border-t border-gray-700 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold border-b-4 border-sky-500 inline-block pb-1 mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed">{aboutText}</p>
          </div>
          <img
            src="/images/aditya.jpg"
            alt="Aditya portrait"
            className="w-56 h-56 rounded-full object-cover shadow-lg ring-4 ring-indigo-500 p-1"
          />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 border-t border-gray-700">
          <h2 className="text-3xl font-bold border-b-4 border-sky-500 inline-block pb-1 mb-10">Projects</h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.title} className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-400">{p.tech} • {p.date}</p>
                <p className="mt-3 text-gray-300">{p.desc}</p>
                <div className="mt-4 flex gap-4">
                  {p.github && <a href={p.github} className="text-sky-400 hover:underline">GitHub</a>}
                  {p.live && <a href={p.live} className="text-sky-400 hover:underline">Live Demo</a>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 border-t border-gray-700">
          <h2 className="text-3xl font-bold border-b-4 border-sky-500 inline-block pb-1 mb-10">Experience</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold">Data Analytics Intern — Reliance Industries Ltd.</h3>
              <p className="text-sm text-gray-400">On-site • June 2025</p>
              <ul className="list-disc list-inside mt-3 text-gray-300">
                <li>Built a live Power BI dashboard using DirectQuery, SQL views and DAX for real-time insights.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold">AI-ML Intern — Edunet Foundation (AICTE)</h3>
              <p className="text-sm text-gray-400">Remote • July 2025</p>
              <ul className="list-disc list-inside mt-3 text-gray-300">
                <li>Worked on salary prediction: preprocessing, model training, and evaluation with Python (scikit-learn).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 border-t border-gray-700">
          <h2 className="text-3xl font-bold border-b-4 border-sky-500 inline-block pb-1 mb-10">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="px-4 py-2 bg-gray-800 rounded">{s}</span>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-24 border-t border-gray-700">
          <h2 className="text-3xl font-bold border-b-4 border-sky-500 inline-block pb-1 mb-10">Certifications</h2>
          <ul className="space-y-2 text-gray-300">
            {certs.map((c) => <li key={c}>• {c}</li>)}
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 border-t border-gray-700">
          <h2 className="text-3xl font-bold border-b-4 border-sky-500 inline-block pb-1 mb-10">Contact</h2>
          <p className="text-gray-300 mb-6">I’m open to internships, collaborations, and full-time roles. Reach out below.</p>
          <p>Email: <a href={`mailto:${personal.email}`} className="text-sky-400">{personal.email}</a></p>
          <p>Phone: {personal.phone}</p>
          <p>Location: {personal.location}</p>
        </section>
      </main>

      <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
        Built with ❤️ • {new Date().getFullYear()} • {personal.name}
      </footer>
    </div>
  );
}
