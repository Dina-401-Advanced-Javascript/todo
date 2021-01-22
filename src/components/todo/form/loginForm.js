import React, { useContext, useState } from 'react';
import { LoginContext } from '../context/login';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './loginForm.scss'
// perhaps I should make some context to keep track of people logging in and out
// this should just be a form

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginContext = useContext(LoginContext);

  const handleSubmit = e => {
    e.preventDefault();
    // send username and password to context
    loginContext.login(username, password);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="login" controlId="username" onChange={handleUsernameChange}>
        <Form.Control type="text" data-testid="toDoItem" name="text" placeholder="Enter your username" />
      </Form.Group>
      <Form.Group className="login" controlId="password" onChange={handlePasswordChange}>
        <Form.Control type="password" data-testid="password" name="password" placeholder="Enter your password" />
      </Form.Group>
      <Button data-testid="submitButton" variant="primary" type="submit">Submit</Button>
    </Form>
  )
}

export default Login;

