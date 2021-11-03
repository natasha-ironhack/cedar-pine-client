import React, { Component } from "react";
// Import { Route, Switch } from 'react-router';
import "./App.css";
import Navbar from "./components/Navbar";
//import Signup from "./components/Signup";
//import Login from "./components/Login";
import { Switch } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {/* <Route /> */}
        </Switch>
      </div>
    );
  }
}
