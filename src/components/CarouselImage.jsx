import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "../style/general.css";
import "../style/carousel.css";
import Carousel from "react-bootstrap/Carousel";
// import Item from "react-bootstrap/Item";
// import Caption from "react-bootstrap/Caption";

export default class CarouselImage extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/candle1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to Cedar & Pine</h3>
            <p>
              We're happy to have you here. Feel free to browse our extensive
              candle collection below.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/seasonal-candles.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Seasonal Candles</h3>
            <p>
              Enjoy the holiday seasons this year with 20% off our seasonal
              candles. *Automatic discounts to begin December 1st. *Applicable
              for members only
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/about-us-cover.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>About Us</h3>
            <p>Learn more about us and how we began our company right here.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
