import { useState } from 'react'
import './ui.css'

/**
 * Ảnh sản phẩm:
 * - Nếu có `image` (URL/đường dẫn) -> hiển thị ảnh thật.
 * - Nếu không có ảnh, hoặc ảnh lỗi -> hiển thị placeholder gradient + emoji.
 *   (Giúp trang luôn đẹp kể cả khi shop chưa upload ảnh.)
 */
export default function ProductImage({ image, emoji = '🥗', color = '#4a9b2e', name = '', className = '' }) {
  const [failed, setFailed] = useState(false)

  if (image && !failed) {
    return (
      <img
        src={image}
        alt={name}
        className={`prod-img ${className}`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    )
  }

  const style = {
    background: `linear-gradient(135deg,
      color-mix(in srgb, ${color} 14%, #ffffff),
      color-mix(in srgb, ${color} 30%, #ffffff))`,
  }

  return (
    <div className={`prod-img prod-img-ph ${className}`} style={style} role="img" aria-label={name}>
      <span className="prod-img-blob" style={{ background: `color-mix(in srgb, ${color} 22%, #ffffff)` }} />
      <span className="prod-img-emoji">{emoji}</span>
    </div>
  )
}
