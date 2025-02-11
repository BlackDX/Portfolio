import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Designer aus Mecklenburg Vorpommern, der von Anfang an ohne Hilfe designt hat.🤷‍♂️
              <br />
              <br />Ich designe seit
              <i>
                <b className="purple"> 3+ Jahren. </b>
              </i>
              <br />
              <br />
              Ich designe &nbsp;
              <i>
                <b className="purple">Landes- & Bundespolizei Fahrzeuge  &nbsp; Rettungsdienst & Feuerwehr Fahrzeuge  &nbsp; Kommunale Fahrzeuge  &nbsp; und vieles mehr</b>
              </i>
              <br />
              <br />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
