import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import carousel1 from '../../../../images/carousel1.jpg'
import carousel2 from '../../../../images/carousel2.jpg'
import carousel3 from '../../../../images/carousel3.jpg'
function PlaceOrder({ handleProduct}) {
  const images=[carousel1, carousel2, carousel3]
  const [selectedImg, setSelectedImg]=useState(images[0])
  const [product, setProduct] = useState();
  const [isLoad, setisLoad] = useState(true);
  const { user } = useAuth();
  const _id = useParams();
  const history = useHistory();
  // const phoneRef = useRef();


  useEffect(() => {
    axios
      .get(`https://enigmatic-fjord-26508.herokuapp.com/products/${_id.Id}`)
      .then((result) => {
        setProduct(result.data);
        setisLoad(false);
      });
  }, []);

  
  const handleOrder = (e) => {
    // const phone = phoneRef.current.value;
    alert('order confirm')
    const orderData = {
      name: user.displayName,
      email: user.email,
      productName: product.name,
      price: product.price,
    
      id: product._id
    };
    // console.log(orderData)
    axios
      .post(
        "https://enigmatic-fjord-26508.herokuapp.com/placeOrders",
        orderData
      )
      .then((result) => {
        if (result.data.insertedId) {
          alert("order is placed successfully");
          handleProduct()
          history.push("/");
        }
      });
    // phoneRef.current.value = "";
    e.preventDefault();
  };
 images.unshift(product?.img)
  if (isLoad) {
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
      <h1 className="mt-3 text_color">PLACE YOUR ORDER</h1>
      <div className="row mt-5">
        <div className="col-md-4">
          { images.map((im, index)=><img style={{border:selectedImg===im?" 5px solid green":""}}
          onClick={()=>setSelectedImg(im)}
          className="w-50 m-2" src={im} alt="" />)}
          
        </div>
        <div className="col-md-4">
          <img
            style={{ borderRadius: "1rem" }}
            src={selectedImg}
            className="w-100"
            alt=""
          />
        </div>
        <div className="col-md-4 d-flex   flex-column">
          <h3 className="my-3 fw-bold">{product?.name}</h3>
          <p>{product?.desc}</p>
          <h4 className="fw-bold">Price: $ {product?.price}</h4>
          <div>
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              class="btn btn-about mt-3"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Place Your Order
            </button>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      Purchase Information
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-start">
                    <form onSubmit={handleOrder}>
                      <div class="mb-3 ">
                        <label
                          for="formGroupExampleInput"
                          className="form-label "
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Example input placeholder"
                          value={user?.displayName}
                          disabled
                        />
                      </div>
                      <div class="mb-3 ">
                        <label
                          for="formGroupExampleInput"
                          className="form-label "
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Example input placeholder"
                          value={user?.email}
                          disabled
                        />
                      </div>
                      <div className="d-flex">
                        <div class="col-md-6">
                          <label for="inputEmail4" class="form-label">
                            Product Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputEmail4"
                            value={product?.name}
                            disabled
                          />
                        </div>
                        <div class="col-md-6">
                          <label for="inputPassword4" class="form-label">
                            Price
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputPassword4"
                            value={`${product?.price}$`}
                            disabled
                          />
                        </div>
                      </div>
                      {/* <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">
                          Phone Number
                        </label>
                        <input
                          ref={phoneRef}
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput2"
                          
                          placeholder="Phone Number Must required"
                          required
                        />
                      </div> */}
                      <div className="text-center">
                        <button
                        // onClick={()=>handleAddproduct()}
                          class="btn btn-about"
                          data-bs-dismiss="modal"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
