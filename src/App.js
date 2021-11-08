import { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import authService from "./services/auth-service";
import Candles from "./components/Candles";
import CandleDetails from "./components/CandleDetails";
import CandleEdit from "./components/CandleEdit";
import Private from "./components/Private";
import AddForm from "./components/AddForm";

//isLoggedIn is here b/c app.js is the mother component, so
//the other components can know if the user is logged in
//isLoggedIn is a boolean
class App extends Component {
  //Lifting the state up
  state = {
    isLoggedIn: null,
    user: null,
    cart: [],
    isOwner: null,
    //need to check if user is able to edit or see page
    //so need to store user
  };

  // ---> CART STUF

  setCart = (quantity, price, name, weight) => {
    this.setState({
      quantity,
      price,
      name,
      weight,
    });
  };
  // --------------

  //method for lifting state up
  //setting the user to something
  //receiving a user and boolean (loggedInStatus)
  setUser = (user, loggedInStatus) => {
    this.setState({
      user,
      isLoggedIn: loggedInStatus,
      // isOwner: isOwnerStatus
    });
  };
  //pass setUser to component below with
  //to pass props to a route: with a render prop: render={} etc

  //below: another method which will check if we have a user in the session
  //we do? then it will put it in the state
  getUser = () => {
    if (this.state.user === null) {
      //if user = null, want to get the user in the session, or at least try
      authService
        //authService.loggedin goes to back end's loggedin route
        .loggedin()
        .then((response) => {
          this.setState({
            user: response.data.user || null,
            isLoggedIn: true,
            // isOwner: response.data.user
          });
        })
        .catch((error) => {
          this.setState({
            isLoggedIn: false,
          });
        });
    }
  };

  //when app mounts, want to check if we have a user logged in in the session
  componentDidMount() {
    this.getUser();
  }

  //   const ProtectedRoute = ({showRoute, ...props}) => {
  //   if (showRoute) {
  //     return <Route {...props} />
  //   } else {
  //     // return null to simply not render the route if not logged in
  //     return null;
  //     // or you could return <Redirect to='/foo' /> to send them elsewhere
  //   }
  // }

  // const App = () => {
  //   const isLoggedIn = true;

  //   return (
  //     <Router>
  //       <ProtectedRoute showRoute={isLoggedIn} path="/dashboard" component={Users} />
  //     </Router>
  //   );
  // }
  render() {
    const { user, isLoggedIn, isOwner } = this.state;
    return (
      <div>
        {/* passing user to the navBar with user={user} */}
        <NavBar
          isLoggedIn={isLoggedIn}
          user={user}
          setUser={this.setUser}
          setCart={this.setCart}
        />

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
          <Route
            exact
            path="/private"
            render={(props) => <Private {...props} isLoggedIn={isLoggedIn} />}
          />
          <Route exact path="/candles/all" component={Candles} />

          <Route
            exact
            path="/candles/create"
            render={(props) => (
              <AddForm {...props} isLoggedIn={isLoggedIn} isOwner={isOwner} />
            )}
          />

          <Route exact path="/candles/:id/details" component={CandleDetails} />
          <Route exact path="/candles/:id/edit" component={CandleEdit} />
        </Switch>
      </div>
    );
  }
}

export default App;
