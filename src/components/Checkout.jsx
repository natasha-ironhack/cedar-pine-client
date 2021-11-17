import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Payment from "./Payment";

//in front end don't have access to this. backend person does.
export default class Checkout extends Component {
  state = {
    firstName: "",
    lastName: "",
    country: "",
    streetNHouseNumber: "",
    postCode: "",
    city: "",
    email: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      country,
      streetNHouseNumber,
      postCode,
      city,
      email,
    } = this.state;

    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/checkout/createCheckout`,
        {
          firstName,
          lastName,
          country,
          streetNHouseNumber,
          postCode,
          city,
          email,
        },
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  };

  render() {
    const {
      firstName,
      lastName,
      country,
      streetNHouseNumber,
      postCode,
      city,
      email,
    } = this.state;

    return (
      <div>
        <h2>CHECKOUT</h2>

        {/* <form onSubmit={this.handleSubmit}> */}

        <Box
          component="form"
          onSubmit={this.handleSubmit}
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
              onChange={this.handleChange}
              type="text"
              name="firstName"
              value={firstName}
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="lastName"
              value={lastName}
            />
            <TextField
              required
              id="outlined-required"
              label="Country"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="country"
              value={country}
            />
            <TextField
              required
              id="outlined-required"
              label="Street and House Number"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="streetNHouseNumber"
              value={streetNHouseNumber}
            />
            <TextField
              required
              id="outlined-required"
              label="Postal Code"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="postCode"
              //change to state name
              value={postCode}
            />
            <TextField
              required
              id="outlined-required"
              label="City"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="city"
              value={city}
            />
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="email"
              value={email}
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
          {/* <div>
            <h4>METHOD OF PAYMENT</h4>
          </div> */}
        </Box>
        <button type="submit">
          <Link to="/payment">Go to Payment
          {/* <Payment /> */}
          </Link>

          {/* <Link to="/confirmation">Place an Order</Link> */}
        </button>
      </div>
    );
  }
}
