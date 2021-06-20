import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import ProductInfo from "./pages/ProductInfo";
import Brands from "./components/Brands";
import CartPage from "./pages/CartPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import AdminCategory from "./pages/AdminCategory";
import OrdersPage from "./pages/OrdersPage";
import OrderInfo from "./pages/OrderInfo";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/admin/orders/:orderid' component={OrderInfo} />
        <Route path='/admin/orders' component={OrdersPage} />
        <Route path='/admin/:category' component={AdminCategory} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/cart' component={CartPage} />
        <Route
          path='/category/:categoryName/:productid'
          component={ProductInfo}
        />
        <Route path='/category/:categoryName' component={ProductPage} />
        <Route exact path='/' component={CategoryPage} />
      </Switch>
      <Brands />
      <Footer />
    </Router>
  );
}

export default App;
