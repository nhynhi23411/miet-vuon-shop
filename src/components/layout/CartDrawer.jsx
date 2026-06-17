import { Link } from 'react-router-dom'
import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'
import { useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import ProductImage from '../ui/ProductImage'
import { formatPrice } from '../../utils/format'
import './CartDrawer.css'

const FREE_SHIP = 300000

export default function CartDrawer() {
  const { items, subtotal, count, isOpen, closeCart, removeItem, updateQty } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const remain = Math.max(0, FREE_SHIP - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIP) * 100)

  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-overlay" onClick={closeCart} />
      <aside className="drawer-panel" aria-label="Giỏ hàng">
        <div className="drawer-head">
          <h3><ShoppingCart size={20} /> Giỏ hàng {count > 0 && `(${count})`}</h3>
          <button className="icon-btn" onClick={closeCart} aria-label="Đóng"><X size={22} /></button>
        </div>

        {items.length === 0 ? (
          <div className="drawer-empty">
            <span className="drawer-empty-emoji">🛒</span>
            <p>Giỏ hàng của bạn đang trống</p>
            <button className="btn btn-primary" onClick={closeCart}>Tiếp tục mua sắm</button>
          </div>
        ) : (
          <>
            <div className="drawer-ship">
              {remain > 0 ? (
                <p>Mua thêm <b>{formatPrice(remain)}</b> để được <b className="text-green">miễn phí giao hàng</b> 🚚</p>
              ) : (
                <p className="text-green"><b>🎉 Bạn được miễn phí giao hàng!</b></p>
              )}
              <div className="ship-bar"><span style={{ width: `${progress}%` }} /></div>
            </div>

            <div className="drawer-items">
              {items.map((item) => (
                <div className="drawer-item" key={item.id}>
                  <Link to={`/san-pham/${item.slug}`} className="drawer-item-img" onClick={closeCart}>
                    <ProductImage image={item.image} emoji={item.emoji} color={item.color} name={item.name} />
                  </Link>
                  <div className="drawer-item-info">
                    <Link to={`/san-pham/${item.slug}`} className="drawer-item-name" onClick={closeCart}>
                      {item.name}
                    </Link>
                    <span className="drawer-item-unit">{item.unit}</span>
                    <div className="drawer-item-bottom">
                      <div className="qty qty-sm">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Giảm"><Minus size={14} /></button>
                        <input value={item.qty} readOnly aria-label="Số lượng" />
                        <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Tăng"><Plus size={14} /></button>
                      </div>
                      <b className="drawer-item-price">{formatPrice(item.price * item.qty)}</b>
                    </div>
                  </div>
                  <button className="drawer-item-remove" onClick={() => removeItem(item.id)} aria-label="Xoá">
                    <Trash2 size={17} />
                  </button>
                </div>
              ))}
            </div>

            <div className="drawer-foot">
              <div className="drawer-total">
                <span>Tạm tính</span>
                <b>{formatPrice(subtotal)}</b>
              </div>
              <p className="drawer-note">Phí vận chuyển được tính ở bước thanh toán.</p>
              <div className="drawer-actions">
                <Link to="/gio-hang" className="btn btn-outline btn-block" onClick={closeCart}>Xem giỏ hàng</Link>
                <Link to="/gio-hang" className="btn btn-primary btn-block" onClick={closeCart}>Thanh toán</Link>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
