import React, { Component } from "react";
import axios from "axios";
import "../style/general.css";
import "../style/candleEdit.css";

export class CandleEdit extends Component {
  state = {
    image: "",
    name: "",
    price: "",
    weight: "",
    quantity: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { image, name, price, weight, quantity, description } = this.state;
    axios
      .patch(
        `${process.env.REACT_APP_API_HOST}/candles/${this.props.match.params.id}`,
        {
          image,
          name,
          price,
          weight,
          quantity,
          description,
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        this.props.history.push("/500");
      });
  };

  // below was previously process.env.REACT_APP_SERVER_API
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
      .catch((err) => {});
  }

  render() {
    const { image, name, price, weight, quantity, description } = this.state;

    return (
      <div className="candleedit-container">
        <h2>Candle Edit</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="image">Image</label>
          {image && <img src={image} alt="imagePic" />}
          <input onChange={this.handleFileUpload} type="file" name="image" />
          <br />
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.handleChange}
            placeholder="Japanese Cherry Blossoms"
            type="text"
            name="name"
            value={name}
          />
          <br />
          <label htmlFor="price">Price: </label>
          <input
            onChange={this.handleChange}
            placeholder="1300 for ???13.00"
            type="text"
            name="price"
            value={price}
          />
          <br />
          <label htmlFor="weight">Weight: </label>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="400g"
            name="weight"
            value={weight}
          />
          <br />
          <label htmlFor="quantity">Quantity: </label>
          <input
            onChange={this.handleChange}
            placeholder="25"
            type="text"
            name="quantity"
            value={quantity}
          />
          <br />
          <label htmlFor="description">Description: </label>
          <input
            onChange={this.handleChange}
            placeholder="Enjoy the smell of..."
            type="text"
            name="description"
            value={description}
          />
          <br />
          <button type="submit">Edit</button>
        </form>
      </div>
    );
  }
}

export default CandleEdit;
