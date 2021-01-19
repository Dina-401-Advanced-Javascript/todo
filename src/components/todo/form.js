import React , {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoForm(props){

  const [item, setItem] = useState('');
  
  const handleInputChange = e => {
    e.preventDefault();
    setItem({...item, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.text.value) {
      props.handleSubmit(item);
      e.target.reset();
      setItem({});
    }
    console.log(item);
  };

  return(
    <Form onSubmit={handleSubmit}>  
      <Form.Group controlId="toDoItem" onChange={handleInputChange}>
        <Form.Label>Add a to do item</Form.Label>
        <Form.Control type="text" name="text" placeholder="Enter item details" />
      </Form.Group>
      <Form.Group controlId="assignedTo" onChange={handleInputChange}>
        <Form.Control type="text" name="assignee" placeholder="Enter name of assignee" />
      </Form.Group>
        <Form.Group controlId="dueDate" onChange={handleInputChange}>
          <Form.Label>Due date</Form.Label>
          <Form.Control type="date" name="dueDate" placeholder="Date" />
      </Form.Group>
      <Form.Group controlId="formBasicRange">
        <Form.Label>Difficulty Rating</Form.Label>
        <Form.Control type="range" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default ToDoForm;
