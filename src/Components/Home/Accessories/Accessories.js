import axios from "axios";
import React, { useEffect, useState } from "react";

function Accessories() {
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    axios
      .get("https://enigmatic-fjord-26508.herokuapp.com/accessories")
      .then((result) => setAccessories(result.data));
  }, []);
  return (
    <div className="container " >
      <h2 className=" text_color fw-bold" style={{ letterSpacing: "3px" }}>
        WATCH ACCESSORIES
      </h2>
      <div class="row row-cols-1 row-cols-md-4 g-4 border-0" >
        {accessories.map((accessories) => (
          <div class="col " data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="50">
            <div class="card h-100 border-0">
              <div className="img-hover-zoom">
                <img src={accessories?.img} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">{accessories?.name}</h5>
                <p class="card-text">{accessories?.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessories;
