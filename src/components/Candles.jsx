//class component b/c getting info from backend and adding it to display,
//, so might need to use a state
//when in doubt use a class component

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Cart from "./Cart";

//in front end don't have access to this. backend person does.
export default class Candles extends Component {
  state = {
    listOfCandles: null,
    isLoading: true,
    itemsToBuy: null
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
        <h2>CANDLES</h2>

        {isLoading && <h1>...isLoading</h1>}
        {isOwner && (
          <Link to={`/candles/create`}>
            <button>CREATE</button>
          </Link>
        )}

        {!isLoading &&
          listOfCandles.map((oneCandle) => {
            return (
              <Row class="cards" xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={oneCandle.image} />
                      <Card.Body>
                        {/* <Card.Title>
                          <Link to={`/candles/${oneCandle._id}/details`} />
                        </Card.Title> */}
                        <Card.Text>
                          <Card.Title>
                            <Link to={`/candles/${oneCandle._id}/details`}>
                              {oneCandle.name}
                            </Link>
                          </Card.Title>
                          
                          <li>{oneCandle.price}</li>

                          <button onClick={() => addToCart(oneCandle, 1)}>
                            Add to Cart
                          </button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            );
          })}
      </div>
    );
  }
}

{/* <Card class="card-container" style={{ width: "18rem" }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  // <Card.Body class="card-body">
    {/* <Card.Title>CANDLES</Card.Title>

                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text> */}
    {/* <Card.Text key={oneCandle._id}></Card.Text>

    <Button variant="primary">
      <Link to={`/candles/${oneCandle._id}/details`}>
        <ul>
          <>
            {oneCandle.image && (
              <img class="candleImage" src={oneCandle.image} alt="imagePic" />
            )}
            <>
              <li>{oneCandle.name}</li>
            </>
            <li>{oneCandle.price}</li>
          </>
        </ul>
      </Link>
    </Button>
    <Button>
      {" "}
      <button onClick={() => addToCart(oneCandle, 1)}>Add to Cart</button>
    </Button>
  </Card.Body> */}
// </Card>;
