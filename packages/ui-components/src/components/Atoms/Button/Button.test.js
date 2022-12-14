import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Button from './Button';

test('button should call a function when clicked', async () => {
  const mockFunction = jest.fn();
  render(<Button onClick={mockFunction}>Confirm</Button>);
  const button = screen.getByRole('button', { name: 'Confirm' });
  await userEvent.click(button);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

test('button should call a function on mouse over', async () => {
  const mockFunction = jest.fn();
  render(<Button onMouseOver={mockFunction}>Confirm</Button>);
  const button = screen.getByRole('button', { name: 'Confirm' });
  await userEvent.hover(button);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});
