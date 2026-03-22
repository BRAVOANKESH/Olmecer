import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ToastContext } from '../../context/ToastContext';
import './Checkout.css';

export default function Checkout() {
  const { cartItems, clearCart, cartTotal } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const subtotal = cartTotal;
  const tax = subtotal * 0.18;
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + tax + shipping;

  const validateForm = () => {
    const newErrors = {};
    
    if (!customerInfo.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!customerInfo.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!customerInfo.phone.trim()) newErrors.phone = 'Phone is required';
    if (!customerInfo.address.trim()) newErrors.address = 'Address is required';
    if (!customerInfo.city.trim()) newErrors.city = 'City is required';
    if (!customerInfo.state.trim()) newErrors.state = 'State is required';
    if (!customerInfo.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    if (!customerInfo.country.trim()) newErrors.country = 'Country is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      showToast('Your cart is empty', 'error');
      navigate('/products');
      return;
    }

    if (!validateForm()) {
      showToast('Please fill all required fields', 'error');
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create order object
      const order = {
        id: `OLM-${Date.now()}`,
        customer: customerInfo,
        items: cartItems,
        subtotal,
        tax,
        shipping,
        total,
        paymentMethod,
        timestamp: new Date().toISOString()
      };

      // Save to localStorage as part of order history
      const orders = JSON.parse(localStorage.getItem('olmecer_orders') || '[]');
      orders.push(order);
      localStorage.setItem('olmecer_orders', JSON.stringify(orders));

      // Clear cart
      clearCart();

      // Show success message
      showToast('Order placed successfully!', 'success');

      // Redirect to success page (or home)
      setTimeout(() => {
        navigate('/order-success', { state: { order } });
      }, 1000);
    } catch (error) {
      showToast('Failed to place order. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="empty-cart">
            <h1>Your Cart is Empty</h1>
            <p>Add some delicious Olmecer chocolates before checkout</p>
            <button onClick={() => navigate('/products')} className="btn-primary">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-grid">
          {/* Left - Order Summary */}
          <div className="checkout-summary">
            <h2>Order Summary</h2>

            <div className="cart-items-summary">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <div className="item-info">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="item-total">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="order-total-section">
              <div className="price-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Tax (18%)</span>
                <span className="tax">₹{tax.toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Shipping</span>
                <span className="shipping">
                  {shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              {subtotal > 500 && (
                <p className="shipping-info">✓ Free shipping on orders over ₹500</p>
              )}
            </div>
          </div>

          {/* Right - Checkout Form */}
          <div className="checkout-form-section">
            <form onSubmit={handlePlaceOrder} className="checkout-form">
              {/* Shipping Information */}
              <fieldset className="form-section">
                <legend>Shipping Information</legend>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={customerInfo.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={customerInfo.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleChange}
                    placeholder="123 Main Street"
                    className={errors.address ? 'error' : ''}
                  />
                  {errors.address && <span className="error-message">{errors.address}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={customerInfo.city}
                      onChange={handleChange}
                      placeholder="New York"
                      className={errors.city ? 'error' : ''}
                    />
                    {errors.city && <span className="error-message">{errors.city}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={customerInfo.state}
                      onChange={handleChange}
                      placeholder="NY"
                      className={errors.state ? 'error' : ''}
                    />
                    {errors.state && <span className="error-message">{errors.state}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={customerInfo.zipCode}
                      onChange={handleChange}
                      placeholder="10001"
                      className={errors.zipCode ? 'error' : ''}
                    />
                    {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={customerInfo.country}
                      onChange={handleChange}
                      placeholder="United States"
                      className={errors.country ? 'error' : ''}
                    />
                    {errors.country && <span className="error-message">{errors.country}</span>}
                  </div>
                </div>
              </fieldset>

              {/* Payment Method */}
              <fieldset className="form-section">
                <legend>Payment Method</legend>
                
                <div className="payment-options">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Credit Card</span>
                  </label>
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="debit-card"
                      checked={paymentMethod === 'debit-card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Debit Card</span>
                  </label>
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>UPI</span>
                  </label>
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="net-banking"
                      checked={paymentMethod === 'net-banking'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Net Banking</span>
                  </label>
                </div>
              </fieldset>

              <button type="submit" className="btn-place-order" disabled={loading}>
                {loading ? 'Processing...' : `Place Order (₹${total.toFixed(2)})`}
              </button>

              <button 
                type="button" 
                className="btn-continue-shopping"
                onClick={() => navigate('/products')}
                disabled={loading}
              >
                Continue Shopping
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
