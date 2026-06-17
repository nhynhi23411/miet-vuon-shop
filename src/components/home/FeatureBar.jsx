import { Truck, ShieldCheck, Gift, Headphones } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Giao hàng toàn quốc', desc: 'Nhanh chóng, đóng gói kỹ' },
  { icon: ShieldCheck, title: 'Đặc sản chính gốc', desc: 'Tuyển chọn từ làng nghề' },
  { icon: Gift, title: 'Quà biếu ý nghĩa', desc: 'Đóng hộp quà sang trọng' },
  { icon: Headphones, title: 'Hỗ trợ 24/7', desc: 'Tư vấn tận tâm' },
]

export default function FeatureBar() {
  return (
    <section className="feature-bar">
      <div className="container feature-grid">
        {features.map(({ icon: Icon, title, desc }) => (
          <div className="feature" key={title}>
            <span className="feature-icon"><Icon size={26} strokeWidth={2} /></span>
            <div>
              <b>{title}</b>
              <span>{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
