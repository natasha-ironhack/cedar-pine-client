import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

//in front end don't have access to this. backend person does.
export default class Checkout extends Component {
  state = {};

  render() {
    // const { isLoading } = this.state;
    // const { cart, goToCheckout } = this.props;

    return (
      <div>
        <h2>CHECKOUT</h2>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h4>BILLING INFORMATION</h4>
          <div>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              // defaultValue="type here"
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              // defaultValue="type here"
            />
            <TextField
              required
              id="outlined-required"
              label="Country"
              // defaultValue="type here"
            />
            <TextField
              required
              id="outlined-required"
              label="Street and House Number"
              // defaultValue="type here"
            />
            <TextField
              required
              id="outlined-required"
              label="Postal Code"
              // defaultValue="type here"
            />
            <TextField
              required
              id="outlined-required"
              label="City"
              // defaultValue="type here"
            />{" "}
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              // defaultValue="type here"
            />
          </div>
          <div>
            <h4>DELIVERY ADDRESS</h4>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              // defaultValue="type here"
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              // defaultValue="type here"
            />
            <TextField
              required
              id="outlined-required"
              label="Country"
              // defaultValue="type here"
            />
            <TextField
              required
              id="outlined-required"
              label="Street and House Number"
              // defaultValue="type here"
            />
            <TextField
              required
              id="outlined-required"
              label="Postal Code"
              // defaultValue="type here"
            />
            <TextField
              required
              id="outlined-required"
              label="City"
              // defaultValue="type here"
            />{" "}
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              // defaultValue="type here"
            />
          </div>
          <div>
            <h4>METHOD OF PAYMENT</h4>
          </div>
        </Box>
        <Link to="/confirmation">Place an Order</Link>
      </div>
    );
  }
}
