import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";
function NavigationBar({size}) {
  const {user ,isLoading, logout}=useAuth()
  
if (isLoading) {
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
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link class="navbar-brand fs-2 fw-bold"  style={{fontFamily: "'Lobster Two', cursive", letterSpacing:"3px"}} to="/">
            GOLDEN WATCH
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto mb-2 fw-bold mb-lg-0">
              <li class="nav-item ">
                <Link
                  class="nav-link active fs-4 bottom-border"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active fs-4 bottom-border"
                  aria-current="page"
                  to="/allproducts"
                >
                  Explore Watch
                </Link>
              </li>
              <li class="nav-item">
                {user?.email && (
                  <Link
                    class="nav-link active fs-4 bottom-border"
                    to="/newdashboard"
                  >
                    Dashboard
                  </Link>
                )}
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link active fs-4 bottom-border"
                  aria-current="page"
                  to="/newdashboard/myorders"
                >
                  <div className="cart">
                    <span>
                      <i class="fas fa-shopping-cart"></i>
                      <span className="cart-number">{size}</span>
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
            <form class="d-flex justify-content-center">
              {user?.email ? (
                <button
                  class="btn fs-4 bottom-border  fw-bold"
                  type="submit"
                  onClick={logout}
                >
                  <i class="fas fa-user-circle"></i> Logout
                </button>
              ) : (
                <Link to="/login">
                  <button class="btn fs-4 bottom-border  fw-bold" type="submit">
                    <i class="fas fa-user-circle"></i> Login
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
