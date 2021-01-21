import React, { useEffect } from 'react';
import TodoForm from './form/form.js';
import useAjax from './hooks/ajax';
import List from './list/list.js'

import './todo.scss';

function ToDo(props) {

  const [list, connectToAPI] = useAjax();

  const updateDocumentTitle = () => {
    var listCount = list.length;
    var completed = list.filter(listItem => !listItem.complete).length;
    document.title = `To Do App - ${completed} of ${listCount} items left`;
  }

  useEffect(() => { connectToAPI("get") }, []);

  useEffect(() => updateDocumentTitle());

  var length = list.filter(listItem => !listItem.complete).length;
  return (
    <>
      <header>
        <h2>
          There {length > 1 || length === 0 ? `are ${length} items` : `is 1 item`} left to complete
          </h2>
      </header>

      <section>
        <div className="toDoDiv">
          <TodoForm handleSubmit={connectToAPI} />
        </div>
        <div className="listDiv">
          <List
            list={list}
            updateDB={connectToAPI} />
        </div>
      </section>
    </>
  );
}
export default ToDo;
