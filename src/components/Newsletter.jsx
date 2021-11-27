import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Footer from "./components/Footer";
import "../style/general.css";
import "../style/newsletter.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class Newsletter extends Component {
  state = {
    show: false,
    setShow: false,
  };

  //  const [show, setShow] = useState(false);

  handleClose = () => this.state.setShow(false);

  handleShow = () => this.state.setShow(true);

  render() {
    // const { handleClose, handleShow } = this.state;

    return (
      <div className="newsletter-container">
        <div>
          <h4>Subscribe to our newsletter!</h4>
          <div className="newsletter-container-child">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon2"
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                // onClick={handleShow}
              >
                Subscribe
              </Button>
              {/* <Modal show={this.state.show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                "Woohoo, you're reading this text in a modal!"
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal> */}
            </InputGroup>
          </div>
        </div>
        {/* <hr className="newsletter-hr" /> */}
      </div>
    );
  }
}
