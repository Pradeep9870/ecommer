//import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";

export default function Login() {
  return (
    <>
      {" "}
      <h1 className="text-center">Login page</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" button="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
