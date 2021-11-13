import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Candles from "./components/Candles";

import "../style/general.css";

//in front end don't have access to this. backend person does.
export default class Cart extends Component {
  state = {
    // quantity: null,
    oneCandle: 1,
  };

  // changeNumber = (btn) => {
  //   console.log("it has been clicked");
  //   this.setState({
  //     quantity:
  //       btn === "increase"
  //         ? this.state.oneCandle + 1
  //         : this.state.oneCandle - 1,
  //   });
  // };

  render() {
    const { isLoading } = this.state;
    const { cart, addToCart, decreaseFromCart } = this.props;

    // const invoiceSubtotal = this.subtotal(rows);
    // const TAX_RATE = 0.07;

    // const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    // const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    return (
      <div>
        <h2 class="cart-title">My Cart</h2>

        {isLoading && <h1>...isLoading</h1>}
        {Object.keys(cart).length === 0 && (
          <div>
            You have no products in your cart. You can browse our collection of
            candles
            <Link to={`/candles/all`}>here</Link>.
          </div>
        )}
        {!isLoading &&
          Object.keys(cart).map((item) => {
            const { product, quantity } = cart[item];
            console.log(quantity, "this is quantity");
            return (
              <div key={product._id}>
                {/* do we need several LINK to show the number of candles chosen by the clien??? */}
                <Link to={`/candles/${product._id}/details`}>
                  Name: {product.name}
                </Link>
                Price: {product.price}
                <button onClick={() => addToCart(product, 1)}>+</button>
                Quantity: {quantity}
                <button onClick={() => decreaseFromCart(product, 1)}>-</button>
                <button onClick={() => decreaseFromCart(product, quantity)}>
                  Remove
                </button>
                {/* <button onClick={() => addToCart(product, -1)}>
                  Remove From Cart
                </button> */}
              </div>
            );
          })}
        <Link to="/checkout">Continue to Checkout</Link>
      </div>
    );
  }
}
