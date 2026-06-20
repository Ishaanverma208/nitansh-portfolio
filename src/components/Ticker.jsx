import content from '../../portfolio-content.json';

export default function Ticker() {
  const symbols = content.tickerSymbols;

  const renderSymbols = () =>
    symbols.map((item, i) => {
      const isPositive = item.change.startsWith('+');
      return (
        <span key={i} className="inline-flex items-center gap-3 px-6">
          <span className="font-mono text-[13px] font-bold text-offwhite tracking-wider">
            {item.symbol}
          </span>
          <span className="font-mono text-[13px] font-medium text-muted">
            {item.price}
          </span>
          <span className={`font-mono text-[13px] font-semibold flex items-center gap-1 ${isPositive ? 'text-green' : 'text-red'}`}>
            {isPositive ? '▲' : '▼'} {item.change.replace('+', '').replace('-', '')}
          </span>
          <span className="text-border-light text-xs ml-3">│</span>
        </span>
      );
    });

  return (
    <div className="border-y border-border bg-charcoal/80 py-2.5 shadow-inner">
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {renderSymbols()}
          {renderSymbols()}
          {renderSymbols()}
          {renderSymbols()}
        </div>
      </div>
    </div>
  );
}
