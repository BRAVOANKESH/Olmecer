import './App.css'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Toast from './components/Toast'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './pages/Home-page/Home'
import PLP from './pages/Product-listing-page/plp'
import Cart from './pages/Cart/Cart'
import About from './pages/About/About'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Contact from './pages/Contact/Contact'
import Checkout from './pages/Checkout/Checkout'
import OrderSuccess from './pages/OrderSuccess/OrderSuccess'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<PLP />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
