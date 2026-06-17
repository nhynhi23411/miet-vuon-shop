import { Link } from 'react-router-dom'
import { ChevronRight, Leaf, HandHeart, Truck, BadgeCheck } from 'lucide-react'
import { provinces } from '../data/products'
import './pages.css'

const values = [
  { icon: BadgeCheck, title: 'Chính gốc', desc: 'Đặc sản tuyển chọn từ đúng vùng đất, đúng làng nghề.' },
  { icon: Leaf, title: 'Tự nhiên', desc: 'Ưu tiên sản phẩm sạch, an toàn cho sức khoẻ gia đình.' },
  { icon: HandHeart, title: 'Tử tế', desc: 'Hợp tác công bằng với người nông dân và hợp tác xã.' },
  { icon: Truck, title: 'Tận tâm', desc: 'Đóng gói kỹ, giao nhanh, hỗ trợ khách hàng chu đáo.' },
]

const stats = [
  { num: '13', label: 'Tỉnh/thành miền Tây' },
  { num: '20+', label: 'Đặc sản tuyển chọn' },
  { num: '5.000+', label: 'Khách hàng tin dùng' },
  { num: '4.8/5', label: 'Đánh giá hài lòng' },
]

export default function AboutPage() {
  return (
    <div className="page">
      <div className="breadcrumb-bar">
        <div className="container breadcrumb">
          <Link to="/">Trang chủ</Link>
          <ChevronRight size={14} />
          <span>Giới thiệu</span>
        </div>
      </div>

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="hero-eyebrow">🌾 Về chúng tôi</span>
          <h1>Miệt Vườn - Đặc sản miền Tây chính gốc</h1>
          <p>
            Chúng tôi mang tinh hoa ẩm thực của Đồng bằng sông Cửu Long đến gian bếp mọi nhà,
            kết nối người tiêu dùng với những làng nghề và người nông dân tử tế.
          </p>
        </div>
      </section>

      {/* Câu chuyện */}
      <section className="section">
        <div className="container about-story">
          <div className="about-story-text">
            <span className="eyebrow">Câu chuyện của chúng tôi</span>
            <h2>Bắt đầu từ tình yêu với quê hương sông nước</h2>
            <p>
              Miệt Vườn ra đời từ mong muốn giản dị: giúp những món đặc sản miền Tây - vốn chỉ
              nổi tiếng trong vùng - đến được với nhiều gia đình Việt hơn. Mỗi chuyến đi về các
              tỉnh miền Tây là một lần chúng tôi khám phá thêm hương vị mới và những câu chuyện
              đẹp đằng sau mỗi sản phẩm.
            </p>
            <p>
              Từ mắm cá lóc Châu Đốc, kẹo dừa Bến Tre, đến gạo ST25 Sóc Trăng hay tôm khô Cà Mau,
              chúng tôi tuyển chọn kỹ lưỡng và làm việc trực tiếp với người sản xuất để đảm bảo
              chất lượng và sự minh bạch về nguồn gốc.
            </p>
            <Link to="/san-pham" className="btn btn-primary">Khám phá sản phẩm</Link>
          </div>
          <div className="about-story-art" aria-hidden="true">
            <span className="asa asa-0">🥥</span>
            <span className="asa asa-1">🌾</span>
            <span className="asa asa-2">🍯</span>
            <span className="asa asa-3">🦐</span>
          </div>
        </div>
      </section>

      {/* Giá trị */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Giá trị cốt lõi</span>
            <h2>Điều Miệt Vườn luôn theo đuổi</h2>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, desc }) => (
              <div className="value-card" key={title}>
                <span className="value-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thống kê */}
      <section className="about-stats">
        <div className="container commit-grid">
          {stats.map((s) => (
            <div className="commit-item" key={s.label}>
              <div className="commit-num" style={{ color: '#fff' }}>{s.num}</div>
              <b style={{ color: '#fff' }}>{s.label}</b>
            </div>
          ))}
        </div>
      </section>

      {/* Vùng phủ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Vùng nguyên liệu</span>
            <h2>Đặc sản từ 13 tỉnh thành miền Tây</h2>
            <p>Mạng lưới của Miệt Vườn trải khắp Đồng bằng sông Cửu Long.</p>
          </div>
          <div className="province-chips">
            {provinces.map((p) => (
              <span className="province-chip" key={p}>📍 {p}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
