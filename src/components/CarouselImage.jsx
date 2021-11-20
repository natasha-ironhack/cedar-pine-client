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
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/melting-candle-on-cool-blue-background-picture-id1016998564"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.nu.nl/m/2w2xghiaiav3_wd1280.jpg/patrick-ster-uit-animatieserie-spongebob-squarepants-krijgt-eigen-serie.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.nu.nl/m/2w2xghiaiav3_wd1280.jpg/patrick-ster-uit-animatieserie-spongebob-squarepants-krijgt-eigen-serie.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
