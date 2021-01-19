import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './listGroup.scss';

function listGroup(props){
  return (
    <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item action variant={item.complete?"success": "warning"} 
          className={`complete-${item.complete.toString()}`}
          key={item._id}>
          <div className={item.complete?"complete":"incomplete"} onClick={() => props.handleComplete(item._id)}>
            <input type="checkbox" checked={item.complete} onChange={() => props.handleComplete(item._id)}></input>
            &nbsp;{item.text}&nbsp; <span id="assignedTo">({item.assignee}, due {item.dueDate})</span>
          </div>
      </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
export default listGroup;