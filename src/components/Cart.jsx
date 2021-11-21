import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../style/general.css";

//in front end don't have access to this. backend person does.
export default class Cart extends Component {
  state = {
    oneCandle: 1,
    itemsToBuy: null,
  };

  render() {
    const { isLoading, itemsToBuy } = this.state;
    const { cart, addToCart, decreaseFromCart } = this.props;

    // const invoiceSubtotal = this.subtotal(rows);
    // const TAX_RATE = 0.07;

    // const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    // const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    return (
      <div>
        <h2 class="cart-title">My Cart</h2>

        {isLoading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
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
                Price: {product.currency || "€"}
                {product.price / 100}
                <button onClick={() => addToCart(product, 1)}>+</button>
                Quantity: {quantity}
                {/* <button onClick={() => this.handleClick(eachProduct)}>Buy</button>
              { itemToBuy && itemToBuy._id === eachProduct._id && <Payment itemToBuy={itemToBuy}/> } */}
                <button onClick={() => decreaseFromCart(product, 1)}>-</button>
                <button onClick={() => decreaseFromCart(product, quantity)}>
                  <DeleteIcon />
                </button>
                <hr />
                {product.currency || "€"}
                {Object.keys(cart).reduce(
                  (total, item) =>
                    total + cart[item].product.price * cart[item].quantity,
                  0
                ) / 100}
              </div>
            );
          })}
        <Link to="/checkout">Continue to Checkout</Link>
      </div>
    );
  }
}
