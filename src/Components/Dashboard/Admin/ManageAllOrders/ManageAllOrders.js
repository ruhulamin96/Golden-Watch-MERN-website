import axios from "axios";
import React, { useEffect, useState } from "react";
function ManageAllOrders() {
  
  const [adminAllOrder, setAdminAllOrder] = useState([]);
  const [isload, setIsLoad]=useState(true)
  useEffect(() => {
    axios
      .get(`https://enigmatic-fjord-26508.herokuapp.com/placeOrders`)
      .then((result) => {
          setAdminAllOrder(result.data);
          setIsLoad(false)
        });
  }, [adminAllOrder]);
  const statusPending=(id)=>{
    

      axios.put(`https://enigmatic-fjord-26508.herokuapp.com/placeOrders/${id}`)
      .then(result=>{
        if(result.data.modifiedCount){
            
        //   const filter=myOrder.filter(order=>order._id!==id);
        //   setMyOrder(filter);
        }
        
      })
    
  }
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
      <h1 className="my-5">Manage All Orders</h1>
      <div className="row">
        <div className="col-md-4">
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
        {adminAllOrder.map(order=><>
         <div className="col-md-4 my-2">{order?.productName}</div>
         <div className="col-md-4 my-2">{order?.price} $</div>
         <div className="col-md-4 my-2">
            { order.isApproved? <button className="btn btn-success" >Approved</button>: <button className="btn btn-secondary" onClick={()=>statusPending(order._id)}>Pending</button>}
             </div>
        </>)}
      </div>
    </div>
  );
}

export default ManageAllOrders;
