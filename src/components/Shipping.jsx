import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Footer from "./components/Footer";
import "../style/general.css";
import "../style/shipping.css";

function Shipping() {
  return (
    <div className="shipping-container page-height">
      <h3>SHIPPING</h3>
      <p>The cost for shipping within the Netherlands is €4.99.</p>
      <p>For Belgium and Germany, the cost of shipping is €8.99.</p>
    </div>
  );
}

export default Shipping;
