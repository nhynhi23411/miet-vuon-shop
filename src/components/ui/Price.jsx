import { formatPrice, discountPercent } from '../../utils/format'

/** Hiển thị giá bán, giá gốc (gạch ngang) và % giảm (tuỳ chọn) */
export default function Price({ price, oldPrice, showPercent = false, size }) {
  const percent = discountPercent(price, oldPrice)
  return (
    <span className="price" style={size ? { fontSize: size } : undefined}>
      {formatPrice(price)}
      {oldPrice > price && <span className="old">{formatPrice(oldPrice)}</span>}
      {showPercent && percent > 0 && <span className="badge badge-sale" style={{ marginLeft: 8 }}>-{percent}%</span>}
    </span>
  )
}
