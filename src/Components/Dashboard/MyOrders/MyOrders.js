import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

function MyOrders( {handleProduct}) {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  const [isload, setIsLoad] = useState(true);
  useEffect(() => {
    axios
      .get(`https://enigmatic-fjord-26508.herokuapp.com/placeOrders?email=${user.email}`)
      .then((result) => { setIsLoad(false)
        setMyOrder(result.data)});
  }, [myOrder]);
  const cancelOrder = (id) => {
    const confirm = window.confirm("Do you want to cancel this product");
    if (confirm) {
      axios.delete(`https://enigmatic-fjord-26508.herokuapp.com/placeOrders/${id}`).then((result) => {
        if (result.data.deletedCount) {
          const filter = myOrder.filter((order) => order._id !== id);
          setMyOrder(filter);
          handleProduct()
        }
        setIsLoad(false)
      });
    }
  };
  if(isload){
    return(<div className="d-flex align-items-center justify-content-center h-100 position-absolute w-75">
    <div
      class="spinner-border"
      style={{ width: "4rem ", height: "4rem" }}
      role="status"
    >
    </div>
  </div>)
  }
  return (
    <div className="container">
      <h3 className="my-2">YOUR ORDERS</h3>
      <div className="row">
        <div className="col-md-4">
          <h3 className="my-3">Product Name</h3>
          <hr />
        </div>
        <div className="col-md-4">
          <h3 className="my-3">Price</h3>
          <hr />
        </div>
        <div className="col-md-4">
          <h3 className="my-3">Status</h3>
          <hr />
        </div>
        {myOrder.map((order) => (
          <>
            <div className="col-md-4 mt-3 ">{order?.productName}</div>
            <div className="col-md-4 mt-3">{order?.price} $</div>
            <div className="col-md-4 mt-3">
              {order?.isApproved ? (
                <button className="btn btn-success me-3" >Approved</button>
              ) : (
                <button className="btn btn-secondary me-3">Not Approved</button>
              )}
              <button
                className="btn btn-danger"
                onClick={() => cancelOrder(order._id)}
              >
                {" "}
                <i class="fa fa-trash-o fa-lg"> </i> Cancel Order
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
