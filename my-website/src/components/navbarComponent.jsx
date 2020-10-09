import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
// CSS Style
import "bootstrap/dist/css/bootstrap.min.css";
//JS
import colors from "../assets/config/colors.js";

export default class MyNavbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar
          justify="true"
          style={{
            backgroundColor: colors.primary,
            padding: 20,
            borderRadius: "0",
            margin: 0,
            width: "100vw",
          }}
          expand="sm"
        >
          <Navbar.Brand href="#home" style={{ display: "flex" }}>
            <h1 style={{ color: colors.white, margin: "auto" }}>JENNY</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ml-auto"
              style={{
                backgroundColor: colors.white,
                padding: 10,
                borderRadius: 5,
                width: "21%",
                justifyContent: "space-between",
              }}
            >
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
