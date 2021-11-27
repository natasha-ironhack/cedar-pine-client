import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../style/general.css";
import "../style/cart.css";
//
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Payment from "./Payment";

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

    return (
      <div className="cart-container page-height">
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
            return (
              <div key={product._id}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      {/* <th>#</th> */}
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link to={`/candles/${product._id}/details`}>
                          {product.name}
                        </Link>
                      </td>
                      <td>
                        {product.currency || "€"}
                        {product.price / 100}
                      </td>
                      <td>
                        <Button
                          variant="outline-secondary"
                          onClick={() => addToCart(product, 1)}
                        >
                          +
                        </Button>
                        <span className="quantity-in-cart"> {quantity} </span>
                        <Button
                          variant="outline-secondary"
                          onClick={() => decreaseFromCart(product, 1)}
                        >
                          -
                        </Button>
                        <DeleteIcon
                          className="delete-icon"
                          onClick={() => decreaseFromCart(product, quantity)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            );
          })}
        {!cartIsEmpty && (
          <>
            Total: €{this.calculateTotalPrice(cart)}
            <br />
            <Link to="/checkout">Continue to Checkout</Link>
            {/* {itemsToBuy && itemsToBuy._id === this.state.product._id && (
              <Payment itemsToBuy={itemsToBuy} />
            )} */}
          </>
        )}
      </div>
    );
  }
}
