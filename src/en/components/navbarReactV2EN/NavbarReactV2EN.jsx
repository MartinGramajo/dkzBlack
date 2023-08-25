import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../esp/assets/img/logo-dkz.png";
import espa from "../../../esp/assets/img/espa.png";
import usa from "../../../esp/assets/img/usa.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export const NavbarReactV2EN = () => {
  return (
    <Navbar
      collapseOnSelect
      className="color-negro-fondo py-4"
      variant="dark"
      expand="true"
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link to="/en" as={NavLink} id="#principal">
            <Image src={logo} alt="Logo-DKZ" fluid />
          </Nav.Link>
        </Navbar.Brand>
        <div className="d-flex ms-auto">
          <Nav.Link
            className="me-sm-4 me-3 "
            to="/"
            as={NavLink}
            href
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <Image className="banderas" src={espa} alt="spain" fluid />
          </Nav.Link>
          <Nav.Link
            className="me-sm-4 me-3 "
            to="/en"
            as={NavLink}
            href
            onClick={() => {
              window.location.href = "#/en";
            }}
          >
            <Image className="banderas" src={usa} alt="usa" fluid />
          </Nav.Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="" id="basic-navbar-nav">
          <Nav className="fondo-completo">
            <div className="d-flex justify-content-between flex-column flex-xl-row margen-navbar text-center">
              <Nav.Link
                className="peso-bold-asap"
                to="/meet-us"
                as={NavLink}
                href
              >
                <h2>MEET US</h2>
              </Nav.Link>
              <Nav.Link
                className="peso-bold-asap"
                to="en/services"
                as={NavLink}
                href
              >
                <h2>SERVICES</h2>
              </Nav.Link>
              <Nav.Link
                className="peso-bold-asap"
                to="en/news"
                as={NavLink}
                href
              >
                <h2>NEWS</h2>
              </Nav.Link>
              <Nav.Link
                className="peso-bold-asap"
                to="en/cases"
                as={NavLink}
                href
              >
                <h2>CASES</h2>
              </Nav.Link>
              <Nav.Link
                className="peso-bold-asap"
                to="en/contactus"
                as={NavLink}
                href
              >
                <h2>CONTACT US</h2>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
