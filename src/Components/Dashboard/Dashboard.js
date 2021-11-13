import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import MakeAdmin from "./Admin/MakeAdmin/MakeAdmin";
import MyOrders from "./MyOrders/MyOrders";
import Pay from "./Pay/Pay";
import Review from "./Review/Review";
import axios from "axios";
import ManageAllOrders from "./Admin/ManageAllOrders/ManageAllOrders";
import AddProduct from "./Admin/AddProduct/AddProduct";
import ManageProduct from "./Admin/ManageProduct/ManageProduct";
function Dashboard() {
  let { path, url } = useRouteMatch();
  const { user, logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isload, setIsload] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://enigmatic-fjord-26508.herokuapp.com/users?email=${user.email}`
      )
      .then((result) => {
        // console.log(result)
        setIsAdmin(result.data.admin);
        setIsload(false);
      });
  }, []);

  if (isload) {
    return (
      <div className="d-flex align-items-center justify-content-center h-100 position-absolute w-100 text_color">
        <div
          class="spinner-border"
          style={{ width: "4rem ", height: "4rem" }}
          role="status"
        ></div>
      </div>
    );
  }
  return (
    <div className="container text_color">
      {user?.email && !isAdmin ? (
        <div className="row mt-5">
          <h3>Welcome {user?.displayName} !!</h3>
          <ul class="nav justify-content-center my-2">
            <li class="nav-item">
              <Link
                class="nav-link active fs-4 text_color bottom-border"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active fs-4 text_color bottom-border"
                to={`${url}/pay`}
              >
                Payment
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fs-4 text_color bottom-border"
                to={`${url}/myorders`}
              >
                Your Orders
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fs-4 text_color bottom-border"
                to={`${url}/review`}
              >
                Write Review
              </Link>
            </li>
            <li class="nav-item fs-4 ">
              <button
                className="btn fs-4 text_color bottom-border"
                onClick={logout}
              >
                <i class="fas fa-user-circle"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="row text_color mt-3">
          <h1>Welcome Admin </h1>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <Link
                class="nav-link active fs-5 text_color bottom-border"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active fs-5 text_color bottom-border"
                to={`${url}/makeadmin`}
              >
                Make Admin
              </Link>
            </li>
            <li class="nav-item ">
              <Link
                class="nav-link active fs-5 text_color bottom-border"
                to={`${url}/manageallorders`}
              >
                Manage All Orders
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active fs-5 text_color bottom-border"
                to={`${url}/addproduct`}
              >
                Add Product
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active fs-5 text_color bottom-border"
                to={`${url}/manageproduct`}
              >
                Manage Product
              </Link>
            </li>
            <li class="nav-item">
              <span>
                <button
                  className="btn fs-5 text_color bottom-border"
                  onClick={logout}
                >
                  <i class="fas fa-user-circle"></i> Logout
                </button>
              </span>
            </li>
          </ul>
        </div>
      )}
      <Switch>
        <Route path={`${path}/myorders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <Route path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/manageallorders`}>
          <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route path={`${path}/addproduct`}>
          <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/manageproduct`}>
          <ManageProduct></ManageProduct>
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
