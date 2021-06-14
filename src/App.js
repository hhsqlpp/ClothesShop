import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import ProductInfo from "./pages/ProductInfo";
import Brands from "./components/Brands";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/cart' component={CartPage} />
        <Route path='/category/:productid/:product' component={ProductInfo} />
        <Route path='/category/:productid' component={ProductPage} />
        <Route exact path='/' component={CategoryPage} />
      </Switch>
      <Brands />
      <Footer />
    </Router>
  );
}

export default App;
