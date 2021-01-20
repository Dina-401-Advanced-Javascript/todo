import React, { useEffect, useState } from 'react';
import TodoForm from './Form/form.js';
import ListGroup from './ListGroup/listGroup';
import './todo.scss';

const todoAPI = 'https://dina-basic-api-server.herokuapp.com/todo';

function ToDo(props){

  const [list, setList] = useState([]);

  const addItem = (item) => {
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }

  };
  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => {
        console.log('DATA = ',data);
        setList(data);
        console.log('LIST = ',list);
      })
      .catch(console.error);
  };

  const updateDocumentTitle = () => {
    var listCount = list.length;
    var completed = list.filter(listItem => !listItem.complete).length;
    document.title = `To Do App - ${completed} of ${listCount} items left`;

  }

  useEffect(_getTodoItems, []);
  /*useEffect(()=> {
    var date = new Date();
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Dina', duedate: "2020-01-29"},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Simon', duedate: "2020-01-30"},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Ricardo', duedate: "2020-01-28"},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Nathan', duedate: "2020-01-27"},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Mariko', duedate: "2020-01-31"},
    ];

    setList(list);
  },[]);*/

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
