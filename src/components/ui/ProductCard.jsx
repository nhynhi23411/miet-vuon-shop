import { Link } from 'react-router-dom'
import { ShoppingBag, Check } from 'lucide-react'
import { useState } from 'react'
import ProductImage from './ProductImage'
import Rating from './Rating'
import Price from './Price'
import { useCart } from '../../context/CartContext'
import { discountPercent } from '../../utils/format'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const percent = discountPercent(product.price, product.oldPrice)

  const handleAdd = (e) => {
    e.preventDefault()
    addItem(product, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <article className="card">
      <Link to={`/san-pham/${product.slug}`} className="card-media">
        <ProductImage
          image={product.image}
          emoji={product.emoji}
          color={product.color}
          name={product.name}
        />
        <div className="card-badges">
          {percent > 0 && <span className="badge badge-sale">-{percent}%</span>}
          {product.isNew && <span className="badge badge-new">Mới</span>}
        </div>
        {product.organic && <span className="card-organic badge badge-organic">🌿 Organic</span>}
      </Link>

      <div className="card-body">
        <span className="card-cat">{product.origin}</span>
        <h3 className="card-name">
          <Link to={`/san-pham/${product.slug}`}>{product.name}</Link>
        </h3>
        <Rating value={product.rating} reviews={product.reviews} />

        <div className="card-foot">
          <div className="card-price">
            <Price price={product.price} oldPrice={product.oldPrice} />
            <span className="card-unit">/ {product.unit}</span>
          </div>
          <button
            className={`card-add ${added ? 'added' : ''}`}
            onClick={handleAdd}
            aria-label={`Thêm ${product.name} vào giỏ`}
          >
            {added ? <Check size={18} /> : <ShoppingBag size={18} />}
          </button>
        </div>
      </div>
    </article>
  )
}
