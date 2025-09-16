import './l.css';

const Left = () => {
  return (
    <div className="left-container">
      <h2 className='cat'>📂 Categories</h2>


      <input 
        type="text" 
        placeholder="🔍 Search products..." 
        className="search-bar"
      />

      <ul className="category-list">
        <li>Electronics</li>
        <li>Fashion</li>
        <li>Home & Kitchen</li>
        <li>Sports</li>
        <li>Books</li>
        <li>Beauty</li>
        <li>Toys</li>
      </ul>

      {/* Filters */}
      <h3 className="filter-title">⚙️ Filters</h3>
      <p><b>Price Range:</b></p>
      <input type="range" min="100" max="5000" className="price-range" />
      <p className="price-label">₹100 – ₹5000</p>

      <p><b className='band'>Brand:</b></p>
      <div className='item'>
      <label><input type="checkbox" /> Apple</label><br />
      <label><input type="checkbox" /> Nike</label><br />
      <label><input type="checkbox" /> Samsung</label><br />
      <label><input type="checkbox" /> Adidas</label><br />
    </div>
    </div>
  );
};

export default Left;