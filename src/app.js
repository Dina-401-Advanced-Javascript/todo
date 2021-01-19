import React from 'react';
import ToDo from './components/todo/todo.js';
import Footer from './components/todo/Footer/footer';
import Header from './components/todo/Header/header';

function App(props){
  
    return (
      <>
        <Header />
        <ToDo />
        <Footer/>
      </>
    );
  
}

export default App;