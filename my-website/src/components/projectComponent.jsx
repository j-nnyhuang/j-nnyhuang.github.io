import React, { Component } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";

// Custom Components
import CustomButton from "../components/buttonComponent.jsx";
import CustomContainer from "./containerComponent.jsx";
//SCSS STYLES
import "../assets/scss/overlay.scss";
import "../assets/scss/project.scss";
//JS
import colors from "../assets/config/colors.js";

export class ProjectBoxView extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  render() {
    const squareStyle = {
      textAlign: "center",
      backgroundColor: colors.primary,
      width: "26vw",
      height: "26vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "1.85vw",
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
          <h2 style={{ fontSize: "2vw", color: colors.tertiary }}>
            {this.props.name}
          </h2>
          <hr style={lineStyle} />
          <p style={{ fontSize: "1.25vw", color: colors.secondary }}>
            {this.props.oneLiner}
          </p>

          {/* Overlay Content */}
          <div className="overlay">
            <div style={textStyle}>
              <h1 style={{ color: colors.primary, fontSize: "2vw" }}>
                {this.props.name}
              </h1>
              <hr style={lineStyle} />
              <p style={{ fontSize: "1.25vw", textAlign: "left" }}>
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
              <h3>{this.props.name}</h3>
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
            <h5>LINKS</h5>
            <p>{this.props.links}</p>
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

// Alternative projects display for homepage
// class Projects extends Component {
//   render() {
//     const projectContainerStyle = {
//       backgroundColor: colors.secondary,
//       minHeight: "100vh",
//       width: "100vw",
//       maxWidth: "100%",
//       padding: "3.2vw",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       boxSizing: "borderBox",
//       border: "1vw solid white",
//     };
//     return (
//       <div style={projectContainerStyle}>
//         <Header textColor={colors.primary} name="Projects" id="projects" />
//         <Row style={{ justifyContent: "space-between", width: "100%" }}>
//           <ProjectBoxView
//             name="Haiven"
//             oneLiner="Artificial intelligence for intimate partner violence"
//             blurb="Haiven is a smartphone app that uses machine learning algorithms to
//               automatically detect and classify audio information to identify aggressive encounters. If the audio is extremely aggressive, an
//               emergency contact will be immediately notified."
//             description={[
//               "Haiven was conceptualized during the ",
//               <a href="https://www.ai4goodlab.com/" target="_blank">
//                 AI4Good Lab program
//               </a>,
//               " This is a 7 week long program designed to introduce a cohort of 30 women across Canada to artificial intelligence. We were inspired to create a solution that tackled the rise in domestic violence cases during Covid 19 and the realities of women currently in ",
//               <a href="https://www.bbc.com/news/world-52063755" target="_blank">
//                 abusive situations
//               </a>,
//               ". What started as a two week long project has now evolved into a (soon to be) non-profit organization. We are a small team who strive to create an application that can help and empower victims in violent situations.",
//             ]}
//             duration="July 2020 - Present"
//             myRole={[
//               <strong>Operations Lead</strong>,
//               <p>
//                 Developed onboarding packages, reached out to potential sponsors
//                 and assisted with recruiting.
//               </p>,
//               <strong>UX Designer</strong>,
//               <p>
//                 Collaborated with one other member to design our application
//                 interface on Figma and conducted user testing.
//               </p>,
//               <strong>Front End Developer</strong>,
//               <p>
//                 I implemented all screens of our application in React Native
//                 during our initial two week project phase. I am now in the
//                 process of going back to review and improve all code and
//                 implement our new UI updates.
//               </p>,
//             ]}
//             techStack="React, React Native, Figma"
//             links={[
//               <a href="https://github.com/myHaiven" target="_blank">
//                 GitHub
//               </a>,
//             ]}
//           />
//           <ProjectBoxView
//             name="Unsupervised Clustering on Patient Data"
//             oneLiner="Unsupervised clustering"
//             blurb="Worked in collaboration with a doctor from Vancouver General Hospital and graduate students at the University of British Columbia to perform unsupervised clustering on patients who have heart failure with preserved ejection fraction."
//             description="Heart failure with preserved ejection fraction (HFpEF) is a type of heart disease that is difficult to find effective treatments for during large trials. The aim of this study was to cluster patients into subgroups, for future treatments, using a dataset containing 196 examples and 70 features in R."
//             duration="Jan 2020 - April 2020"
//             myRole={[
//               <strong>Data Analyst</strong>,
//               <p>
//                 Performed feature selection, conducted exploratory data
//                 analysis, performed clustering and analyzed clusters. Composed a
//                 10 page report to highlight findings.
//               </p>,
//             ]}
//             techStack="RStudio"
//             links="Private Repository"
//           />
//           <ProjectBoxView
//             name="Total Loss Damage Recognition"
//             oneLiner="Visual recognition for vehicle collisions"
//             blurb="In a team of four, developed an application that identifies the appropriate path for a vehicle after a collision to reduce costs incurred by the Insurance Corporation of British Columbia and improve customer experience."
//             description="Participated in a 3 day Hackathon, held jointly by the Insurance Corporation of British Columbia (ICBC) and IBM, that used IBM’s technology stack to tackle ICBC business problems. In a team of four, we developed an application that determines whether a car is a total loss after an accident. Users can upload images of their vehicle, and the application will notify them about whether their vehicle is salvageable. We presented our idea in front of a panel of ICBC executives and placed first for our pitch."
//             duration="November 2019"
//             myRole={[
//               <strong>Developer</strong>,
//               <p>
//                 Developed a general framework of the application using Node.JS,
//                 with complete user interface, which allows users to submit
//                 images and determines whether a vehicle is total loss or not.
//               </p>,
//             ]}
//             techStack="Node.js, IBM Watson Visual Recognition"
//             links={[
//               <a
//                 href="https://github.com/j-nnyhuang/totalLossEstimator"
//                 target="_blank"
//               >
//                 GitHub
//               </a>,
//             ]}
//           />
//         </Row>
//       </div>
//     );
//   }
// }

export class Role extends Component {
  render() {
    const roleStyle = {
      backgroundColor: this.props.backgroundColor,
      color: colors.white,
      borderRadius: "5px",
      padding: "5px",
      width: "fit-content",
      margin: "8px 8px 8px 0px",
    };
    return (
      <div style={roleStyle}>
        <p style={{ margin: "0" }}>{this.props.role}</p>
      </div>
    );
  }
}
export class Link extends Component {
  render() {
    const linkStyle = {
      marginRight: "8px",
      textDecoration: "none",
    };
    return (
      <a href={this.props.link} target="_blank" style={linkStyle}>
        <p>{this.props.linkName}</p>
      </a>
    );
  }
}

export class Project extends Component {
  render() {
    const contentStyle = {
      display: "-ms-flexbox",
      display: "-webkit-flex",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "3.2vw",
      backgroundColor: colors.white,
    };
    const lineStyle = {
      backgroundColor: colors.secondary,
      height: "2px",
      width: "20%",
      margin: "0 0 10px 0",
    };
    return (
      <CustomContainer backgroundColor={this.props.backgroundColor}>
        <Col xs={6} style={contentStyle}>
          <h1 style={{ color: colors.primary }}>{this.props.name}</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>{this.props.oneLiner}</h4>
            <h4>{this.props.duration}</h4>
          </div>
          <hr style={lineStyle} />

          <p>{this.props.description}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "fit-content",
            }}
          >
            {this.props.links}
          </div>

          <div style={{ display: "flex" }}>{this.props.roles}</div>
        </Col>
        <Col xs={6} style={{ margin: "auto" }}>
          <img
            src={this.props.image}
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </CustomContainer>
    );
  }
}
