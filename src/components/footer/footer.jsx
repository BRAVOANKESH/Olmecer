import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="olm-ftr-section">
      <div className="olm-ftr-container">
        
        {/* Main Footer Content */}
        <div className="olm-ftr-grid">
          
          {/* Column 1: Brand & Story */}
          <div className="olm-ftr-brand">
            <a href="/" className="olm-ftr-logo">
              Olmecer<span className="olm-ftr-dot">.</span>
            </a>
            <p className="olm-ftr-description">
              Slow-made, rich, and indulgent. We craft luxury chocolate experiences 
              designed to awaken the senses and elevate the everyday.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="olm-ftr-links-group">
            <h3 className="olm-ftr-heading">Shop</h3>
            <ul className="olm-ftr-list">
              <li><a href="#dark">Dark Chocolate</a></li>
              <li><a href="#milk">Milk Chocolate</a></li>
              <li><a href="#truffles">Artisanal Truffles</a></li>
              <li><a href="#gifts">Gift Collections</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="olm-ftr-links-group">
            <h3 className="olm-ftr-heading">Olmecer</h3>
            <ul className="olm-ftr-list">
              <li><a href="#story">Our Story</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#journal">The Journal</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="olm-ftr-social">
            <h3 className="olm-ftr-heading">Connect</h3>
            <div className="olm-ftr-social-icons">
              {/* Instagram Icon */}
              <a href="#instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Twitter/X Icon */}
              <a href="#twitter" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
              {/* Pinterest Icon (Great for visual brands) */}
              <a href="#pinterest" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="12" x2="12" y2="22"></line><path d="M12 22a10 10 0 1 0 -10 -10 10.02 10.02 0 0 0 6.64 9.4"></path><path d="M14.5 10c-.5 0 -1 .5 -1 1.5s.5 2 1.5 2 2 -1 2 -2.5 -1.5 -3.5 -3.5 -3.5 -3 -1.5 -3 4.5c0 1.5 .5 3 1.5 3s1.5 -.5 1.5 -1"></path></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="olm-ftr-bottom">
          <p>&copy; 2026 Olmecer. All rights reserved.</p>
          <div className="olm-ftr-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="olm-ftr-separator">|</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}