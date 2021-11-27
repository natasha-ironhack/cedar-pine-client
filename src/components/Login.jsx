import React, { Component } from "react";
import authService from "../services/auth-service";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import "../style/general.css";
import "../style/login.css";

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
    authService
      .login(email, password)
      .then((response) => {
        this.setState({ email: "", password: "" });
        //sets the user on the main path
        this.props.setUser(response.data, true);
      })
      .then(() => {
        this.props.history.push("/private");
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="login-container page-height">
        <div className="signin-container">
          <h3>SIGN IN</h3>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <br />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <button className="general-button" type="submit">
              Login
            </button>
          </form>
        </div>

        <hr className="hr-vertical" />

        <div className="signup-container">
          <h3>SIGN UP</h3>
          <p className="signup-p">
            Creating an account has many benefits: seasonal member discounts,
            access to special candles, and more.
          </p>
          <Link to={`/signup`}>
            <button className="general-button" variant="outline-success">
              Create An Account
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
