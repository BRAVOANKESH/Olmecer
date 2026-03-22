import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="olm-abt-page">
      
      {/* Immersive Hero Section */}
      <section className="olm-abt-hero">
        <div className="olm-abt-hero-bg"></div>
        <div className="olm-abt-hero-content">
          <span className="olm-abt-badge">The Legacy</span>
          <h1 className="olm-abt-title">Our <span className="olm-abt-accent">Story</span></h1>
          <p className="olm-abt-subtitle">Crafted with passion. Designed for the senses.</p>
        </div>
      </section>

      {/* Story Section with Asymmetrical Glass Layout */}
      <section className="olm-abt-section olm-abt-story">
        <div className="olm-abt-container">
          <div className="olm-abt-story-grid">
            <div className="olm-abt-story-text">
              <h2>The Olmecer <span className="olm-abt-accent">Journey</span></h2>
              <p>
                Olmecer began with a simple obsession: creating chocolate that transcends the ordinary. 
                Founded in 2015, our brand emerged from a passion for artisanal craftsmanship and a 
                commitment to sourcing the finest cocoa from around the world.
              </p>
              <p>
                Every chocolate we create tells a story—of origin, of craftsmanship, of dedication to quality. 
                We believe that luxury isn't just about price; it's about the experience, the taste, and the 
                emotion that each piece evokes.
              </p>
            </div>
            
            <div className="olm-abt-story-highlights">
              <div className="olm-abt-glass-card">
                <h3>Premium Sourcing</h3>
                <p>We partner exclusively with ethical cocoa farmers to ensure every bean meets our exacting standards.</p>
              </div>
              <div className="olm-abt-glass-card">
                <h3>Handcrafted Excellence</h3>
                <p>Every chocolate is carefully crafted in small batches using traditional methods and modern precision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Minimalist SVGs */}
      <section className="olm-abt-section olm-abt-values">
        <div className="olm-abt-container">
          <h2 className="olm-abt-section-title">Our Core <span className="olm-abt-accent">Values</span></h2>
          <div className="olm-abt-values-grid">
            
            <div className="olm-abt-value-card">
              <svg className="olm-abt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              <h3>Sustainability</h3>
              <p>Ethical sourcing and environmentally responsible practices in every aspect of our business.</p>
            </div>

            <div className="olm-abt-value-card">
              <svg className="olm-abt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <h3>Quality First</h3>
              <p>No shortcuts. Every ingredient is chosen for its purity, delivering uncompromising taste.</p>
            </div>

            <div className="olm-abt-value-card">
              <svg className="olm-abt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <h3>Passion</h3>
              <p>Our team is driven by a genuine love for chocolate and a desire to create moments of pure joy.</p>
            </div>

            <div className="olm-abt-value-card">
              <svg className="olm-abt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              <h3>Innovation</h3>
              <p>Blending traditional techniques with creative exploration to create flavors that delight.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Sleek Timeline Section */}
      <section className="olm-abt-section olm-abt-timeline-bg">
        <div className="olm-abt-container">
          <h2 className="olm-abt-section-title">The <span className="olm-abt-accent">Milestones</span></h2>
          <div className="olm-abt-timeline">
            
            <div className="olm-abt-timeline-item">
              <div className="olm-abt-timeline-dot"></div>
              <div className="olm-abt-timeline-content olm-abt-glass-card">
                <span className="olm-abt-year">2015</span>
                <h3>The Beginning</h3>
                <p>Olmecer is founded with a vision to redefine premium chocolate craftsmanship.</p>
              </div>
            </div>

            <div className="olm-abt-timeline-item">
              <div className="olm-abt-timeline-dot"></div>
              <div className="olm-abt-timeline-content olm-abt-glass-card">
                <span className="olm-abt-year">2017</span>
                <h3>Global Recognition</h3>
                <p>Awarded "Best Artisanal Chocolate" at the International Confectionery Awards.</p>
              </div>
            </div>

            <div className="olm-abt-timeline-item">
              <div className="olm-abt-timeline-dot"></div>
              <div className="olm-abt-timeline-content olm-abt-glass-card">
                <span className="olm-abt-year">2023</span>
                <h3>Sustainability Lead</h3>
                <p>Achieved full carbon neutrality and introduced 100% eco-friendly packaging.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="olm-abt-cta">
        <div className="olm-abt-cta-overlay"></div>
        <div className="olm-abt-container olm-abt-cta-content">
          <h2>Experience <span className="olm-abt-accent">Olmecer</span></h2>
          <p>Discover the difference that passion, quality, and craft can make.</p>
          <a href="/products" className="olm-abt-btn">Explore Collections</a>
        </div>
      </section>

    </div>
  );
}