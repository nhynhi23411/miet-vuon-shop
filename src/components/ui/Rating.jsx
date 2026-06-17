import { Star } from 'lucide-react'

/** Hiển thị số sao đánh giá + số lượt (tuỳ chọn) */
export default function Rating({ value = 0, reviews, size = 14, showValue = false }) {
  const full = Math.floor(value)
  const hasHalf = value - full >= 0.5
  return (
    <span className="rating" title={`${value}/5`}>
      <span className="rating-stars" style={{ '--s': `${size}px` }}>
        {[0, 1, 2, 3, 4].map((i) => {
          const filled = i < full || (i === full && hasHalf)
          return (
            <Star
              key={i}
              size={size}
              className={filled ? 'star on' : 'star'}
              fill={filled ? 'var(--star)' : 'none'}
              strokeWidth={filled ? 0 : 1.6}
            />
          )
        })}
      </span>
      {showValue && <b className="rating-val">{value.toFixed(1)}</b>}
      {reviews != null && <span className="rating-count">({reviews})</span>}
    </span>
  )
}
