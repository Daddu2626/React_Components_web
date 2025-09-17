import { useState } from "react";
import "./payment.css";  // relative path correct hona chahiye

const Payment = () => {
  const [method, setMethod] = useState("card");

  const handlePayment = () => {
    alert(`Processing ${method.toUpperCase()} payment...`);
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="title">💳 Secure Payment</h2>

        <div className="form-group">
          <label>Select Payment Method:</label>
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="card">💳 Credit / Debit Card</option>
            <option value="upi">📱 UPI</option>
            <option value="netbanking">🏦 Net Banking</option>
            <option value="wallet">👛 Wallet</option>
          </select>
        </div>

        {method === "card" && (
          <div>
            <input type="text" placeholder="Card Number" className="input" />
            <input type="text" placeholder="Card Holder Name" className="input" />
            <div className="row">
              <input type="text" placeholder="MM/YY" className="input" />
              <input type="password" placeholder="CVV" className="input" />
            </div>
          </div>
        )}

        {method === "upi" && (
          <input type="text" placeholder="Enter UPI ID" className="input" />
        )}

        {method === "netbanking" && (
          <select className="input">
            <option>Select Bank</option>
            <option>SBI</option>
            <option>HDFC</option>
            <option>BOI</option>
            <option>Canara Bank</option>
            <option>Others</option>
          </select>
        )}

        {method === "wallet" && (
          <select className="input">
            <option>Select Wallet</option>
            <option>Paytm</option>
            <option>PhonePe</option>
            <option>Gpay</option>
            <option>Paypal</option>
            <option>FanPay</option>
            <option>Navi</option>
          </select>
        )}

        <button className="pay-btn" onClick={handlePayment}>
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
