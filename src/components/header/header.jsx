import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import products from "../../data/products.json";
import "./header.css";

export default function Header() {
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  // Detect scroll to trigger the glassmorphism background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; }; // Cleanup
  }, [isMenuOpen]);

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.length > 0) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results.slice(0, 5)); // Limit to 5 results
      setShowSearchDropdown(true);
    } else {
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  };

  const handleProductSelect = (productId) => {
    navigate(`/products/${productId}`);
    setSearchQuery("");
    setSearchResults([]);
    setShowSearchDropdown(false);
    setIsMenuOpen(false);
  };

  return (
    <header className={`olm-hdr-wrapper ${isScrolled ? "olm-hdr-scrolled" : ""}`}>
      <div className="olm-hdr-container">
        
        {/* Brand Logo */}
        <Link to="/" className="olm-hdr-logo">
          Olmecer<span className="olm-hdr-dot">.</span>
        </Link>

        {/* Search Bar (Desktop) */}
        <div className="olm-hdr-search-wrapper">
          <input
            type="text"
            className="olm-hdr-search-input"
            placeholder="Search chocolates..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => searchQuery && setShowSearchDropdown(true)}
          />
          
          {showSearchDropdown && searchResults.length > 0 && (
            <div className="olm-search-dropdown">
              {searchResults.map(product => (
                <div 
                  key={product.id} 
                  className="olm-search-item"
                  onClick={() => handleProductSelect(product.id)}
                >
                  <img src={product.image} alt={product.name} />
                  <div className="olm-search-item-info">
                    <p className="olm-search-item-name">{product.name}</p>
                    <p className="olm-search-item-price">₹{product.price}</p>
                  </div>
                </div>
              ))}
              {searchResults.length > 0 && (
                <button 
                  className="olm-search-view-all"
                  onClick={() => {
                    navigate("/products");
                    setSearchQuery("");
                    setShowSearchDropdown(false);
                  }}
                >
                  View all results
                </button>
              )}
            </div>
          )}
        </div>

        {/* Desktop & Mobile Navigation */}
        <nav className={`olm-hdr-nav ${isMenuOpen ? "olm-hdr-nav-open" : ""}`}>
          <ul className="olm-hdr-links">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Our Story</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        {/* Cart Icon */}
        <Link to="/cart" className="olm-hdr-cart" aria-label="Shopping cart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>

        {/* Animated Hamburger Toggle */}
        <button
          className={`olm-hdr-hamburger ${isMenuOpen ? "olm-hdr-hamburger-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="olm-hdr-line"></span>
          <span className="olm-hdr-line"></span>
          <span className="olm-hdr-line"></span>
        </button>
        
      </div>
    </header>
  );
}