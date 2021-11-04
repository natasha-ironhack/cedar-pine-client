import React, { Component } from "react";
import authService from "../services/auth-service";

export default class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  //we're targeting the name key and wanting to replace it with
  //whatever value we assign it
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, email, password } = this.state;

    //goes to services/auth-service folder, (goes to backend)
    //then to it's sign up method, and passes the info
    authService
      .signup(firstName, lastName, email, password)
      .then((response) => {
        // console.log(response);
        //(will make our state empty and re-set the form?)
        this.setState({ firstName: "", lastName: "", email: "", password: "" });
        this.props.setUser(response.data, true);
        //this.props.setUser comes from App.js
        //a method that takes two arguments
        //lifting up the state
        //b/c changing state of mother component (App.js) inside this component
        //(((when u get response of signup, saying we want to use that response and put
        //it on app.js, the mother component. and want to put that info on that state
        //b/c then all my comps might know about the user?)))
    });
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
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit" variant="contained">Create an Account</button>
        </form>
      </div>
    );
  }
}

//when are we handling all that data and sending it to the back
//end, right? b/c we need to gather it and do the signup
//just request "bey backed, u have the data now, please sign up
//this guy to our db"
