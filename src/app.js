import React from 'react';
import ToDoConnected from './components/todo/todo-connected.js';
import Footer from './components/todo/Footer/footer';
import Header from './components/todo/Header/header';

function App(props){
  
    return (
      <>
        <Header />
        <ToDoConnected/>
        <Footer/>
      </>
    );
  
}

export default App;