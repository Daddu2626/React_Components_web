import { useNavigate } from "react-router-dom";
import './m.css';

const Mid = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="feat">🔥 Featured Products 🔥</h2>
      <div className="products">
        <div className="product-card">
          <img 
            src="https://tse3.mm.bing.net/th/id/OIP.atQWer43ULhwLCU8YQCjdwHaEK?pid=Api&P=0&h=220" 
            alt="Laptop" 
          />
          <h3>Gaming Laptop</h3>
          <p>High-performance laptop with RTX graphics.</p>
          <button 
            className="buy-btn" 
            onClick={() => navigate("/payment")}
          >
            Buy Now
          </button>
        </div>

        <div className="product-card">
          <img 
            src="https://tse1.mm.bing.net/th/id/OIP.bYYQfm9g0ZQPGk8BWOT-ogHaE8?pid=Api&P=0&h=220" 
            alt="Shoes" 
          />
          <h3>Running Shoes</h3>
          <p>Lightweight and durable sports shoes.</p>
          <button 
            className="buy-btn" 
            onClick={() => navigate("/payment")}
          >
            Buy Now
          </button>
        </div>

        <div className="product-card">
          <img 
            src="https://tse3.mm.bing.net/th/id/OIP.S-6JiLn9EQ5ad-wIwdvFXQHaE9?pid=Api&P=0&h=220" 
            alt="Headphones" 
          />
          <h3>Wireless Headphones</h3>
          <p>Noise-cancelling headphones with 30hr battery.</p>
          <button 
            className="buy-btn" 
            onClick={() => navigate("/payment")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mid;
