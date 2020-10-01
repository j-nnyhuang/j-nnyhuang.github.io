import React, { Component } from "react";

export default class CustomContainer extends Component {
  render() {
    const containerStyle = {
      overflow: "hidden",
      height: "100vh",
      width: "100vw",
      position: "relative",
      display: "flex",
      backgroundColor: this.props.backgroundColor,
    };
    return <div style={containerStyle}>{this.props.children}</div>;
  }
}
