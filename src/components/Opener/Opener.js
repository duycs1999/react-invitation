import React from "react";
import opener from "../../assets/opener.png";
import styled from "styled-components";

export default function Opener({name}) {
  return (
    <Main id="opener">
      <Container className="container">
        <Heading
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="10"
          data-aos-duration="370"
        >
            Chào {name}, nhớ !
        </Heading>
      </Container>
    </Main>
  );
}

const Main = styled.main`
  background-image: url(${opener});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  color: white;
`;
const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 50px;
  text-transform:uppercase;
  font-weight: bold;
`;
