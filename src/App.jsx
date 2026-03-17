import './App.css'
import Footer from './components/footer/footer'
import Home from './pages/Home-page/Home'
import PLP from './pages/Product-listing-page/plp'

function App() {
  return (
    <>
    <div className="body">
      <Home />
      <PLP />
      <Footer />
    </div>
    </>
  )
}

export default App
