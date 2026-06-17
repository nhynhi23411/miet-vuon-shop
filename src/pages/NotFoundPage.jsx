import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'
import './pages.css'

export default function NotFoundPage() {
  return (
    <div className="container notfound">
      <div className="notfound-emoji">🧺</div>
      <h1>404</h1>
      <h2>Ối! Không tìm thấy trang này</h2>
      <p>Có vẻ trang bạn tìm đã được dọn khỏi gian hàng. Hãy quay lại trang chủ nhé!</p>
      <div className="notfound-actions">
        <Link to="/" className="btn btn-primary btn-lg"><Home size={18} /> Về trang chủ</Link>
        <Link to="/san-pham" className="btn btn-outline btn-lg"><Search size={18} /> Xem sản phẩm</Link>
      </div>
    </div>
  )
}
