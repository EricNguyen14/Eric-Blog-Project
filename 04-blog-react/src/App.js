import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";
import DemoButtonComp from "./demo/DemoButtonComp";
import DemoInputComp from "./demo/DemoInputComp";
import "./assets/css/main.css";
import "./assets/css/bootstrap-tcl.css";
import routes from "./route-config";
{
  /* <DemoInputComp></DemoInputComp>
<DemoButtonComp></DemoButtonComp> */
}

function App() {
  return (
    <Router>
      <div className="wrapper-content">
        <Header />
        <div className="spacing"></div>
        <Login />
        <HomePage />

        {/* {showRouter(routes)} */}
        <div className="spacing"></div>
        <Footer />
      </div>
    </Router>
  );
  // function showRouter(routes) {
  //   let xhtml = null;
  //   if (routes) {
  //     xhtml = routes.map((route, index) => {
  //       return (
  //         <Route
  //           key={index}
  //           exact={route.exact}
  //           path={route.path}
  //           component={route.main}
  //         ></Route>
  //       );
  //     });
  //   }
  // }
}

export default App;
