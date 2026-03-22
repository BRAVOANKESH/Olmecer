import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <section className="cart-section">
        <div className="cart-container">
          <div className="empty-cart">
            <h2>Your Cart is Empty</h2>
            <p>Explore our collection of premium chocolates.</p>
            <button onClick={() => navigate('/products')} className="cart-cta">Continue Shopping</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-section">
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹{item.price}</p>
                </div>

                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <input 
                    type="number" 
                    min="1" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>

                <div className="cart-item-subtotal">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </div>

                <button 
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span className="free">Free</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>₹{Math.round(cartTotal * 0.18).toLocaleString()}</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-total">
              <span>Total:</span>
              <span>₹{Math.round(cartTotal * 1.18).toLocaleString()}</span>
            </div>

            <button className="checkout-btn" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
            <button className="continue-shopping-btn" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
