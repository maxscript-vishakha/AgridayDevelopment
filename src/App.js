import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/login/Login'
import Registration from './components/login/registration/Registration'
import Home from './components/login/productList/Home'
import ProductLIstScreen from './components/login/productList/ProductLIstScreen';
import ProductDetails from './components/login/productDetails/ProductDetails'
import Wishlist from './components/login/wishlist/Wishlist';
import Cart from './components/login/cart/Cart';
import SellerDashboard from './components/login/sellerDashboard/SellerDashboard';
import YourOrder from './components/login/yourOrderScreen/YourOrder';
import Checkout from './components/login/checkoutScreen/Checkout';
// import AgriImageGallery from './components/login/commonComponent/AgriImageGallery';
function App() {
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/registration" component={Registration} />

          <Route
            path="/"
            render={() => {
              if (localStorage.getItem("token") === null) {
                return <Login></Login>;
              } else {
                return (
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/productListScreen" component={ProductLIstScreen}/>
                    <Route path="/productdetails" component={ProductDetails} />
                    <Route path="/wishlist" component={Wishlist} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/sellerdashboard" component={SellerDashboard}/>
                    <Route path="/yourorder" component={YourOrder} />
                    <Route path="/checkout" component={Checkout}/>
                  </Switch>
                );
              }
            }}
          ></Route>

          {/* <Route path="/agriimagegallery" component={AgriImageGallery} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
