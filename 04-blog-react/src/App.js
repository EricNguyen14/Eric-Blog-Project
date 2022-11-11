import "./assets/css/bootstrap-tcl.css";
import "./assets/css/main.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper-content">
      <Header />
      <HomePage />
      <div className="spacing"></div>
      <Footer />
    </div>
  );
}

export default App;
