/*eslint-disable*/
import React from "react";
import logo from "../../assets/img/White_Hackbout.png";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="float-left">
            HACKBOUT 1.0 © {new Date().getFullYear()}
          </Col>
          <Col className="text-center">
            <img src={logo} alt="white_logo" style={{ height: "60px" }}></img>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;