import React, { useEffect } from 'react';
import TodoForm from './Form/form.js';
import ListGroup from './ListGroup/listGroup';
import useAjax from './hooks/ajax';

import './todo.scss';

function ToDo(props) {

  const [list, connectToAPI] = useAjax();

  const updateDocumentTitle = () => {
    var listCount = list.length;
    var completed = list.filter(listItem => !listItem.complete).length;
    document.title = `To Do App - ${completed} of ${listCount} items left`;

  }

  useEffect(() => {connectToAPI("get")},[]);

  useEffect(() => updateDocumentTitle());

  return (
    <>
      <header>
        <h2>
          There are {list.filter(listItem => !listItem.complete).length} items left to complete
          </h2>
      </header>

      <section className="todo">
        <div>
          <TodoForm handleSubmit={connectToAPI} />
        </div>
        <div>
          <ListGroup 
            list={list}
            updateDB={connectToAPI} />
        </div>
      </section>
    </>
  );
}
export default ToDo;
