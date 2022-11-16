import "./assets/css/bootstrap-tcl.css";
import "./assets/css/main.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="wrapper-content">
      <Header />
      <div className="spacing"></div>
      <Login />
      <HomePage />
      <div className="spacing"></div>
      <Footer />
    </div>
  );
}

export default App;
