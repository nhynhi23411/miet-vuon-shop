import { Truck, Phone, Leaf } from 'lucide-react'

const messages = [
  { icon: Truck, text: 'Miễn phí giao hàng cho đơn từ 300.000₫' },
  { icon: Leaf, text: 'Đặc sản miền Tây chính gốc - giao toàn quốc' },
  { icon: Phone, text: 'Đặt hàng nhanh: 1900 6789' },
]

export default function AnnouncementBar() {
  return (
    <div className="announce">
      <div className="container announce-inner">
        {messages.map(({ icon: Icon, text }, i) => (
          <span key={i} className="announce-item">
            <Icon size={15} strokeWidth={2.2} />
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
