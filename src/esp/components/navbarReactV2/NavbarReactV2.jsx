import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo-dkz.png";
import espa from "../../assets/img/espa.png";
import usa from "../../assets/img/usa.png";
import { NavLink } from "react-router-dom";
import "./navReactV2.css";

export const NavbarReactV2 = () => {
  return (
    <Navbar
      collapseOnSelect
      className="color-negro-fondo py-4"
      variant="dark"
      expand="true"
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link to="/" as={NavLink} id="#principal">
            <Image src={logo} alt="Logo-DKZ" fluid />
          </Nav.Link>
        </Navbar.Brand>
        {/* <div className="d-flex ms-auto">
                    <Nav.Link
                        className="me-sm-4 me-3 "
                        to="/"
                        as={NavLink}
                        href
                        onClick={() => {
                            window.location.href = "/";
                        }}
                    >
                        <Image
                            className="banderas"
                            src={espa}
                            alt="spain"
                            fluid
                        />
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
                </div> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="" id="basic-navbar-nav">
          <Nav className="fondo-completo">
            <div className="d-flex justify-content-between flex-column flex-xl-row margen-navbar text-center">
              <Nav.Link
                className="peso-bold-asap"
                to="/conocenos"
                as={NavLink}
                href
              >
                <h2>CONOCENOS</h2>
              </Nav.Link>
              <Nav.Link
                className="peso-bold-asap"
                to="/servicios"
                as={NavLink}
                href
              >
                <h2>SERVICIOS</h2>
              </Nav.Link>
              <Nav.Link
                className="peso-bold-asap"
                to="/novedades"
                as={NavLink}
                href
              >
                <h2>NOVEDADES</h2>
              </Nav.Link>
              <Nav.Link
                className="peso-bold-asap"
                to="/casos"
                as={NavLink}
                href
              >
                <h2>CASOS</h2>
              </Nav.Link>
              <Nav.Link
                className="peso-bold-asap"
                to="/contactanos"
                as={NavLink}
                href
              >
                <h2>CONTACTANOS</h2>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
