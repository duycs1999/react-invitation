import React from "react";
import {Container} from "react-bootstrap";
import "./Food.css";
import banhtom from "../../assets/banhtom.jpg";
import casop from "../../assets/casop.jpeg";
import ncdua from "../../assets/ncdua.jpeg";

export default function Food() {
    return (
        <article id="team">
            <Container className="container">
                <div className="content">
                    <div className="teamGrid">
                        <div xs={4} className="member">
                            <img
                                src={banhtom}
                                alt="Banhtom"
                                data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                            />
                            <h3 className="memberInfo">
                                Bánh tôm Hồ Tây
                            </h3>
                        </div>
                        <div
                            className="member"
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                        >
                            <img src={ncdua} alt="NcDua"/>
                            <h3 className="memberInfo">
                                Lước dừa
                            </h3>
                        </div>
                        <div className="member">
                            <img
                                src={casop}
                                alt="casop"
                                data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                            />
                            <h3 className="memberInfo">
                                Cá sộp
                            </h3>
                        </div>
                    </div>
                </div>
            </Container>
        </article>
    );
}
