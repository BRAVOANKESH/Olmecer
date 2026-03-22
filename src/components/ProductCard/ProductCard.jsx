import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link to={`/products/${product.id}`} className="olm-card-link">
      <article className="olm-card-container">
        {/* Image & Interactive Overlay */}
        <div className="olm-card-image-wrapper">
          {imageError ? (
            <div className="olm-card-image-placeholder">
              <span>🍫</span>
              <p>{product.name}</p>
            </div>
          ) : (
            <img 
              src={product.image} 
              alt={product.name} 
              className="olm-card-img"
              loading="lazy"
              onError={handleImageError}
            />
          )}
          
          {/* Floating Quick-Add Button (Reveals on Hover) */}
          <div className="olm-card-quick-add">
            <button 
              className={`olm-card-add-btn ${isAdded ? 'added' : ''}`}
              onClick={handleAddToCart}
              aria-label="Add to cart"
              title="Add to cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Minimalist Product Info */}
        <div className="olm-card-info">
          <div className="olm-card-meta">
            <h3 className="olm-card-title">{product.name}</h3>
            <span className="olm-card-rating">★ {product.rating}</span>
          </div>
          <p className="olm-card-price">₹{product.price}</p>
        </div>
      </article>
    </Link>
  );
}