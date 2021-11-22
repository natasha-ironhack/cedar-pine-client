import React, { Component } from "react";
import authService from "../services/auth-service";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    //goes to services folder and to the login method
    //goes to back end's login route
    authService.login(email, password).then((response) => {
      this.setState({ email: "", password: "" });
      //sets the user on the main path
      this.props.setUser(response.data, true);
    })
    .then(() => {
        this.props.history.push("/private");
      })
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h3>LOG IN</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
        <hr />
        <h3>SIGN UP</h3>
        <Link to={`/signup`}>
          <Button variant="outline-success">Create An Account</Button>
        </Link>
      </div>
    );
  }
}
