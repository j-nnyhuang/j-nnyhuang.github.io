import React, { Component } from "react";

//CSS Styles
import "../assets/scss/fonts.scss";

export default class Header extends Component {
  render() {
    const headerStyle = {
      color: this.props.textColor,
      paddingBottom: "5vh",
      textTransform: "uppercase",
    };
    return (
      <h1 style={headerStyle} id={this.props.id}>
        {this.props.name}
      </h1>
    );
  }
}
