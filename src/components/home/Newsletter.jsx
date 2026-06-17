import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
    setEmail('')
    setTimeout(() => setDone(false), 4000)
  }

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div className="newsletter-text">
          <h2>Nhận ưu đãi & công thức món ngon</h2>
          <p>Đăng ký để nhận khuyến mãi đặc sản, mẹo nấu ăn và quà tặng độc quyền từ Miệt Vườn.</p>
        </div>
        <form className="newsletter-form" onSubmit={submit}>
          <input
            type="email"
            required
            placeholder="Nhập email của bạn..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <button type="submit" className="btn btn-primary">
            {done ? <><CheckCircle2 size={18} /> Đã đăng ký</> : <><Send size={18} /> Đăng ký</>}
          </button>
        </form>
      </div>
    </section>
  )
}
