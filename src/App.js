import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/category/:productid' component={ProductPage} />
        <Route exact path='/' component={CategoryPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
