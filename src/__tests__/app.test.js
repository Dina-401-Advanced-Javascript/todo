import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import userEvent from '@testing-library/user-event'
import App from '../app';

describe('App Tests', () =>{
  // test('Loads the page correctly with setup data', async () => {
  //   render(<App/>);
  //   let items = await waitFor(() => screen.getAllByRole('listitem'))
  //   expect(items[0]).toHaveTextContent('Clean the Kitchen')
  // });


  test('Can add an item to the list', async () => {
    render(<App/>);

    userEvent.type(screen.getByTestId('toDoItem'), "Buy potatoes");
    userEvent.type(screen.getByTestId('assignedTo'), "Dina");
    userEvent.type(screen.getByTestId('dueDate'), "01/31/2020");
    fireEvent.click(screen.getByTestId('submitButton'));

    let items = await waitFor(() => screen.getAllByTestId('list-items'));
    
    expect(items[items.length-1]).toHaveTextContent('Buy potatoes');
  });
});