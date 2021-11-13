import userEvent from "@testing-library/user-event";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import useAuth from "../../hooks/useAuth";

function Review() {
  const commentRef = useRef();
  const [rating, setRating] = useState("2");
  const { user } = useAuth();
  const handleRating = (e) => {
    const comment = commentRef.current.value;
    commentRef.current.value=""

    const commentData = {
      comment,
      rating,
      name: user.displayName,
    };
    axios
      .post("https://enigmatic-fjord-26508.herokuapp.com/review", commentData)
      .then((result) => {});
      alert('Thanks for Your Valueable Comment')
    e.preventDefault();
  };
  const setNewRating = (rating) => {
    setRating(rating.toString());
    //   this.props.dispatch( fooActions.setRating(rating) )
  };
  return (
    <div className="container w-75  h-100 d-flex flex-column justify-content-center align-items-center text_color">
      <h1>Write Review</h1>
      <form action="" className="form-child" onSubmit={handleRating}>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            disabled
            value={user.displayName}
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "8rem" }}
            ref={commentRef}
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <StarRatings
          changeRating={setNewRating}
          starDimension="3rem"
        ></StarRatings>
        <div className="mt-3">
          <button type="submit" className="btn btn-about w-100">
            <i class="icon-circle-arrow-right icon-large"></i> Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default Review;
