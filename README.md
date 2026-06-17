# Miệt Vườn — Website đặc sản miền Tây

Front-end website bán đặc sản miền Tây (Đồng bằng sông Cửu Long) cho thương hiệu **Miệt Vườn**.
Xây dựng bằng **React + Vite**, giao diện tiếng Việt, dành cho startup nông sản / đặc sản.

> Đây là phần **giao diện cho khách hàng (front-end)**. Chưa kết nối backend/thanh toán thật —
> nút "Đặt hàng" chỉ mô phỏng để demo luồng mua sắm.

## 🚀 Chạy dự án

```bash
npm install      # cài đặt thư viện (chỉ lần đầu)
npm run dev      # chạy server phát triển: http://localhost:5173
npm run build    # build bản production vào thư mục dist/
npm run preview  # xem thử bản build
```

Yêu cầu: Node.js 18+ (khuyến nghị 20/22).

## 🧱 Công nghệ

- **React 18** + **Vite 5** — nền tảng & build tool
- **React Router v6** — định tuyến nhiều trang
- **lucide-react** — bộ icon
- CSS thuần (biến màu trong `src/index.css`)

## 📂 Cấu trúc thư mục

```
src/
├─ data/            # Dữ liệu: sản phẩm, danh mục, bài viết
│  ├─ products.js   # 20 đặc sản (lấy từ Google Sheet)
│  ├─ categories.js
│  └─ posts.js
├─ context/
│  └─ CartContext.jsx   # Quản lý giỏ hàng (lưu localStorage)
├─ components/
│  ├─ layout/       # Header, Footer, CartDrawer, Layout
│  ├─ home/         # Các khối của trang chủ (Hero, danh mục, blog...)
│  └─ ui/           # ProductCard, Price, Rating, QuantityInput, ProductImage
├─ pages/           # Trang chủ, sản phẩm, chi tiết, giỏ hàng, blog, giới thiệu, liên hệ, 404
└─ utils/           # format.js (định dạng tiền tệ VNĐ)
```

## 🗺️ Các trang

| Đường dẫn | Trang |
|-----------|-------|
| `/` | Trang chủ |
| `/san-pham` | Danh sách sản phẩm (lọc, sắp xếp, tìm kiếm) |
| `/danh-muc/:slug` | Sản phẩm theo danh mục |
| `/san-pham/:slug` | Chi tiết sản phẩm |
| `/gio-hang` | Giỏ hàng |
| `/tin-tuc`, `/tin-tuc/:slug` | Tin tức & chi tiết bài viết |
| `/gioi-thieu`, `/lien-he` | Giới thiệu, Liên hệ |

## ✏️ Tuỳ chỉnh nhanh

- **Sản phẩm**: sửa `src/data/products.js`.
- **Ảnh sản phẩm**: hiện dùng link Google Drive. Để chắc chắn hiển thị, nên tải ảnh về
  `public/images/` rồi đổi trường `image` thành đường dẫn nội bộ, ví dụ `image: '/images/keo-dua.jpg'`.
  Nếu ảnh lỗi/thiếu, web tự hiển thị ảnh minh hoạ (emoji + màu).
- **Màu thương hiệu / font**: sửa biến trong `:root` của `src/index.css`.
- **Thông tin liên hệ, hotline, mạng xã hội**: sửa trong `src/components/layout/Footer.jsx`
  và `src/pages/ContactPage.jsx`.

## 📊 Nguồn dữ liệu

20 sản phẩm đặc sản tiêu biểu của 13 tỉnh/thành miền Tây
(nguồn: Google Sheet "Danh_muc_san_pham_Miet_Vuon").
