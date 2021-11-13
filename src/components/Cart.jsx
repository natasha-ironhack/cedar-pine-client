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

//in front end don't have access to this. backend person does.
export default class Cart extends Component {
  state = {
    quantity: null,
  };

  //want to remove indivdual products in cart
  removeFromCart = () => {};

  //REFERENCE:
  // removeItemFromBasket(itemId) {
  //   const items = this.stat.items.filter(item => item.id !== itemId)

  //   this.setState({ items })
  // }
  // ccyFormat = (num) => {
  //   return `${num.toFixed(2)}`;
  // };

  // priceRow = (qty, prc) => {
  //   return qty * prc;
  // };

  // createRow = (desc, qty, prc) => {
  //   const price = this.priceRow(qty, prc);
  //   return { desc, qty, prc, price };
  // };

  // subtotal(items) {
  //   return this.props.listOfCandles.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  // }

  // //insert product name here, as well as price and quantity
  // rows = [
  //   this.createRow("Paperclips (Box)", 100, 1.15),
  //   this.createRow("Paper (Case)", 10, 45.99),
  //   this.createRow("Waste Basket", 2, 17.99),
  // ];

  changeNumber = (btn) => {
    this.setState({
      quantity:
        btn === "increase" ? this.state.quantity + 1 : this.state.quantity - 1,
    });
  };

  render() {
    const { isLoading } = this.state;
    const { cart } = this.props;

    // const invoiceSubtotal = this.subtotal(rows);
    // const TAX_RATE = 0.07;

    // const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    // const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    return (
      <div>
        <h2>My Cart</h2>

        {isLoading && <h1>...isLoading</h1>}
        {cart.length === 0 && (
          <div>
            You have no products in your cart. You can browse our collection of
            candles
            <Link to={`/candles/all`}>here</Link>.
          </div>
        )}
        {!isLoading &&
          cart.map((item) => {
            const { product, quantity } = item;
            return (
              <div key={product._id}>
                {/* do we need several LINK to show the number of candles chosen by the clien??? */}

                <Link to={`/candles/${product._id}/details`}>
                  Name: {product.name} | Price: {product.price} |
                  <button
                    style={{
                      background: "gray",
                    }}
                    onClick={() => this.changeNumber("increase")}
                  >
                    {/* {this.state.number}  */}+
                  </button>
                  Quantity: {quantity}
                  <button onClick={() => this.changeNumber("decrease")}>
                    -
                  </button>
                </Link>
                <button onClick={this.removeFromCart}>Remove From Cart</button>
                {/* <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>g
                      <TableRow>
                        <TableCell align="center" colSpan={3}>
                          Details
                        </TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Desc</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Sum</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.rows.map((row) => (
                        <TableRow key={row.desc}>
                          <TableCell>{row.desc}</TableCell>
                          <TableCell align="right">{row.qty}</TableCell>
                          <TableCell align="right">{row.unit}</TableCell>
                          <TableCell align="right">
                            {this.state.ccyFormat(row.price)}
                          </TableCell>
                        </TableRow>
                      ))}

                      <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">
                          {this.state.ccyFormat(invoiceSubtotal)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Tax</TableCell>
                        <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                          0
                        )} %`}</TableCell>
                        <TableCell align="right">
                          {this.state.ccyFormat(invoiceTaxes)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">
                          {this.state.ccyFormat(invoiceTotal)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer> */}
              </div>
            );
          })}
        <Link to="/checkout">Continue to Checkout</Link>
      </div>
    );
  }
}
