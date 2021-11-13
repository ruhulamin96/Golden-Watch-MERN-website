import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ product }) {
  const { img, desc, price, name, _id } = product;
  return (
    <div>
      <div class="col">
        <div class="card h-100 border-0">
          <div className="img-hover-zoom">
            <img src={img} class="card-img-top" alt="..." />
          </div>
          <div class="card-body d-flex justify-content-end flex-column">
            <h4 class="card-title text_color fw-bold">{name}</h4>
            <p class="card-text">{desc}</p>
            <h5 className=" text_color fw-bold">Price: {price}$</h5>
            <Link to={`/placeorder/${_id}`}>
              {" "}
              <button className=" product-about w-75 fw-bold">
                <span>
                  <i class="fas fa-cart-plus"></i>
                </span>{" "}
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;