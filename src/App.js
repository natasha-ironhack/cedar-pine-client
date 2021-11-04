import { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import authService from "./services/auth-service";

//isLoggedIn is here b/c app.js is the mother component, so
//the other components can know if the user is logged in
//isLoggedIn is a boolean
class App extends Component {
  //Lifting the state up
  state = {
    isLoggedIn: null,
    user: null,
    //need to check if user is able to edit or see page
    //so need to store user
  };

    //method for lifting state up
    //setting the user to something
    //receiving a user and boolean (loggedInStatus)
  setUser = (user, loggedInStatus) => {
    this.setState({
      user,
      isLoggedIn: loggedInStatus,
    });
  };
  //pass setUser to component below with 
  //to pass props to a route: with a render prop: render={} etc

  getUser = () => {
    if (this.state.user === null) {
      authService
        .loggedin()
        .then((response) => {
          this.setState({
            user: response.data.user || null,
            isLoggedIn: true,
          });
        })
        .catch((error) => {
          this.setState({
            isLoggedIn: false,
          });
        });
    }
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { user, isLoggedIn } = this.state;
    return (
      <div>
        <NavBar isLoggedIn={isLoggedIn} user={user} setUser={this.setUser} />
        <Switch>
          <Route
            exact
            path="/signup"
            render={(props) => <SignUp {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} setUser={this.setUser} />}
            //setUser is a normal prop, and with this.setUser, we are
            //passing the function of the parent
            //since it's a prop, it'll be available on signup component page
          />
        </Switch>
      </div>
    );
  }
}

export default App;
