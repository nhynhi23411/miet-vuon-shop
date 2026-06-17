import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const slides = [
  {
    eyebrow: '🌾 Đặc sản miền Tây',
    title: 'Tinh hoa ẩm thực\nĐồng bằng sông Cửu Long',
    desc: '20 đặc sản tiêu biểu từ 13 tỉnh miền Tây, được Miệt Vườn tuyển chọn kỹ lưỡng và giao tận nhà toàn quốc.',
    cta: 'Khám phá ngay',
    to: '/san-pham',
    emojis: ['🌾', '🥥', '🍯'],
    gradient: 'linear-gradient(120deg, #4a9b2e, #2f6b1c)',
  },
  {
    eyebrow: '🎁 Quà quê đậm tình',
    title: 'Quà biếu đặc sản\nchuẩn vị quê hương',
    desc: 'Kẹo dừa Bến Tre, bánh pía Sóc Trăng, tôm khô Cà Mau... những món quà mộc mạc mà ý nghĩa.',
    cta: 'Xem quà tặng',
    to: '/danh-muc/banh-keo',
    emojis: ['🎁', '🍬', '🥮'],
    gradient: 'linear-gradient(120deg, #d2691e, #a8480e)',
  },
  {
    eyebrow: '🏆 Gạo ngon nhất thế giới',
    title: 'Gạo ST25 Sóc Trăng\ncơm dẻo thơm lá dứa',
    desc: 'Giống gạo đạt giải "Gạo ngon nhất thế giới" của kỹ sư Hồ Quang Cua. Hạt dài trong, ngọt hậu.',
    cta: 'Mua gạo ST25',
    to: '/san-pham/gao-st25-soc-trang',
    emojis: ['🌾', '🍚', '🏆'],
    gradient: 'linear-gradient(120deg, #c79a2e, #8a6a14)',
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const count = slides.length

  const go = useCallback((i) => setIndex((i + count) % count), [count])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])

  // Tự động chuyển slide
  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="hero">
      <div className="hero-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => (
          <div className="hero-slide" key={i} style={{ background: s.gradient }}>
            <div className="container hero-content">
              <div className="hero-text">
                <span className="hero-eyebrow">{s.eyebrow}</span>
                <h1>{s.title}</h1>
                <p>{s.desc}</p>
                <Link to={s.to} className="btn btn-lg hero-btn">
                  {s.cta} <ArrowRight size={18} />
                </Link>
              </div>
              <div className="hero-art" aria-hidden="true">
                {s.emojis.map((e, j) => (
                  <span key={j} className={`hero-emoji he-${j}`}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow left" onClick={() => go(index - 1)} aria-label="Slide trước">
        <ChevronLeft size={24} />
      </button>
      <button className="hero-arrow right" onClick={() => go(index + 1)} aria-label="Slide sau">
        <ChevronRight size={24} />
      </button>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'on' : ''}
            onClick={() => go(i)}
            aria-label={`Tới slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
