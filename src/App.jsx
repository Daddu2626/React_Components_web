import Header from './Components/Header';
import Footer from './Components/Footer';
import Left from './Components/Left';
import Right from './Components/Right';
import Mid from './Components/Mid';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./Components/payment/payment.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <Header />
        </header>

        <section className="body">
          <section className="Left">
            <Left />
          </section>

          <section className="Mid">
            <Routes>
              <Route path="/" element={<Mid />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </section>

          <section className="Right">
            <Right />
          </section>
        </section>

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
