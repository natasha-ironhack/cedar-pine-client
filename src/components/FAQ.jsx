import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Footer from "./components/Footer";
import "../style/general.css";
import "../style/faq.css";

function FAQ() {
  return (
    <div className="faq-container">
      <h3>FAQ</h3>
      <p>
        QUESTION: How much is shipping?
        <br />
        ANSWER: €4.99 for the Netherlands, €8.99 for Belgium and Germany.
      </p>
      <p>
        QUESTION: How long do I have to wait for my order to arrive?
        <br />
        ANSWER: If the delivery address is within the Netherlands, you can expect your order to arrive within 3-4 business days. If the delivery address is in Belgium or Germany, you can expect an arrival date within 4-5 business days.
      </p>
      <p>
        QUESTION: What if my product arrives damaged?
        <br />
        ANSWER: We wrap all of our products in bubble-wrap and ensure our
        products are shipped with the utmost care. However, should a product
        arrive damaged, please feel free to email us, so we can send you another
        product, or give you a refund within 30 days of the product's purchase.{" "}
      </p>
      <p>
        QUESTION: Can I get a refund?
        <br />
        ANSWER: If for any reason you are unhappy with your product, you may
        request for a refund within 30 days of the item's purchase.
      </p>
    </div>
  );
}

export default FAQ;
