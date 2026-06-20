export default function MetricCard({ label, value }) {
  return (
    <div className="glass-card p-6 text-center">
      <p className="font-serif text-2xl font-bold text-gold md:text-3xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
