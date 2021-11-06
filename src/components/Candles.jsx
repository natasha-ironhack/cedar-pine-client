//class component b/c getting info from backend and adding it to display,
//, so might need to use a state
//when in doubt use a class component

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//in front end don't have access to this. backend person does.
export default class Candles extends Component {
  state = {
    listOfCandles: null,
    isLoading: true,
  };

  componentDidMount() {
    //console.log(process.env.REACT_APP_SERVER_API);
    axios
      .get(`${process.env.REACT_APP_API_HOST}/candles/all`)
      .then((response) => {
        this.setState({ listOfCandles: response.data, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  }

  render() {
    const { isLoading, listOfCandles } = this.state;

    return (
      <div>
        <h2>CANDLES</h2>

        {isLoading && <h1>...isLoading</h1>}

        {!isLoading &&
          listOfCandles.map((oneCandle) => {
            return (
              <div key={oneCandle._id}>
                <Link to={`/candles/${oneCandle._id}/details`}>
                  {oneCandle.image} {oneCandle.name} {oneCandle.price}
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
