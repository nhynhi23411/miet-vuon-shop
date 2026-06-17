import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, ChevronRight, ArrowLeft, CheckCircle2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import ProductImage from '../components/ui/ProductImage'
import QuantityInput from '../components/ui/QuantityInput'
import { formatPrice } from '../utils/format'
import './pages.css'

const FREE_SHIP = 300000
const SHIP_FEE = 30000

export default function CartPage() {
  const { items, subtotal, updateQty, removeItem, clear } = useCart()
  const [ordered, setOrdered] = useState(false)

  const shipping = subtotal === 0 || subtotal >= FREE_SHIP ? 0 : SHIP_FEE
  const total = subtotal + shipping
  const remain = Math.max(0, FREE_SHIP - subtotal)

  const checkout = () => {
    setOrdered(true)
    clear()
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  // Đặt hàng thành công
  if (ordered) {
    return (
      <div className="container order-success">
        <CheckCircle2 size={72} className="os-icon" />
        <h1>Đặt hàng thành công!</h1>
        <p>
          Cảm ơn bạn đã mua sắm tại Miệt Vườn. Đây là bản demo giao diện nên đơn hàng chưa được
          xử lý thật. Nhân viên sẽ liên hệ xác nhận trong thời gian sớm nhất.
        </p>
        <Link to="/san-pham" className="btn btn-primary btn-lg">Tiếp tục mua sắm</Link>
      </div>
    )
  }

  // Giỏ trống
  if (items.length === 0) {
    return (
      <div className="container cart-empty">
        <span className="cart-empty-emoji">🛒</span>
        <h1>Giỏ hàng của bạn đang trống</h1>
        <p>Hãy khám phá các đặc sản miền Tây hấp dẫn của Miệt Vườn nhé!</p>
        <Link to="/san-pham" className="btn btn-primary btn-lg">Bắt đầu mua sắm</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="breadcrumb-bar">
        <div className="container breadcrumb">
          <Link to="/">Trang chủ</Link>
          <ChevronRight size={14} />
          <span>Giỏ hàng</span>
        </div>
      </div>

      <div className="container">
        <div className="page-head"><h1>Giỏ hàng của bạn</h1></div>

        <div className="cart-layout">
          {/* Danh sách sản phẩm */}
          <div className="cart-items">
            <div className="cart-row cart-head">
              <span>Sản phẩm</span>
              <span>Đơn giá</span>
              <span>Số lượng</span>
              <span>Thành tiền</span>
              <span></span>
            </div>

            {items.map((item) => (
              <div className="cart-row" key={item.id}>
                <div className="cart-prod">
                  <Link to={`/san-pham/${item.slug}`} className="cart-img">
                    <ProductImage image={item.image} emoji={item.emoji} color={item.color} name={item.name} />
                  </Link>
                  <div>
                    <Link to={`/san-pham/${item.slug}`} className="cart-name">{item.name}</Link>
                    <span className="cart-unit">{item.unit}</span>
                  </div>
                </div>
                <div className="cart-cell" data-label="Đơn giá">{formatPrice(item.price)}</div>
                <div className="cart-cell" data-label="Số lượng">
                  <QuantityInput value={item.qty} onChange={(v) => updateQty(item.id, v)} />
                </div>
                <div className="cart-cell cart-line-total" data-label="Thành tiền">
                  {formatPrice(item.price * item.qty)}
                </div>
                <button className="cart-remove" onClick={() => removeItem(item.id)} aria-label="Xoá">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            <div className="cart-foot-actions">
              <Link to="/san-pham" className="cart-continue"><ArrowLeft size={17} /> Tiếp tục mua sắm</Link>
              <button className="cart-clear" onClick={clear}>Xoá toàn bộ giỏ hàng</button>
            </div>
          </div>

          {/* Tóm tắt đơn hàng */}
          <aside className="cart-summary">
            <h3>Tóm tắt đơn hàng</h3>

            {remain > 0 ? (
              <p className="cart-ship-note">
                Mua thêm <b>{formatPrice(remain)}</b> để được <b className="text-green">miễn phí giao hàng</b>.
              </p>
            ) : (
              <p className="cart-ship-note text-green"><b>🎉 Đơn hàng được miễn phí giao hàng!</b></p>
            )}

            <div className="summary-line">
              <span>Tạm tính</span>
              <b>{formatPrice(subtotal)}</b>
            </div>
            <div className="summary-line">
              <span>Phí giao hàng</span>
              <b>{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</b>
            </div>
            <div className="summary-total">
              <span>Tổng cộng</span>
              <b>{formatPrice(total)}</b>
            </div>

            <button className="btn btn-primary btn-block btn-lg" onClick={checkout}>
              <ShoppingBag size={19} /> Tiến hành đặt hàng
            </button>
            <p className="summary-secure">🔒 Thông tin của bạn được bảo mật an toàn</p>
          </aside>
        </div>
      </div>
    </div>
  )
}
