import React, { Component } from "react";
import { Col } from "react-bootstrap";

//Custom Component
import CustomContainer from "../components/containerComponent.jsx";
import { Project, Role, Link } from "../components/projectComponent.jsx";
import Header from "../components/headerComponent.jsx";
import CustomNavbar from "../components/navbarComponent.jsx";
import Footer from "../components/footerComponent.jsx";
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
import HaivenMockup from "../assets/img/HaivenMockup-01.png";
import TotalLossMockup from "../assets/img/TotalLossMockUp-01.png";
import HeartFailureMockup from "../assets/img/HearFailureMockup-01.png";

class Text extends Component {
  render() {
    const textStyle = {
      position: "absolute",
      height: "100%",
      width: "100%",
      zIndex: "2",
      overflow: "hidden",
      textAlign: "center",
      fontWeight: "bold",
      color: colors.tertiary,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    };
    return (
      <div style={textStyle}>
        {/* <img
          src={knockoutBackground}
          alt="Knockout"
          id="knockout-text"
          style={{
            width: "100%",
            height: "40%",
          }}
        ></img> */}
        <h1 style={{ fontSize: "15vw" }}>JENNY</h1>
        <h1>Aspiring software developer interested in digital innovation.</h1>
      </div>
    );
  }
}

class CoverPhoto extends Component {
  render() {
    // const blurStyle = {
    //   height: "110%",
    //   width: "110%",
    //   objectFit: "cover",
    //   position: "absolute",
    //   left: "-10px",
    //   bottom: "-5px",
    //   filter: "blur(5px)",
    //   zIndex: "-10",
    // };
    // const imgWrapperStyle = {
    //   position: "relative",
    //   width: "100%",
    //   margin: "auto",
    // };
    const imgStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
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
        {/* <img src={backgroundPhoto} style={blurStyle} /> */}
        <div /*style={imgWrapperStyle}*/>
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
        <div
          style={{
            backgroundColor: colors.primary,
            padding: "1.5vw 3vw 1.5vw 3vw",
          }}
        >
          <h1 style={{ margin: "auto", color: colors.tertiary }}>PROJECTS</h1>
        </div>
        <Project
          backgroundColor={colors.secondary}
          name="Haiven"
          oneLiner="Artificial intelligence for intimate partner violence"
          duration="July - Ongoing"
          description="Haiven is a smartphone app that uses machine learning algorithms to
            automatically detect and classify audio information to identify
            aggressive encounters. If the audio is extremely aggressive, an
            emergency contact will be immediately notified. We are a small team
            who strive to create an application that can help and empower
            victims in violent situations."
          links={[
            <Link link="https://github.com/myhaiven" linkName="GitHub" />,
          ]}
          roles={[
            <Role
              role="Front End Developer"
              backgroundColor={colors.primary}
            />,
            <Role role="Operations Lead" backgroundColor={colors.primary} />,
            <Role role="UI/UX Designer" backgroundColor={colors.primary} />,
          ]}
          image={HaivenMockup}
          flexDirection="row-reverse"
        />
        <Project
          backgroundColor={colors.secondary}
          name="Total Loss Damage Recognition"
          oneLiner="Visual recognition for vehicle collisions"
          duration="November 2019"
          description="Participated in a 3 day Hackathon, held jointly by the Insurance Corporation of British Columbia (ICBC) and IBM, that used IBM’s technology stack to tackle ICBC business problems. In a team of four, we developed an application that determines whether a car is a total loss after an accident. Users can upload images of their vehicle, and the application will notify them about whether their vehicle is salvageable. We presented our idea in front of a panel of ICBC executives and placed first for our pitch."
          links={[
            <Link
              link="https://github.com/j-nnyhuang/totalLossEstimator"
              linkName="GitHub"
            />,
          ]}
          roles={[<Role role="Developer" backgroundColor={colors.primary} />]}
          image={TotalLossMockup}
        />
        <Project
          backgroundColor={colors.secondary}
          name="Heart Failure with Preserved Ejection Fraction"
          oneLiner="Unsupervised clustering on patient data"
          duration="January - April 2020"
          description="Worked in collaboration with a doctor from Vancouver General Hospital and graduate students at the University of British Columbia to perform unsupervised clustering on patients who have heart failure with preserved ejection fraction. The aim of this study was to cluster patients into subgroups for future treatments using a dataset containing 196 examples and 70 features in R."
          roles={[
            <Role role="Data Analyst" backgroundColor={colors.primary} />,
          ]}
          image={HeartFailureMockup}
          flexDirection="row-reverse"
        />
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
      <Footer />
    </React.Fragment>
  );
}
