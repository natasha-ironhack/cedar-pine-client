import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Cart from "./Cart";
import "../style/candles.css";
import "../style/general.css";
import CarouselImage from "./CarouselImage";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

//in front end don't have access to this. backend person does.
export default class Candles extends Component {
  state = {
    listOfCandles: null,
    isLoading: true,
    itemsToBuy: null,
  };

  componentDidMount() {
    //console.log(process.env.REACT_APP_SERVER_API);
    axios
      .get(`${process.env.REACT_APP_API_HOST}/candles/all`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({ listOfCandles: response.data, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  }

  render() {
    const { isLoading, listOfCandles } = this.state;
    const { isOwner, addToCart } = this.props;

    return (
      <div>
        <CarouselImage />

        <div className="card">
          {/* <h2 className="candles-title">CANDLES</h2> */}

          <div className="card-container">
            {isLoading && (
              <h1>
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
              </h1>
            )}
            {isOwner && (
              <Link to={`/candles/create`}>
                <button>CREATE</button>
              </Link>
            )}

            {!isLoading &&
              listOfCandles.map((oneCandle) => {
                return (
                  <Row className="cards" xs={1} md={1} classNameName="g-4">
                    {/* {Array.from({ length: 1 }).map((_, idx) => ( */}
                    <Col>
                      <Card>
                        <Card.Img variant="top" src={oneCandle.image} />
                        <Card.Body>
                          {/* <Card.Title>
                          <Link to={`/candles/${oneCandle._id}/details`} />
                        </Card.Title> */}
                          <Card.Text>
                            <Card.Title>
                              <Link
                                className="link"
                                to={`/candles/${oneCandle._id}/details`}
                              >
                              {/* <li> */}
                                {oneCandle.name}
                                {/* </li> */}
                              </Link>
                            </Card.Title>

                            <li>
                              {oneCandle.currency || "$"}
                              {oneCandle.price / 100}
                            </li>

                            <button onClick={() => addToCart(oneCandle, 1)}>
                              Add to Cart
                            </button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    {/* ))} */}
                  </Row>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
