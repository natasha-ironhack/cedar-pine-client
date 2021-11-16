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
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";
// Bootstrp
import "bootstrap/dist/css/bootstrap.css";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import Footer from "./components/Footer";

//isLoggedIn is here b/c app.js is the mother component, so
//the other components can know if the user is logged in
//isLoggedIn is a boolean
class App extends Component {
  //Lifting the state up
  state = {
    isLoggedIn: null,
    user: null,
    cart: {},
    isOwner: null,
    checkout: [],
    //need to check if user is able to edit or see page
    //so need to store user
  };

  // ---> CART STUF
  decreaseFromCart = (product, quantity) => {
    const cartItem = this.state.cart[product._id];
    if (cartItem) {
      if (cartItem.quantity - quantity <= 0) {
        const newCart = { ...this.state.cart };
        delete newCart[product._id];
        this.setState({ cart: newCart });
      } else {
        this.setState({
          cart: {
            ...this.state.cart,
            [product._id]: {
              ...cartItem,
              quantity: cartItem.quantity - quantity,
            },
          },
        });
      }
    }
  };

  // delete newProps.b;

  addToCart = (product, quantity) => {
    // const isProductInsideCart = this.state.cart.some(
    //   (item) => item.product._id === product._id
    // );
    if (this.state.cart[product._id]) {
      console.log("is alreday inside");
      const productInfo = this.state.cart[product._id];
      this.setState({
        cart: {
          ...this.state.cart,
          [product._id]: {
            ...productInfo,
            quantity: productInfo.quantity + quantity,
          },
        },
      });
    } else {
      this.setState({
        cart: { ...this.state.cart, [product._id]: { product, quantity } },
      });
    }
  };

  goToCheckout = (product, quantity) => {
    this.setState({
      checkout: [...this.state.checkout, { product, quantity }],
    });
  };

  //method for lifting state up
  //setting the user to something
  //receiving a user and boolean (loggedInStatus)
  setUser = (user, loggedInStatus) => {
    this.setState({
      user,
      isLoggedIn: loggedInStatus,
      isOwner: (user && user.isOwner) || false,
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
          this.setUser(response.data.user, true);
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

  render() {
    const { user, isLoggedIn, isOwner, cart, goToCheckout } = this.state;
    return (
      <div>
        {/* passing user to the navBar with user={user} */}
        <NavBar
          isLoggedIn={isLoggedIn}
          user={user}
          isOwner={isOwner}
          setUser={this.setUser}
          cart={cart}
          setCheckout={this.setCheckout}
          // goToCheckout={this.goToCheckout}
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

          <Route
            exact
            path="/candles/all"
            render={(props) => (
              <Candles
                {...props}
                isLoggedIn={isLoggedIn}
                isOwner={isOwner}
                addToCart={this.addToCart}
                goToCheckout={this.goToCheckout}
              />
            )}
          />

          <Route
            exact
            path="/candles/create"
            render={(props) => (
              <AddForm {...props} isLoggedIn={isLoggedIn} isOwner={isOwner} />
            )}
          />

          <Route
            exact
            path="/candles/:id/details"
            render={(props) => (
              <CandleDetails
                {...props}
                addToCart={this.addToCart}
                isLoggedIn={isLoggedIn}
                isOwner={isOwner}
              />
            )}
          />

          {/* <Route exact path="/candles/:id/edit" component={CandleEdit} /> */}

          <Route
            exact
            path="/candles/:id/edit"
            render={(props) => (
              <CandleEdit
                {...props}
                isLoggedIn={isLoggedIn}
                isOwner={isOwner}
              />
            )}
          />

          <Route
            exact
            path="/cart"
            render={(props) => (
              <Cart
                {...props}
                addToCart={this.addToCart}
                decreaseFromCart={this.decreaseFromCart}
                cart={cart}
              />
            )}
          />

          <Route
            exact
            path="/checkout"
            render={(props) => (
              <Checkout {...props} goToCheckout={goToCheckout} />
            )}
          />

          <Route
            exact
            path="/confirmation"
            render={(props) => <Confirmation {...props} />}
          />
        </Switch>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
