import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import './Navigation.css'
function NavigationBar() {
    const {user, logout}=useAuth()
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link class="navbar-brand fs-3" to="/">
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
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link  class="nav-link active fs-4 bottom-border" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link  class="nav-link active fs-4 bottom-border" aria-current="page" to="/allproducts">
                  Explore Watch
                </Link>
              </li>
              <li class="nav-item">
                {user?.email && <Link class="nav-link active fs-4 bottom-border" to="/newdashboard">
                  Dashboard
                </Link>}
              </li>
              
            </ul>
            <form class="d-flex">
            
             { user?.email?<button class="btn fs-4 bottom-border" type="submit" onClick={logout}> 
             <i class="fas fa-user-circle"></i>  Logout
              </button> :<Link to="/login">
              <button class="btn fs-4 bottom-border" type="submit">
              <i class="fas fa-user-circle"></i>  Login
              </button></Link>}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
