import React, { Component } from "react";
import Container from "../../components/Container";


function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-4 sm-12">
           <Card image="github image" url="https://github.com/Calpert">

           </Card>
          </Col>
          <Col size="md-4 sm-12">
           <Card image="resume icon (material.io)" href="../../public/Alpert Resume.docx.pdf" download="../../public/Alpert Resume.docx.pdf">

           </Card>
          </Col>
          <Col size="md-4 sm-12">
           <Card image="portfolio icon" url="https://github.com/Calpert/keep-on-giftin" url2="https://keep-on-giftin.herokuapp.com/">

           </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;