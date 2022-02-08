import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllProducts.css";
function AllProducts() {
  const [allProducts, setallProducts] = useState([]);
  const [isload, setIsload] = useState(true);
  useEffect(() => {
    axios
      .get("https://enigmatic-fjord-26508.herokuapp.com/products")
      .then((result) => {
        setallProducts(result.data);
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
    <div>
      <div className="container mt-5 ">
        <h3 className="my-5 text_color fw-bold" style={{letterSpacing:"5px"}}>
          THE WORLD’S BEST LUXURY WATCH BRANDS
        </h3>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {allProducts.map((product) => (
            <div class="col">
              <div class="card h-100 border-0 ">
                <div className="img-hover-zoom">
                  <img src={product.img} class="card-img-top" alt="..." />
                </div>
                <div class="card-body d-flex justify-content-end flex-column">
                  <h5 class="card-title text_color fw-bold">{product.name}</h5>
                  <p class="card-text">{product.desc}</p>
                  <h5 className="text_color fw-bold">
                    Price: ${product.price}
                  </h5>
                  <div className="">
                    <Link to={`/placeorder/${product._id}`}>
                      <button className=" product-about w-75 fw-bold ">
                        <span className="me-3">
                          <i class="fas fa-cart-plus"></i>
                        </span>
                        SHOP NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
