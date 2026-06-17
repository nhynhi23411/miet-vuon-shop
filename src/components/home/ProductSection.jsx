import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '../ui/ProductCard'

/** Khối hiển thị một nhóm sản phẩm với tiêu đề và link "Xem tất cả" */
export default function ProductSection({ eyebrow, title, subtitle, products, viewAllTo, bg }) {
  if (!products?.length) return null
  return (
    <section className={`section ${bg || ''}`}>
      <div className="container">
        <div className="ps-head">
          <div>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          {viewAllTo && (
            <Link to={viewAllTo} className="ps-viewall">
              Xem tất cả <ArrowRight size={16} />
            </Link>
          )}
        </div>
        <div className="products-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
