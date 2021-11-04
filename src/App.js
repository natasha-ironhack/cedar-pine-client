import React, { Component } from "react";
import "./App.css";
//import NavBar from "./components/NavBar";
//import Login from "./components/Login";
import { Route, Switch } from "react-router";
import SignUp from "./components/SignUp";
//import authService from "./services/auth-service";

class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
