import React, { useEffect, useState } from 'react';
import TodoForm from './Form/form.js';
import ListGroup from './ListGroup/listGroup';
import './todo.scss';

const todoAPI = 'https://dina-basic-api-server.herokuapp.com/todo';

function ToDo(props) {

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
        setList(data);
      })
      .catch(console.error);
  };

  const updateDocumentTitle = () => {
    var listCount = list.length;
    var completed = list.filter(listItem => !listItem.complete).length;
    document.title = `To Do App - ${completed} of ${listCount} items left`;

  }

  const deleteItem = (id) => {

    if (id) {
      let url = `${todoAPI}/${id}`;
      fetch(url, {
        method: 'delete',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(data => data.json())
        .then(data => _getTodoItems())
        .catch(console.error);
    }
  }

  useEffect(_getTodoItems, []);

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
            handleComplete={toggleComplete}
            deleteItem={deleteItem} />
        </div>
      </section>
    </>
  );
}
export default ToDo;
