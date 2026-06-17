/** Định dạng tiền tệ Việt Nam: 125000 -> "125.000₫" */
export function formatPrice(value) {
  return new Intl.NumberFormat('vi-VN').format(value) + '₫'
}

/** Tính % giảm giá từ giá gốc và giá bán */
export function discountPercent(price, oldPrice) {
  if (!oldPrice || oldPrice <= price) return 0
  return Math.round(((oldPrice - price) / oldPrice) * 100)
}

/** Tạo slug từ chuỗi tiếng Việt (bỏ dấu) - dùng cho URL nếu cần */
export function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
}
