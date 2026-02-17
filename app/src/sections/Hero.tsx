import { Linkedin, Github, BarChart3, Table2 } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: BarChart3, label: 'Portfolio', href: '#' },
  { icon: Table2, label: 'Tableau', href: '#' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border mb-6 animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-gray-300">Data Engineer & Analyst</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-semibold text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Aditya Kankarwal
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Transforming complex data into actionable insights through elegant engineering 
              and analytical precision.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 border border-dark-border rounded-lg bg-transparent transition-all duration-200 hover:border-accent hover:bg-white/5 hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4 text-white group-hover:text-accent transition-colors" />
                  <span className="text-sm text-white group-hover:text-accent transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-float animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl scale-90" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-dark-border hover:border-accent transition-colors duration-300">
                <img
                  src="/images/profile.jpg"
                  alt="Aditya Kankarwal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-accent/30 rounded-xl rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-lg -rotate-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
