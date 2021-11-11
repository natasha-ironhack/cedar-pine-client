import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

//in front end don't have access to this. backend person does.
export default class Checkout extends Component {
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
    // const { isLoading } = this.state;
    // const { cart, goToCheckout } = this.props;

    return (
      <div>
        <h2>Checkout</h2>

        
      </div>
    );
  }
}
