//class component b/c getting info from backend and adding it to display,
//, so might need to use a state
//when in doubt use a class component

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>CANDLES</Card.Title>

                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text key={oneCandle._id}></Card.Text>

                  <Button variant="primary">
                    <Link to={`/candles/${oneCandle._id}/details`}>
                      <ul>
                        <>
                          {oneCandle.image && (
                            <img src={oneCandle.image} alt="imagePic" />
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
                    <button onClick={() => addToCart(oneCandle, 1)}>
                      Add to Cart
                    </button>
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    );
  }
}
