import React, { useContext, useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';
import { AppSettingsContext } from '../context/appSettings';

import './list.scss';

function List(props) {

  // console.log("props", props.list);
  const appSettingsContext = useContext(AppSettingsContext);

  const itemsPerPage = appSettingsContext.itemsPerPage;
  let currentPageNumber = appSettingsContext.currentPageNumber;
  let totalNumberOfPages = Math.ceil(props.list.length / itemsPerPage);
  const [subList, setSubList] = useState([]);

  useEffect(() => {
    //how do we re render hte page here?
    let newSubList = props.list.slice(currentPageNumber * itemsPerPage, (currentPageNumber * itemsPerPage) + itemsPerPage);
    setSubList(newSubList);
    // console.log({ subList });
  }, [props.list]);


  const previous = () => {
    // console.log('inside previous');
    appSettingsContext.currentPageNumber--;
    currentPageNumber--;
    setSubList(props.list.slice(currentPageNumber * itemsPerPage, (currentPageNumber * itemsPerPage) + itemsPerPage));

  }
  const next = () => {
    // console.log('inside next');
    appSettingsContext.currentPageNumber++;
    currentPageNumber++;
    // console.log(currentPageNumber);
    setSubList(props.list.slice(currentPageNumber * itemsPerPage, (currentPageNumber * itemsPerPage) + itemsPerPage));
  }


  // console.log({ subList });
  return (
    <div>
      <div className="todolist">
        {
          subList.map((item) => (

            <Toast key={item._id} id={item._id} onClose={() => props.updateDB("delete", item._id)}>
              <Toast.Header>
                <Badge variant={item.complete ? 'success' : 'danger'} onClick={() => props.updateDB("put", item._id)}>
                  <strong className="mr-auto">{item.complete ? 'Complete' : 'Pending'}</strong>
                </Badge>
                <strong className="mr-auto" > &nbsp;{item.assignee}</strong>

              </Toast.Header>
              <Toast.Body>
                {item.text}
                <small>{item.duedate ? (<div > Due {item.duedate} </div>) : ''}</small>
                <small><div id="difficulty">Difficulty: {item.difficulty}</div></small>
              </Toast.Body>
            </Toast>
          ))}
      </div>
      <div id="pagination">
        {currentPageNumber > 0 ?
          <div id="previous">
            <button id="previousButton" onClick={previous}>Previous</button>
          </div>
          : ''}
        {totalNumberOfPages > currentPageNumber ?
          <div id="next">
            <button id="nextButton" onClick={next}>Next</button>
          </div> : ''}
      </div>
    </div>
  )
}
export default List;