import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import place from "../../constants/place.json"
export default function Footer({name}) {
  return (
    <footer id="footer">
      <Container className="container">
        <h1
          className="footerTitle"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="10"
          data-aos-duration="320"
        >
          Hẹn gặp lại {name} vào {place.time} nhé
        </h1>
        <div className={"footerTitleBottom"}>
          <p>
            Địa điểm: {place.name}.
          </p>
          <p>
            Cả nò rất vui vì sự có mặt của {name}.
          </p>
          <p>
            Thay mặt cả lò, xin trân thành cảm ơn {name} nhớ!
          </p>
        </div>
        <button className="sendEmailBtn">
          <a href={"https://telegram.me/duynk99"}>
            Liên hệ với tôi khi cần trợ giúp, cái giá phải trả là 50k
          </a>
        </button>
      </Container>
    </footer>
  );
}
