interface ButtonGridProps {
  onButtonClick: (value: string) => void;
}

export default function ButtonGrid({ onButtonClick }: ButtonGridProps) {
  return (
    <section className="w-full" id="button-grid">
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1: Functions */}
        <button
          className="btn-func rounded-2xl h-16 flex items-center justify-center font-manrope font-semibold text-base cursor-pointer select-none"
          style={{ color: '#7d9b76' }}
          onClick={() => onButtonClick('AC')}
        >
          AC
        </button>
        <button
          className="btn-func rounded-2xl h-16 flex items-center justify-center font-manrope font-semibold text-base cursor-pointer select-none"
          style={{ color: '#7d9b76' }}
          onClick={() => onButtonClick('+/-')}
        >
          /-
        </button>
        <button
          className="btn-func rounded-2xl h-16 flex items-center justify-center font-manrope font-semibold text-base cursor-pointer select-none"
          style={{ color: '#7d9b76' }}
          onClick={() => onButtonClick('%')}
        >
          %
        </button>
        <button
          className="btn-op rounded-2xl h-16 flex items-center justify-center font-sora font-semibold text-xl cursor-pointer select-none"
          style={{ color: '#fff' }}
          onClick={() => onButtonClick('÷')}
        >
          ÷
        </button>
        {/* Row 2 */}
        <button
          className="btn-num rounded-2xl h-16 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('7')}
        >
          7
        </button>
        <button
          className="btn-num rounded-2xl h-16 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('8')}
        >
          8
        </button>
        <button
          className="btn-num rounded-2xl h-16 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('9')}
        >
          9
        </button>
        <button
          className="btn-op rounded-2xl h-16 flex items-center justify-center font-sora font-semibold text-xl cursor-pointer select-none"
          style={{ color: '#fff' }}
          onClick={() => onButtonClick('×')}
        >
          ×
        </button>
        {/* Row 3 */}
        <button
          className="btn-num rounded-2xl h-16 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('4')}
        >
          4
        </button>
        <button
          className="btn-num rounded-2xl h-16 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('5')}
        >
          5
        </button>
        <button
          className="btn-num rounded-2xl h-16 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('6')}
        >
          6
        </button>
        <button
          className="btn-op rounded-2xl h-16 flex items-center justify-center font-sora font-semibold text-xl cursor-pointer select-none"
          style={{ color: '#fff' }}
          onClick={() => onButtonClick('−')}
        >
          −
        </button>
        {/* Row 4 */}
        <button
          className="btn-num rounded-2xl h-16 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('1')}
        >
          1
        </button>
        <button
          className="btn-num rounded-2xl h-16 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('2')}
        >
          2
        </button>
        <button
          className="btn-num rounded-2xl h-16 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('3')}
        >
          3
        </button>
        <button
          className="btn-op rounded-2xl h-16 flex items-center justify-center font-sora font-semibold text-xl cursor-pointer select-none"
          style={{ color: '#fff' }}
          onClick={() => onButtonClick('+')}
        >
          +
        </button>
        {/* Row 5 */}
        <button
          className="btn-num rounded-2xl h-16 col-span-2 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('0')}
        >
          0
        </button>
        <button
          className="btn-num rounded-2xl h-16 flex items-center justify-center font-sora font-medium text-xl cursor-pointer select-none"
          style={{ color: '#4a5e46' }}
          onClick={() => onButtonClick('.')}
        >
          .
        </button>
        <button
          className="btn-eq rounded-2xl h-16 flex items-center justify-center font-sora font-semibold text-xl cursor-pointer select-none"
          style={{ color: '#fff' }}
          onClick={() => onButtonClick('=')}
        >
          =
        </button>
      </div>
    </section>
  );
}