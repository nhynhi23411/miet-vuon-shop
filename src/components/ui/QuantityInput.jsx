import { Minus, Plus } from 'lucide-react'

/** Ô chọn số lượng với nút tăng/giảm */
export default function QuantityInput({ value, onChange, min = 1, max = 99 }) {
  const set = (v) => onChange(Math.min(max, Math.max(min, v)))
  return (
    <div className="qty">
      <button type="button" aria-label="Giảm" onClick={() => set(value - 1)} disabled={value <= min}>
        <Minus size={16} />
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseInt(e.target.value || '1', 10))}
        aria-label="Số lượng"
      />
      <button type="button" aria-label="Tăng" onClick={() => set(value + 1)} disabled={value >= max}>
        <Plus size={16} />
      </button>
    </div>
  )
}
