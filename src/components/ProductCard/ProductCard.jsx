import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
        <p className="rating">⭐ {product.rating}</p>

        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
}