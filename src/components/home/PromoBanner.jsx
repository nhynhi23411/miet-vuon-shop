import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const banners = [
  {
    tag: 'Giỏ quà đặc sản',
    title: 'Quà biếu chuẩn vị miền Tây',
    desc: 'Đóng hộp sang trọng, đủ vị mặn – ngọt làm quà ý nghĩa.',
    cta: 'Đặt giỏ quà',
    to: '/san-pham',
    emoji: '🎁',
    gradient: 'linear-gradient(120deg, #2f6b1c, #4a9b2e)',
  },
  {
    tag: 'Ưu đãi đến -20%',
    title: 'Bánh kẹo đặc sản giảm giá',
    desc: 'Kẹo dừa, bánh pía, bánh tráng sữa thơm ngon.',
    cta: 'Mua ngay',
    to: '/san-pham?sale=1',
    emoji: '🍬',
    gradient: 'linear-gradient(120deg, #c0562a, #8a3d18)',
  },
]

export default function PromoBanner() {
  return (
    <section className="section-sm">
      <div className="container promo-grid">
        {banners.map((b) => (
          <Link to={b.to} className="promo-card" key={b.title} style={{ background: b.gradient }}>
            <div className="promo-text">
              <span className="promo-tag">{b.tag}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <span className="promo-cta">{b.cta} <ArrowRight size={16} /></span>
            </div>
            <span className="promo-emoji" aria-hidden="true">{b.emoji}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
