const ratingStyles = {
  BUY: 'bg-green/20 text-green border-green/30',
  SELL: 'bg-red/20 text-red border-red/30',
  HOLD: 'bg-gold/20 text-gold border-gold/30',
};

export default function RatingChip({ rating }) {
  const style = ratingStyles[rating] || ratingStyles.HOLD;

  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${style}`}
    >
      {rating}
    </span>
  );
}
