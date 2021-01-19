import { render, screen } from '@testing-library/react';
import App from '../src/app';

test('Loads the page correctly with setup data', () => {
  render(App());
  let items = await waitFor(() => screen.getAllByRole('listitem'))

  // The actual assertion is the same for both options
  expect(items[0]).toHaveTextContent('Clean the Kitchen')
});
