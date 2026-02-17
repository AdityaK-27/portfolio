import { Navigation } from '@/components/Navigation';
import {
  Hero,
  About,
  Experience,
  Projects,
  Certifications,
  Contact,
  Footer,
} from '@/sections';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
