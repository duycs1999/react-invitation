import React from "react";
import "./Importance.css";
import art from "../../assets/Untitled_Artwork -1.png";
import { Container } from "react-bootstrap";

export default function Importance() {
  return (
    <section id="importance">
      <Container className="container">
        <img src={art} alt="not found" />
        <h1 className="title">
         Đề xuất
        </h1>
        <div
          className="first-left"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="370"
          data-aos-delay="10"
        >
          <h2 className="first-left-title">Chúng ta phải làm gì để lấy lại những thứ đã bỏ lỡ suốt 3 tuần qua ?</h2>
          <p className="first-left-info">
            Đơn giản là một buổi tối weekly nhẹ nhàng để tận hưởng cái thời tiết 10 đỉm này
          </p>
        </div>
        <div
          className="first-right"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="10"
          data-aos-duration="370"
        >
          <h2 className="first-right-title">Chọn một chốn đặt đít như thế nào để hít được mùi hoa sữa lồng làn một cách thanh cảnh ?</h2>
          <div className="first-right-info">
            Lấy lại không khí của những ngày đầu khi khởi tạo group, chúng ta tìm về với những địa điểm đầu tiên mà dự án weekly được diễn ra.
            Cụ thể luôn là cái hồ tên Tây
          </div>
        </div>
        <div
          className="second-left"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="370"
          data-aos-delay="10"
        >
          <h2 className="second-left-title">Chúng ta sẽ tham gia những hoạt động gì ở đây ?</h2>
          <p className="second-left-info">
            Lúc đấy cũng đã tối chết cụ ra rồi, đi ăn uống 1 ít rồi ngồi uống nước cho nó nhanh vào việc.
          </p>
        </div>
      </Container>
    </section>
  );
}
