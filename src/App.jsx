import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <div className="landing-card">
          <p className="eyebrow">WELCOME TO</p>
          <h1>Paradise Nursery</h1>
          <p>
            Bring nature home with beautiful plants selected for every space
            and every plant lover.
          </p>
          <Link className="get-started" to="/plants">Get Started</Link>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  )
}
