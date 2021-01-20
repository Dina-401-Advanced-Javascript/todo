import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useForm from './addItemForm';

// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoForm(props){
  const [handleInputChange, handleSubmit] = useForm(getItem);

  function getItem(item){
    props.handleSubmit(item);
  }

  return(
    <Form onSubmit={handleSubmit}>  
      <Form.Group controlId="toDoItem"  onChange={handleInputChange}>
        <Form.Label>Add a to do item</Form.Label>
        <Form.Control type="text" data-testid="toDoItem" name="text" placeholder="Enter item details" />
      </Form.Group>
      <Form.Group controlId="assignedTo" onChange={handleInputChange}>
        <Form.Control type="text" data-testid="assignedTo" name="assignee" placeholder="Enter name of assignee" />
      </Form.Group>
        <Form.Group controlId="dueDate" onChange={handleInputChange}>
          <Form.Label>Due date</Form.Label>
          <Form.Control type="date" data-testid="dueDate" name="duedate" placeholder="Date" />
      </Form.Group>
      <Form.Group controlId="difficultyRange"  >
        <Form.Label>Difficulty Rating</Form.Label>
        <Form.Control type="range" data-testid="difficultyRange" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange}/>
      </Form.Group>
      <Button data-testid="submitButton" variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default ToDoForm;
