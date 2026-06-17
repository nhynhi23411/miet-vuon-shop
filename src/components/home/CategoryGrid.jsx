import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { getByCategory } from '../../data/products'

export default function CategoryGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Danh mục</span>
          <h2>Khám phá đặc sản theo nhóm</h2>
          <p>Từ mắm, nước chấm đến bánh kẹo, gạo ngon và gia vị trứ danh miền Tây.</p>
        </div>

        <div className="cat-grid">
          {categories.map((c) => (
            <Link to={`/danh-muc/${c.slug}`} className="cat-card" key={c.slug}>
              <span
                className="cat-emoji"
                style={{ background: `color-mix(in srgb, ${c.color} 16%, #fff)` }}
              >
                {c.emoji}
              </span>
              <b>{c.name}</b>
              <small>{getByCategory(c.slug).length} sản phẩm</small>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
