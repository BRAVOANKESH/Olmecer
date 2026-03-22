import React from "react";
import "./Advertisement.css";

export default function Advertisement() {
  return (
    <section className="olm-ad-section">
      <div className="olm-ad-container">
        
        {/* The Glassmorphism Banner Card */}
        <div className="olm-ad-glass-card">
          
          {/* Left Side: Copy and Form */}
          <div className="olm-ad-content">
            <span className="olm-ad-badge">Limited Time Offer</span>
            
            <h2 className="olm-ad-title">
              Taste the <span className="olm-ad-accent">Gold Standard</span>
            </h2>
            
            <p className="olm-ad-description">
              Join the Olmecer Insider club today and receive exclusive access to our seasonal releases, plus 15% off your first curated tasting box.
            </p>
            
            <form className="olm-ad-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="olm-ad-input" 
                required
              />
              <button type="submit" className="olm-ad-btn">
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Side: Visual */}
          <div className="olm-ad-visual">
            <img 
            //   src="https://images.unsplash.com/photo-1614088628043-410a568a865f?q=80&w=1000&uto=format&fit=crop" 
              alt="Rich pouring chocolate" 
              src="/public/Hero-banner.jpg"
              className="olm-ad-img"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}