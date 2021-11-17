//class component b/c getting info from backend and adding it to display,
//, so might need to use a state
//when in doubt use a class component

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Cart from "./Cart";

//in front end don't have access to this. backend person does.
export default class Candles extends Component {
  state = {
    listOfCandles: null,
    isLoading: true,
  };

  componentDidMount() {
    //console.log(process.env.REACT_APP_SERVER_API);
    axios
      .get(`${process.env.REACT_APP_API_HOST}/candles/all`, {withCredentials: true})
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
              <div key={oneCandle._id}>
                <Link to={`/candles/${oneCandle._id}/details`}>
                  <ul>
                    {/* <li> */}
                    {/* {oneCandle.image} */}
                    {oneCandle.image && <img src={oneCandle.image} alt="imagePic"/>}
                    {/* <img src={this.props.picture} /> */}
                    {/* </li> */}
                    <li>{oneCandle.name}</li>
                    <li>{oneCandle.price}</li>
                  </ul>
                </Link>
                <button onClick={() => addToCart(oneCandle, 1)}>
                  {/* Maybe need to transfer 1 or oneCandle to state in cart, then when updating with 
                  this.setState for the button, it'll change the state in cart.jsx from oneCandle: 1 to
                  2 or 3 or 10 */}
                  {/* want to make it so when clicked, adds to the quantity button on the 
                cart page, instead of adding multiple listings of the same candle */}
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    );
  }
}
