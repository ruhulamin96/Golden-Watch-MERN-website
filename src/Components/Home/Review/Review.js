import axios from "axios";
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

function Review() {
  const [review, setReviwe] = useState([]);
  useEffect(() => {
    axios.get("https://enigmatic-fjord-26508.herokuapp.com/review").then((result) => {
      setReviwe(result.data);
    });
  }, [review]);

  return (
    <div className="container" >
      <h2 className="text_color my-5 fw-bold" style={{letterSpacing:"3px"}}>PRODUCT REVIEW</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {review.map((review) => (
          <div class="col">
            <div class="card h-100">
              <div class="card-body d-flex justify-content-end flex-column">
                <h5 class="card-title">{review?.name}</h5>
                <p>Average Rating: {(review?.rating)}</p>
                <p class="card-text">{review?.comment}</p>

                <StarRatings
                  rating={parseFloat(review?.rating)}
                  starRatedColor="#C40D2E"
                  starDimension="1.3rem"
                ></StarRatings>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
