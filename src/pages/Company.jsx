import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import content from '../../portfolio-content.json';
import Footer from '../components/Footer';
import RatingChip from '../components/ui/RatingChip';
import SectorBadge from '../components/ui/SectorBadge';
import MetricCard from '../components/ui/MetricCard';
import ExcelPreview from '../components/ExcelPreview';

export default function Company() {
  const { id } = useParams();
  const company = content.companies.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!company) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-navy text-offwhite">
        <h1 className="mb-4 font-serif text-5xl font-bold">404</h1>
        <p className="mb-8 text-lg text-muted">Company not found.</p>
        <Link to="/" className="btn-primary">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const mailto = `mailto:${content.about.email}?subject=Model Request - ${encodeURIComponent(company.name)}`;

  return (
    <div className="min-h-screen bg-navy text-offwhite">
      {/* Back button */}
      <div className="mx-auto max-w-5xl px-6 pt-28">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to Home
        </Link>
      </div>

      {/* Company header */}
      <header className="mx-auto max-w-5xl px-6 pt-8">
        <h1 className="font-serif text-4xl font-bold leading-tight text-offwhite md:text-5xl">
          {company.name}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <SectorBadge department={company.department} />
          <RatingChip rating={company.rating} />
        </div>
      </header>

      {/* Investment Thesis */}
      <section className="mx-auto max-w-5xl px-6 pt-12">
        <h2 className="mb-4 font-serif text-2xl font-semibold text-offwhite">
          Investment Thesis
        </h2>
        <p className="leading-relaxed text-muted">{company.thesis}</p>
      </section>

      {/* Key Metrics */}
      <section className="mx-auto max-w-5xl px-6 pt-12">
        <h2 className="mb-6 font-serif text-2xl font-semibold text-offwhite">
          Key Metrics
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <MetricCard label="Revenue" value={company.keyMetrics.revenue} />
          <MetricCard label="PAT" value={company.keyMetrics.pat} />
          <MetricCard label="Target Price" value={company.targetPrice} />
          <MetricCard label="P/E Ratio" value={company.keyMetrics.peRatio} />
        </div>
      </section>

      {/* Excel Preview */}
      <section className="mx-auto max-w-5xl px-6 pt-12">
        <h2 className="mb-6 font-serif text-2xl font-semibold text-offwhite">
          Financial Model Preview
        </h2>
        <ExcelPreview imageSrc={company.previewImage} companyName={company.name} />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pt-12 pb-20">
        <a href={mailto} className="btn-primary">
          📩 Request Full Model
        </a>
      </section>

      <Footer />
    </div>
  );
}
