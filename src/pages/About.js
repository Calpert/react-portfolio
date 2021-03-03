import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="http://brightbluecreative.co.uk/wp-content/uploads/2018/04/Tech-background.jpg">
        <h1>Claudia Alpert</h1>
        <h2>Future Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Page!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            I am an aspiring software developer currently in the Northwestern Coding Bootcamp and I have a background in customer service. I have worked for large companies including as Starbucks, Grubhub, and even Disney World!
            </p>
            <p>
            My hobbies include writing fiction stories, doing karaoke and theatre acting. But on my off days, you'll find me laying on the couch watching the show "It's Always Sunny in Philadelphia". I'm hoping to gain new computer skills through coding to help me work on websites, applications and other projects.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
