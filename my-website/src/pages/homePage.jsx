import React, { Component } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";

//Custom Component
import CustomContainer from "../components/containerComponent.jsx";
import Project from "../components/projectComponent.jsx";
import Header from "../components/headerComponent.jsx";
// CSS Style
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/knockout.scss";
import "../assets/scss/fonts.scss";
//JS
import colors from "../assets/config/colors.js";
// Assets
import myPhoto from "../assets/img/MyPhoto.jpg";
import backgroundPhoto from "../assets/img/VanDrivingMountainBackground.jpg";
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
      <div style={projectContainerStyle}>
        <Header textColor={colors.primary} name="Projects" id="projects" />
        <Row style={{ justifyContent: "space-between", width: "100%" }}>
          <Project
            name="Haiven"
            oneLiner="Artificial intelligence for intimate partner violence"
            blurb="Haiven is a smartphone app that uses machine learning algorithms to
              automatically detect and classify audio information to identify aggressive encounters. If the audio is extremely aggressive, an
              emergency contact will be immediately notified."
            description={[
              "Haiven was conceptualized during the ",
              <a href="https://www.ai4goodlab.com/">AI4Good Lab program</a>,
              " This is a 7 week long program designed to introduce a cohort of 30 women across Canada to artificial intelligence. We were inspired to create a solution that tackled the rise in domestic violence cases during Covid 19 and the realities of women currently in ",
              <a href="https://www.bbc.com/news/world-52063755">
                abusive situations
              </a>,
              ". What started as a two week long project has now evolved into a (soon to be) non-profit organization. We are a small team who strive to create an application that can help and empower victims in violent situations.",
            ]}
            duration="July 2020 - Present"
            myRole={[
              <strong>Operations Lead</strong>,
              <p>
                Developed onboarding packages, reached out to potential sponsors
                and assisted with recruiting.
              </p>,
              <strong>UX Designer</strong>,
              <p>
                Collaborated with one other member to design our application
                interface on Figma and conducted user testing.
              </p>,
              <strong>Front End Developer</strong>,
              <p>
                I implemented all screens of our application in React Native
                during our initial two week project phase. I am now in the
                process of going back to review and improve all code and
                implement our new UI updates.
              </p>,
            ]}
            techStack="React, React Native, Figma"
          />
          <Project
            name="Unsupervised Clustering on Patient Data"
            oneLiner="Unsupervised clustering"
            blurb="Worked in collaboration with a doctor from Vancouver General Hospital and graduate students at the University of British Columbia to perform unsupervised clustering on patients who have heart failure with preserved ejection fraction."
            description="Heart failure with preserved ejection fraction (HFpEF) is a type of heart disease that is difficult to find effective treatments for during large trials. The aim of this study was to cluster patients into subgroups, for future treatments, using a dataset containing 196 examples and 70 features in R."
            duration="Jan 2020 - April 2020"
            myRole={[
              <strong>Data Analyst</strong>,
              <p>
                Performed feature selection, conducted exploratory data
                analysis, performed clustering and analyzed clusters. Composed a
                10 page report to highlight findings.
              </p>,
            ]}
            techStack="RStudio"
          />
          <Project
            name="Total Loss Damage Recognition"
            oneLiner="Visual recognition for vehicle collisions"
            blurb="In a team of four, developed an application that identifies the appropriate path for a vehicle after a collision to reduce costs incurred by the Insurance Corporation of British Columbia and improve customer experience."
            description="Participated in a 3 day Hackathon, held jointly by the Insurance Corporation of British Columbia (ICBC) and IBM, that used IBM’s technology stack to tackle ICBC business problems. In a team of four, we developed an application that determines whether a car is a total loss after an accident. Users can upload images of their vehicle, and the application will notify them about whether their vehicle is salvageable. We presented our idea in front of a panel of ICBC executives and placed first for our pitch."
            duration="November 2019"
            myRole={[
              <strong>Developer</strong>,
              <p>
                Developed a general framework of the application using Node.JS,
                with complete user interface, which allows users to submit
                images and determines whether a vehicle is total loss or not.
              </p>,
            ]}
            techStack="Node.js, IBM Watson Visual Recognition"
          />
        </Row>
      </div>
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
