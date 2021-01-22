import { useState, useContext } from 'react';
import axios from 'axios';
import { AppSettingsContext } from '../context/appSettings';
import cookie from 'react-cookies';

const todoAPI = process.env.REACT_APP_API_TODO;// 'https://dina-auth-api.herokuapp.com/api/v2/todo';//https://dina-basic-api-server.herokuapp.com/todo';
const useAjax = () => {
  let token = cookie.load('auth');

  if (!token) token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpbmEiLCJpYXQiOjE2MTEyOTE5MzJ9.XL5YMCGkOIq8i7ioEy4j3hfVFd3IUcO6QAOD_fM406g';

  const [list, setList] = useState([]);
  const appSettingsContext = useContext(AppSettingsContext);
  //todo: get the token from our login context
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const get = () => {
    console.log('getting...');
    let sortBy = appSettingsContext.sortBy;
    axios.get(todoAPI)
      .then(data => {
        // console.log("before sorting", data.data);
        //sort the data by the column the user chose
        data.data.sort((a, b) => b[sortBy] - a[sortBy])
        // console.log("after sorting", data.data);
        return data;
      })
      .then(data => {
        //filter the data according to the user's preference on whether to show completed items
        if (!appSettingsContext.showComplete)
          setList(data.data.filter(item => !item.complete));
        else
          setList(data.data);
      })
      .catch(console.error);
  }
  const connectToAPI = (method, id) => {

    console.log({ method }, { id });
    if (method === 'put') {
      console.log('updating the item');
      let item = list.filter(i => i._id === id)[0] || {};

      if (item) {
        item.complete = !item.complete;

        let url = `${todoAPI}/${id}`;

        axios.put(url, { complete: item.complete })
          .then(savedItem => {
            setList(list.map(listItem => listItem._id === item._id ? savedItem.data : listItem));
          })
          .catch(console.error);
      }
    } else if (method === 'post') {
      console.log('adding the item', id);
      axios.post(todoAPI, {
        text: id.text,
        assignee: id.assignee,
        duedate: id.duedate,
        difficulty: id.difficulty,
        complete: false
      })
        .then(savedItem => {
          setList([...list, savedItem]);
        })
        .then(data => {
          get();
        })
        .catch(console.error);
    } else if (method === 'delete') {
      console.log('deleting the item');
      if (id) {
        let url = `${todoAPI}/${id}`;
        axios.delete(url)
          .then(data => {
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