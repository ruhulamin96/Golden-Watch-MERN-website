import axios from "axios";
import React, { useEffect, useState } from "react";
function ManageProduct() {
  const [manageProduct, setManageProduct] = useState([]);
  const [isload, setIsLoad] = useState(true);
  useEffect(() => {
    axios.get(`https://enigmatic-fjord-26508.herokuapp.com/products`).then((result) => {
      setManageProduct(result.data);
      setIsLoad(false);
    }); 
  }, []);
  const cancelOrder = (id) => {
    const confirm = window.confirm("Do You Want to Permanently Delete This Product");
    if (confirm) {
      axios.delete(`https://enigmatic-fjord-26508.herokuapp.com/products/${id}`).then((result) => {
        if (result.data.deletedCount) {
          const filter = manageProduct.filter((order) => order._id !== id);
          setManageProduct(filter);
        }
      });
    }
  };
  if (isload) {
    return (
      <div className="d-flex align-items-center justify-content-center h-100 position-absolute w-75">
        <div
          class="spinner-border"
          style={{ width: "4rem ", height: "4rem" }}
          role="status"
        ></div>
      </div>
    );
  }
  return (
    <div className="container mt-3">
      <h1 className="mt-3">Manage Product</h1>
      <div className="row mt-3">
        <div className="col-md-4 ">
          <h3>Product Name</h3>
          <hr />
        </div>
        <div className="col-md-4">
          <h3>Price</h3>
          <hr />
        </div>
        <div className="col-md-4">
          <h3>Status</h3>
          <hr />
        </div>
        {manageProduct.map((order) => (
          <>
            <div className="col-md-4 my-2">{order?.name}</div>
            <div className="col-md-4 my-2">{order?.price} $</div>
            <div className="col-md-4 my-2">
              <button
                className="btn btn-danger"
                onClick={() => cancelOrder(order._id)}
              >
                <i class="fas fa-trash-alt"></i> Delete Product
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ManageProduct;
