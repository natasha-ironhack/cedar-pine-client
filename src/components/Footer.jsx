import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/general.css";
import "../style/footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
// circular twitter icon: AiFillTwitterCircle;

export default class Footer extends Component {
  render() {
    return (
      <div id="footer" className="container footer">
        <div className="footer-container">
          <div className="footer-card contact-info">
            <p>Contact Information</p>
            <ul>
              <li>Number +31 6 8014 3228</li>
              <li>Email: cedar&pine@live.nl</li>
              <li>Address: Oude Koeien 49C, 5223KD Vught, Nederland</li>
            </ul>
          </div>

          <div className="footer-card customer-service">
            <p>Customer Service </p>
            <ul>
              <li>
                <Link to="/shipping">Shipping & Return</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-card follow">
            <p>Follow Us</p>
            <ul>
              <li>
                <a href={`https://www.facebook.com`}>
                  <FacebookOutlinedIcon></FacebookOutlinedIcon>
                </a>
              </li>
              <li>
                {/* <a href={`https://www.facebook.com`}>
                  <img
                    className="instagram-pic"
                    src="/instagram-icon.png"
                    alt="instagram icon"
                  />
                </a> */}
                <a href={`https://www.instagram.com/`}>
                  <BsInstagram></BsInstagram>
                </a>
              </li>
              <li>
                <a href={`https://twitter.com/?lang=en`}>
                  <FiTwitter></FiTwitter>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
