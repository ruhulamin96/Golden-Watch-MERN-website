import React, { useRef } from "react";
import axios from 'axios'
import { useHistory } from "react-router";

function MakeAdmin() {
  const adminRef=useRef();
  const history= useHistory()
    const handleAdmin=(e)=>{
      const makeAdmin={email:adminRef.current.value};
      adminRef.current.value=""
      axios.put(`https://enigmatic-fjord-26508.herokuapp.com/users/`,makeAdmin)
      .then(result=>{ 
        if(!result.data.value){
         alert('please create account first');
         history.push('/register')
        }else{

          alert('Admin Created Successful')
        }
      });
      
e.preventDefault()
    }
  return (
    <div className="container w-50 ">
      <h1 className="my-3">Make an Admin</h1>
      <div className="row">
          <form onSubmit={handleAdmin} >
        <div class="input-group mb-3">
          <input
          ref={adminRef}
            type="email"
            class="form-control"
            placeholder="Email Address"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            required
          />
          <button type='submit' className="btn btn-about"><span id="basic-addon2">
           Submit
          </span></button>
        </div>
          </form>
      </div>
    </div>
  );
}

export default MakeAdmin;
