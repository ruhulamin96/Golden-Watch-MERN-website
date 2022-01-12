import axios from "axios";
import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs/AboutUs";
import Accessories from "./Accessories/Accessories";
import Footer from "./Footer/Footer";
import Banner from "./Header/Banner/Banner";
import NavigationBar from "./Header/NavigationBar/NavigationBar";
import Products from "./Products/Products";
import Review from "./Review/Review";

function Home() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    axios
      .get("https://enigmatic-fjord-26508.herokuapp.com/products")
      .then((result) => {
        setProducts(result.data.slice(0, 6));
        setLoad(false);
      });
  }, []);
  if (load) {
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
    <div>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Products></Products>
      <Accessories></Accessories>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}

export default Home;
