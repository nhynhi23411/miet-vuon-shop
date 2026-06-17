import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
