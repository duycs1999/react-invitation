import React from "react";
import { Container } from "react-bootstrap";
import "./Mission.css";

export default function Mission() {
  return (
    <section id="mission">
      <Container>
        <div className="content">
          <h1
            className="title"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="30"
            data-aos-duration="1000"
          >
            Bữa đó
            <br /> ăn gì ?
          </h1>
        </div>
      </Container>
    </section>
  );
}
