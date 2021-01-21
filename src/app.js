import React from 'react';
import ToDo from './components/todo/todo.js';
import Footer from './components/todo/footer/footer';
import Header from './components/todo/header/header';
import AppSettingsContext from './components/todo/context/appSettings';

function App(props) {

  return (
    <>
      <AppSettingsContext>
        <Header />
        <ToDo />
        <Footer />
      </AppSettingsContext>
    </>
  );

}

export default App;