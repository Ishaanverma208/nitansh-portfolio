import { useEffect, useRef } from 'react';
import { GraduationCap, Award, MapPin, Mail, Link } from 'lucide-react';
import content from '../../portfolio-content.json';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealEls = sectionRef.current?.querySelectorAll('.reveal');
    revealEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const { bio, education, certifications, location, email, linkedin, stats } = content.about;

  const infoItems = [
    { icon: <GraduationCap size={18} className="text-electric" />, label: 'Education', value: education },
    { icon: <Award size={18} className="text-gold" />, label: 'Certifications', value: certifications },
    { icon: <MapPin size={18} className="text-muted" />, label: 'Location', value: location },
    {
      icon: <Mail size={18} className="text-muted" />,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: <Link size={18} className="text-electric-light" />,
      label: 'LinkedIn',
      value: 'View Profile',
      href: linkedin,
      external: true,
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-charcoal/20 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Section tag */}
        <div className="reveal">
          <span className="section-tag">Analyst Profile</span>
        </div>

        {/* Heading */}
        <h2 className="reveal font-serif text-4xl sm:text-5xl font-bold text-offwhite mb-12">
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Bio area (terminal text style) */}
          <div className="reveal lg:col-span-7 glass-card p-8 border-l-4 border-l-electric">
            <h3 className="font-mono text-xs text-electric-light tracking-widest uppercase mb-4 opacity-80">
              // PROFILE_SUMMARY
            </h3>
            <p className="text-muted-dark text-base sm:text-lg leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Info items */}
          <div className="reveal lg:col-span-5 grid grid-cols-1 gap-4">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-charcoal/40 border border-border/50 hover:border-electric/30 transition-colors"
              >
                <div className="p-2.5 bg-navy rounded-lg border border-border/50">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-dark font-semibold mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-electric-light hover:text-gold transition-colors duration-200 truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-offwhite leading-snug truncate block">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-border/50 pt-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="reveal relative p-6 sm:p-8 overflow-hidden group border border-border/30 bg-charcoal/20 rounded-2xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="font-serif text-3xl sm:text-4xl font-bold text-offwhite mb-2 relative z-10">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-muted uppercase tracking-wider relative z-10">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
