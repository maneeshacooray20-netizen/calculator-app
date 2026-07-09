interface DisplaySectionProps {
  currentInput: string;
  expression: string;
}

export default function DisplaySection({ currentInput, expression }: DisplaySectionProps) {
  const formatDisplay = (value: string) => {
    let displayVal = value;
    if (displayVal.length > 10) {
      const num = parseFloat(displayVal);
      if (!isNaN(num)) {
        displayVal = num.toPrecision(7).replace(/\.?0+$/, '');
      }
    }
    return displayVal;
  };

  return (
    <section className="display-well rounded-3xl px-6 py-6 flex flex-col gap-2" id="display-section">
      {/* Expression */}
      <div className="min-h-[24px] flex justify-end" id="expression-line">
        <span
          className="font-manrope text-sm font-light tracking-wide truncate"
          id="expression"
          style={{ color: '#a8c0a0', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {expression}
        </span>
      </div>
      {/* Main Result */}
      <div className="flex justify-end items-end gap-1 overflow-hidden">
        <span
          className="font-sora font-semibold leading-none result-scale"
          id="main-display"
          style={{ color: '#4a5e46', fontSize: 'clamp(2.5rem, 12vw, 3.5rem)' }}
        >
          {formatDisplay(currentInput)}
        </span>
      </div>
      {/* Cursor indicator */}
      <div className="flex justify-between items-center mt-1">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#dce5d4' }}></div>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#a8c0a0' }}></div>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#dce5d4' }}></div>
        </div>
        <span className="font-manrope text-xs" style={{ color: '#b0bfab' }}>result</span>
      </div>
    </section>
  );
}