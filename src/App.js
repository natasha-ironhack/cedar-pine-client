import React, { Component } from "react";
// Import { Route, Switch } from 'react-router';
import "./App.css";
import Navbar from "./components/Navbar";
//import Signup from "./components/Signup";
//import Login from "./components/Login";
import { Route, Switch } from "react-router";
import SignUp from "./components/SignUp";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}
