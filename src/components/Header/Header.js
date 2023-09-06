import React from "react";
import "./Header.css";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
      <Container>
      </Container>
    </Navbar>
  );
}
