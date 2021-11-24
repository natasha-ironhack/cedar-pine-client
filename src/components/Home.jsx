import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/home.css";
// import "../style/general.css";
import CarouselImage from "./CarouselImage";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// import Box from "@mui/material/Box";
// import LinearProgress from "@mui/material/LinearProgress";
// import { DataGrid } from "@mui/x-data-grid";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";


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
        <div className="home-navbar2">
          <NavLink to="/candles/all">Candles</NavLink>
          <NavLink to="/waxmelts">Wax Melts</NavLink>
          <NavLink to="/diffusers">Diffusers</NavLink>
        </div>
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
                <div className="home-introduction-container">
                  <h5>Cedar & Pine</h5>
                  <hr />
                  <h3>
                    Cedar & Pine is an artisanal candle store located within the
                    Netherlands.
                  </h3>
                  <hr />
                  <h5>
                    Whether you are looking for a classic lavendar candle, a
                    seasonal candle, or want to try your hand at wax melts, you
                    will find it all with us.
                  </h5>
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
                          <Image src="/how-to-candle.jpg" thumbnail />
                        </Col>

                        <Col xs={6} md={4}>
                          <Image src="/how-to-candle.jpg" thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                          <Image
                            src="/how-to-candle.jpg"
                            label="test"
                            thumbnail
                          />
                          <div class="text-on-image3">
                            <h3>
                              {" "}
                              Learn how to make candles
                              <Link to="https://www.candlescience.com/learning/how-to-make-a-soy-candle/">
                                {" "}
                                here.
                              </Link>
                              here!{" "}
                            </h3>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>

                {/* <div className="head-text">
                    <div className="head-image">
                      <img
                        src={require("../ images / Header.png")}
                        alt="Freedom Blog"
                      />
                    </div>
                    <div class="text-on-image">
                      <h3> Welcome to my Blog </h3>
                      <p> FREEEEDOM </p>
                    </div>
                  </div> */}

                {/* <img
                    className="d-block w-100"
                    src="/how-to-candle.jpg"
                    alt="how-to-candle-pic"
                    fluid
                  /> */}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
