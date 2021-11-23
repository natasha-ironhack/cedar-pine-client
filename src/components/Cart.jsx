import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../style/general.css";
import "../style/cart.css";
import Button from "react-bootstrap/Button";

//in front end don't have access to this. backend person does.
export default class Cart extends Component {
  state = {
    oneCandle: 1,
    itemsToBuy: null,
  };

  calculateTotalPrice = (cart) => {
    return (
      Object.keys(cart).reduce(
        (total, item) => total + cart[item].product.price * cart[item].quantity,
        0
      ) / 100
    );
  };

  render() {
    const { isLoading, itemsToBuy } = this.state;
    const { cart, addToCart, decreaseFromCart } = this.props;
    const cartItems = Object.keys(cart);
    const cartIsEmpty = cartItems.length === 0;
    // const invoiceSubtotal = this.subtotal(rows);
    // const TAX_RATE = 0.07;

    // const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    // const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    return (
      <div className="cart-container">
        <h2 class="cart-title">My Cart</h2>
        {isLoading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
        {cartIsEmpty && (
          <div>
            You have no products in your cart. You can browse our collection of
            candles
            <Link className="cart-link" to={`/candles/all`}>
              {" "}
              here
            </Link>
            .
          </div>
        )}
        {!isLoading &&
          cartItems.map((item) => {
            const { product, quantity } = cart[item];
            console.log(quantity, "this is quantity");
            return (
              <div key={product._id}>
                {/* do we need several LINK to show the number of candles chosen by the clien??? */}
                <Link to={`/candles/${product._id}/details`}>
                  Name: {product.name}
                </Link>
                Price: {product.currency || "€"}
                {product.price / 100}
                <button onClick={() => addToCart(product, 1)}>+</button>
                Quantity: {quantity}
                {/* <button onClick={() => this.handleClick(eachProduct)}>Buy</button>
              { itemToBuy && itemToBuy._id === eachProduct._id && <Payment itemToBuy={itemToBuy}/> } */}
                <Button
                  variant="outline-success"
                  onClick={() => decreaseFromCart(product, 1)}
                >
                  -
                </Button>
                <DeleteIcon
                  onClick={() => decreaseFromCart(product, quantity)}
                />
              </div>
            );
          })}
        {!cartIsEmpty && (
          <>
            €{this.calculateTotalPrice(cart)}
            <Link to="/checkout">Continue to Checkout</Link>
          </>
        )}
      </div>
    );
  }
}
