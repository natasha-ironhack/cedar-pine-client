import React, { Component } from "react";
import authService from "../services/auth-service";

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
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
