import HeroSlider from '../components/home/HeroSlider'
import FeatureBar from '../components/home/FeatureBar'
import CategoryGrid from '../components/home/CategoryGrid'
import ProductSection from '../components/home/ProductSection'
import PromoBanner from '../components/home/PromoBanner'
import BlogSection from '../components/home/BlogSection'
import Newsletter from '../components/home/Newsletter'
import { getBestsellers, getNewProducts } from '../data/products'
import '../components/home/home.css'

const commits = [
  { num: '13', label: 'Tỉnh/thành miền Tây', desc: 'Phủ khắp Đồng bằng sông Cửu Long' },
  { num: '20+', label: 'Đặc sản tuyển chọn', desc: 'Từ các làng nghề truyền thống' },
  { num: '100%', label: 'Chính gốc', desc: 'Cam kết nguồn gốc rõ ràng' },
  { num: '5.000+', label: 'Khách hài lòng', desc: 'Tin dùng và quay lại' },
]

function CommitmentSection() {
  return (
    <section className="section commit">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Vì sao chọn Miệt Vườn</span>
          <h2>Mang đặc sản quê nhà đến mọi gian bếp</h2>
          <p>Miệt Vườn kết nối trực tiếp với các làng nghề, hợp tác xã miền Tây để giữ trọn hương vị và sự tử tế.</p>
        </div>
        <div className="commit-grid">
          {commits.map((c) => (
            <div className="commit-item" key={c.label}>
              <div className="commit-num">{c.num}</div>
              <b>{c.label}</b>
              <span>{c.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeatureBar />
      <CategoryGrid />
      <ProductSection
        eyebrow="Bán chạy nhất"
        title="Đặc sản được yêu thích"
        subtitle="Những món được khách hàng đặt mua nhiều nhất tại Miệt Vườn."
        products={getBestsellers()}
        viewAllTo="/san-pham"
        bg="bg-cream"
      />
      <PromoBanner />
      <ProductSection
        eyebrow="Mới về"
        title="Sản phẩm mới"
        subtitle="Vừa được Miệt Vườn bổ sung vào gian hàng đặc sản."
        products={getNewProducts()}
        viewAllTo="/san-pham"
      />
      <CommitmentSection />
      <BlogSection />
      <Newsletter />
    </>
  )
}
