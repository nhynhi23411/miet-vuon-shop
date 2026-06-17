/* Bài viết / tin tức mẫu - chủ đề đặc sản miền Tây */
export const posts = [
  {
    id: 1,
    slug: 'tinh-hoa-dac-san-mien-tay',
    title: 'Tinh hoa đặc sản miền Tây sông nước',
    excerpt:
      'Khám phá những món đặc sản trứ danh của 13 tỉnh thành miền Tây - từ mắm Châu Đốc, kẹo dừa Bến Tre đến gạo ST25 Sóc Trăng.',
    category: 'Câu chuyện',
    date: '12/06/2026',
    author: 'Miệt Vườn',
    emoji: '🌾',
    color: '#4a9b2e',
    readTime: 6,
  },
  {
    id: 2,
    slug: 'cach-chon-mam-ngon-chuan-vi',
    title: 'Cách chọn mắm ngon chuẩn vị miền Tây',
    excerpt:
      'Bí quyết phân biệt mắm cá lóc, mắm tôm chà ngon - màu sắc, mùi hương và cách bảo quản để giữ trọn hương vị.',
    category: 'Mẹo hay',
    date: '08/06/2026',
    author: 'Miệt Vườn',
    emoji: '🫙',
    color: '#b0533a',
    readTime: 5,
  },
  {
    id: 3,
    slug: 'bao-quan-banh-tet-banh-pia-tuoi-lau',
    title: 'Mẹo bảo quản bánh tét, bánh pía tươi lâu',
    excerpt:
      'Những mẹo nhỏ giúp bạn giữ bánh tét, bánh pía và kẹo dừa thơm ngon lâu hơn, tránh lãng phí khi mua làm quà.',
    category: 'Mẹo hay',
    date: '03/06/2026',
    author: 'Bếp Miệt Vườn',
    emoji: '🍡',
    color: '#dd7a9a',
    readTime: 4,
  },
  {
    id: 4,
    slug: 'hanh-trinh-tu-miet-vuon-den-ban-an',
    title: 'Hành trình từ miệt vườn đến bàn ăn của bạn',
    excerpt:
      'Câu chuyện Miệt Vườn kết nối các làng nghề, hợp tác xã miền Tây để mang đặc sản chính gốc đến tận tay người tiêu dùng.',
    category: 'Câu chuyện',
    date: '28/05/2026',
    author: 'Miệt Vườn',
    emoji: '🚜',
    color: '#f5871f',
    readTime: 6,
  },
]

export const getPost = (slug) => posts.find((p) => p.slug === slug)
