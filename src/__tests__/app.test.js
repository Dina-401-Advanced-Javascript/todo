import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../app';

test('Loads the page correctly with setup data', async () => {
  render(App());
  let items = await waitFor(() => screen.getAllByRole('listitem'))
  expect(items[0]).toHaveTextContent('Clean the Kitchen')
});


test('Can add an item to the list', async () => {
  render(App());

  userEvent.type(screen.getByTestId('toDoItem'), "Buy potatoes");
  userEvent.type(screen.getByTestId('assignedTo'), "Dina");
  userEvent.type(screen.getByTestId('dueDate'), "01/31/2020");
  userEvent.click(screen.getByText('Submit'));

  let items = await waitFor(() => screen.getAllByRole('listitem'))
  
  expect(items[items.length-1]).toHaveTextContent('Buy potatoes')
});