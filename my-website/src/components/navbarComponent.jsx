import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
// CSS Style
import "bootstrap/dist/css/bootstrap.min.css";
//JS
import colors from "../assets/config/colors.js";

export default class CustomNavbar extends Component {
  render() {
    const navbarStyle = {
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      zIndex: "1000",
      padding: "2vw",
      justifyContent: "space-between",
      width: "100%",
      color: colors.tertiary,
    };
    const linkStyle = {
      color: colors.tertiary,
      textDecoration: "none",
    };
    return (
      <div style={navbarStyle}>
        <h2>JENNY HUANG</h2>
        <div
          style={{
            display: "flex",
            width: "20%",
            justifyContent: "space-around",
          }}
        >
          <a href="#about" style={linkStyle}>
            <h2>ABOUT</h2>
          </a>
          <a href="#projects" style={linkStyle}>
            <h2>PROJECTS</h2>
          </a>
        </div>
      </div>
    );
  }
}
