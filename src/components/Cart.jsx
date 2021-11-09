import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//in front end don't have access to this. backend person does.
export default class Cart extends Component {
  state = {
    
  };

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/candles/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({
          image: response.data.image,
          name: response.data.name,
          price: response.data.price,
          weight: response.data.weight,
          quantity: response.data.quantity,
          description: response.data.description,
        });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  }

  render() {
    const { isLoading, listOfProducts } = this.state;

    return (
      <div>
        <h2>My Cart</h2>

        {isLoading && <h1>...isLoading</h1>}

        {!isLoading &&
          listOfProducts.map((oneProduct) => {
            return (
              <div key={oneProduct._id}>
                {/* do we need several LINK to show the number of candles chosen by the clien??? */}
                <Link to={`/candles/${oneProduct._id}/details`}>
                  {oneProduct.title}
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
