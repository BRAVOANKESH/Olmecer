import products from "../../data/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./PLP.css";

export default function PLP() {
  return (
    <section className="plp">
      <h2 className="plp-title">Our Chocolates 🍫</h2>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}