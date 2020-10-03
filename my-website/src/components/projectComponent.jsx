import React, { Component } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";

// Custom Components
import CustomButton from "../components/buttonComponent.jsx";
//SCSS STYLES
import "../assets/scss/overlay.scss";
import "../assets/scss/project.scss";
//JS
import colors from "../assets/config/colors.js";

export default class Project extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  render() {
    const squareStyle = {
      textAlign: "center",
      backgroundColor: colors.primary,
      width: "21vw",
      height: "21vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "2vw",
    };
    const lineStyle = {
      backgroundColor: colors.secondary,
      height: "2px",
      width: "10%",
      marginTop: "0",
      maringBottom: "0",
    };
    const textStyle = {
      padding: "1vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
    };
    return (
      <React.Fragment>
        <Col style={squareStyle} className="container">
          <h2 style={{ fontSize: "300%", color: colors.tertiary }}>
            {this.props.name}
          </h2>
          <hr style={lineStyle} />
          <p style={{ fontSize: "150%", color: colors.secondary }}>
            {this.props.oneLiner}
          </p>

          {/* Overlay Content */}
          <div className="overlay">
            <div style={textStyle}>
              <h1 style={{ color: colors.primary, fontSize: "200%" }}>
                {this.props.name}
              </h1>
              <hr style={lineStyle} />
              <p style={{ fontSize: "120%", textAlign: "left" }}>
                {this.props.blurb}
              </p>
              <CustomButton
                name="Learn More"
                color={colors.primary}
                width="35%"
                align="center"
                customClickEvent={this.openModal}
              />
            </div>
          </div>
        </Col>

        <Modal
          show={this.state.isOpen}
          onHide={this.closeModal}
          style={{ opacity: 1 }}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h1>{this.props.name}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>DESCRIPTION</h5>
            <p>{this.props.description}</p>
            <h5>DURATION</h5>
            <p>{this.props.duration}</p>
            <h5>MY ROLES &amp; CONTRIBUTIONS</h5>
            <p>{this.props.myRole}</p>
            <h5>TECHNOLOGY STACK</h5>
            <p>{this.props.techStack}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.closeModal}
              style={{ backgroundColor: colors.primary }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
