import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import DropDown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form';
import useForm from '../hooks/form';
import { AppSettingsContext } from '../context/appSettings';

// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoForm(props) {
  const [handleInputChange, handleSubmit] = useForm(getItem);
  const appSettingsContext = useContext(AppSettingsContext);

  function getItem(method, item) {
    props.handleSubmit(method, item);
  }

  function updateAppSettings(e) {
    appSettingsContext.showComplete = e.target.checked;
    props.handleSubmit("get", null)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="toDoItem"  >
        <Form.Label>Add a to do item</Form.Label>
        <Form.Control type="text" data-testid="toDoItem" name="text" placeholder="Enter item details" onChange={handleInputChange} />
      </Form.Group>
      <Form.Group controlId="assignedTo" >
        <Form.Control type="text" data-testid="assignedTo" name="assignee" placeholder="Enter name of assignee" onChange={handleInputChange} />
      </Form.Group>
      <Form.Group controlId="dueDate" >
        <Form.Label>Due date</Form.Label>
        <Form.Control type="date" data-testid="dueDate" name="duedate" placeholder="Date" onChange={handleInputChange} />
      </Form.Group>
      <Form.Group controlId="difficultyRange"  >
        <Form.Label>Difficulty Rating</Form.Label>
        <Form.Control type="range" data-testid="difficultyRange" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
      </Form.Group>
      <Button data-testid="submitButton" variant="primary" type="submit">Submit</Button>
      <Form.Group controlId="formBasicCheckbox" >
        <Form.Check type="checkbox" label="Show Completed Items" onClick={updateAppSettings} />
      </Form.Group>
    </Form>
  );
}

export default ToDoForm;
