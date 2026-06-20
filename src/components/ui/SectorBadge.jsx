import { Car, Zap, Lightbulb } from 'lucide-react';

const iconMap = {
  'Automobile': <Car size={14} />,
  'Consumer Electrical': <Zap size={14} />,
  'Consumer Durable': <Lightbulb size={14} />
};

export default function SectorBadge({ department }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs font-medium text-electric-light">
      {iconMap[department] && <span>{iconMap[department]}</span>}
      <span>{department}</span>
    </span>
  );
}
