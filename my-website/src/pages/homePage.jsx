import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

//Custom Component
import CustomContainer from "../components/containerComponent.jsx";
import CustomButton from "../components/buttonComponent.jsx";
// CSS Style
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/knockout.scss";
import "../assets/scss/overlay.scss";
//JS
import colors from "../assets/config/colors.js";
// Assets
import myPhoto from "../assets/img/MyPhoto.jpg";
import backgroundPhoto from "../assets/img/VanDrivingMountainBackground.jpg";
import knockoutBackground from "../assets/img/sky.jpg";

class KnockoutText extends Component {
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
      fontSize: "300%",
    };
    return (
      <div style={knockoutStyle}>
        <img
          src={knockoutBackground}
          alt="Knockout"
          id="knockout-text"
          style={{
            width: "100%",
            height: "30%",
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
      display: "block",
      width: "110%",
      height: "auto",
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
      height: "auto",
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
          <KnockoutText />
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
      padding: "10em",
    };
    const imgStyle = {
      display: "block",
      width: "100%",
      height: "auto",
      position: "absolute",
      bottom: "0",
    };
    return (
      <CustomContainer backgroundColor={colors.primary}>
        <Col xs={6} style={contentStyle}>
          <h1 style={{ paddingBottom: "1.5sem" }}>About Me</h1>
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

class Project extends Component {
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
      <Col style={squareStyle} className="container">
        <h2 style={{ fontSize: "6vw", color: colors.tertiary }}>
          {this.props.name}
        </h2>
        <hr style={lineStyle} />
        <p style={{ fontSize: "1.25vw", color: colors.secondary }}>
          {this.props.oneLiner}
        </p>

        <div className="overlay">
          <div style={textStyle}>
            <h1 style={{ color: colors.primary, fontSize: "3.75vw" }}>
              {this.props.name}
            </h1>
            <hr style={lineStyle} />
            <p style={{ fontSize: "1vw", textAlign: "left" }}>
              {this.props.description}
            </p>
            <CustomButton
              name="Learn More"
              color={colors.primary}
              width="40%"
              align="center"
            />
          </div>
        </div>
      </Col>
    );
  }
}

class Projects extends Component {
  render() {
    const projectContainerStyle = {
      alignItems: "center",
      backgroundColor: colors.secondary,
      minHeight: "100vh",
      padding: "2.25vw",
    };
    return (
      <Row style={projectContainerStyle}>
        <Project
          name="Haiven"
          oneLiner="Artificial intelligence for intimate partner violence"
          description="Haiven is a smartphone app designed to act as a friendly
              neighbour. Using machine learning algorithms, the app will
              automatically detect and classify audio information in order to
              identify aggressive encounters. Like a friendly neighbour, the app
              will check-in later in the day to assess the woman’s safety and
              document the encounter. If the audio is extremely aggressive, an
              emergency contact will be immediately notified."
        />
        <Project
          name="Haiven"
          oneLiner="Artificial intelligence for intimate partner violence"
          description="Haiven is a smartphone app designed to act as a friendly
              neighbour. Using machine learning algorithms, the app will
              automatically detect and classify audio information in order to
              identify aggressive encounters. Like a friendly neighbour, the app
              will check-in later in the day to assess the woman’s safety and
              document the encounter. If the audio is extremely aggressive, an
              emergency contact will be immediately notified."
        />
        <Project
          name="Haiven"
          oneLiner="Artificial intelligence for intimate partner violence"
          description="Haiven is a smartphone app designed to act as a friendly
              neighbour. Using machine learning algorithms, the app will
              automatically detect and classify audio information in order to
              identify aggressive encounters. Like a friendly neighbour, the app
              will check-in later in the day to assess the woman’s safety and
              document the encounter. If the audio is extremely aggressive, an
              emergency contact will be immediately notified."
        />
      </Row>
    );
  }
}

export default function HomePage() {
  return (
    <React.Fragment>
      <CoverPhoto />
      <About />
      <Projects />
    </React.Fragment>
  );
}
