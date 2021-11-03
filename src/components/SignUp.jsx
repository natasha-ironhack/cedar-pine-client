import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <div>
        <form>
          <input type="text" name="firstName" value={firstName} />
          <input type="text" name="lastName" value={lastName} />
          <input type="text" name="email" value={email} />
          <input type="text" name="password" value={password} />
        </form>
      </div>
    );
  }
}
