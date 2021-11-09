import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//in front end don't have access to this. backend person does.
export default class Cart extends Component {
  state = {};

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
    const { cart } = this.props;

    return (
      <div>
        <h2>My Cart</h2>

        {isLoading && <h1>...isLoading</h1>}
        {cart.length === 0 && <div>Hey no products here</div>}
        {!isLoading &&
          cart.map((item) => {
            const { product, quantity } = item;
            return (
              <div key={product._id}>
                {/* do we need several LINK to show the number of candles chosen by the clien??? */}
                <Link to={`/candles/${product._id}/details`}>
                  {quantity}x {product.name}
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
