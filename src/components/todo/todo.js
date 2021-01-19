import React, { useEffect, useState } from 'react';
import TodoForm from './Form/form.js';
//import TodoList from './list.js';
import ListGroup from './ListGroup/listGroup';
import './todo.scss';

function ToDo(props){

  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(listItem => listItem._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
    //updateDocumentTitle();

  };

  const updateDocumentTitle = () => {
    var listCount = list.length;
    var completed = list.filter(listItem => !listItem.complete).length;
    document.title = `To Do App - ${completed} of ${listCount} items left`;

  }

  useEffect(()=> {
    var date = new Date();
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Dina', dueDate: "2020-01-29"},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Simon', dueDate: "2020-01-30"},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Ricardo', dueDate: "2020-01-28"},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Nathan', dueDate: "2020-01-27"},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Mariko', dueDate: "2020-01-31"},
    ];

    setList(list);
  },[]);

  useEffect(() => {
    updateDocumentTitle();
  });

  return (
      <>
        <header>
          <h2>
          There are {list.filter(listItem => !listItem.complete).length} items left to complete
          </h2>
        </header>

        <section className="todo">
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
          <div>
            <ListGroup list={list}
              handleComplete={toggleComplete}/>
          </div>
        </section>
      </>
    );
}
export default ToDo;
