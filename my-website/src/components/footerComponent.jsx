import React, { Component } from "react";

// JS
import colors from "../assets/config/colors.js";
//Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";

export class Icon extends Component {
  render() {
    const linkStyle = {
      color: colors.tertiary,
      textDecoration: "none",
      fontSize: "5em",
    };
    return (
      <a
        href={this.props.link}
        target="_blank"
        style={linkStyle}
        rel="noopener noreferrer"
      >
        {this.props.icon}
      </a>
    );
  }
}

export default class Footer extends Component {
  render() {
    const footerStyle = {
      backgroundColor: colors.primary,
      padding: "5vw",
      display: "flex",
      justifyContent: "space-around",
    };
    return (
      <div style={footerStyle}>
        <Icon
          link="https://linkedin.com/in/jenny-huang-wj/"
          icon={[<FaLinkedin />]}
        />
        <Icon link="https://github.com/j-nnyhuang/" icon={[<FaGithub />]} />
      </div>
    );
  }
}
