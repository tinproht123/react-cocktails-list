import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navmenu = () => {
  return (
    <Container
      fluid
      className="border-bottom border-3 border-success shadow py-2 bg-light"
    >
      <Navbar expand="sm">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image
                fluid
                src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg"
                style={{ maxWidth: 200 }}
              />
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navmenu;
