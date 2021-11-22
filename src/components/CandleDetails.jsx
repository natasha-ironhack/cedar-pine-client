import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../style/general.css";
import "../style/candleDetails.css";
import Button from "react-bootstrap/Button";

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
      <div className="candleDetails-container">
        <h2>Candle Details</h2>
        {isLoading && (
          <h1>
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </h1>
        )}

        {!isLoading && (
          <div>
            <img src={singleCandle.image} />
            <p>{singleCandle.name} </p>
            <p>
              Price: {singleCandle.currency}
              {singleCandle.price / 100}
            </p>
            <p>Weight: {singleCandle.weight}</p>
            <p>Amount on Stock: {singleCandle.quantity}</p>
            <p>Description: {singleCandle.description}</p>

            <Button
              variant="outline-success"
              onClick={() => addToCart(singleCandle, 1)}
            >
              ADD TO CART
            </Button>

            {/* <button onClick={this.handleDelete}>DELETE</button>
            <Link to={`/candles/${singleCandle._id}/edit`}>
              <button>EDIT</button>
            </Link> */}
            {/* both button links are the same, just diff. ways of 
            doin it */}
            {isOwner && (
              <div>
                <Button variant="outline-success" onClick={this.handleDelete}>
                  DELETE
                </Button>
                <Link to={`/candles/${singleCandle._id}/edit`}>
                  <Button variant="outline-success">EDIT</Button>
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
