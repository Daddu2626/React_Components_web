import './r.css';

const Right = () => {
  return (
    <div className="right-container">
      <h2>🎁 Special Offers</h2>
      <div className="offer offer-electronics">
        <h3>⚡ 50% Off on Electronics</h3>
        <p>Grab the hottest deals before they’re gone!</p>
      </div>

      <div className="offer offer-fashion">
        <h3>🎉 Fashion Sale</h3>
        <p>Buy 1 Get 1 Free on selected items</p>
      </div>

  
      <h2>🏆 Best Sellers</h2>
      <div className="best-sellers">
        <div className="seller-card">
          <img src="https://picsum.photos/120/100?random=40" alt="Smartphone" />
          <p>Smartphone Pro Max</p>
        </div>
        <div className="seller-card">
          <img src="https://picsum.photos/120/100?random=41" alt="Shoes" />
          <p>Air Running Shoes</p>
        </div>
        <div className="seller-card">
          <img src="https://picsum.photos/120/100?random=42" alt="Watch" />
          <p>Smart Fitness Watch</p>
        </div>
      </div>
    </div>
  );
};

export default Right;