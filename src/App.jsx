import Header from './Components/Header';
import Footer from './Components/Footer';
import Left from './Components/Left';
import Right from './Components/Right';
import Mid from './Components/Mid';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>

      <section className="body">
        <section className="Left">
          <Left />
        </section>

        <section className="Mid">
          <Mid />
        </section>

        <section className="Right">
          <Right />
        </section>
      </section>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;