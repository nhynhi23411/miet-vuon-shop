import { useMemo, useState } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, ChevronRight, PackageOpen } from 'lucide-react'
import ProductCard from '../components/ui/ProductCard'
import { products, provinces } from '../data/products'
import { categories, getCategory } from '../data/categories'
import './pages.css'

const priceRanges = [
  { key: 'all', label: 'Tất cả mức giá' },
  { key: 'u50', label: 'Dưới 50.000₫', min: 0, max: 50000 },
  { key: '50-100', label: '50.000 - 100.000₫', min: 50000, max: 100000 },
  { key: '100-200', label: '100.000 - 200.000₫', min: 100000, max: 200000 },
  { key: 'o200', label: 'Trên 200.000₫', min: 200000, max: Infinity },
]

const sortOptions = [
  { key: 'featured', label: 'Nổi bật' },
  { key: 'bestselling', label: 'Bán chạy' },
  { key: 'newest', label: 'Mới nhất' },
  { key: 'price-asc', label: 'Giá: Thấp → Cao' },
  { key: 'price-desc', label: 'Giá: Cao → Thấp' },
]

// Bỏ dấu để tìm kiếm không phân biệt dấu
const normalize = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').toLowerCase()

export default function CollectionPage() {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || ''
  const saleOnly = searchParams.get('sale') === '1'

  const [sort, setSort] = useState('featured')
  const [priceKey, setPriceKey] = useState('all')
  const [provinceFilter, setProvinceFilter] = useState('all')

  const category = slug ? getCategory(slug) : null

  const title = category
    ? category.name
    : saleOnly
    ? 'Đang khuyến mãi'
    : q
    ? `Kết quả cho "${q}"`
    : 'Tất cả sản phẩm'

  const filtered = useMemo(() => {
    let list = [...products]

    if (slug) list = list.filter((p) => p.category === slug)
    if (saleOnly) list = list.filter((p) => p.oldPrice && p.oldPrice > p.price)
    if (provinceFilter !== 'all') list = list.filter((p) => p.origin === provinceFilter)

    if (q) {
      const k = normalize(q)
      list = list.filter(
        (p) => normalize(p.name).includes(k) || normalize(p.origin).includes(k)
      )
    }

    const range = priceRanges.find((r) => r.key === priceKey)
    if (range && range.key !== 'all') {
      list = list.filter((p) => p.price >= range.min && p.price < range.max)
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'bestselling':
        list.sort((a, b) => b.sold - a.sold)
        break
      case 'newest':
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.id - a.id)
        break
      default: // featured
        list.sort((a, b) => Number(b.bestseller) - Number(a.bestseller) || b.sold - a.sold)
    }
    return list
  }, [slug, q, saleOnly, provinceFilter, priceKey, sort])

  return (
    <div className="page">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb">
          <Link to="/">Trang chủ</Link>
          <ChevronRight size={14} />
          {category ? (
            <>
              <Link to="/san-pham">Sản phẩm</Link>
              <ChevronRight size={14} />
              <span>{category.name}</span>
            </>
          ) : (
            <span>{title}</span>
          )}
        </div>
      </div>

      <div className="container collection">
        {/* Sidebar lọc */}
        <aside className="filters">
          <div className="filter-block">
            <h4><SlidersHorizontal size={17} /> Danh mục</h4>
            <ul className="filter-cats">
              <li>
                <Link to="/san-pham" className={!slug ? 'active' : ''}>Tất cả sản phẩm</Link>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link to={`/danh-muc/${c.slug}`} className={slug === c.slug ? 'active' : ''}>
                    <span>{c.emoji}</span> {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-block">
            <h4>Khoảng giá</h4>
            <ul className="filter-radios">
              {priceRanges.map((r) => (
                <li key={r.key}>
                  <label>
                    <input
                      type="radio"
                      name="price"
                      checked={priceKey === r.key}
                      onChange={() => setPriceKey(r.key)}
                    />
                    {r.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-block">
            <h4>Tỉnh / Thành</h4>
            <select
              className="filter-select"
              value={provinceFilter}
              onChange={(e) => setProvinceFilter(e.target.value)}
            >
              <option value="all">Tất cả tỉnh thành</option>
              {provinces.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </aside>

        {/* Nội dung */}
        <div className="collection-main">
          <div className="page-head">
            <h1>{title}</h1>
            {category && <p>{category.desc}</p>}
          </div>

          <div className="toolbar">
            <span className="result-count">{filtered.length} sản phẩm</span>
            <label className="sort-box">
              Sắp xếp:
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {sortOptions.map((o) => (
                  <option key={o.key} value={o.key}>{o.label}</option>
                ))}
              </select>
            </label>
          </div>

          {filtered.length > 0 ? (
            <div className="products-grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <PackageOpen size={56} strokeWidth={1.5} />
              <h3>Không tìm thấy sản phẩm</h3>
              <p>Thử thay đổi bộ lọc hoặc từ khoá tìm kiếm khác.</p>
              <Link to="/san-pham" className="btn btn-primary">Xem tất cả sản phẩm</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
