import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product/Product";
import "./Products.css";

function Products() {
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
      <div className="container mb-5">
        <h1 className="my-5 text_color">GRAB THE BEST LUXURY WATCH BRANDS</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
