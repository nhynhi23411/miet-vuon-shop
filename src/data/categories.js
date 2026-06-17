/* Danh mục đặc sản miền Tây - thương hiệu Miệt Vườn.
   `emoji` + `color` dùng để vẽ ảnh minh hoạ khi chưa có ảnh thật. */
export const categories = [
  {
    slug: 'mam-nuoc-cham',
    name: 'Mắm & Nước chấm',
    emoji: '🫙',
    color: '#b0533a',
    desc: 'Mắm cá lóc, mắm tôm, nước mắm truyền thống',
  },
  {
    slug: 'gao-do-kho',
    name: 'Gạo & Đồ khô',
    emoji: '🌾',
    color: '#d8b850',
    desc: 'Gạo đặc sản, hủ tiếu, tàu hũ ky, hạt sen',
  },
  {
    slug: 'banh-keo',
    name: 'Bánh & Kẹo đặc sản',
    emoji: '🍡',
    color: '#dd7a9a',
    desc: 'Bánh tét, bánh pía, kẹo dừa, bánh tráng',
  },
  {
    slug: 'gia-vi',
    name: 'Gia vị đặc sản',
    emoji: '🧂',
    color: '#d89030',
    desc: 'Đường thốt nốt, tiêu Phú Quốc, muối hồng',
  },
  {
    slug: 'hai-san-do-tuoi',
    name: 'Hải sản & Đồ tươi',
    emoji: '🦐',
    color: '#e0623a',
    desc: 'Tôm khô, chả cá, nem, dừa sáp đặc sản',
  },
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)
