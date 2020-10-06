import React, { Component } from "react";

export default class CustomContainer extends Component {
  render() {
    const containerStyle = {
      overflow: "hidden",
      height: "100vh",
      width: "100vw",
      maxWidth: "100%",
      position: "relative",
      display: "flex",
      backgroundColor: this.props.backgroundColor,
      boxSizing: this.props.boxSizing,
      border: this.props.border,
      flexDirection: this.props.flexDirection,
    };
    return <div style={containerStyle}>{this.props.children}</div>;
  }
}
