import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-container">
          
          <div className="hero-content">
            <h1>
              Indulge in the <span>Finest Chocolate</span>
            </h1>

            <p>
              Experience handcrafted luxury chocolates made with love and the
              richest cocoa. Taste the difference with Olmecer.
            </p>

            <div className="hero-buttons">
              <button className="btn primary">Shop Now</button>
              <button className="btn secondary">Explore</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}