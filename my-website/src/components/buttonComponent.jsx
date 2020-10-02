import React, { Component } from "react";
// CSS Style
import "../assets/scss/button.scss";

export default class CustomButton extends Component {
  render() {
    const size = {
      width: this.props.width,
      height: this.props.height,
      alignSelf: this.props.align,
    };
    return (
      <div className="button-container" style={size}>
        {this.props.name}
      </div>
    );
  }
}
