import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Car, Zap, Lightbulb } from 'lucide-react';
import content from '../../portfolio-content.json';

const iconMap = {
  'automobile': <Car size={32} className="text-electric" strokeWidth={1.5} />,
  'consumer-electrical': <Zap size={32} className="text-electric" strokeWidth={1.5} />,
  'consumer-durable': <Lightbulb size={32} className="text-electric" strokeWidth={1.5} />
};

export default function Departments() {
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
      { threshold: 0.1 }
    );

    const revealEls = sectionRef.current?.querySelectorAll('.reveal');
    revealEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Build a lookup map: company id → company object
  const companyMap = {};
  content.companies.forEach((c) => {
    companyMap[c.id] = c;
  });

  return (
    <section id="departments" ref={sectionRef} className="py-24 px-6 border-t border-border/50 bg-charcoal/30">
      <div className="max-w-6xl mx-auto">
        {/* Section tag */}
        <div className="reveal">
          <span className="section-tag">Research Coverage</span>
        </div>

        {/* Heading */}
        <h2 className="reveal font-serif text-4xl sm:text-5xl font-bold text-offwhite mb-12">
          Research Departments
        </h2>

        {/* Department cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.departments.map((dept, i) => (
            <div
              key={dept.id}
              className="reveal glass-card p-8 flex flex-col group relative overflow-hidden"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-electric/0 via-electric/5 to-electric/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              {/* Icon */}
              <div className="mb-6 p-3 bg-navy-light/50 border border-border/50 rounded-xl w-fit group-hover:border-electric/30 transition-colors">
                {iconMap[dept.id]}
              </div>

              {/* Name */}
              <h3 className="font-serif text-xl font-bold text-offwhite mb-5 relative z-10">
                {dept.name}
              </h3>

              {/* Company list */}
              <ul className="flex flex-col gap-2 mt-auto">
                {dept.companies.map((companyId) => {
                  const company = companyMap[companyId];
                  if (!company) return null;
                  return (
                    <li key={companyId}>
                      <Link
                        to={`/company/${companyId}`}
                        className="group flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-electric opacity-50 group-hover:opacity-100 group-hover:text-gold transition-all duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {company.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
