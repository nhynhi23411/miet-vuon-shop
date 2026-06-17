import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/san-pham" element={<CollectionPage />} />
        <Route path="/danh-muc/:slug" element={<CollectionPage />} />
        <Route path="/san-pham/:slug" element={<ProductPage />} />
        <Route path="/gio-hang" element={<CartPage />} />
        <Route path="/tin-tuc" element={<BlogPage />} />
        <Route path="/tin-tuc/:slug" element={<BlogPostPage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
