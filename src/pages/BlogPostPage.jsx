import { Link, useParams } from 'react-router-dom'
import { ChevronRight, Clock, User, ArrowLeft } from 'lucide-react'
import { getPost, posts } from '../data/posts'
import './pages.css'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="container empty-state" style={{ padding: '80px 16px' }}>
        <h2>Không tìm thấy bài viết</h2>
        <Link to="/tin-tuc" className="btn btn-primary">Về trang tin tức</Link>
      </div>
    )
  }

  const others = posts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <div className="page">
      <div className="breadcrumb-bar">
        <div className="container breadcrumb">
          <Link to="/">Trang chủ</Link>
          <ChevronRight size={14} />
          <Link to="/tin-tuc">Tin tức</Link>
          <ChevronRight size={14} />
          <span>{post.title}</span>
        </div>
      </div>

      <article className="container post">
        <span className="blog-cat">{post.category}</span>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span><User size={15} /> {post.author}</span>
          <span><Clock size={15} /> {post.readTime} phút đọc</span>
          <span>{post.date}</span>
        </div>

        <div className="post-hero" style={{ background: `color-mix(in srgb, ${post.color} 18%, #fff)` }}>
          <span>{post.emoji}</span>
        </div>

        <div className="post-content">
          <p className="post-lead">{post.excerpt}</p>
          <p>
            Đồng bằng sông Cửu Long từ lâu được mệnh danh là vựa nông sản và cái nôi của ẩm thực
            phương Nam. Mỗi tỉnh thành nơi đây đều sở hữu những đặc sản riêng, gắn liền với làng
            nghề và câu chuyện văn hoá lâu đời.
          </p>
          <h2>Hương vị gắn liền với vùng đất</h2>
          <p>
            Từ con cá, hạt gạo đến trái dừa, người miền Tây đã khéo léo chế biến thành những món
            ăn đậm đà bản sắc. Đó là vị mặn mòi của mắm Châu Đốc, vị ngọt béo của kẹo dừa Bến Tre,
            hay hương thơm khó quên của gạo ST25 Sóc Trăng.
          </p>
          <h2>Miệt Vườn gìn giữ điều gì?</h2>
          <p>
            Miệt Vườn mong muốn đưa những đặc sản chính gốc ấy đến gần hơn với mọi gia đình Việt.
            Chúng tôi làm việc trực tiếp với các hộ sản xuất và hợp tác xã, đảm bảo nguồn gốc rõ
            ràng và giữ nguyên hương vị truyền thống trong từng sản phẩm.
          </p>
          <blockquote>
            “Mỗi món đặc sản là một câu chuyện về vùng đất và con người đã làm ra nó.”
          </blockquote>
          <p>
            Hy vọng qua bài viết này, bạn sẽ thêm yêu và hiểu hơn về ẩm thực miền Tây - để mỗi bữa
            ăn không chỉ ngon miệng mà còn ấm áp hương vị quê nhà.
          </p>
        </div>

        <Link to="/tin-tuc" className="post-back"><ArrowLeft size={17} /> Quay lại tin tức</Link>
      </article>

      {others.length > 0 && (
        <div className="container section">
          <h2 className="pd-section-title">Bài viết khác</h2>
          <div className="blog-grid">
            {others.map((p) => (
              <Link to={`/tin-tuc/${p.slug}`} className="blog-card" key={p.id}>
                <div className="blog-thumb" style={{ background: `color-mix(in srgb, ${p.color} 18%, #fff)` }}>
                  <span>{p.emoji}</span>
                </div>
                <div className="blog-body">
                  <span className="blog-cat">{p.category}</span>
                  <h3>{p.title}</h3>
                  <span className="blog-meta"><Clock size={14} /> {p.readTime} phút đọc</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
