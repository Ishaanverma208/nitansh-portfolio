import { useEffect, useState } from 'react';
import { ArrowRight, Download, ChevronDown, Activity } from 'lucide-react';
import content from '../../portfolio-content.json';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { name, title, tagline, resumeLink } = content.hero;

  // Split name to style last name differently
  const nameParts = name.split(' ');
  const firstName = nameParts.slice(0, -1).join(' ');
  const lastName = nameParts[nameParts.length - 1];

  const handleScrollTo = (e, selector) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-bg min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1400px] mx-auto px-10 opacity-[0.03]">
        <div className="w-px h-full bg-offwhite"></div>
        <div className="w-px h-full bg-offwhite hidden md:block"></div>
        <div className="w-px h-full bg-offwhite"></div>
      </div>

      <div
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Terminal Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-charcoal border border-border/50 mb-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-electric/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <Activity size={14} className="text-electric animate-pulse relative z-10" />
          <span className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-electric-light relative z-10">
            System Online • Equity Research
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] mb-6 tracking-tight">
          {firstName}{' '}
          <span className="gradient-text-gold">{lastName}</span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent to-border w-16 md:w-32" />
          <p className="font-mono text-sm md:text-base text-offwhite font-medium tracking-widest uppercase">
            {title}
          </p>
          <div className="h-px bg-gradient-to-l from-transparent to-border w-16 md:w-32" />
        </div>

        {/* Tagline */}
        <p className="text-lg text-muted-dark max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          {tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#departments"
            onClick={(e) => handleScrollTo(e, '#departments')}
            className="btn-primary group"
          >
            View Research
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
          >
            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint absolute bottom-8 left-1/2 text-muted-dark opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={(e) => handleScrollTo(e, '#departments')}>
        <ChevronDown size={24} strokeWidth={1.5} />
      </div>
    </section>
  );
}
