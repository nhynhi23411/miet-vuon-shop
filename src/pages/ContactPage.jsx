import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight, MapPin, Phone, Mail, Clock, Send, CheckCircle2,
  Facebook, Instagram, Youtube,
} from 'lucide-react'
import './pages.css'

const info = [
  { icon: MapPin, title: 'Địa chỉ', lines: ['123 Đường Xanh, Quận 1', 'TP. Hồ Chí Minh'] },
  { icon: Phone, title: 'Điện thoại', lines: ['Hotline: 1900 6789', 'Zalo: 0909 123 456'] },
  { icon: Mail, title: 'Email', lines: ['hello@mietvuon.vn', 'cskh@mietvuon.vn'] },
  { icon: Clock, title: 'Giờ mở cửa', lines: ['Thứ 2 - Thứ 7: 8h - 20h', 'Chủ nhật: 8h - 17h'] },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <div className="page">
      <div className="breadcrumb-bar">
        <div className="container breadcrumb">
          <Link to="/">Trang chủ</Link>
          <ChevronRight size={14} />
          <span>Liên hệ</span>
        </div>
      </div>

      <div className="container section">
        <div className="page-head">
          <h1>Liên hệ với Miệt Vườn</h1>
          <p>Bạn cần tư vấn đặt hàng hay hợp tác? Hãy để lại lời nhắn, chúng tôi sẽ phản hồi sớm nhất.</p>
        </div>

        {/* Thông tin liên hệ */}
        <div className="contact-info-grid">
          {info.map(({ icon: Icon, title, lines }) => (
            <div className="contact-info-card" key={title}>
              <span className="contact-icon"><Icon size={24} /></span>
              <b>{title}</b>
              {lines.map((l) => <span key={l}>{l}</span>)}
            </div>
          ))}
        </div>

        <div className="contact-layout">
          {/* Form */}
          <div className="contact-form-wrap">
            <h2>Gửi lời nhắn cho chúng tôi</h2>
            {sent && (
              <div className="contact-success">
                <CheckCircle2 size={20} /> Cảm ơn bạn! Lời nhắn đã được gửi (demo giao diện).
              </div>
            )}
            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Họ và tên *</label>
                  <input required value={form.name} onChange={update('name')} placeholder="Nguyễn Văn A" />
                </div>
                <div className="form-field">
                  <label>Số điện thoại</label>
                  <input value={form.phone} onChange={update('phone')} placeholder="0909 xxx xxx" />
                </div>
              </div>
              <div className="form-field">
                <label>Email *</label>
                <input type="email" required value={form.email} onChange={update('email')} placeholder="email@example.com" />
              </div>
              <div className="form-field">
                <label>Nội dung *</label>
                <textarea required rows={5} value={form.message} onChange={update('message')} placeholder="Nhập nội dung bạn cần hỗ trợ..." />
              </div>
              <button type="submit" className="btn btn-primary btn-lg"><Send size={18} /> Gửi lời nhắn</button>
            </form>
          </div>

          {/* Bản đồ + mạng xã hội */}
          <aside className="contact-side">
            <div className="contact-map" aria-label="Bản đồ cửa hàng">
              <MapPin size={40} />
              <b>Miệt Vườn Store</b>
              <span>123 Đường Xanh, Quận 1, TP.HCM</span>
            </div>
            <div className="contact-social">
              <b>Kết nối với chúng tôi</b>
              <div className="contact-social-links">
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
