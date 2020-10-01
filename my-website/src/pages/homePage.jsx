import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

//Custom Component
import CustomContainer from "../components/containerComponent.jsx";
// CSS Style
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/knockout.css";
//JS
import colors from "../assets/config/colors.js";
// Assets
import myPhoto from "../assets/img/MyPhoto.jpg";
import backgroundPhoto from "../assets/img/VanDrivingMountainBackground.jpg";
import knockoutBackground from "../assets/img/sky3.jpg";

class KnockoutText extends Component {
  render() {
    const knockoutStyle = {};
    return <img src={knockoutBackground} id="knockout-text" />;
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
      zIndex: "1",
    };
    const imgWrapperStyle = {
      position: "relative",
      width: "85%",
      zIndex: "2",
      margin: "auto",
    };
    const imgStyle = {
      width: "100%",
      height: "auto",
    };
    const overlayStyle = {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: colors.primary,
      opacity: "0.5",
    };
    return (
      <CustomContainer>
        <img src={backgroundPhoto} style={blurStyle} />
        <div style={imgWrapperStyle}>
          <div style={overlayStyle}></div>
          <img src={backgroundPhoto} style={imgStyle} />
          <KnockoutText style={{ position: "absolute" }} />
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

export default function HomePage() {
  return (
    <React.Fragment>
      <CoverPhoto />
      <About />
    </React.Fragment>
  );
}
