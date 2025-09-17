import { useState } from 'react';
import './l.css';

const Left = () => {
  const [price, setPrice] = useState(5000);

  return (
    <div className="left-container">
      <h2 className="cat">📂 Categories 📂</h2>

      <input
        type="text"
        placeholder="🔍 Search products..."
        className="search-bar"
      />

      <ul className="category-list">
        {["Electronics","Fashion","Home & Kitchen","Sports & Outdoors","Books & Stationery","Beauty & Personal Care","Toys & Games"].map((item, index) => (
          <li key={index} className="category-item">{item}</li>
        ))}
      </ul>

      <div className="filter-card">
        <h3 className="filter-title">⚙️ Price Range</h3>
        <input
          type="range"
          min="100"
          max="50000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="price-range"
        />
        <div className="price-tooltip">₹{price}</div>
      </div>

      <div className="filter-card">
        <h3 className="filter-title">🏷️ Brand</h3>
        {["Apple", "Samsung", "OnePlus", "Nike", "Adidas"].map((brand, i) => (
          <label key={i} className="brand-label">
            <input type="checkbox" /> {brand}
          </label>
        ))}
      </div>

      <div className="filter-card">
        <h3 className="filter-title">⭐ Customer Rating</h3>
        <label><input type="checkbox" /> ⭐⭐⭐⭐⭐ (5 Stars)</label><br />
        <label><input type="checkbox" /> ⭐⭐⭐⭐ & Up</label><br />
        <label><input type="checkbox" /> ⭐⭐⭐ & Up</label>
      </div>

      <div className="filter-card">
        <h3 className="filter-title">📦 Availability</h3>
        <label><input type="checkbox" /> In Stock</label><br />
        <label><input type="checkbox" /> Pre-Order</label><br />
        <label><input type="checkbox" /> Out of Stock</label>
      </div>

      <div className="filter-card">
        <h3 className="filter-title">💸 Discount</h3>
        <label><input type="checkbox" /> 10% or more</label><br />
        <label><input type="checkbox" /> 25% or more</label><br />
        <label><input type="checkbox" /> 50% or more</label>
      </div>
    </div>
  );
};

export default Left;
