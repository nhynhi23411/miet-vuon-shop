import { Link } from 'react-router-dom'
import { Sprout, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'
import { categories } from '../../data/categories'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-mark"><Sprout size={24} strokeWidth={2.4} /></span>
            <span className="logo-text" style={{ color: '#fff' }}>
              Miệt <span>Vườn</span>
            </span>
          </Link>
          <p className="footer-desc">
            Cửa hàng nông sản sạch, mang đến rau củ quả hữu cơ và thực phẩm an toàn,
            tươi ngon từ nông trại đến bàn ăn của gia đình bạn.
          </p>
          <ul className="footer-contact">
            <li><MapPin size={17} /> 123 Đường Xanh, Q.1, TP. Hồ Chí Minh</li>
            <li><Phone size={17} /> <a href="tel:19006789">1900 6789</a></li>
            <li><Mail size={17} /> <a href="mailto:hello@mietvuon.vn">hello@mietvuon.vn</a></li>
          </ul>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Youtube"><Youtube size={18} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Về chúng tôi</h4>
          <ul>
            <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
            <li><Link to="/tin-tuc">Tin tức</Link></li>
            <li><Link to="/gioi-thieu">Hệ thống cửa hàng</Link></li>
            <li><Link to="/lien-he">Tuyển dụng</Link></li>
            <li><Link to="/lien-he">Liên hệ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Hỗ trợ khách hàng</h4>
          <ul>
            <li><Link to="/lien-he">Hướng dẫn mua hàng</Link></li>
            <li><Link to="/lien-he">Chính sách đổi trả</Link></li>
            <li><Link to="/lien-he">Chính sách vận chuyển</Link></li>
            <li><Link to="/lien-he">Chính sách bảo mật</Link></li>
            <li><Link to="/lien-he">Câu hỏi thường gặp</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Danh mục</h4>
          <ul>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/danh-muc/${c.slug}`}>{c.emoji} {c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-pay">
        <div className="container footer-pay-inner">
          <span>Phương thức thanh toán:</span>
          <div className="pay-methods">
            {['COD', 'VISA', 'ATM', 'MoMo', 'ZaloPay', 'VNPAY'].map((p) => (
              <span key={p} className="pay-chip">{p}</span>
            ))}
          </div>
          <span className="footer-cert">✓ Đã đăng ký Bộ Công Thương</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2026 Miệt Vườn. Nông sản sạch từ nông trại đến bàn ăn.
        </div>
      </div>
    </footer>
  )
}
