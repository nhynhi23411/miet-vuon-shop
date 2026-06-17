import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { posts } from '../../data/posts'

export default function BlogSection() {
  return (
    <section className="section bg-soft">
      <div className="container">
        <div className="ps-head">
          <div>
            <span className="eyebrow">Cẩm nang</span>
            <h2>Câu chuyện & mẹo hay</h2>
            <p>Kiến thức về đặc sản miền Tây và cách chọn, bảo quản, thưởng thức.</p>
          </div>
          <Link to="/tin-tuc" className="ps-viewall">
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <Link to={`/tin-tuc/${post.slug}`} className="blog-card" key={post.id}>
              <div
                className="blog-thumb"
                style={{ background: `color-mix(in srgb, ${post.color} 18%, #fff)` }}
              >
                <span>{post.emoji}</span>
              </div>
              <div className="blog-body">
                <span className="blog-cat">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-meta">
                  <Clock size={14} /> {post.readTime} phút đọc • {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
