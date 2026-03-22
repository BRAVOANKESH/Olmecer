import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ToastContext } from '../../context/ToastContext';
import products from '../../data/products.json';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (!product) {
    return (
      <section className="product-detail">
        <div className="product-detail-container">
          <div className="product-not-found">
            <h2>Product Not Found</h2>
            <p>This product doesn't exist or has been removed.</p>
            <button onClick={() => navigate('/products')} className="btn-back">
              Back to Products
            </button>
          </div>
        </div>
      </section>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    showToast(`Added ${quantity} item(s) to cart!`, 'success');
  };

  return (
    <section className="product-detail">
      <div className="product-detail-container">
        
        <div className="product-detail-grid">
          {/* Image Section */}
          <div className="product-detail-image">
            {imageError ? (
              <div className="product-image-placeholder">
                <span>🍫</span>
                <p>{product.name}</p>
              </div>
            ) : (
              <img 
                src={product.image} 
                alt={product.name}
                onError={handleImageError}
              />
            )}
            <div className="product-detail-gallery">
              {imageError ? (
                <div className="gallery-placeholder">🍫</div>
              ) : (
                <>
                  <img src={product.image} alt={product.name} className="gallery-thumb active" onError={handleImageError} />
                  <img src={product.image} alt={product.name} className="gallery-thumb" onError={handleImageError} />
                  <img src={product.image} alt={product.name} className="gallery-thumb" onError={handleImageError} />
                </>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="product-detail-info">
            <div className="breadcrumb">
              <button onClick={() => navigate('/products')}>Products</button>
              <span>/</span>
              <span>{product.name}</span>
            </div>

            <h1>{product.name}</h1>
            
            <div className="product-meta">
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="rating-count">{product.rating} (124 reviews)</span>
              </div>
              <div className="availability">
                <span className="status in-stock">In Stock</span>
              </div>
            </div>

            <div className="price-section">
              <h2 className="price">₹{product.price}</h2>
              <p className="original-price">₹{Math.round(product.price * 1.3)}</p>
              <p className="discount">{Math.round((1 - product.price / (product.price * 1.3)) * 100)}% OFF</p>
            </div>

            <div className="description-section">
              <h3>Description</h3>
              <p>
                Experience the ultimate in premium chocolate craftsmanship. This exquisite {product.name} 
                is carefully handcrafted using the finest ingredients sourced from around the world. 
                Each piece is a testament to our commitment to quality, taste, and luxury.
              </p>
            </div>

            <div className="features">
              <h3>Key Features</h3>
              <ul>
                <li>✓ 100% pure cocoa butter</li>
                <li>✓ No artificial flavors or preservatives</li>
                <li>✓ Ethically sourced ingredients</li>
                <li>✓ Handcrafted in small batches</li>
                <li>✓ Premium luxury packaging</li>
              </ul>
            </div>

            <div className="purchase-section">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <div className="quantity-control">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <input 
                    id="quantity"
                    type="number" 
                    min="1" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <button className="btn-add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn-wishlist">♡ Add to Wishlist</button>
            </div>

            <div className="shipping-info">
              <h3>Shipping & Returns</h3>
              <p>✓ Free shipping on orders above ₹500</p>
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ Carefully packaged to preserve freshness</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="product-reviews">
          <h2>Customer Reviews</h2>
          <div className="reviews-grid">
            {[1, 2, 3].map(i => (
              <div key={i} className="review-card">
                <div className="review-header">
                  <div>
                    <h4>Satisfied Customer</h4>
                    <div className="review-rating">★★★★★</div>
                  </div>
                </div>
                <p className="review-text">
                  Absolutely delicious! The quality is exceptional and the taste is out of this world. 
                  Will definitely order again!
                </p>
                <span className="review-date">2 weeks ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
