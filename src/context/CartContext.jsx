import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'mietvuon_cart_v1'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [isOpen, setIsOpen] = useState(false) // trạng thái giỏ hàng trượt (drawer)

  // Lưu giỏ hàng vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        )
      }
      // Lưu lại thông tin cần thiết để hiển thị trong giỏ
      const { id, slug, name, price, unit, image, emoji, color } = product
      return [...prev, { id, slug, name, price, unit, image, emoji, color, qty }]
    })
    setIsOpen(true) // mở giỏ trượt khi thêm sản phẩm
  }, [])

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQty = useCallback((id, qty) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
        .filter((i) => i.qty > 0)
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, i) => {
        acc.count += i.qty
        acc.subtotal += i.qty * i.price
        return acc
      },
      { count: 0, subtotal: 0 }
    )
  }, [items])

  const value = {
    items,
    count,
    subtotal,
    isOpen,
    addItem,
    removeItem,
    updateQty,
    clear,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart phải được dùng bên trong <CartProvider>')
  return ctx
}
