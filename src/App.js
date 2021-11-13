import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import AllProducts from "./Components/Home/Products/AllProduct/AllProducts";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register/Register";
import NavigationBar from "./Components/Home/Header/NavigationBar/NavigationBar";
import PlaceOrder from "./Components/Home/Products/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/allproducts">
              <NavigationBar></NavigationBar>
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
              <NavigationBar></NavigationBar>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute  path='/dashboard'>
                <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
