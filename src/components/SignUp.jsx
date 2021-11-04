import React, { Component } from "react";
// import axios from "axios";
import authService from "../services/auth-service";

export default class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  //we're targeting the name key and wanting to replace it with
  //whatever value we assign it
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, email, password } = this.state;

    //goes to services/auth-service folder, (goes to b)
    //then to it's sign up method, and passes the info
    authService
      .signup(firstName, lastName, email, password)
      .then((result) => console.log(result));
  };
  //other method for authService.signup:
  // axios.post(
  //   `{process.env.REACT_APP_API_HOST}/auth/signup`,
  //   {
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //   },
  //   { withCredentials: true }
  // );
  //will go to backend auth route and find /signup and pass on
  //the info (name, email, etc.)

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            //see note at end
          />
          <input type="text" name="lastName" value={lastName} />
          <input type="text" name="email" value={email} />
          <input type="text" name="password" value={password} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

//when are we handling all that data and sending it to the back
//end, right? b/c we need to gather it and do the signup
//just request "bey backed, u have the data now, please sign up
//this guy to our db"
