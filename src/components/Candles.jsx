import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/candles.css";
import "../style/general.css";
//
import CarouselImage from "./CarouselImage";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// import Box from "@mui/material/Box";
// import LinearProgress from "@mui/material/LinearProgress";
// import { DataGrid } from "@mui/x-data-grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
      <div className="candle-page-container">
        <p>
          *Exclusive: Click{" "}
          <a href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}>here</a> to
          get 90% off your next purchase.
        </p>
        <CarouselImage />

        {/* <DataGrid
          filterModel={{
            items: [
              {
                columnField: "commodity",
                operatorValue: "contains",
                value: "",
              },
            ],
          }}
        /> */}

        <div className="card">
          <h2 className="candles-title">CANDLES</h2>
          {/* <hr /> */}
          <div className="candles-filter">
            <Row className="g-2">
              <Col md>
                <Form.Select aria-label="Floating label select example">
                  <option>Filter</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md>
                <Form.Select aria-label="Floating label select example">
                  <option>Sort</option>
                  <option value="1">Price: Low to High</option>
                  <option value="2">Price: High to Low</option>
                  <option value="3">Availability</option>
                </Form.Select>
              </Col>
            </Row>
          </div>

          <div className="card-container">
            {isLoading && (
              <h1>
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              </h1>
            )}
            {isOwner && (
              <Link to={`/candles/create`} className="candle-create-button">
                <button>CREATE</button>
              </Link>
            )}
            <br />
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
                              {oneCandle.currency || "???"}
                              {oneCandle.price / 100}
                            </li>

                            <Button
                              variant="outline-secondary"
                              onClick={() => addToCart(oneCandle, 1)}
                            >
                              Add to Cart
                            </Button>
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
