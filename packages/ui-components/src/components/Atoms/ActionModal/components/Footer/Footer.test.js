import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Footer from './Footer';

test('Footer should display cancel button', () => {
  render(<Footer cancelText="Cancel" hasCancel />);
  expect(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
});

test('Footer should not display cancel button', () => {
  render(<Footer cancelText={'Cancel'} hasCancel={false} />);
  expect(screen.queryByRole('button', { name: 'Cancel' })).toBeNull();
});

test('Footer should call a function when confirm button is clicked', async () => {
  const mockConfirm = jest.fn();
  render(<Footer onConfirm={mockConfirm} confirmText="Confirm" />);
  const btnConfirm = screen.getByRole('button', { name: 'Confirm' });
  await userEvent.click(btnConfirm);
  expect(mockConfirm).toHaveBeenCalledTimes(1);
});

test('Footer should call a function when cancel button is clicked', async () => {
  const mockCancel = jest.fn();
  render(<Footer onClose={mockCancel} hasCancel cancelText="Cancel" />);
  const btnCancel = screen.getByRole('button', { name: 'Cancel' });
  await userEvent.click(btnCancel);
  expect(mockCancel).toHaveBeenCalledTimes(1);
});
