import React from "react";
import img1 from '../../../../images/carousel1.jpg'
import img2 from '../../../../images/carousel2.jpg'
import img3 from '../../../../images/carousel3.jpg'
import './Banner.css'
function Banner() {
  return (
    <div className="container">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
         
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100 rounded" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>SPEEDMASTER CHRONOSCOPE</h3>
              <p>
              Discover history reborn in this unique collection inspired by OMEGA’s chronograph watchmaking from the 1940s. It’s a Speedmaster quite unlike any other.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100 rounded" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>SEAMASTER AQUA TERRA SMALL SECONDS</h3>
              <p>
              Discover OMEGA’s eye-catching collection of Aqua Terra timepieces with small seconds at 6 o’clock. Ocean-inspired watches in 38 and 41 mm with striking subdials set on equally beautiful dials, in a range of exceptional materials including OMEGA’s own 18K Sedna™ gold.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100 rounded" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>OMEGA EYEWEAR</h3>
              <p>
              OMEGA’s stylish sunglasses, take their design cues from the Swiss brand’s world-famous watches. The looks are cool and contemporary - the quality exceptional. If you like to see the world through a luxurious lens, we have you covered.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
