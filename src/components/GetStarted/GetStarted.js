import React from "react";
import "./GetStarted.css";
import getStarted from "../../assets/getStarted.png";
import { Container } from "react-bootstrap";

export default function GetStarted() {
  return (
    <section id="getStarted">
      <img
        src={getStarted}
        alt="none"
        className="startedImg"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="10"
        data-aos-duration="370"
        easing="ease-in-cubic"
      />
      <Container className="container">
        <div className="allText">
          <h1
            className="title"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Hiện trạng
          </h1>
          <p
            className="info"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
           Nhân cái thể là mùa thu đã đến, từng cơn gió heo may nhè nhẹ thổi đi cái lóng và lực của mùa hè, có
            thể nói thời tiết đang dễ chịu vô cùng. Bên cạnh đó, chúng ta đã có 1 kỳ nghỉ lễ tuy không dài nhưng
              nó làm cho chu kỳ weekly của team đang tăng nhẹ từ 2 lên 3 tuần.
          </p>
        </div>
      </Container>
    </section>
  );
}
