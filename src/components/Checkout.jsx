import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Payment from "./Payment";
import "../style/general.css";
import "../style/checkout.css";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Row";
// import Button from "react-bootstrap/Row";


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
      <div className="checkout-container">
        <h2>CHECKOUT</h2>

        {/* <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}

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
          <Link to="/payment">
            Go to Payment
            {/* <Payment /> */}
          </Link>

          {/* <Link to="/confirmation">Place an Order</Link> */}
        </button>
      </div>
    );
  }
}
