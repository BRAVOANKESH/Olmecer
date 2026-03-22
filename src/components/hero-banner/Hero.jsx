import React from "react";
import { useNavigate } from "react-router-dom";
import { generateMenuPDF } from "../../utils/generateMenuPDF";
import "./hero.css";

export default function Hero() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/products');
  };

  const handleViewMenu = () => {
    generateMenuPDF();
  };

  return (
    <section className="hero">
      {/* Animated Background Layer */}
      <div className="hero-bg"></div>
      
      {/* Gradient Overlay for Text Readability */}
      <div className="overlay">
        <div className="hero-content">
          
          <h1 className="animate-fade-up">
            Crafted Moments <br />
            <span className="text-accent">With Chocolate</span>
          </h1>

          <p className="animate-fade-up delay-1">
            Slow-made, rich, and indulgent. Experience the warmth of
            handcrafted chocolate, just like your favorite café.
          </p>

          <div className="hero-buttons animate-fade-up delay-2">
            <button className="btn primary" onClick={handleOrderNow}>Order Now</button>
            <button className="btn secondary" onClick={handleViewMenu}>View Menu</button>
          </div>

        </div>
      </div>
    </section>
  );
}