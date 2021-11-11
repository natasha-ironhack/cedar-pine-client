import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//in front end don't have access to this. backend person does.
export default class Cart extends Component {
  state = {};

  //want to remove indivdual products in cart
  // removeFromCart = (itemId) => {
  //   itemToBeDeleted = this.state.
  // }


//REFERENCE:
// removeItemFromBasket(itemId) {
//   const items = this.stat.items.filter(item => item.id !== itemId)

//   this.setState({ items })
// }

  //REFERENCE FOR REMOVEFROMCART METHOD:
  // handleDelete = () => {
  //   axios
  //     .delete(
  //       `${process.env.REACT_APP_API_HOST}/candles/${this.props.match.params.id}`,
  //       { withCredentials: true }
  //     )
  //     .then(() => {
  //       this.props.history.push("/");
  //     })
  //     .catch(() => {
  //       this.props.history.push("/500");
  //     });
  // };

  // componentDidMount() {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_API_HOST}/candles/${this.props.match.params.id}`
  //     )
  //     .then((response) => {
  //       this.setState({
  //         image: response.data.image,
  //         name: response.data.name,
  //         price: response.data.price,
  //         quantity: response.data.quantity,
  //       });
  //     })
  //     .catch((err) => {
  //       this.props.history.push("/500");
  //     });
  // }

  render() {
    const { isLoading } = this.state;
    const { cart, goToCheckout } = this.props;

    return (
      <div>
        <h2>My Cart</h2>

        {isLoading && <h1>...isLoading</h1>}
        {cart.length === 0 && (
          <div>
            You have no products in your cart. You can browse our collection of
            candles
            <Link to={`/candles/all`}>here</Link>.
          </div>
        )}
        {!isLoading &&
          cart.map((item) => {
            const { product, quantity } = item;
            return (
              <div key={product._id}>
                {/* do we need several LINK to show the number of candles chosen by the clien??? */}
                <Link to={`/candles/${product._id}/details`}>
                  {quantity}x {product.name}
                </Link>
                <button onClick={this.removeFromCart}>Remove From Cart</button>
              </div>
            );
          })}
        <Link to="/checkout">Checkout</Link>
      </div>
    );
  }
}
