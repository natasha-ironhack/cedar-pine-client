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
        `${process.env.REACT_APP_SERVER_API}/candles/${this.props.match.params.id}`
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
        `${process.env.REACT_APP_SERVER_API}/candles/${this.props.match.params.id}`
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
    return (
      <div>
        <h2>Candle Details</h2>
        {isLoading && <h1>...Loading</h1>}
        {!isLoading && (
          <div>
            <h4>{singleCandle.image} </h4>
            <p>{singleCandle.name} </p>
            <p>{singleCandle.price}</p>

            <button onClick={this.handleDelete}>DELETE</button>
            <Link to={`/candles/${singleCandle._id}/edit`}>
              <button>EDIT</button>
            </Link>
            {/* both button links are the same, just diff. ways of 
            doin it */}
          </div>
        )}
      </div>
    );
  }
}

export default CandleDetails;
