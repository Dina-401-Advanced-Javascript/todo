import React, { useEffect, useState } from 'react';
import TodoForm from './Form/form.js';
import TodoList from './list.js';
import ListGroup from './ListGroup/listGroup';
import './todo.scss';

//const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const todoAPI = 'https://dina-basic-api-server.herokuapp.com/todo';

const ToDo = (props) => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
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

  const _toggleComplete = id => {

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

  useEffect(updateDocumentTitle());

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} items left to complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm 
            handleSubmit={_addItem} 
          />
        </div>

        <div>
          <TodoList 
            list={list}
            handleComplete={_toggleComplete}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
