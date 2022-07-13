import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <>
      <ReactBootStrap.Navbar
        className="navvvv fw-bold"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{
          top: "0px",
          position: "fixed",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ReactBootStrap.Navbar.Brand className="text-dark fs-1" href="#home">
          Var<span className="text-success">Ys</span>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mx-auto">
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#featured">
              Featured
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#earn">Earn</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#contact">
              Contact
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <button className="btn btn-success">Connect Wallet</button>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </>
  );
}

export default Header;
