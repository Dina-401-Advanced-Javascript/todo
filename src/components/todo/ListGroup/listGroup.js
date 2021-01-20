import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './listGroup.scss';

function listGroup(props) {
  console.log('list', props.list);
  return (
    <ListGroup>
      {props.list.map(item => (

        <ListGroup.Item
          data-testid="list-items"
          action
          variant={item.complete ? "success" : "warning"}
          key={item._id}>

          <Card
            className={item.complete ? "complete" : "incomplete"}
            style={{ width: '25rem' }}
            >
            <Card.Body>
              <Card.Title onClick={() => props.updateDB("put", item._id)}> <span>
                <input type="checkbox" checked={item.complete} onChange={() => props.updateDB("put", item._id)} />
            &nbsp;
            {item.text}</span>


              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Due {item.duedate}</Card.Subtitle>
              <Card.Text id="assignee">
                Assigned to: {item.assignee}

              </Card.Text>
              <Card.Text id="difficulty">
                Difficulty: {item.difficulty}
              </Card.Text>
              <Button variant="primary" onClick={() => props.updateDB("delete", item._id)}>Delete</Button>

            </Card.Body>
          </Card>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
export default listGroup;