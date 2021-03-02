import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/login/Login'
import Registration from './components/login/registration/Registration'
import Home from './components/login/productList/Home'
import ProductLIstScreen from './components/login/productList/ProductLIstScreen';
import ProductDetails from './components/login/productDetails/ProductDetails'
import Wishlist from './components/login/wishlist/Wishlist';
// import AgriImageGallery from './components/login/commonComponent/AgriImageGallery';
function App() {
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            path="/"
            render={() => {
              if (localStorage.getItem("token") === null) {
                return <Login></Login>;
              } else {
                return (
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/productListScreen" component={ProductLIstScreen}/>
                    <Route path="/productdetails" component={ProductDetails} />
                    <Route path="/wishlist" component={Wishlist}/>
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
