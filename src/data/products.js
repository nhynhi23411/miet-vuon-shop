/* ============================================================
   DANH MỤC SẢN PHẨM - ĐẶC SẢN MIỀN TÂY | THƯƠNG HIỆU MIỆT VƯỜN
   20 sản phẩm tiêu biểu của 13 tỉnh/thành Đồng bằng sông Cửu Long
   (Nguồn dữ liệu: Google Sheet "Danh_muc_san_pham_Miet_Vuon")
   ------------------------------------------------------------
   - image: ảnh lấy từ Google Drive (dạng thumbnail). Nếu Drive chưa
     mở chia sẻ công khai, web sẽ tự hiển thị ảnh minh hoạ (emoji + màu).
     Để chắc chắn, nên tải ảnh về thư mục public/images/ rồi thay đường
     dẫn, ví dụ: image: '/images/keo-dua.jpg'
   - origin: Tỉnh/Thành xuất xứ.
   ============================================================ */

// Giữ ID Drive làm nguồn tham chiếu gốc của ảnh. Ảnh hiển thị thực tế dùng
// bản đã tải về public/images/<slug>.png (được gán tự động ở cuối file).
const drive = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`

export const products = [
  {
    id: 1,
    slug: 'duong-thot-not-an-giang',
    name: 'Đường thốt nốt An Giang',
    category: 'gia-vi',
    price: 45000,
    oldPrice: 55000,
    unit: 'Gói 500g',
    origin: 'An Giang',
    image: '',
    emoji: '🍯',
    color: '#cf9430',
    rating: 4.8,
    reviews: 96,
    sold: 1240,
    organic: true,
    isNew: false,
    bestseller: false,
    shortDesc:
      'Đường nấu từ mật hoa thốt nốt vùng Bảy Núi (Tri Tôn – Tịnh Biên), vị ngọt thanh, thơm dịu; dùng nấu chè, kho cá, pha nước mắm.',
    description:
      'Đường thốt nốt nguyên chất nấu từ mật hoa thốt nốt vùng Bảy Núi (Tri Tôn – Tịnh Biên), vị ngọt thanh, thơm dịu đặc trưng. Thích hợp nấu chè, kho cá, pha nước mắm. Sản phẩm được Miệt Vườn tuyển chọn từ An Giang, giữ trọn hương vị truyền thống miền Tây.',
  },
  {
    id: 2,
    slug: 'mam-ca-loc-chau-doc',
    name: 'Mắm cá lóc Châu Đốc',
    category: 'mam-nuoc-cham',
    price: 120000,
    oldPrice: 0,
    unit: 'Hũ 500g',
    origin: 'An Giang',
    image: drive('1i_U2tmGu02NwbRR9rJupNyBlicftGTgp'),
    emoji: '🐟',
    color: '#b0533a',
    rating: 4.9,
    reviews: 184,
    sold: 2050,
    organic: false,
    isNew: false,
    bestseller: true,
    shortDesc:
      "Mắm cá lóc ủ thính truyền thống tại 'vương quốc mắm' Châu Đốc, thịt mắm đỏ au, đậm đà; dùng kho, chưng hoặc nấu lẩu mắm.",
    description:
      "Mắm cá lóc ủ thính theo công thức truyền thống tại 'vương quốc mắm' Châu Đốc, thịt mắm đỏ au, thơm và đậm đà. Dùng kho, chưng hột vịt hoặc nấu lẩu mắm chuẩn vị. Sản phẩm được Miệt Vườn tuyển chọn từ An Giang.",
  },
  {
    id: 3,
    slug: 'nem-lai-vung',
    name: 'Nem Lai Vung',
    category: 'hai-san-do-tuoi',
    price: 60000,
    oldPrice: 75000,
    unit: 'Chục 10 cái',
    origin: 'Đồng Tháp',
    image: drive('1Q5GPo3i0kpiEL5LiYoQJbZOoNGaSY9Md'),
    emoji: '🍢',
    color: '#cf5a6a',
    rating: 4.7,
    reviews: 132,
    sold: 1560,
    organic: false,
    isNew: false,
    bestseller: false,
    shortDesc:
      'Nem chua lên men tự nhiên của làng nghề Lai Vung, vị chua thanh, cay nhẹ, gói lá chuối; đặc sản OCOP nổi tiếng Đất Sen hồng.',
    description:
      'Nem chua lên men tự nhiên của làng nghề Lai Vung, vị chua thanh, cay nhẹ, gói trong lá chuối thơm. Đặc sản OCOP nổi tiếng của Đất Sen hồng. Sản phẩm được Miệt Vườn tuyển chọn từ Đồng Tháp.',
  },
  {
    id: 4,
    slug: 'hat-sen-say-dong-thap',
    name: 'Hạt sen sấy Đồng Tháp',
    category: 'gao-do-kho',
    price: 65000,
    oldPrice: 0,
    unit: 'Gói 250g',
    origin: 'Đồng Tháp',
    image: drive('1qh_Qubk9WhvS8G704ejBJAjEIvP19tD3'),
    emoji: '🪷',
    color: '#cdb86a',
    rating: 4.6,
    reviews: 78,
    sold: 940,
    organic: true,
    isNew: true,
    bestseller: false,
    shortDesc:
      'Hạt sen Tháp Mười sấy giòn, bùi béo, giàu dinh dưỡng; món ăn vặt lành mạnh, thích hợp làm quà biếu.',
    description:
      'Hạt sen Tháp Mười sấy giòn, vị bùi béo tự nhiên, giàu dinh dưỡng. Món ăn vặt lành mạnh và thích hợp làm quà biếu. Sản phẩm được Miệt Vườn tuyển chọn từ Đồng Tháp.',
  },
  {
    id: 5,
    slug: 'banh-tet-la-cam-can-tho',
    name: 'Bánh tét lá cẩm Cần Thơ',
    category: 'banh-keo',
    price: 75000,
    oldPrice: 90000,
    unit: 'Đòn 800g',
    origin: 'Cần Thơ',
    image: drive('1NN2AYjSe0OTBUGBbEOt7z1CcPL4yxQeG'),
    emoji: '🍙',
    color: '#8e5bb5',
    rating: 4.8,
    reviews: 110,
    sold: 1320,
    organic: false,
    isNew: false,
    bestseller: false,
    shortDesc:
      'Bánh tét nếp ngâm nước lá cẩm tím tự nhiên, xào nước cốt dừa, nhân đậu xanh – thịt mỡ – trứng muối; đặc sản Bình Thủy, Cần Thơ.',
    description:
      'Bánh tét nếp ngâm nước lá cẩm cho màu tím tự nhiên, xào nước cốt dừa béo ngậy, nhân đậu xanh – thịt mỡ – trứng muối. Đặc sản trứ danh của Bình Thủy, Cần Thơ. Sản phẩm được Miệt Vườn tuyển chọn từ Cần Thơ.',
  },
  {
    id: 6,
    slug: 'gao-nang-thom-cho-dao',
    name: 'Gạo Nàng Thơm Chợ Đào',
    category: 'gao-do-kho',
    price: 145000,
    oldPrice: 0,
    unit: 'Túi 5kg',
    origin: 'Long An',
    image: drive('1V8wvrA61QEU8FZJox5LZQG7duVqcQXI5'),
    emoji: '🌾',
    color: '#d8c060',
    rating: 4.9,
    reviews: 156,
    sold: 1780,
    organic: true,
    isNew: false,
    bestseller: true,
    shortDesc:
      "Gạo tiến vua trồng duy nhất 1 vụ/năm tại xã Mỹ Lệ (Cần Đước), hạt thon dài có 'hột lựu' hồng, cơm dẻo thơm, ngọt đậm.",
    description:
      "Gạo Nàng Thơm Chợ Đào - gạo tiến vua, chỉ trồng được duy nhất 1 vụ/năm tại xã Mỹ Lệ (Cần Đước). Hạt thon dài có 'hột lựu' hồng đặc trưng, cơm dẻo thơm, ngọt đậm. Sản phẩm được Miệt Vườn tuyển chọn từ Long An.",
  },
  {
    id: 7,
    slug: 'mam-tom-cha-go-cong',
    name: 'Mắm tôm chà Gò Công',
    category: 'mam-nuoc-cham',
    price: 120000,
    oldPrice: 0,
    unit: 'Hũ 250g',
    origin: 'Tiền Giang',
    image: drive('15L7boBp8OIkFRoNidIzcJSvhMdXjNLfk'),
    emoji: '🦐',
    color: '#d4663a',
    rating: 4.8,
    reviews: 92,
    sold: 870,
    organic: false,
    isNew: false,
    bestseller: false,
    shortDesc:
      'Đặc sản tiến vua hơn 150 năm làm từ tôm đất, tôm bạc tươi chà nhuyễn, phơi nắng; dùng làm nước chấm thịt luộc cuốn rau sống.',
    description:
      'Mắm tôm chà Gò Công - đặc sản tiến vua hơn 150 năm, làm từ tôm đất, tôm bạc tươi chà nhuyễn rồi phơi nắng. Dùng làm nước chấm thịt luộc cuốn bánh tráng, rau sống cực ngon. Sản phẩm được Miệt Vườn tuyển chọn từ Tiền Giang.',
  },
  {
    id: 8,
    slug: 'hu-tieu-kho-my-tho',
    name: 'Hủ tiếu khô Mỹ Tho',
    category: 'gao-do-kho',
    price: 45000,
    oldPrice: 55000,
    unit: 'Gói 500g',
    origin: 'Tiền Giang',
    image: drive('1eSPbFjdS8l58Tj3eKweC2KsHNBZWhJ5N'),
    emoji: '🍜',
    color: '#e0c070',
    rating: 4.6,
    reviews: 64,
    sold: 720,
    organic: false,
    isNew: false,
    bestseller: false,
    shortDesc:
      'Sợi hủ tiếu làm từ gạo Gò Cát dai, trong đặc trưng; nguyên liệu chuẩn vị cho món hủ tiếu Mỹ Tho trứ danh tại nhà.',
    description:
      'Sợi hủ tiếu làm từ gạo Gò Cát, dai và trong đặc trưng. Nguyên liệu chuẩn vị để nấu món hủ tiếu Mỹ Tho trứ danh ngay tại nhà. Sản phẩm được Miệt Vườn tuyển chọn từ Tiền Giang.',
  },
  {
    id: 9,
    slug: 'keo-dua-ben-tre',
    name: 'Kẹo dừa Bến Tre',
    category: 'banh-keo',
    price: 45000,
    oldPrice: 58000,
    unit: 'Gói 300g',
    origin: 'Bến Tre',
    image: drive('1DaYCORpH7fcDdwdEDMEFDyS3XbNXyDHn'),
    emoji: '🍬',
    color: '#caa46a',
    rating: 4.9,
    reviews: 210,
    sold: 2480,
    organic: false,
    isNew: false,
    bestseller: true,
    shortDesc:
      'Kẹo nấu từ nước cốt dừa tươi và mạch nha nếp, béo ngậy, dẻo thơm; biểu tượng ẩm thực Xứ Dừa, có vị sầu riêng, lá dứa, ca cao.',
    description:
      'Kẹo dừa nấu từ nước cốt dừa tươi và mạch nha nếp, béo ngậy, dẻo thơm - biểu tượng ẩm thực Xứ Dừa. Có đủ vị sầu riêng, lá dứa, ca cao. Sản phẩm được Miệt Vườn tuyển chọn từ Bến Tre.',
  },
  {
    id: 10,
    slug: 'banh-trang-sua-ben-tre',
    name: 'Bánh tráng sữa Bến Tre',
    category: 'banh-keo',
    price: 50000,
    oldPrice: 0,
    unit: 'Gói 10 cái',
    origin: 'Bến Tre',
    image: drive('1Zvv14qwklokt9_p7cMuFk-OZsgimEZqa'),
    emoji: '🫓',
    color: '#ddc98a',
    rating: 4.7,
    reviews: 88,
    sold: 1020,
    organic: false,
    isNew: true,
    bestseller: false,
    shortDesc:
      'Bánh làm từ nước cốt dừa, bột gạo – sắn, sữa, thoảng hương sầu riêng/lá dứa; mềm dẻo, ăn liền không cần nướng.',
    description:
      'Bánh tráng sữa làm từ nước cốt dừa, bột gạo – sắn và sữa, thoảng hương sầu riêng/lá dứa. Mềm dẻo, ăn liền không cần nướng. Sản phẩm được Miệt Vườn tuyển chọn từ Bến Tre.',
  },
  {
    id: 11,
    slug: 'banh-tet-tra-cuon',
    name: 'Bánh tét Trà Cuôn',
    category: 'banh-keo',
    price: 90000,
    oldPrice: 0,
    unit: 'Đòn 900g',
    origin: 'Trà Vinh',
    image: drive('1I8Q8dg-u1yD08SIyiwf4mkCHplcCuuXv'),
    emoji: '🍙',
    color: '#6fa03a',
    rating: 4.8,
    reviews: 104,
    sold: 1180,
    organic: false,
    isNew: false,
    bestseller: false,
    shortDesc:
      'Bánh tét làng nghề 80 năm tại Cầu Ngang: nếp sáp nhuộm màu lá cẩm – bồ ngót, nhân đậu xanh, thịt mỡ, trứng muối, đậm vị.',
    description:
      'Bánh tét Trà Cuôn từ làng nghề hơn 80 năm tại Cầu Ngang: nếp sáp nhuộm màu lá cẩm – bồ ngót, nhân đậu xanh, thịt mỡ và trứng muối, vị đậm đà khó quên. Sản phẩm được Miệt Vườn tuyển chọn từ Trà Vinh.',
  },
  {
    id: 12,
    slug: 'dua-sap-tra-vinh',
    name: 'Dừa sáp Trà Vinh',
    category: 'hai-san-do-tuoi',
    price: 180000,
    oldPrice: 220000,
    unit: 'Trái 1 – 1.2kg',
    origin: 'Trà Vinh',
    image: drive('1MbUAh6uJHH4AW6Wa9xDxJrLNYf-6IV-h'),
    emoji: '🥥',
    color: '#8a9a5a',
    rating: 4.9,
    reviews: 142,
    sold: 980,
    organic: true,
    isNew: false,
    bestseller: true,
    shortDesc:
      'Dừa đặc ruột hiếm chỉ có ở Trà Vinh, cơm dày dẻo, nước sền sệt như sương sa; dầm sữa đá hoặc làm quà độc đáo.',
    description:
      'Dừa sáp đặc ruột - loại dừa hiếm chỉ có ở Trà Vinh, cơm dày dẻo, nước sền sệt như sương sa. Ngon nhất khi dầm sữa đá hoặc làm quà biếu độc đáo. Sản phẩm được Miệt Vườn tuyển chọn từ Trà Vinh.',
  },
  {
    id: 13,
    slug: 'tau-hu-ky-my-hoa',
    name: 'Tàu hũ ky Mỹ Hòa',
    category: 'gao-do-kho',
    price: 95000,
    oldPrice: 0,
    unit: 'Gói 500g',
    origin: 'Vĩnh Long',
    image: drive('1efgB5ZJQusf0O3QT9xJvPhU7A7M3N62D'),
    emoji: '🧈',
    color: '#dcc468',
    rating: 4.7,
    reviews: 70,
    sold: 640,
    organic: true,
    isNew: true,
    bestseller: false,
    shortDesc:
      'Váng đậu nành làng nghề trăm năm Mỹ Hòa (Bình Minh) – Di sản văn hóa phi vật thể quốc gia; thơm béo, dùng cho món chay và mặn.',
    description:
      'Tàu hũ ky (váng đậu nành) từ làng nghề trăm năm Mỹ Hòa (Bình Minh) - Di sản văn hóa phi vật thể quốc gia. Thơm béo, dùng cho cả món chay và mặn. Sản phẩm được Miệt Vườn tuyển chọn từ Vĩnh Long.',
  },
  {
    id: 14,
    slug: 'nuoc-mam-phu-quoc',
    name: 'Nước mắm Phú Quốc 40 độ đạm',
    category: 'mam-nuoc-cham',
    price: 95000,
    oldPrice: 120000,
    unit: 'Chai 500ml',
    origin: 'Kiên Giang',
    image: drive('1ccaARMpJVhbAUM8ti1QIKLYjG2XSzp8k'),
    emoji: '🫗',
    color: '#b8742e',
    rating: 4.9,
    reviews: 246,
    sold: 2680,
    organic: false,
    isNew: false,
    bestseller: true,
    shortDesc:
      'Nước mắm cá cơm ủ chượp thùng gỗ truyền thống trên đảo ngọc, màu cánh gián, hậu ngọt; sản phẩm có chỉ dẫn địa lý được bảo hộ.',
    description:
      'Nước mắm cá cơm ủ chượp trong thùng gỗ theo cách truyền thống trên đảo ngọc Phú Quốc, độ đạm 40, màu cánh gián, hậu ngọt. Sản phẩm có chỉ dẫn địa lý được bảo hộ. Được Miệt Vườn tuyển chọn từ Kiên Giang.',
  },
  {
    id: 15,
    slug: 'tieu-den-phu-quoc',
    name: 'Tiêu đen Phú Quốc',
    category: 'gia-vi',
    price: 60000,
    oldPrice: 0,
    unit: 'Hũ 200g',
    origin: 'Kiên Giang',
    image: drive('1cJOp-PSVFxWYetKJwtNYvflSJPRsjGBS'),
    emoji: '🌶️',
    color: '#3c3228',
    rating: 4.8,
    reviews: 84,
    sold: 760,
    organic: true,
    isNew: true,
    bestseller: false,
    shortDesc:
      "Hạt tiêu 'vàng đen' đảo ngọc: chắc hạt, cay nồng, thơm đậm hơn tiêu vùng khác; gia vị không thể thiếu cho món kho, nướng.",
    description:
      "Tiêu đen Phú Quốc - hạt tiêu 'vàng đen' của đảo ngọc: chắc hạt, cay nồng, thơm đậm hơn hẳn tiêu vùng khác. Gia vị không thể thiếu cho món kho, nướng. Sản phẩm được Miệt Vườn tuyển chọn từ Kiên Giang.",
  },
  {
    id: 16,
    slug: 'cha-ca-that-lat-hau-giang',
    name: 'Chả cá thát lát Hậu Giang',
    category: 'hai-san-do-tuoi',
    price: 110000,
    oldPrice: 0,
    unit: 'Vỉ 500g',
    origin: 'Hậu Giang',
    image: drive('18z8H6_Dlk0u0UnkbhAGTx8hgZgudT1vN'),
    emoji: '🍥',
    color: '#e0c070',
    rating: 4.7,
    reviews: 96,
    sold: 1080,
    organic: false,
    isNew: false,
    bestseller: false,
    shortDesc:
      'Chả quết từ cá thát lát tươi vùng sông Hậu, dai ngọt tự nhiên; chiên vàng, nấu canh hay lẩu đều ngon, tiện chế biến.',
    description:
      'Chả cá thát lát quết tay từ cá thát lát tươi vùng sông Hậu, dai và ngọt tự nhiên. Chiên vàng, nấu canh hay thả lẩu đều ngon, tiện chế biến. Sản phẩm được Miệt Vườn tuyển chọn từ Hậu Giang.',
  },
  {
    id: 17,
    slug: 'banh-pia-sau-rieng-soc-trang',
    name: 'Bánh pía sầu riêng Sóc Trăng',
    category: 'banh-keo',
    price: 65000,
    oldPrice: 80000,
    unit: 'Gói 4 cái',
    origin: 'Sóc Trăng',
    image: drive('1WwLE4UKIw2_cW1Md6K2NeoxlWbJnotkY'),
    emoji: '🥮',
    color: '#d8a850',
    rating: 4.8,
    reviews: 168,
    sold: 1920,
    organic: false,
    isNew: false,
    bestseller: true,
    shortDesc:
      'Bánh pía vỏ ngàn lớp mềm dẻo, nhân sầu riêng – đậu xanh – trứng muối béo thơm; đặc sản người Hoa Triều Châu trăm năm.',
    description:
      'Bánh pía vỏ ngàn lớp mềm dẻo, nhân sầu riêng – đậu xanh – trứng muối béo thơm. Đặc sản của người Hoa Triều Châu, lưu giữ hơn trăm năm tại Sóc Trăng. Sản phẩm được Miệt Vườn tuyển chọn từ Sóc Trăng.',
  },
  {
    id: 18,
    slug: 'gao-st25-soc-trang',
    name: 'Gạo ST25 Sóc Trăng',
    category: 'gao-do-kho',
    price: 200000,
    oldPrice: 240000,
    unit: 'Túi 5kg',
    origin: 'Sóc Trăng',
    image: drive('1oh0g6U0Go-8rORq3cdJJ7GwjSCqRhWlB'),
    emoji: '🌾',
    color: '#c9a84a',
    rating: 5.0,
    reviews: 320,
    sold: 3260,
    organic: true,
    isNew: false,
    bestseller: true,
    shortDesc:
      "Gạo thơm đạt giải 'Gạo ngon nhất thế giới' của kỹ sư Hồ Quang Cua; hạt dài trong, cơm dẻo mềm, thơm mùi lá dứa, ngọt hậu.",
    description:
      "Gạo ST25 - giống gạo đạt giải 'Gạo ngon nhất thế giới' của kỹ sư Hồ Quang Cua. Hạt dài trong, cơm dẻo mềm, thơm mùi lá dứa, ngọt hậu, để nguội vẫn ngon. Sản phẩm được Miệt Vườn tuyển chọn từ Sóc Trăng.",
  },
  {
    id: 19,
    slug: 'muoi-hong-bac-lieu',
    name: 'Muối hồng Bạc Liêu',
    category: 'gia-vi',
    price: 35000,
    oldPrice: 0,
    unit: 'Hũ 500g',
    origin: 'Bạc Liêu',
    image: drive('1oIISRJsFdACjCnmpZWhUGHqJ10-WLGUS'),
    emoji: '🧂',
    color: '#e6a8b0',
    rating: 4.6,
    reviews: 58,
    sold: 690,
    organic: true,
    isNew: true,
    bestseller: false,
    shortDesc:
      'Muối trắng hồng từ biển phù sa Bạc Liêu, mặn dịu không chát đắng; nghề làm muối được công nhận Di sản văn hóa phi vật thể quốc gia.',
    description:
      'Muối hồng kết tinh từ biển phù sa Bạc Liêu, mặn dịu, không chát đắng. Nghề làm muối Bạc Liêu đã được công nhận là Di sản văn hóa phi vật thể quốc gia. Sản phẩm được Miệt Vườn tuyển chọn từ Bạc Liêu.',
  },
  {
    id: 20,
    slug: 'tom-kho-rach-goc',
    name: 'Tôm khô Rạch Gốc loại 1',
    category: 'hai-san-do-tuoi',
    price: 580000,
    oldPrice: 650000,
    unit: 'Gói 500g',
    origin: 'Cà Mau',
    image: drive('1nKF8oTA8OdYZcayccjCqGEr4277Uo-0y'),
    emoji: '🦐',
    color: '#e0623a',
    rating: 4.9,
    reviews: 176,
    sold: 1140,
    organic: false,
    isNew: false,
    bestseller: true,
    shortDesc:
      'Tôm đất tươi đất mũi Ngọc Hiển phơi thủ công, thịt đỏ au, ngọt đậm; nhãn hiệu tập thể nổi tiếng, sang trọng làm quà biếu Tết.',
    description:
      'Tôm khô Rạch Gốc loại 1 làm từ tôm đất tươi vùng đất mũi Ngọc Hiển, phơi thủ công, thịt đỏ au, ngọt đậm. Nhãn hiệu tập thể nổi tiếng, sang trọng để làm quà biếu Tết. Sản phẩm được Miệt Vườn tuyển chọn từ Cà Mau.',
  },
]

// Gán ảnh local cho tất cả sản phẩm: public/images/<slug>.png
// Dùng BASE_URL để đường dẫn đúng cả khi chạy dev ('/') lẫn trên GitHub Pages ('/mietvuon-web/').
// (Muốn dùng ảnh từ CDN/Drive thay vì ảnh local thì sửa dòng dưới đây.)
products.forEach((p) => {
  p.image = `${import.meta.env.BASE_URL}images/${p.slug}.png`
})

/* ------------------ Hàm hỗ trợ truy vấn ------------------ */
export const getProduct = (slug) => products.find((p) => p.slug === slug)

export const getByCategory = (catSlug) =>
  products.filter((p) => p.category === catSlug)

export const getBestsellers = () => products.filter((p) => p.bestseller)

export const getNewProducts = () => products.filter((p) => p.isNew)

export const getOnSale = () => products.filter((p) => p.oldPrice && p.oldPrice > p.price)

export const getRelated = (product, limit = 4) => {
  const sameCat = products.filter((p) => p.category === product.category && p.id !== product.id)
  if (sameCat.length >= limit) return sameCat.slice(0, limit)
  // bổ sung sản phẩm khác nếu cùng danh mục chưa đủ
  const others = products.filter((p) => p.category !== product.category && p.id !== product.id)
  return [...sameCat, ...others].slice(0, limit)
}

/* Danh sách tỉnh/thành có sản phẩm (dùng cho bộ lọc theo vùng) */
export const provinces = [...new Set(products.map((p) => p.origin))].sort((a, b) =>
  a.localeCompare(b, 'vi')
)
