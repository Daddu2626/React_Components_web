import { useState } from 'react';
import './l.css';

const Left = () => {
  const [price, setPrice] = useState(5000); // default price

  return (
    <div className="left-container">
      <h2 className="cat">📂 Categories 📂</h2>
      <input 
        type="text" 
        placeholder="🔍 Search products..." 
        className="search-bar"
      />

      <ul className="category-list">
        <li>Electronics</li>
        <li>Fashion</li>
        <li>Home & Kitchen</li>
        <li>Sports & Outdoors</li>
        <li>Books & Stationery</li>
        <li>Beauty & Personal Care</li>
        <li>Toys & Games</li>
      </ul>

      <h3 className="filter-title">⚙️ Filters</h3>

      <div className="filter-section">
        <p><b>Price Range:</b></p>
        <input 
          type="range" 
          min="100" 
          max="50000" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="price-range" 
        />
        <p className="price-label">₹100 – ₹{price}</p>
      </div>

    
      <div className="filter-section">
        <p><b className="band">Brand:</b></p>
        <div className="brand-options">
          <label><input type="checkbox" /> Apple</label><br />
          <label><input type="checkbox" /> Samsung</label><br />
          <label><input type="checkbox" /> OnePlus</label><br />
          <label><input type="checkbox" /> Nike</label><br />
          <label><input type="checkbox" /> Adidas</label><br />
        </div>
      </div>

      <div className="filter-section">
        <p><b>Customer Rating:</b></p>
        <label><input type="checkbox" /> ⭐⭐⭐⭐⭐ (5 Stars)</label><br />
        <label><input type="checkbox" /> ⭐⭐⭐⭐ & Up</label><br />
        <label><input type="checkbox" /> ⭐⭐⭐ & Up</label><br />
      </div>

      <div className="filter-section">
        <p><b>Availability:</b></p>
        <label><input type="checkbox" /> In Stock</label><br />
        <label><input type="checkbox" /> Pre-Order</label><br />
        <label><input type="checkbox" /> Out of Stock</label><br />
      </div>

      <div className="filter-section">
        <p><b>Discount:</b></p>
        <label><input type="checkbox" /> 10% or more</label><br />
        <label><input type="checkbox" /> 25% or more</label><br />
        <label><input type="checkbox" /> 50% or more</label><br />
      </div>
    </div>
  );
};

export default Left;
