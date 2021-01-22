import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../form/loginForm';
import LoginContext from '../context/login';

function Navigation(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">To Do App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <LoginContext>
          <Login />
        </LoginContext>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;