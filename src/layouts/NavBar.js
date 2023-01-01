import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {Link, Outlet } from "react-router-dom"

export const NavBar = () => {
  
  return (
    <>
    <Navbar className="navBg" bg="light" expand="lg">
      <Container>
        <Navbar.Brand  as={Link} to="/">Resto-Maxi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/user">User</Nav.Link>
            
          </Nav>
          <a href='/login'>
            <Button variant="outline-success" >Login</Button>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
        <Outlet></Outlet>
    </section>
    </>
  )
}
