//don't need state
import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Card from "../components/Card"

function Portfolio() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Claudia Alpert</h1>
        <h2>Future Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
           <Card name="Keep On Giftin" image="../../public/keepongiftin.png" url="https://github.com/Calpert/keep-on-giftin" url2="https://keep-on-giftin.herokuapp.com/">

           </Card>
          </Col>
          <Col size="md-6 sm-12">
           <Card name="Holiday at The Movies" image="../../public/holidaymovies.png" url="https://github.com/Calpert/holiday-at-the-movies" url2="https://project-1-group-4.github.io/Holiday-at-the-Movies/">

           </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
           <Card name="Password Generator" image="../../public/password.png" url="hhttps://github.com/Calpert/password-generator" url2="https://calpert.github.io/password-generator/">

           </Card>
          </Col>
          <Col size="md-6 sm-12">
           <Card name="Note Taker" image="../../public/notetaker.png" url="https://fast-plains-43174.herokuapp.com/" url2="https://calpert.github.io/note-taker/">

           </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col size="md-6 sm-12">
           <Card name=" " image="../../public/keepongiftin.png" url="https://github.com/Calpert/keep-on-giftin" url2="https://keep-on-giftin.herokuapp.com/">

           </Card>
          </Col>
          <Col size="md-6 sm-12">
           <Card name="Keep On Giftin" image="../../public/keepongiftin.png" url="https://github.com/Calpert/keep-on-giftin" url2="https://keep-on-giftin.herokuapp.com/">

           </Card>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Portfolio;