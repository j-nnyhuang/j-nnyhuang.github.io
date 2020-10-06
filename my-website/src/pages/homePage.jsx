import React, { Component } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";

//Custom Component
import CustomContainer from "../components/containerComponent.jsx";
import Project from "../components/projectComponent.jsx";
import Header from "../components/headerComponent.jsx";
import CustomNavbar from "../components/navbarComponent.jsx";
// CSS Style
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/knockout.scss";
import "../assets/scss/fonts.scss";
//JS
import colors from "../assets/config/colors.js";
// Assets
import myPhoto from "../assets/img/MyPhoto.jpg";
import backgroundPhoto from "../assets/img/Vancouver5.jpg";
import knockoutBackground from "../assets/img/sky.jpg";

class Text extends Component {
  render() {
    const knockoutStyle = {
      position: "absolute",
      height: "100%",
      width: "100%",
      zIndex: "2",
      overflow: "hidden",
    };
    const textStyle = {
      fontWeight: "bold",
      color: colors.tertiary,
      margin: "50px 100px 50px 100px",
      textAlign: "center",
      fontSize: "2vw",
      margin: "1vw",
    };
    return (
      <div style={knockoutStyle}>
        <img
          src={knockoutBackground}
          alt="Knockout"
          id="knockout-text"
          style={{
            width: "100%",
            height: "40%",
          }}
        ></img>
        <h1 style={textStyle}>
          Aspiring software developer interested in digital innovation and
          travelling
        </h1>
      </div>
    );
  }
}

class CoverPhoto extends Component {
  render() {
    const blurStyle = {
      height: "110%",
      width: "110%",
      objectFit: "cover",
      position: "absolute",
      left: "-10px",
      bottom: "-5px",
      filter: "blur(5px)",
      zIndex: "-10",
    };
    const imgWrapperStyle = {
      position: "relative",
      width: "85%",
      margin: "auto",
    };
    const imgStyle = {
      width: "100%",
      height: "100%",
      bottom: 0,
      zIndex: "1",
    };
    const overlayStyle = {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: colors.primary,
      opacity: "0.6",
      zIndex: "2",
    };
    return (
      <CustomContainer>
        <img src={backgroundPhoto} style={blurStyle} />
        <div style={imgWrapperStyle}>
          <div style={overlayStyle}></div>
          <Text />
          <img src={backgroundPhoto} style={imgStyle} />
        </div>
      </CustomContainer>
    );
  }
}

class About extends Component {
  render() {
    const contentStyle = {
      display: "-ms-flexbox",
      display: "-webkit-flex",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "3.2vw",
      color: colors.tertiary,
    };
    const imgStyle = {
      display: "block",
      width: "100%",
      height: "100%",
      position: "absolute",
      bottom: "0",
      objectFit: "cover",
    };
    return (
      <CustomContainer
        backgroundColor={colors.primary}
        boxSizing="border-box"
        border="1vw solid white"
      >
        <Col xs={6} style={contentStyle}>
          <Header textColor={colors.tertiary} name="About" id="about" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
            feugiat mauris. Praesent non purus eget turpis lobortis egestas.
            Cras hendrerit tincidunt dapibus. Nullam porttitor justo venenatis,
            consequat ipsum nec, egestas mi. Etiam maximus risus quam, vitae
            accumsan ante venenatis id. Morbi vehicula faucibus turpis, id
            hendrerit est mollis sed. Aliquam eu felis at purus rhoncus
            efficitur. Proin tempus efficitur quam, non luctus tortor vehicula
            sit amet. Ut vitae fringilla augue. Praesent porttitor ex vitae est
            lobortis maximus. Maecenas et laoreet ante, sed varius dui. Donec
            eleifend metus urna, at cursus sapien tincidunt vitae. Mauris
            faucibus pharetra sapien vel egestas. Nunc est arcu, commodo sed
            porta vitae, consectetur at dolor. Nulla nec arcu ultrices, vehicula
            ante eu, lobortis arcu. <br />
            <br />
            Aliquam metus nibh, pellentesque volutpat odio ac, varius
            ullamcorper magna. In elementum, ante eget tristique commodo, leo
            sem sagittis nibh, nec laoreet dolor ex at justo. Praesent rutrum
            pharetra libero, quis egestas libero cursus malesuada. Vivamus
            commodo nisi id euismod lobortis. Morbi iaculis, turpis quis
            convallis efficitur, eros turpis condimentum urna, sed convallis
            turpis sapien accumsan dui. Nullam at dapibus nulla. Sed tempus odio
            ac fringilla consequat. Nullam sollicitudin ligula fringilla tellus
            interdum pulvinar. Maecenas at bibendum velit. Fusce tortor neque,
            porta sed volutpat vel, blandit ut magna. Pellentesque scelerisque
            quis velit vel imperdiet. Pellentesque ullamcorper, velit et rutrum
            tristique, turpis odio aliquam dolor, at viverra elit enim at augue.
            Proin vel malesuada nibh. Quisque aliquam aliquet euismod. Praesent
            pretium varius lorem eget posuere.
          </p>
        </Col>
        <Col xs={6}>
          <img src={myPhoto} style={imgStyle} />
        </Col>
      </CustomContainer>
    );
  }
}

class Projects extends Component {
  render() {
    const projectContainerStyle = {
      backgroundColor: colors.secondary,
      minHeight: "100vh",
      width: "100vw",
      maxWidth: "100%",
      padding: "3.2vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: "borderBox",
      border: "1vw solid white",
    };
    return (
      <div style={{ width: "100vw", maxWidth: "100%" }}>
        <Header textColor={colors.primary} name="Projects" id="projects" />
        <Project />
      </div>
    );
  }
}

export default function HomePage() {
  return (
    <React.Fragment>
      <CustomNavbar />
      <CoverPhoto />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </React.Fragment>
  );
}
