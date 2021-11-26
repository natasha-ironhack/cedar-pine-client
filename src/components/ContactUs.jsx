import React from "react";
import { Link } from "react-router-dom";
import "../style/general.css";
import "../style/contact.css";
//
import Form from "react-bootstrap/Form";

function FAQ() {
  return (
    <div className="contact-container page-height">
      <h3>Contact Us</h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address: </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comment: </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Type your comment here"
            rows={3}
          />
        </Form.Group>
      </Form>{" "}
      <Link to={`/contact-confirmation`}>
        <button className="general-button" variant="outline-success">
          Send a Message
        </button>
      </Link>
    </div>
  );
}

export default FAQ;
