import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Footer from "./components/Footer";
import "../style/general.css";
import "../style/about-us.css";

function AboutUs() {
  return (
    <div className="aboutUs-container">
      <h3>About Cedar & Pine</h3>
      <hr />
      <div className="aboutUs-container-child">
      <p>
        Cedar & Pine was founded by two expats in the Netherlands. What brought
        them together was their love of fragrance and candles. Hoping to spread
        their joy and passion unto others, they got together and started making
        candles all the way back to 2011. Now, ten years later, they are both
        still going strong with their business. Make sure to check out their
        facebook and instagram pages for the latest updates regarding their
        store and products!
      </p>
      <img className="about-us-pic" src="/about-us-pic-4.jpg" alt="About Us" />
    </div>
    </div>
  );
}

export default AboutUs;
