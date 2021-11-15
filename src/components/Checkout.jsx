import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
              name="First Name"
              value={firstName}
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="Last Name"
              value={lastName}
            />
            <TextField
              required
              id="outlined-required"
              label="Country"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="Country"
              value={country}
            />
            <TextField
              required
              id="outlined-required"
              label="Street and House Number"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="Street and House Number"
              value={streetNHouseNumber}
            />
            <TextField
              required
              id="outlined-required"
              label="Postal Code"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="Postal Code"
              value={postCode}
            />
            <TextField
              required
              id="outlined-required"
              label="City"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="City"
              value={city}
            />{" "}
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              // defaultValue="type here"
              onChange={this.handleChange}
              type="text"
              name="Email Address"
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
          <div>
            <h4>METHOD OF PAYMENT</h4>
          </div>
        </Box>
        <button type="submit">
          <Link to="/confirmation">Place an Order</Link>
        </button>
      </div>
    );
  }
}
