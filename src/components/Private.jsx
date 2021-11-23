import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import "../style/general.css";
import "../style/private.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class Private extends Component {
  state = {
    privateData: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/private`, {
        withCredentials: true,
      }) // credentials will allow the backend to access the session on this request. Important when authorizing.
      .then((response) => {
        this.setState({ privateData: response.data, isLoading: false });
      })
      .catch((err) => {
        console.log(err.response.status); // => the error message status code
        if (err.response.status === 403) {
          this.props.history.push("/login");
        }
      });
  }

  render() {
    const { privateData, isLoading } = this.state;
    const { user } = this.props;

    // authorization in the Frontend. Optional if you have backend authorization.
    // Redirect is like a Link but automatically clicked when read
    if (!this.props.isLoggedIn) return <Redirect to="/login" />;

    return (
      <div className="private-container">
        {isLoading && (
          <h1>
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </h1>
        )}
        {!isLoading && <h4>Welcome Back {user.firstName}</h4>}
        {!isLoading && (
          <h3>
            {privateData.message} <br />
            <br />
            <Button
              variant="outline-secondary"
              onClick={() => (
                <Link className="candle-link" to={`/candles/all`}></Link>
              )}
            >
              CANDLE COLLECTION
            </Button>
            {/* <Button variant="outline-success">Success</Button>{" "} */}
          </h3>
        )}
      </div>
    );
  }
}

export default Private;
