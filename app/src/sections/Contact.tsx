import { Mail, Phone, MapPin, Linkedin, Github, BarChart3, Table2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'aditya27kankarwal@gmail.com', href: 'mailto:aditya27kankarwal@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 7016636155', href: 'tel:+917016636155' },
  { icon: MapPin, label: 'Location', value: 'Chennai, India', href: '#' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-kankarwal/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/AdityaK-27' },
  { icon: BarChart3, label: 'Portfolio', href: '#' },
  { icon: Table2, label: 'Tableau', href: 'https://public.tableau.com/app/profile/aditya.kankarwal/vizzes' },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold mb-6 text-gradient scroll-reveal">
          Let's work together
        </h2>

        <p className="text-xl text-gray-400 mb-12 scroll-reveal">
          Have a project in mind? I'd love to hear about it.
        </p>

        <div>
          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-dark-card border border-dark-border transition-all duration-200 hover:border-accent hover:bg-white/5 scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:scale-110 transition-all" />
                <span className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all">
                  {item.value}
                </span>
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 border border-dark-border rounded-lg bg-transparent transition-all duration-200 hover:border-accent hover:bg-white/5 hover:-translate-y-1 scroll-reveal"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <social.icon className="w-4 h-4 text-white group-hover:text-accent transition-colors" />
                <span className="text-sm text-white group-hover:text-accent transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="mailto:aditya27kankarwal@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark font-heading font-medium rounded-lg transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105 hover:shadow-glow-strong animate-pulse-glow scroll-reveal"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
