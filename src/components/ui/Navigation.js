import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from '../../logo.svg'
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="h-100">
        <Container fluid className="h-100">
          <Navbar.Brand href="#">
            <img
                src={logo}
                width="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            
            <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link to="/" className="btn bnt-link">Home</Link>
                  <Link to="/login" className="btn bnt-link">Login</Link>
                  <Link to="/register" className="btn bnt-link">Register</Link>

              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
