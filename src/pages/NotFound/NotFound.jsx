import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="error-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          
          <div className="error-suggestions">
            <p>Here's what you can do:</p>
            <ul>
              <li>
                <button onClick={() => navigate('/')} className="suggestion-btn">
                  🏠 Go to Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/products')} className="suggestion-btn">
                  🍫 Browse Products
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="suggestion-btn">
                  ℹ️ Learn About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="suggestion-btn">
                  📧 Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div className="error-illustration">
            <div className="chocolate-404">🍫</div>
          </div>
        </div>
      </div>
    </div>
  );
}
