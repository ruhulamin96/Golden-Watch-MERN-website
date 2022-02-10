import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import AllProducts from "./Components/Home/Products/AllProduct/AllProducts";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register/Register";
import NavigationBar from "./Components/Home/Header/NavigationBar/NavigationBar";
import PlaceOrder from "./Components/Home/Products/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NewDashBoard from "./Components/Dashboard/NewDashBoard";
import NotFound from "./Components/Home/NotFound/NotFound";
import axios from "axios";
import useAuth from "./Components/hooks/useAuth";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function App() {
  AOS.init();
  const { user, isLoading } = useAuth();
  const [cart, setCart] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://enigmatic-fjord-26508.herokuapp.com/placeOrders?email=${user?.email}`
      )
      .then((result) => {
        setCart(result.data);
        setLoad(false);

        console.log("cart", load, user.email);
      });
  }, [user.email]);

  const handleProduct = () => {
    axios
      .get(
        `https://enigmatic-fjord-26508.herokuapp.com/placeOrders?email=${user?.email}`
      )
      .then((result) => {
        setCart(result.data);
        setLoad(false);
      });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home size={cart.length}></Home>
          </Route>
          <Route exact path="/allproducts">
            <NavigationBar size={cart.length}></NavigationBar>
            <AllProducts></AllProducts>
          </Route>
          <Route exact path="/login">
            <NavigationBar></NavigationBar>
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <NavigationBar></NavigationBar>
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/placeorder/:Id">
            <NavigationBar size={cart.length}></NavigationBar>
            <PlaceOrder  handleProduct={handleProduct}></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/newdashboard">
            <NewDashBoard  handleProduct={handleProduct}></NewDashBoard>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
