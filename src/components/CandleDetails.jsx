import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CandleDetails extends Component {
  state = {
    singleCandle: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/candles/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({ singleCandle: response.data, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  }

  handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_HOST}/candles/${this.props.match.params.id}`,
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        this.props.history.push("/500");
      });
  };

  render() {
    const { isLoading, singleCandle } = this.state;
    const { isOwner, addToCart } = this.props;

    return (
      <div>
        <h2>Candle Details</h2>
        {isLoading && <h1>...Loading</h1>}

        {!isLoading && (
          <div>
            <h4>{singleCandle.image} </h4>
            <p>{singleCandle.name} </p>
            <p>Price: {singleCandle.price}</p>
            <p>Weight: {singleCandle.weight}</p>
            <p>Amount on Stock: {singleCandle.quantity}</p>
            <p>Description: {singleCandle.description}</p>

            <button onClick={() => addToCart(singleCandle, 1)}>
              ADD TO CART
            </button>

            {/* <button onClick={this.handleDelete}>DELETE</button>
            <Link to={`/candles/${singleCandle._id}/edit`}>
              <button>EDIT</button>
            </Link> */}
            {/* both button links are the same, just diff. ways of 
            doin it */}
            {isOwner && (
              <div>
                <button onClick={this.handleDelete}>DELETE</button>
                <Link to={`/candles/${singleCandle._id}/edit`}>
                  <button>EDIT</button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default CandleDetails;
