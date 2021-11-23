import React, { Component } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../style/general.css";
import "../style/confirmation.css";

export default class Confirmation extends Component {
  state = {
    isLoading: true,
    random: 0,
  };

  componentDidMount() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    axios
      .get(`${process.env.REACT_APP_API_HOST}/confirmation`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({ random: this.state.random + rand, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="confirmation-container">
        {isLoading && (
          <h1>
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </h1>
        )}

        {!isLoading && (
          <div className="confirmation-container">
            <h3>CONFIRMATION MESSAGE</h3>
            <h4>
              Your purchase was successful! 
              <br /> 
              Please check your inbox for the
              confirmation email. 
              <br />
              ORDER NUMBER: #{this.state.random}
            </h4>
          </div>
        )}
      </div>
    );
  }
}
