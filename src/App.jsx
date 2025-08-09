// src/App.jsx
import React, { useEffect, useState } from "react";
import { Github, Linkedin, FileText, Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

/*
  Replace the values in the `personal` object if you want to update contact info.
  Image path expects: public/images/aditya.jpg
*/

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

const summary =
  "I’m a curious Computer Science student who transforms data into actionable insights. I build dashboards, data pipelines, and models — and present results clearly using SQL, Python, Power BI, and visualization best practices.";

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
  "MySQL",
  "PostgreSQL",
  "Python",
  "TensorFlow",
  "Power BI",
  "Git",
  "Tableau",
  "ETL",
  "Data Cleaning",
  "Data Modeling",
];

const certs = [
  "Google Data Analytics Professional Certificate",
  "Analysis and Visualization with Power BI (Microsoft)",
  "TensorFlow Developer Certification (DeepLearning.AI)",
];

export default function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle tailwind 'dark' class on <html> — requires tailwind config darkMode: 'class'
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  // Close mobile menu on navigation
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setMenuOpen(false)}
      className="block md:inline-block px-2 py-1 rounded hover:text-sky-600 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* ===== HEADER / NAV ===== */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold text-lg">
            {personal.name}
          </a>

          <div className="flex items-center gap-3">
            {/* desktop nav */}
            <nav className="hidden md:flex gap-4 items-center text-sm">
              <NavLink href="#hero">Home</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#certifications">Certifications</NavLink>
              <NavLink href="#contact">Contact</NavLink>

              <a
                href={personal.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-3 py-1 rounded-md text-sm"
              >
                <FileText size={14} /> Resume
              </a>
            </nav>

            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Open menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="px-6 py-4 space-y-2">
              <NavLink href="#hero">Home</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#certifications">Certifications</NavLink>
              <NavLink href="#contact">Contact</NavLink>

              <a
                href={personal.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-sky-600 hover:bg-sky-700 text-white px-3 py-2 rounded-md"
              >
                <FileText size={14} /> Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ===== MAIN CONTENT (stacked sections) ===== */}
      <main className="max-w-4xl mx-auto px-6">
        {/* HERO */}
        <section id="hero" className="py-20 text-center">
          <img
            src="/images/aditya.jpg"
            alt={`${personal.name} portrait`}
            className="mx-auto w-40 h-40 rounded-full object-cover shadow-lg mb-6"
          />

          <motion.h1
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
            Hi — I’m {personal.name}
          </motion.h1>

          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {summary}
          </p>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <a
              href={personal.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md"
            >
              Download Resume
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md"
            >
              <Github size={16} /> GitHub
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 border-t border-gray-100">
          <h2 className="text-2xl font-bold">Selected projects</h2>
          <p className="mt-2 text-sm text-gray-600">
            Projects that show my end-to-end work — ETL, modeling, visualization,
            and deployment.
          </p>

          <div className="mt-6 space-y-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-lg shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <div className="text-xs text-gray-500 mt-1">{p.tech} • {p.date}</div>
                  </div>
                </div>

                <p className="mt-3 text-gray-700 dark:text-gray-300">{p.desc}</p>

                <div className="mt-4 flex gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2">
                      <Github size={14} /> Code
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2">
                      Live demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 border-t border-gray-100">
          <h2 className="text-2xl font-bold">Experience</h2>

          <div className="mt-6 space-y-6">
            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-lg">
              <div className="font-semibold">Data Analytics Intern — Reliance Industries Ltd.</div>
              <div className="text-sm text-gray-500">On-site • June 2025</div>
              <ul className="mt-3 list-disc list-inside text-sm">
                <li>Built a live Power BI dashboard using DirectQuery, SQL views and DAX for real-time insights.</li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-lg">
              <div className="font-semibold">AI-ML Intern — Edunet Foundation (AICTE)</div>
              <div className="text-sm text-gray-500">Remote • July 2025</div>
              <ul className="mt-3 list-disc list-inside text-sm">
                <li>Worked on salary prediction: preprocessing, model training, and evaluation with Python (scikit-learn).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 border-t border-gray-100">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">{s}</span>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-20 border-t border-gray-100">
          <h2 className="text-2xl font-bold">Certifications</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {certs.map((c) => <li key={c}>• {c}</li>)}
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 border-t border-gray-100">
          <h2 className="text-2xl font-bold">Contact</h2>

          <div className="mt-6">
            <p className="text-sm text-gray-600">I’m open to internships, collaborations, and full-time roles. Use the form or email directly.</p>

            <form
              className="mt-6 space-y-3 max-w-xl"
              onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent("Website contact from portfolio");
                const body = encodeURIComponent("Hi Aditya,%0D%0A%0D%0AI saw your portfolio and...");
                window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
              }}
            >
              <input required className="w-full p-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" placeholder="Your name" />
              <input required type="email" className="w-full p-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" placeholder="Your email" />
              <textarea required className="w-full p-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" rows={5} placeholder="Write a short message" />
              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md">Send</button>
                <a href={`mailto:${personal.email}`} className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md">Email directly</a>
              </div>
            </form>

            <div className="mt-6 text-sm">
              <p>Email: <a className="text-sky-600" href={`mailto:${personal.email}`}>{personal.email}</a></p>
              <p>Phone: {personal.phone}</p>
              <p>Location: {personal.location}</p>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-gray-500">
          Built with ❤️ • {new Date().getFullYear()} • {personal.name}
        </footer>
      </main>
    </div>
  );
}
