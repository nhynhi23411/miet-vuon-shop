import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ChevronRight, ShoppingCart, Zap, Truck, ShieldCheck, RefreshCw, Headphones,
  MapPin, Package, Check,
} from 'lucide-react'
import ProductImage from '../components/ui/ProductImage'
import Rating from '../components/ui/Rating'
import Price from '../components/ui/Price'
import QuantityInput from '../components/ui/QuantityInput'
import ProductCard from '../components/ui/ProductCard'
import { getProduct, getRelated } from '../data/products'
import { getCategory } from '../data/categories'
import { useCart } from '../context/CartContext'
import { discountPercent } from '../utils/format'
import './pages.css'

const commitments = [
  { icon: ShieldCheck, text: 'Đặc sản chính gốc, nguồn gốc rõ ràng' },
  { icon: Truck, text: 'Đóng gói kỹ, giao hàng toàn quốc' },
  { icon: RefreshCw, text: 'Đổi trả nếu sản phẩm bị lỗi' },
  { icon: Headphones, text: 'Hỗ trợ tư vấn 24/7' },
]

export default function ProductPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)

  const product = getProduct(slug)

  if (!product) {
    return (
      <div className="container empty-state" style={{ padding: '80px 16px' }}>
        <h2>Không tìm thấy sản phẩm</h2>
        <p>Sản phẩm bạn tìm không tồn tại hoặc đã ngừng kinh doanh.</p>
        <Link to="/san-pham" className="btn btn-primary">Xem tất cả sản phẩm</Link>
      </div>
    )
  }

  const category = getCategory(product.category)
  const percent = discountPercent(product.price, product.oldPrice)
  const related = getRelated(product, 4)

  const buyNow = () => {
    addItem(product, qty)
    navigate('/gio-hang')
  }

  return (
    <div className="page">
      <div className="breadcrumb-bar">
        <div className="container breadcrumb">
          <Link to="/">Trang chủ</Link>
          <ChevronRight size={14} />
          <Link to="/san-pham">Sản phẩm</Link>
          <ChevronRight size={14} />
          {category && (
            <>
              <Link to={`/danh-muc/${category.slug}`}>{category.name}</Link>
              <ChevronRight size={14} />
            </>
          )}
          <span>{product.name}</span>
        </div>
      </div>

      <div className="container">
        <div className="product-detail">
          {/* Ảnh */}
          <div className="pd-gallery">
            <div className="pd-image">
              <ProductImage
                image={product.image}
                emoji={product.emoji}
                color={product.color}
                name={product.name}
              />
              <div className="pd-badges">
                {percent > 0 && <span className="badge badge-sale">-{percent}%</span>}
                {product.isNew && <span className="badge badge-new">Mới</span>}
              </div>
              <span className="pd-origin-tag"><MapPin size={14} /> {product.origin}</span>
            </div>
          </div>

          {/* Thông tin */}
          <div className="pd-info">
            {product.organic && <span className="badge badge-organic">🌿 Đặc sản tự nhiên</span>}
            <h1>{product.name}</h1>

            <div className="pd-rating">
              <Rating value={product.rating} showValue />
              <span className="pd-divider" />
              <span>{product.reviews} đánh giá</span>
              <span className="pd-divider" />
              <span>Đã bán {product.sold.toLocaleString('vi-VN')}</span>
            </div>

            <div className="pd-price">
              <Price price={product.price} oldPrice={product.oldPrice} showPercent />
            </div>

            <p className="pd-short">{product.shortDesc}</p>

            <ul className="pd-meta">
              <li><MapPin size={16} /> <span>Xuất xứ:</span> <b>{product.origin}</b></li>
              <li><Package size={16} /> <span>Quy cách:</span> <b>{product.unit}</b></li>
              <li>
                <ShoppingCart size={16} /> <span>Danh mục:</span>
                {category && <Link to={`/danh-muc/${category.slug}`} className="pd-cat-link">{category.name}</Link>}
              </li>
              <li><Check size={16} /> <span>Tình trạng:</span> <b className="text-green">Còn hàng</b></li>
            </ul>

            <div className="pd-buy">
              <div className="pd-qty">
                <span>Số lượng</span>
                <QuantityInput value={qty} onChange={setQty} />
              </div>
              <div className="pd-actions">
                <button className="btn btn-outline btn-lg" onClick={() => addItem(product, qty)}>
                  <ShoppingCart size={19} /> Thêm vào giỏ
                </button>
                <button className="btn btn-primary btn-lg" onClick={buyNow}>
                  <Zap size={19} /> Mua ngay
                </button>
              </div>
            </div>

            <ul className="pd-commit">
              {commitments.map(({ icon: Icon, text }) => (
                <li key={text}><Icon size={18} /> {text}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mô tả chi tiết */}
        <div className="pd-desc-section">
          <h2 className="pd-section-title">Mô tả sản phẩm</h2>
          <div className="pd-desc-content">
            <p>{product.description}</p>
            <p>
              Tại <b>Miệt Vườn</b>, mỗi sản phẩm đều được tuyển chọn trực tiếp từ làng nghề và
              người nông dân địa phương, nhằm mang đến cho bạn hương vị đặc sản chân thật nhất của
              vùng Đồng bằng sông Cửu Long. Sản phẩm thích hợp dùng trong gia đình hoặc làm quà biếu.
            </p>
          </div>
        </div>

        {/* Sản phẩm liên quan */}
        {related.length > 0 && (
          <div className="pd-related">
            <h2 className="pd-section-title">Sản phẩm liên quan</h2>
            <div className="products-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
