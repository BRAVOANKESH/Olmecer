import React, { useState, useMemo } from "react";
import products from "../../data/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./plp.css";

export default function PLP() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const filters = ["All", "Dark Chocolate", "Milk Chocolate", "Truffles", "Gifts"];

  // Filter products based on active filter
  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") {
      return products;
    }
    return products.filter(product => product.category === activeFilter);
  }, [activeFilter]);

  // Sort filtered products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "newest":
        return sorted.sort((a, b) => b.id - a.id);
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  return (
    <section className="olm-plp-section" id="shop">
      <div className="olm-plp-container">
        
        {/* Editorial Header */}
        <header className="olm-plp-header">
          <h2 className="olm-plp-title">The Collection</h2>
          <p className="olm-plp-subtitle">
            Explore our masterfully crafted selection of artisanal chocolates, 
            designed to elevate every moment.
          </p>
        </header>

        {/* Filters and Sort */}
        <div className="olm-plp-controls">
          {/* Filter Pills */}
          <div className="olm-plp-filters">
            {filters.map((filter) => (
              <button 
                key={filter}
                className={`olm-plp-filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="olm-plp-sort">
            <label htmlFor="sort-select">Sort by:</label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="olm-sort-select"
            >
              <option value="default">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="olm-plp-results-count">
          Showing {sortedProducts.length} products
        </p>

        {/* Auto-responsive Grid */}
        {sortedProducts.length > 0 ? (
          <div className="olm-plp-grid">
            {sortedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="olm-no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}