import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/home.css";
import "../style/general.css";
//
import CarouselImage from "./CarouselImage";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Newsletter from "./Newsletter";

//in front end don't have access to this. backend person does.
export default class Home extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    //console.log(process.env.REACT_APP_SERVER_API);
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    // const { isOwner, addToCart } = this.props;

    return (
      <div className="home-container">
        <p>
          *Exclusive: Click{" "}
          <a href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}>here</a> to
          get 90% off your next purchase.
        </p>

        <div>
          <CarouselImage />

          <div className="card-container">
            {isLoading && (
              <h1>
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              </h1>
            )}
            {!isLoading && (
              <div>
                <div className="home-introduction-container ">
                  <h3>Cedar & Pine</h3>
                  <hr />
                  <h3>
                    Cedar & Pine is an artisanal candle store located within the
                    Netherlands.
                  </h3>
                  <hr />
                  <h4>
                    Whether you are looking for a classic lavender candle, a
                    seasonal candle, or want to try your hand at wax melts, you
                    will find it all with us.
                  </h4>
                  <hr />
                </div>
                <div className="home-links-container">
                  <div className="head-image">
                    <Container>
                      <Row>
                        {/* <Col xs={6} md={4}>
                        <Image src="/how-to-candle.jpg" rounded />
                      </Col> */}
                        <Col xs={6} md={4}>
                          <Link to="/candles/all">
                            <Image src="/candle44.jpg" thumbnail />
                          </Link>
                        </Col>

                        <Col xs={6} md={4}>
                          <Link to="/about-us">
                            <Image src="/about-us-home-pic.jpg" thumbnail />
                          </Link>
                          {/* <Image src="/about-us-home-pic.jpg" thumbnail /> */}
                        </Col>
                        <Col xs={6} md={4}>
                          <a href="https://www.candlescience.com/learning/how-to-make-a-soy-candle/">
                            <Image
                              src="/how-to-candle1.jpg"
                              label="test"
                              thumbnail
                            />{" "}
                          </a>
                        </Col>
                        <br />
                      </Row>
                    </Container>
                  </div>
                </div>
                <Newsletter />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
