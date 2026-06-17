import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, User, Sprout, ChevronDown, Phone } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { categories } from '../../data/categories'
import AnnouncementBar from './AnnouncementBar'
import './Header.css'

const navItems = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/san-pham', label: 'Sản phẩm', dropdown: true },
  { to: '/san-pham?sale=1', label: 'Khuyến mãi', hot: true },
  { to: '/tin-tuc', label: 'Tin tức' },
  { to: '/lien-he', label: 'Liên hệ' },
]

export default function Header() {
  const { count, openCart } = useCart()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const submitSearch = (e) => {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `/san-pham?q=${encodeURIComponent(q)}` : '/san-pham')
  }

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <AnnouncementBar />

      <div className="header-main">
        <div className="container header-row">
          <Link to="/" className="logo" aria-label="Miệt Vườn - trang chủ">
            <span className="logo-mark"><Sprout size={24} strokeWidth={2.4} /></span>
            <span className="logo-text">
              Miệt <span>Vườn</span>
            </span>
          </Link>

          <form className="search" onSubmit={submitSearch} role="search">
            <input
              type="search"
              placeholder="Tìm đặc sản miền Tây: mắm, kẹo dừa, gạo ST25..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Tìm kiếm sản phẩm"
            />
            <button type="submit" aria-label="Tìm kiếm"><Search size={20} /></button>
          </form>

          <div className="header-actions">
            <a href="tel:19006789" className="header-hotline">
              <span className="icon-btn"><Phone size={20} /></span>
              <span className="hotline-text">
                <small>Hotline</small>
                <b>1900 6789</b>
              </span>
            </a>
            <Link to="/lien-he" className="icon-btn account-btn" aria-label="Tài khoản">
              <User size={22} />
            </Link>
            <button className="icon-btn cart-btn" onClick={openCart} aria-label="Giỏ hàng">
              <ShoppingCart size={22} />
              {count > 0 && <span className="cart-count">{count}</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Thanh điều hướng */}
      <nav className="nav-bar">
        <div className="container nav-inner">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.to} className={item.dropdown ? 'has-dropdown' : ''}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => (isActive ? 'active' : '') + (item.hot ? ' hot' : '')}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={15} />}
                </NavLink>
                {item.dropdown && (
                  <div className="dropdown">
                    {categories.map((c) => (
                      <Link key={c.slug} to={`/danh-muc/${c.slug}`} className="dropdown-item">
                        <span className="dropdown-emoji">{c.emoji}</span>
                        <span>
                          <b>{c.name}</b>
                          <small>{c.desc}</small>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <span className="nav-promo">🚚 Giao nhanh 2h nội thành</span>
        </div>
      </nav>
    </header>
  )
}
