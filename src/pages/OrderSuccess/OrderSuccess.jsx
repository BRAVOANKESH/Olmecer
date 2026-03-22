import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './OrderSuccess.css';

export default function OrderSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="order-success-page">
        <div className="success-container">
          <div className="success-content">
            <div className="success-icon">✓</div>
            <h1>Order Not Found</h1>
            <p>Something went wrong. Please try again.</p>
            <button onClick={() => navigate('/products')} className="btn-primary">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-success-page">
      <div className="success-container">
        <div className="success-content">
          <div className="success-icon">✓</div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for your purchase with Olmecer</p>

          <div className="order-details">
            <div className="order-detail-card">
              <h3>Order Number</h3>
              <p className="order-id">{order.id}</p>
            </div>

            <div className="order-detail-card">
              <h3>Total Amount</h3>
              <p className="order-amount">₹{order.total.toFixed(2)}</p>
            </div>

            <div className="order-detail-card">
              <h3>Delivery To</h3>
              <p>{order.customer.address}, {order.customer.city}, {order.customer.state} {order.customer.zipCode}</p>
            </div>
          </div>

          <div className="order-items">
            <h3>Order Items</h3>
            <div className="items-list">
              {order.items.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <p className="item-price">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{order.subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (18%)</span>
              <span>₹{order.tax.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{order.shipping === 0 ? 'FREE' : `₹${order.shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{order.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="order-message">
            <p>A confirmation email has been sent to <strong>{order.customer.email}</strong></p>
            <p>You can track your order status in your account or contact us for updates.</p>
          </div>

          <div className="action-buttons">
            <button onClick={() => navigate('/')} className="btn-home">
              Back to Home
            </button>
            <button onClick={() => navigate('/products')} className="btn-continue">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
