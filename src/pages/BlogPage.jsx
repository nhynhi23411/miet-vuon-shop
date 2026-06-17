import { Link } from 'react-router-dom'
import { ChevronRight, Clock } from 'lucide-react'
import { posts } from '../data/posts'
import '../components/home/home.css'
import './pages.css'

export default function BlogPage() {
  return (
    <div className="page">
      <div className="breadcrumb-bar">
        <div className="container breadcrumb">
          <Link to="/">Trang chủ</Link>
          <ChevronRight size={14} />
          <span>Tin tức</span>
        </div>
      </div>

      <div className="container section">
        <div className="page-head">
          <h1>Tin tức & Cẩm nang</h1>
          <p>Câu chuyện đặc sản, mẹo chọn mua và công thức món ngon miền Tây.</p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <Link to={`/tin-tuc/${post.slug}`} className="blog-card" key={post.id}>
              <div className="blog-thumb" style={{ background: `color-mix(in srgb, ${post.color} 18%, #fff)` }}>
                <span>{post.emoji}</span>
              </div>
              <div className="blog-body">
                <span className="blog-cat">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-meta"><Clock size={14} /> {post.readTime} phút đọc • {post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
