import React, { Component } from "react";
import axios from "axios";

export class AddForm extends Component {
  state = {
    image: "",
    name: "",
    price: "",
    weight: "",
    quantity: "",
    description: "",
    // user: true,
    // isOwner: true,
  };
  //method we'll use every time we have onChange , that the value
  //is coming from state, and that the name matches
  //updating what we want to change with the new value entered.
  //the event target's name. what is the target of the event (button, etc.)?
  //the name
  //whenever we sent an event listener, the target will be the whole
  //dom element that will actually triggering that event if button and
  // click, the target will be whole button dom element. internally you
  //can navigate through attributes
  //when working with input field, .name is a property
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { image, name, price, weight, quantity, description } = this.state;
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/candles/create`,
        {
          image,
          name,
          price,
          weight,
          quantity,
          description,
        },
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  };

  render() {
    const { image, name, price, weight, quantity, description } =
      this.state;

    return (
      <div>
        
          <div>
            <h2>CREATE A CANDLE</h2>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="image">Image</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="image"
                value={image}
              />
              <br />
              <label htmlFor="name">Name</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                value={name}
              />
              <br />
              <label htmlFor="price">Price</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="price"
                value={price}
              />
              <br />
              <label htmlFor="weight">Weight</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="weight"
                value={weight}
              />
              <br />
              <label htmlFor="quantity">Quantity</label>
              <input
                onChange={this.handleChange}
                type="number"
                name="quantity"
                value={quantity}
              />
              <br />
              <label htmlFor="description">Description</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="description"
                value={description}
              />
              <br />
              <button type="submit">Add</button>
            </form>
          </div>
        
      </div>
    );
  }
}

export default AddForm;
