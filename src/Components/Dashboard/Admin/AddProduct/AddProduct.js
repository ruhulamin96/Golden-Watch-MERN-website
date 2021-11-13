import axios from 'axios'
import React, { useRef } from 'react'

function AddProduct() {
    const nameRef=useRef()
    const priceRef=useRef()
    const descRef=useRef()
    const imgRef=useRef();
    
    const handleAddProduct=(e)=>{
        const name=nameRef.current.value;
        const price=priceRef.current.value;
        const desc=descRef.current.value;
        const img=imgRef.current.value;
        const newProduct={name, price, desc, img}
        console.log(newProduct)
        axios.post('https://enigmatic-fjord-26508.herokuapp.com/products', newProduct)
        .then(result=>console.log(result.data))
        alert('add product successfull')
        e.prventDefault()
    }
    
    return (
        <div className="container w-75">
          
           <div className="row d-flex flex-direction-row justify-content-center align-items-center" style={{height:"80vh"}}>
           <form action="" className="form-child" onSubmit={handleAddProduct}>
           <h1>Add A Product</h1>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={nameRef}
            required
          />
          <label for="floatingInput">Product Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={priceRef}
            required
          />
          <label for="floatingInput" >
           Price
          </label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="url"
            class="form-control"
            id="floatingPassword"
            placeholder="https://example.com"
            ref={imgRef}
            required
          />
          <label for="floatingPassword">Image Url</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "8rem" }}
            ref={descRef}
          ></textarea>
          <label for="floatingTextarea2">Description</label>
        </div>
        <div>
          <button type="submit" className="btn btn-about w-100">
           Add Product
          </button>

          
        </div>
      </form>
           </div>
        </div>
    )
}

export default AddProduct
