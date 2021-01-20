import { useState } from 'react';
import axios from 'axios';

const todoAPI = 'https://dina-basic-api-server.herokuapp.com/todo';

const useAjax = () => {
  const [list, setList] = useState([]);
  const get = () => {
    console.log('getting...');
    axios.get(todoAPI)
      .then(data => {
        setList(data.data);
      })
      .catch(console.error);
  }
  const connectToAPI = (method, id) => {

    if (method === 'put') {
      let item = list.filter(i => i._id === id)[0] || {};

      if (item) {
        item.complete = !item.complete;

        let url = `${todoAPI}/${id}`;

       axios.put(url, {complete: item.complete})
          .then(savedItem => {
            setList(list.map(listItem => listItem._id === item._id ? savedItem.data : listItem));
          })
          .catch(console.error);
      }
    } else if (method === 'post') {
      axios.post(todoAPI, {
        text: id.text,
        assignee: id.assignee,
        duedate: id.duedate,
        difficulty: id.difficulty
      })
        .then(savedItem => {
          setList([...list, savedItem]);
        })
        .catch(console.error);
    } else if (method === 'delete') {
      if (id) {
        let url = `${todoAPI}/${id}`;
        axios.delete(url)
          .then(data => {
            console.log('deleting the item');
            get();
          })
          .catch(console.error);
      }
    } else if (method === 'get') {
      get();
    }

  }

  return [
    list,
    connectToAPI
  ]
}

export default useAjax;