import React from 'react';
import './header.scss';
import Nav from './navBar';
import Login from '../form/loginForm';
import LoginContext from '../context/login';

function Header(props) {
  return (
    <div id="header">
      <Nav />
      <LoginContext>
        <Login />
      </LoginContext>
    </div>);
}

export default Header;