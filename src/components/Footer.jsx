import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../style/general.css";
import "../style/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="container footer">
        <div className="footer-container">
          <div className="footer-card contact-info">
            <p>Contact Information</p>
            <ul>
              <li>Number </li>
              <li>Email</li>
              <li>Adress</li>
            </ul>
          </div>

          <div className="footer-card customer-service">
            <p>Customer Service </p>
            <ul>
              <li>Shipping & Return</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-card follow">
            <p>Follow Us</p>
            <ul>
              <li>Facebook </li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
