import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './listGroup.scss';

function listGroup(props){
  console.log('PROPS INSIDE LIST GROUP = ', props.list);
  return (
    <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item 
          data-testid = "list-items" 
          action variant={item.complete?"success": "warning"} 
          className={`complete-${item.complete.toString()}`}
          key={item._id}>
          <div 
            className={item.complete?"complete":"incomplete"} 
            onClick={() => props.handleComplete(item._id)}>
            
            <input type="checkbox" checked={item.complete} onChange={() => props.handleComplete(item._id)}/>
            &nbsp;
            {item.text}
            &nbsp; 
            <span id="assignedTo">({item.assignee}, due {item.duedate})</span>
          </div>
      </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
export default listGroup;